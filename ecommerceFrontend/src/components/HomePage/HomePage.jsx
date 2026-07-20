import Header1 from "../header/Header1"
import Header2 from "../header/Header2"
import Header3 from "../header/Header3"
import { useContext } from "react";
import { ColorModeContext } from "../../theme";
// eslint-disable-next-line no-unused-vars
import { Box, Container, Icon, IconButton, Stack, Typography, useTheme } from "@mui/material";
import Hero from "../hero/Hero";
import IconSection from "../hero/IconSection";
import Main from "../main/main";
import Footer from "../footer/Footer";
import Scroll from "../scroll/Scroll";
import { useProductStore } from "../../stores/useProductStore";
import FeaturedProducts from "./featuredProductsPage";




const HomePage = () => {
    const { products, isLoading, error } = useProductStore();
    
    const theme = useTheme();
    return (
    
<div>

    <Header1/>
    <Header2/>
    <Header3/>
    <Box sx={{}}>
            <Hero />
<IconSection></IconSection>
    <FeaturedProducts />
</Box>
<Box sx={{}}>
<Footer></Footer>
</Box>
<Scroll />
</div>
    
    )
}


export default HomePage
