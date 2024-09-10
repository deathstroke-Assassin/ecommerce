import Header1 from "./components/header/Header1"
import Header2 from "./components/header/Header2"
import Header3 from "./components/header/Header3"
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Hero from "./components/hero/Hero";
import Main from "./components/main/main";



function App() {

  const [theme, colorMode] = useMode();
  return (
    <>

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
<Box sx={{bgcolor: theme.palette.bggrey.main}}>
          <Hero />
          <Main />
</Box>

      </ThemeProvider>
    </ColorModeContext.Provider>
    </>
  )
}

export default App
