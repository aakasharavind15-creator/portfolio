"use client";

import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useColorMode } from "@/theme/ColorModeContext";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const { mode, toggleColorMode } = useColorMode();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navButtons = (
    <Stack direction="row" spacing={1}>
      {navItems.map((item) => (
        <Button key={item.href} color="inherit" href={item.href}>
          {item.label}
        </Button>
      ))}
    </Stack>
  );

  return (
    <AppBar position="sticky" color="default" elevation={1}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" component="a" href="#hero" sx={{ fontWeight: 700, color: "primary.main" }}>
          Aakash
        </Typography>

        {isMobile ? (
          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            <IconButton onClick={toggleColorMode} aria-label="Toggle color mode">
              {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
            </IconButton>
            <IconButton onClick={() => setDrawerOpen(true)} aria-label="Open navigation menu">
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
              <List sx={{ width: 220 }}>
                {navItems.map((item) => (
                  <ListItemButton
                    key={item.href}
                    component="a"
                    href={item.href}
                    onClick={() => setDrawerOpen(false)}
                  >
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                ))}
              </List>
            </Drawer>
          </Stack>
        ) : (
          <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
            {navButtons}
            <IconButton onClick={toggleColorMode} aria-label="Toggle color mode">
              {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
            </IconButton>
          </Stack>
        )}
      </Toolbar>
    </AppBar>
  );
}
