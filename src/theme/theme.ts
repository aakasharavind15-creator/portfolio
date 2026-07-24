import { createTheme, type Theme } from "@mui/material/styles";

const gold = {
  main: "#D4AF37",
  light: "#E7C766",
  dark: "#A9861F",
  contrastText: "#0A1122",
};

export function getTheme(mode: "light" | "dark", fontFamily?: string): Theme {
  const isLight = mode === "light";

  return createTheme({
    palette: {
      mode,
      primary: isLight
        ? { main: "#0A1F44", light: "#1E3A6E", dark: "#05122B", contrastText: "#FFFFFF" }
        : { main: "#8FA8D9", light: "#B3C4E6", dark: "#5F7BB8", contrastText: "#0A1122" },
      secondary: gold,
      background: isLight
        ? { default: "#F5F6FA", paper: "#FFFFFF" }
        : { default: "#0A1122", paper: "#0F1B33" },
      text: isLight
        ? { primary: "#0A1F44", secondary: "#4A5568" }
        : { primary: "#E8EAF0", secondary: "#AEB8CC" },
    },
    shape: {
      borderRadius: 8,
    },
    typography: {
      fontFamily: fontFamily,
      h1: { fontWeight: 700 },
      h2: { fontWeight: 700 },
      h3: { fontWeight: 700 },
      h4: { fontWeight: 600 },
      button: { fontWeight: 600 },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
          },
        },
      },
    },
  });
}
