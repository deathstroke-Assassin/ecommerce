import { ExpandMore, ShoppingCartOutlined } from "@mui/icons-material";
import { Container, IconButton, InputBase, Stack, Typography, } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from "react";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useTheme } from "@emotion/react";


const options = ['Clothes', 'Mobile Devices', 'Computer Components', "Accessories", "Musical Instruments"];


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `1px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Search = styled('div')(({ theme }) => ({
  flexGrow: 0.8,
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  border: "1px solid #aaa",
  '&:hover': { 
      borderBottomRightRadius:"40px",
      borderTopRightRadius:"40px",
      // @ts-ignore
      backgroundColor: alpha(theme.palette.header1.main, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  minWidth: '300px',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


export default function Header2() {
 
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


 
  const [selectedIndex, setSelectedIndex] = useState(0);
  const theme = useTheme()
  return (
    <Container sx={{my: 3, display: "flex", justifyContent: "space-between"}}>
      <Stack alignItems={"center"}>
        <ShoppingCartOutlined sx={{ p: 0}}/>
        <Typography variant="body2" alignItems={"center"} sx={{display: "flex"}}> E commerce</Typography>

      </Stack>

      <Search sx={{display: "flex", borderRadius: "40px", p: 0, m: 0,
        justifyContent: "space-between"
      }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />



<List
        component="nav"
        aria-label="Device settings"
        sx={{paddingX: '0px', paddingY: '0px',
            m: 0, p: 0, borderBottomRightRadius:"40px",
            borderTopRightRadius:"40px",
            '&:hover' : { cursor: "pointer",
              backgroundColor: theme.palette.header2.main,
              borderBottomRightRadius:"40px",
              borderTopRightRadius:"40px",
              p: 0, m: 0
            }
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
        <ListItemText sx={{ width: 120, textAlign: "center", mr: 1, '.MuiTypography-root' : {fontSize: '20px'},   
        }}
            
            secondary={options[selectedIndex]}
        /> 

          <ExpandMore sx={{fontSize: "15px"}}/>
        
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


          </Search>
<Stack alignItems={"center"} direction={"row"}>
  
            <IconButton>
              <PersonOutlinedIcon />
            </IconButton>
  
            <IconButton aria-label="cart">
        <StyledBadge badgeContent={1} color="primary">
          <ShoppingCartIcon sx={{p: 0, m: 0}}/>
        </StyledBadge>
      </IconButton>
  
</Stack>

    </Container>
  )
}
