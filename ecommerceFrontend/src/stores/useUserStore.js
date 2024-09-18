
import {create} from 'zustand'
import axios from '../lib/axios'

import {toast} from "react-hot-toast";
import { Link } from 'react-router-dom';

export const useUserStore = create((set, get) => ({

    user:null,
    loading:false,
    chickingAuth:true,
    signup: async ({name,email,password,confirmPassword}) => {
        set ({ loading: true });
        if(password !== confirmPassword) {
            set ({ loading: false });
            return toast.error("Passwords do not match");
        }
        try {
            const res = await axios.post("/auth/signup", {name,email,password});
            set ({user: res.data, loading: false});
        } catch (error) {
            set ({ loading: false });
            toast.error(error.response.data.message) || "Something went wrong try later";
        }
    },
    
login: async ({email,password}) => {
    set ({ loading: true });
    try {
        const res = await axios.post("/auth/login", {email,password});
        set ({user: res.data, loading: false});
        console.log("log in successful")
    } catch (error) {
        set ({ loading: false });
        toast.error(error.response.data.message) || "Something went wrong try later";
    }
},
logout: async () => {
    
    try {
        const res = await axios.post("/auth/logout");
        set ({user: null});
        console.log("log out successful")
    } catch (error) {
        set ({ loading: false });
        toast.error(error.response.data.message) || "Something went wrong try later";
    }
},

checkAuth: async () => {
    set ({ chickingAuth: true });
    try {
        const response = await axios.get("/auth/profile");
        set ({user: response.data, chickingAuth: false});
    } catch (error) {
        set ({ chickingAuth: false,user: null});
       
    }
},


refreshToken: async () => {
    // Prevent multiple simultaneous refresh attempts
    if (get().checkingAuth) return;

    set({ checkingAuth: true });
    try {
        const response = await axios.post("/auth/refresh-token");
        set({ checkingAuth: false });
        return response.data;
    } catch (error) {
        set({ user: null, checkingAuth: false });
        throw error;
    }
},
}));

let refreshPromise = null
axios.interceptors.response.use(
    response => response,
    async error => {
        const originalRequest = error.config
        if(error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true
        try {
            if (refreshPromise) {
                await refreshPromise
                return axios(originalRequest)
            }
            
            refreshPromise = useUserStore.getState().checkAuth()
            await refreshPromise
            refreshPromise = null
            return axios(originalRequest)
        } catch (error) {
            useUserStore.getState().logout()
            return Promise.reject(refreshError)
        }
        }
        return Promise.reject(error)
    }
)
