import { Link, Route, Routes } from 'react-router-dom';
import HomePage from "./components/HomePage/HomePage";
import SignUpPage from "./components/SignUpPage/SignUpPage";
import LogInPage from "./components/LogInPage/LogInPage";
import AdminPage from "./components/AdminPage/AdminPage";
import CategoryPage from "./components/CategoryPage/CategoryPage";
import AllCategoriesPage from "./components/CategoryPage/AllCategoriesPage";
import CartPage from "./components/CartPage/CartPage";


import { CircularProgress, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import { useUserStore } from './stores/useUserStore';
import { useEffect } from 'react';
import { Container } from '@mui/material';
import { useCartStore } from './stores/useCartStore';
import { useProductStore } from './stores/useProductStore';


function App() {

  const {getCartItems} = useCartStore()
const [theme, colorMode] = useMode();
const {user, checkAuth, checkingAuth} = useUserStore()
const { fetchAllProducts , fetchProductsByCategory, isLoading} = useProductStore();

useEffect(() => {
  fetchProductsByCategory('*')
    },[fetchProductsByCategory, '*'])
  
  
useEffect(() => {
  checkAuth()
  },[checkAuth])

  useEffect(() => {
  getCartItems()
    },[getCartItems])
  
  
    useEffect(() => {
      fetchAllProducts()
      },[fetchAllProducts])
    
    	if (isLoading) {
        return <div>Loading...</div>;
    }

	
  return (

      <>
  
  <ColorModeContext.Provider 
  // @ts-ignore
  value={colorMode}>
        <ThemeProvider 
  // @ts-ignore
        theme={theme}>
          <CssBaseline />
          
    <div style={{
      position: 'absolute',
      top: 0,
      left: '50%',
      transform: 'translatex(-50%)',
       
      width: '100%',
      minHeight: "3000" ,
      background: 'radial-gradient(ellipse at top, rgba(0, 229, 285, 0.5) 0%, rgba(0, 60, 80, 0.2) 45%, rgba(0, 0, 0, 0.1) 100%)'
    }} >
<div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden',
  
 }}>
  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
    <div style={{
      position: 'absolute',
      top: 0,
      left: '50%',
      transform: 'translatex(-50%)',
       
      width: '100%',
      height: "910px" ,
    }} />
  </div>
</div>
{
  checkingAuth && (<Container sx={{ml:"45%",  mt:"15%", }}>
    <CircularProgress size={80} sx={{justifyContent: "center", display: "flex", fontSize: "80px"}} color="info" />
    Loading...
    </Container>)
}


<div style={{ position: 'relative', zIndex: 50, paddingTop: '20px', }}>
<div style={{
      position: 'absolute',
      top: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '100%',
      // height: "950px" ,
      // background: 'radial-gradient(ellipse at top, rgba(116, 185, 159, 0.5) 0%, rgba(10, 80, 90, 0.2) 45%, rgba(0, 0, 0, 0.1) 100%)'
    }} />
				<Navbar />
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={user ? <HomePage /> : <SignUpPage />} />
        <Route path="/login" element={ <LogInPage />} />
        <Route path="/secret-dashboard" element={user?.role === "admin" ? <AdminPage /> : <HomePage />} />
        <Route path="/category/:category" element={ <CategoryPage />} />
        <Route path="/category" element={ <AllCategoriesPage />} />
        <Route path="/cart" element={user ? <CartPage /> : <SignUpPage />} />
        </Routes>
        </div>
			<Toaster />
      </div>

        </ThemeProvider>
    </ColorModeContext.Provider>
    </>
  )
}

export default App
