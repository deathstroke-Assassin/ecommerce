
/* eslint-disable no-irregular-whitespace */
import MenuIcon from '@mui/icons-material/Menu';
import WindowIcon from '@mui/icons-material/Window';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Box, Container, IconButton, ListItemText, Menu,  MenuItem, Stack, Typography, useMediaQuery, } from "@mui/material";
import Button from '@mui/material/Button';
import { useTheme } from '@emotion/react';
import { useState } from 'react';
import ComputerIcon from '@mui/icons-material/Computer';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import CheckroomIcon from '@mui/icons-material/Checkroom';




import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { Close } from '@mui/icons-material';
import Links from './Links';



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



const WindowOptions = ["  categories",  ' computing', ' books', 'gaming', "fashion", ];
const WindowOptionico = [<WindowIcon />, <ComputerIcon />, <MenuBookIcon />, <VideogameAssetIcon />, <CheckroomIcon />]

  


const list = (anchor) => (
  <Box
    sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
    role="presentation"

    onKeyDown={toggleDrawer(anchor, false)}
  >
    <List>
      {['Home', 'Account', 'Send email', 'Drafts'].map((text) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemText primary={text} />
            
          </ListItemButton>
        </ListItem>
      ))}
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
    <Container sx={{display:"flex", alignItems: "center", justifyContent: "space-between"}}>


      <Button variant="contained" sx={{
        width: 222,
        bgcolor: theme.palette.header3.main,
        color: theme.palette.text.primary,
        ".MuiTypography-root": {justifyContent: "space-between", marginRight: 3},
      }}
      onClick={handleClickListItem}>
      {/* <WindowIcon /> */}
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


      
      
  
      {useMediaQuery("(min-width:1200px)") && (
      <Stack gap={4} direction={"row"} alignItems={"center"}>

          <Links title={"Home"} />
          <Links title={"pages"} />
          <Links title={"User Account"} />
          <Links title={"Vendor account"} />
        
      </Stack>
      )}
      

      
      {useMediaQuery("(max-width:1200px)") && (
        <IconButton sx={{
        my: 3,
        display: "flex",
        justifyContent: "space-between",
        textAlign: "right"}}
        alignItems={"right"}>
      <MenuIcon onClick={toggleDrawer("right", true)}/>

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


  {/* </Stack> */}

</Container>

  )
}
