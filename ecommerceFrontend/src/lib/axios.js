import axios from "axios";

// const isDevelopment = process.env.NODE_ENV === "development";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api" ,
  withCredentials: true,
});

export default axiosInstance;