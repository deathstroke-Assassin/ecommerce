import { useContext, useState } from "react";
import { ColorModeContext } from "../../theme";
// eslint-disable-next-line no-unused-vars
import { Box, Container, Icon, IconButton, Stack, Typography, useTheme } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const options = ['AR', 'EN', 'JP'];

export default function Header1() {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
  
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
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

    return (
    <Box sx={{
        // @ts-ignore
        bgcolor: theme.palette.header1.main,
        borderBottomRightRadius: '6px',
        borderBottomLeftRadius: '6px'
    }}>



<Stack direction={'row'} alignItems={"center"}>
    <Typography
    sx={{
        marginLeft: 3,
        p: "2px 10px",
        bgcolor: '#fc0',
        borderRadius: '10px',
        fontSize: '14px',
        fontWeight:'bold',
        color: '#000',
    }}
    variant="body2"
    >HOT
    </Typography>
    <Typography
    sx={{
        mr: 2,
        p: "3px 10px",
        borderRadius: '1px',
        color: '#fff',
        fontSize:'18px',
        fontWeight:300,
    }}
    variant="body2"
    >Free Shipping
    </Typography>

    <Box flexGrow={1} />


        <div>
    {theme.palette.mode === "light" ? (
      <IconButton
        onClick={() => {
          localStorage.setItem(
            "mode",
            theme.palette.mode === "dark" ? "light" : "dark"
          );
          colorMode.toggleColorMode();
        }}
        color="inherit"
      >
        <LightModeOutlined />
      </IconButton>
    ) : (
      <IconButton
        onClick={() => {
          localStorage.setItem(
            "mode",
            theme.palette.mode === "dark" ? "light" : "dark"
          );
          colorMode.toggleColorMode();
        }}
        color="inherit"
      >
        <DarkModeOutlined />
      </IconButton>
    )}
  </div>
  <List
        component="nav"
        aria-label="Device settings"
        sx={{paddingX: '0px', paddingY: '0px',
            m: 0, p: 0,
            '&:hover' : { cursor: "pointer" }
        }}
      >
        <ListItemButton
        
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="EN"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
        >
        <ListItemText sx={{ mr: 1, '.MuiTypography-root' : {fontSize: '20px'},   
        }}
            
            primary=''            
            secondary={options[selectedIndex]}
        /> 
        <LanguageIcon sx={{ mr: 0 }}></LanguageIcon>
        </ListItemButton>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}

            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
<IconButton sx={{ mr: 1 , '&:hover' : { cursor: "pointer" }}}>
    
        <FacebookIcon />
</IconButton>
    
    
    <IconButton sx={{ mr: 1 , '&:hover' : { cursor: "pointer" }}}><GitHubIcon  /></IconButton>
    
    <IconButton sx={{ mr: 1 , '&:hover' : { cursor: "pointer" }}}><InstagramIcon  /></IconButton>
    <Box sx={{ mr: 3 , '&:hover' : { cursor: "pointer" }}}>
      <IconButton>
      
        <XIcon  />
      
      </IconButton>
      </Box>

  </Stack>
  </Box>
  )
}
