import Header1 from "./components/header/Header1"
import Header2 from "./components/header/Header2"
import Header3 from "./components/header/Header3"
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Hero from "./components/hero/Hero";
import Main from "./components/main/main";
import Footer from "./components/footer/Footer";
import Scroll from "./components/scroll/Scroll";
import { Route, Routes } from 'react-router-dom';
import HomePage from "components/HomePage/HomePage.jsx";

function App() {

  const [theme, colorMode] = useMode();
  return (
    <div>

<ColorModeContext.Provider 
// @ts-ignore
value={colorMode}>
      <ThemeProvider 
// @ts-ignore
      theme={theme}>
        <CssBaseline />
        <Header1/>
        <Header2/>
        <Header3/>
        <div>
        <Routes>
        <Route path="/" element={<HomePage />} />
        </Routes>
        </div>
<Box sx={{bgcolor: theme.palette.bggrey.main}}>
          <Hero />
          <Main />
</Box>
<Box sx={{bgcolor: theme.palette.header3.main}}>
<Footer></Footer>
</Box>
<Scroll />

      </ThemeProvider>
    </ColorModeContext.Provider>
    </div>
  )
}

export default App
