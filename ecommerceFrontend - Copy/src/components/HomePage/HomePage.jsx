import Header1 from "../header/Header1"
import Header2 from "../header/Header2"
import Header3 from "../header/Header3"
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { useMode } from "../../theme";
import Hero from "../hero/Hero";
import Main from "../main/main";
import Footer from "../footer/Footer";
import Scroll from "../scroll/Scroll";

export default function HomePage() {
    
    const [theme] = useMode();
    return (
    
<ThemeProvider 
// @ts-ignore
        theme={theme}>
        <CssBaseline />
    <Header1/>
    <Header2/>
    <Header3/>
    <Box sx={{bgcolor: theme.palette.bggrey.main}}>
            <Hero />
            <Main />
</Box>
<Box sx={{bgcolor: theme.palette.header3.main}}>
<Footer></Footer>
</Box>
<Scroll />
</ThemeProvider>
    
    )
}

