"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type ColorMode = "light" | "dark";

interface ColorModeContextValue {
  mode: ColorMode;
  toggleColorMode: () => void;
}

const ColorModeContext = createContext<ColorModeContextValue | undefined>(undefined);

const STORAGE_KEY = "color-mode";

export function ColorModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ColorMode>("light");

  useEffect(() => {
    // localStorage/matchMedia are only available client-side, so the real
    // mode can only be read after mount -- SSR always renders "light" first.
    /* eslint-disable react-hooks/set-state-in-effect */
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") {
      setMode(stored);
      return;
    }
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setMode(prefersDark ? "dark" : "light");
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  const toggleColorMode = useCallback(() => {
    setMode((prev) => {
      const next = prev === "light" ? "dark" : "light";
      window.localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  const value = useMemo(() => ({ mode, toggleColorMode }), [mode, toggleColorMode]);

  return <ColorModeContext.Provider value={value}>{children}</ColorModeContext.Provider>;
}

export function useColorMode(): ColorModeContextValue {
  const context = useContext(ColorModeContext);
  if (!context) {
    throw new Error("useColorMode must be used within a ColorModeProvider");
  }
  return context;
}
