"use client";

import { useMemo, type ReactNode } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ColorModeProvider, useColorMode } from "./ColorModeContext";
import { getTheme } from "./theme";

function ThemedApp({ children, fontFamily }: { children: ReactNode; fontFamily?: string }) {
  const { mode } = useColorMode();
  const theme = useMemo(() => getTheme(mode, fontFamily), [mode, fontFamily]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export function ThemeRegistry({
  children,
  fontFamily,
}: {
  children: ReactNode;
  fontFamily?: string;
}) {
  return (
    <AppRouterCacheProvider options={{ key: "mui" }}>
      <ColorModeProvider>
        <ThemedApp fontFamily={fontFamily}>{children}</ThemedApp>
      </ColorModeProvider>
    </AppRouterCacheProvider>
  );
}
