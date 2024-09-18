import { ExpandMore, ShoppingCartOutlined } from "@mui/icons-material";
import { Container, IconButton, InputBase, Stack, Typography, } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useEffect, useState } from "react";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";
import { useUserStore } from "../../stores/useUserStore";
import { useCartStore } from "../../stores/useCartStore";
import { LogIn, LogOut } from "lucide-react";

import { UserPlus, Lock } from "lucide-react";
import ProductCard from "../../components/ProductCard";



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
    borderBottomRightRadius: "40px",
    borderTopRightRadius: "40px",
    // @ts-ignore
    backgroundColor: alpha(theme.palette.header1.main, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  minWidth: '266px',
  maxHeight: "52px",
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: '330px',
  },
  [theme.breakpoints.up('xs')]: {
    marginLeft: theme.spacing(3),
    width: '100px',
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


export default function Header2({ product}) {


  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Fetch products from an API
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          console.error('API response does not contain products array:', data);
          setProducts([]);
        }
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setProducts([]);
      });
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    console.log(event.target.value)
  };

  const filteredProducts = products?.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

  const { user, logout } = useUserStore();
  const isAdmin = user?.role === "admin";
  const { cart } = useCartStore();


  return (
    <Container sx={{ my: 3, display: "flex", justifyContent: "space-between" }}>
      <Stack alignItems={"center"}>
        

      </Stack>

      <Stack alignItems={"center"} direction={"row"}>





      </Stack>

    </Container>
  )
}
