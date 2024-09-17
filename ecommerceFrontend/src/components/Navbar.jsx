//router
import { Link } from "react-router-dom";
//icons and themes
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {  UserPlus, LogIn, LogOut, Lock, MenuIcon } from "lucide-react";
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import { Close } from "@mui/icons-material";
import Badge from '@mui/material/Badge';
import { useTheme } from "@emotion/react";
//react
import { Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Stack, styled, Typography, useMediaQuery } from "@mui/material";

//use
import { useEffect, useState } from "react";
//stores
import { useProductStore } from '../stores/useProductStore';
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `1px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));



const Navbar = () => {
	const {  logout, user } = useUserStore();
  
	const isAdmin = user?.role === "admin";

	const { cart, getCartItems } = useCartStore();
  const theme = useTheme()

  const { fetchAllProducts } = useProductStore();

  useEffect(() => {
    fetchAllProducts()
    },[fetchAllProducts])
  
    useEffect(() => {
    getCartItems()
    },[getCartItems])
      
  

  const [selectedIndex, setSelectedIndex] = useState(0);
const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
  setAnchorEl(event.currentTarget);
};

const handleMenuItemClick = (event, index) => {
  setSelectedIndex(index);
  setAnchorEl(null);
};

const handleClose = () => {
  setAnchorEl(null);
};


const [state, setState] = useState({
  top: false,
  left: false,
  bottom: false,
  right: false,
});

const toggleDrawer = (anchor, open) => (event) => {
  if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    return;
  }

  setState({ ...state, [anchor]: open });
};

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
  
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Stack direction="column" alignItems="center" justifyContent="space-between" sx={{ p: 2 }}>
        <Link
                to="/"
                style={{
                  color: '#ccc',
                  transition: 'color 0.3s',
                  marginRight: '5px',
                }}
              >
              <Button color="success" sx={{ fontWeight: 700}} > 
                <Typography>home</Typography>
              </Button>
              </Link>
              {user && (
                <Link
                  to="/cart"
                  style={{
                    color: '#ccc',
                    transition: 'color 0.3s',
                  }}
                >
                  <Button color='info' aria-label="cart"sx={{position: 'relative'}}>
                <ShoppingCartIcon sx={{px: 0, mx: 0}}/>
                <StyledBadge badgeContent={cart.length} color="warning" sx={{position: 'absolute', top: -5, left: 10,
                  bottom: 0, 
                }} />
                <Typography sx={{ml: 1}}>Cart</Typography>
            </Button>
                  
                  {cart.length > 0 && (
                    <span
                      style={{
                        position: 'absolute',
                        top: '-10px',
                        left: '-10px',
                        backgroundColor: '#008000',
                        color: '#fff',
                        padding: '2px 5px',
                        borderRadius: '50%',
                        fontSize: '12px',
                      }}
                    >
                      {cart.length}
                    </span>
                  )}
                </Link>
              )}
  
              {isAdmin && (
                <Link
                  to="/secret-dashboard"
                  style={{

                    padding: '10px 0px',
                    borderRadius: '10px',
                    fontSize: '16px',
                  }}
                >
                  <Button  > 
                <Lock />
                  
                <Typography>Dashboard</Typography>
                  
              </Button>
                </Link>
              )}
  
              {user ? (
                
              <Button color='error' onClick={logout}  > 
                <Typography>log out</Typography>
                <PersonOutlinedIcon />
              </Button>

              ) : (
                <>
                  
                <Link
                  to="/signup"
                  style={{
                    padding: '10px 10px',
                    fontSize: '16px',
                  }}
                >
              <Button color='warning' > 
                <Typography>sign up</Typography>
                <PersonOutlinedIcon />
              </Button>
                </Link>
                <Link
                  to="/login"
                  style={{
                    
                    
                    padding: '10px 10px',

                    fontSize: '16px',
                  }}
                >
              <Button  > 
                <Typography>login</Typography>
                <PersonOutlinedIcon />
              </Button>
                </Link>
                </>
              )}
          
      </Stack>
      </List>
      <Divider />
      
      <IconButton onClick={toggleDrawer("right", false)} sx={{
        ":hover": {rotate: "180deg", transition: "0.3s", color: "#f00"}
      }}>
      <Close>
  
      </Close>
      </IconButton>
    </Box>
  );
  

	return (
        <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
          zIndex: 40,
          transition: 'all 0.3s',
          borderBottom: '1px solid #008000',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '8px',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Link
              to="/"
              style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#008000',
              }}
            ><Button size="large" sx={{color: '#008000',}} >
              E-Commerce</Button>
            </Link>
            {useMediaQuery("(min-width:1200px)") && (
            <nav
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: '0 20px',
                height: 1,
                marginBottom: '20px',
                marginTop: '20px',
                
              }}
            >
              <Link
                to="/"
                style={{
                  color: '#ccc',
                  transition: 'color 0.3s',
                  marginRight: '5px',
                }}
              >
              <Button color='success' sx={{ fontWeight: 700}} > 
                <Typography>home</Typography>
              </Button>
              </Link>
  
              {user && (
                <Link
                  to="/cart"
                  style={{
                    color: '#ccc',
                    transition: 'color 0.3s',
                  }}
                >
              <Button color='info' aria-label="cart"sx={{position: 'relative'}}>
                <ShoppingCartIcon sx={{px: 0, mx: 0, scale: 1.5}}/>
                <StyledBadge badgeContent={cart.length} color="warning" sx={{position: 'absolute', top: -5, left: 10,
                  bottom: 0, 
                }} />
                <Typography sx={{ml: 1}}>Cart</Typography>
            </Button>

                  
                  {cart.length > 0 && (
                    <span
                      style={{
                        position: 'absolute',
                        top: '-10px',
                        left: '-10px',
                        backgroundColor: '#008000',
                        color: '#fff',
                        padding: '2px 5px',
                        borderRadius: '50%',
                        fontSize: '12px',
                      }}
                    >
                      {cart.length}
                    </span>
                  )}
                </Link>
              )}
  
              {isAdmin && (
                <Link
                  to="/secret-dashboard"
                  style={{

                    padding: '10px 0px',
                    borderRadius: '10px',
                    fontSize: '16px',
                  }}
                >
                  <Button > 
                <Lock />
                  
                <Typography>Dashboard</Typography>
                  
              </Button>
                </Link>
              )}
  
              {user ? (
                
              <Button  color='error' onClick={logout}  > 
                <Typography>log out</Typography>
                <PersonOutlinedIcon />
              </Button>

              ) : (
                <>
                  
                <Link
                  to="/signup"
                  style={{
                    padding: '10px 10px',
                    fontSize: '16px',
                  }}
                >
              <Button  color='warning' > 
                <Typography>sign up</Typography>
                <PersonOutlinedIcon />
              </Button>
                </Link>
                <Link
                  to="/login"
                  style={{
                    
                    
                    padding: '10px 10px',

                    fontSize: '16px',
                  }}
                >
              <Button  > 
                <Typography>login</Typography>
                <PersonOutlinedIcon />
              </Button>
                </Link>
                </>
              )}
            </nav>
          )}
            {useMediaQuery("(max-width:1200px)") && (
            <
// @ts-ignore
            IconButton onClick={toggleDrawer("right", true)} sx={{
              my: 0,
              display: "flex",
              justifyContent: "space-between",
              textAlign: "right"}}
              alignItems={"right"}>
            <MenuIcon />
      
            </IconButton>
            )
            }
      
      
            
        <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer>
            <nav
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: '0 20px',
                height: 1,
                marginBottom: '20px',
                marginTop: '20px',
                
              }}
            >
              
  
              
            </nav>
          </div>
        </div>
      </header>
    );
};

export default Navbar;