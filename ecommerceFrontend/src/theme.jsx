
import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          text: {
            primary: "#2B3445",
          },
          neutral: {
            main: "#64748B",
          },

          favColor: {
            main: grey[300],
          },
          skyblue: {
            main: "#1af",
          },
          header1: {
            main: "#64c2eD",
          },
          hot: {
            main: "#1af",
          },
          header2: {
            main: "#E2DAD6",
          },
          header3: {
            main: "#1af",
          },
          background: {
            main: "#1af",
          },
          white: {
            main: "#fff",
          },
          
          paperGrey: {
            main: "#f5f5f5",
          },
          bggrey: {
            main: "#f1f1f1",
          },
        }
      : {
          // palette values for dark mode
          neutral: {
            main: "#64748B",
          },

          favColor: {
            main: grey[800],
          },
          text: {
            primary: "#fff",
          },
          skyblue: {
            main: "#021526",
          },
          header1: {
            main: "#e3a40E",
          },
          hot: {
            main: "#1af",
          },
          header2: {
            main: "#03346E",
          },
          header3: {
            main: "#93b460",
          },
          paperGrey: {
            main: "#212121",
          },
          bggrey: {
            main: "#1d2021",
          },
        }),
  },
});

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState(
    localStorage.getItem("mode") ? localStorage.getItem("mode") : "light"
  );

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return [theme, colorMode];
};