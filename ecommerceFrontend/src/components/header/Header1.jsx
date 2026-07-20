import { useContext, useState } from "react";
import { ColorModeContext } from "../../theme";
// eslint-disable-next-line no-unused-vars
import {
  Box,
  Container,
  Icon,
  IconButton,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
  TextField,
  Input,
} from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageIcon from "@mui/icons-material/Language";
import { useNavigate } from "react-router-dom";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { LinkedinIcon, SearchCheckIcon, SearchIcon } from "lucide-react";
import { useProductStore } from "../../stores/useProductStore";

export default function Header1() {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
  const { searchProducts } = useProductStore();
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        borderBottomRightRadius: "6px",
        borderBottomLeftRadius: "6px",
        mt: 4,
      }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        sx={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        
        {!isMobile && (
          <Stack sx={{display:"flex", flexWrap:"wrap",marginTop:"10px",}}>
    <Typography
          sx={{
            marginTop:"5px",
            marginLeft: 3,
            p: "2px 10px",
            bgcolor: "#fc0",
            borderRadius: "10px",
            fontSize: "14px",
            fontWeight: "bold",
            color: "#000",
            width: "60px"
          }}
          variant="body2"
        >
          HOT
        </Typography>
        <Typography
          sx={{
            mr: 2,
            p: "3px 10px",
            borderRadius: "1px",
            color: "#fff",
            fontSize: "18px",
            fontWeight: 300,
          }}
          variant="body2"
        >
          Free Shipping
        </Typography>
        </Stack>  

)}
        <Stack flexGrow={0.5} />

        <IconButton onClick={() => setShowSearch((prev) => !prev)}>
          <SearchIcon />
        </IconButton>

        {!isMobile && (
          <Input
            style={{ marginLeft: "1px", width: "200px" }}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                navigate(`/search?q=${query}`);
              }
            }}
          />
        )}

        <Box flexGrow={0.5} />

        <Stack>
          {theme.palette.mode === "light" ? (
            <IconButton
              onClick={() => {
                localStorage.setItem(
                  "mode",
                  theme.palette.mode === "dark" ? "light" : "dark",
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
                  theme.palette.mode === "dark" ? "light" : "dark",
                );
                colorMode.toggleColorMode();
              }}
              color="inherit"
            >
              <DarkModeOutlined />
            </IconButton>
          )}
        </Stack>
        <List
          component="nav"
          aria-label="Device settings"
          sx={{
            paddingX: "0px",
            paddingY: "0px",
            m: 0,
            p: 0,
            "&:hover": { cursor: "pointer" },
          }}
        ></List>
        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "lock-button",
            role: "listbox",
          }}
        ></Menu>

        {/* <Box flexGrow={0.5}></Box> */}
        <IconButton
          href="https://github.com/deathstroke-Assassin"
          sx={{ mr: 1, "&:hover": { cursor: "pointer" } }}
        >
          <GitHubIcon />
        </IconButton>

        <IconButton
          href="https://www.linkedin.com/in/mohamed-al-khayat-8a9873289/"
          sx={{ mr: 1, "&:hover": { cursor: "pointer" } }}
        >
          <LinkedinIcon />
        </IconButton>

        <Box sx={{ mr: 3, "&:hover": { cursor: "pointer" } }}></Box>
      </Stack>
      {isMobile && showSearch && (
  <Box
    sx={{
      mt: 2,
      px: 2,
      display:"flex",
      justifyContent:"center",
    }}
  >
    <Input
      fullWidth
      type="search"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search products"
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          navigate(`/search?q=${query}`);
          setShowSearch(false); // Hide after searching
        }
      }}
      
    />
  </Box>
)}
    </Box>
  );
}
