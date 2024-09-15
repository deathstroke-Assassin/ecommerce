
/* eslint-disable no-irregular-whitespace */

import WindowIcon from '@mui/icons-material/Window';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Box, Container, IconButton,  ListItemText, Menu,  MenuItem,  Typography, } from "@mui/material";
import Button from '@mui/material/Button';
import { useTheme } from '@emotion/react';
import { useState } from 'react';
// import ComputerIcon from '@mui/icons-material/Computer';
// import MenuBookIcon from '@mui/icons-material/MenuBook';
// import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
// import CheckroomIcon from '@mui/icons-material/Checkroom';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import { Close } from '@mui/icons-material';

import { useEffect } from "react";
// import CategoryItem from "../../components/CategoryItem";
import { useProductStore } from "../../stores/useProductStore";
// import FeaturedProducts from "../../components/";
import { Link, useParams } from "react-router-dom";

const categories = [
	{ href: "/", name: "categories", imageUrl: "" },
	{ href: "/t-shirts", name: "T-shirts", imageUrl: "/tshirts.jpg" },
	{ href: "/shoes", name: "Shoes", imageUrl: "/shoes.jpg" },
	{ href: "/jeans", name: "Jeans", imageUrl: "/jeans.jpg" },
	{ href: "/bags", name: "Bags", imageUrl: "/bags.jpg" },
	{ href: "/glasses", name: "Glasses", imageUrl: "/glasses.png" },
	{ href: "/jackets", name: "Jackets", imageUrl: "/jackets.jpg" },
	{ href: "/suits", name: "Suits", imageUrl: "/suits.jpg" },
];


const WindowOptions = ["  categories",  't-shirts', 'shoes', 'jeans', "bags", "glasses", "jackets" , "Suits"];
export default function Header3() {

const theme = useTheme()
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

const WindowOptionico = [<WindowIcon />, ]

const {category} = useParams()

const { fetchFeaturedProducts, products, isLoading, fetchProductsByCategory } = useProductStore();
useEffect(() => {
  fetchFeaturedProducts();
}, [fetchFeaturedProducts]);

useEffect(() => {
  fetchProductsByCategory(category)
}, [fetchProductsByCategory, category])

const list = (anchor) => (
  <Box
    sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
    role="presentation"

    onKeyDown={toggleDrawer(anchor, false)}
  >
    <Divider />
    <IconButton onClick={toggleDrawer("right", false)} sx={{
      ":hover": {rotate: "180deg", transition: "0.3s", color: "#f00"}
    }}>
    <Close>
    </Close>
    </IconButton>
  </Box>
);

const categoryLink = `category${categories[selectedIndex].href}`;

  return (
    <Container sx={{display:"flex", alignItems: "center", justifyContent: "space-between"}}>
      <Button variant="contained" sx={{
        width: 222,
        bgcolor: theme.palette.header3.main,
        color: theme.palette.text.primary,
        ".MuiTypography-root": {justifyContent: "space-between", marginRight: 3},
      }}
      onClick={handleClickListItem}>

        <Typography sx={{
          padding: 0,
          textTransform: "capitalize",
          mx: 1
        }}
        >
        <ListItemText   sx={{ width: 120, textAlign: "center", mr: 1, '.MuiTypography-root' : {fontSize: '20px'},display: "flex",
        ".uiListItemText-root": {display: "flex", justifyContent: "space-between", marginRight: 3}, 
      }}
          primary={WindowOptionico[selectedIndex]}
          secondary={WindowOptions[selectedIndex]}
      />  

          </Typography>
          <Box   flexGrow={1}  ></Box>
        <ChevronRightIcon 
        />
        
      </Button>
      
      <Button>
      
{!isLoading && <Link
                  to={categoryLink}
                  style={{
                    padding: '10px 10px',
                    fontSize: '16px',
                  }}
                >
              <Button  > 
                <Typography>Go to {categories[selectedIndex].name}</Typography>
              </Button>
                </Link>}
      </Button>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
        sx={{".MuiPaper-root": {width: 222} }}
      >
        {WindowOptions.map((option, index) => (
          <MenuItem sx={{textTransform: "capitalize",}}
            key={option}
            selected={index === selectedIndex}
            
            onClick={(event) => handleMenuItemClick(event, index)}
          >
          {WindowOptionico[index]}   {option}
          </MenuItem>
        ))}
      </Menu>
  <Drawer
  anchor={"right"}
  open={state["right"]}
  onClose={toggleDrawer("right", false)}
>
  {list("right")}
</Drawer>

<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
					
				</div>
        </Container>
)}
