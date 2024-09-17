import { useState } from "react";
import { LogIn } from "lucide-react";
import { Link,   } from "react-router-dom";
import { Mail, Lock, User, ArrowRight, Loader, UserPlus } from "lucide-react";
import { motion } from "framer-motion";
import { Button, CircularProgress, Container, Input, Stack, Typography } from "@mui/material";
import { useUserStore } from "../../stores/useUserStore";
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login, loading } = useUserStore();
  const {user} = useUserStore()

  const handleSubmit = (event) => {
    event.preventDefault();
    login({email, password});
    navigate('/')
  };

  return (

    <Container>

      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '3rem 1.5rem' 
        ,height: "900px" 
      }}>
        <motion.div
          style={{ margin: '0 auto', width: '100%', maxWidth: '28rem' }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '2rem', fontWeight: 'bold',  }}>
            Log In
          </h2>
        </motion.div>
        
        <motion.div
          style={{ marginTop: '2rem', margin: '0 auto', width: '100%', maxWidth: '28rem' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div style={{ width: '400px',height: "100%" , padding: '2rem 1rem', boxShadow: '  0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)', borderRadius: '0.5rem',
            backgroundColor: 'rgba(0, 0, 0, 0.2)'
           }}>
            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
              <div style={{width: '300px', display: "grid"}}>
                <Stack direction={"row"} display={"flex"}>
                  <label
                    htmlFor="email"
                  >
                    Email address
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail style={{ marginLeft: 13 }} className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>

                  </div>
                </Stack>
                <Input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full px-3 py-2 pl-10 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder="you@example.com"
                sx={{ml: 0 ,".MuiInput-input": { ml: 2 }, ".MuiInput-underline": { ml: 20 }, backgroundColor: 'rgba(255, 255, 255, 0.0)'}}

              />

              </div>
              

              <div style={{width: '300px', height: '50px', display: "grid"}}>
                <Stack direction={"row"} display={"flex"}>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Password
                  </label>
                  <div >
                    <div >
                      <Lock style={{ marginLeft: 13 }} className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>

                  </div>
                </Stack>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full px-3 py-2 pl-10 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  placeholder="••••••••"
                  sx={{ml: 0 ,".MuiInput-input": { ml: 2 }}}
                />
              </div>





              <Button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out disabled:opacity-50"
                disabled={loading}
                sx={{ color: "white", fontWeight: 700 }}
              >
                {loading ? (
                  <>
                    <Loader
                      className="mr-2 h-5 w-5 animate-spin"
                      aria-hidden="true"
                    />
                    Loading...
                  </>
                ) : (
                  <>
                    <LogIn className="mr-2 h-5 w-5" aria-hidden="true" />
                    Login
                  </>
                )}
              </Button>

             
  
            </form>

            <p className="mt-8 text-center text-sm text-gray-400">
              Not a member?{" "}
              <Link
                to="/signup"
                className="font-medium text-green-400 hover:text-green-300"
              >
                Sign up now <ArrowRight className="inline h-4 w-4" />
              </Link>
            </p>
          </div>
        </motion.div>

      </div>
    </Container>
                    
  );
};

export default LoginPage;