import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { socials } from "@/data/socials";

export function Footer() {
  return (
    <Box
      id="contact"
      component="footer"
      sx={{
        bgcolor: "primary.main",
        color: "primary.contrastText",
        py: 6,
        mt: "auto",
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={3} sx={{ alignItems: "center" }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Let&apos;s connect
          </Typography>

          <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", justifyContent: "center" }}>
            {socials.map((social) => (
              <Tooltip key={social.label} title={social.tooltip ?? social.label}>
                <IconButton
                  href={social.href}
                  target={social.external ? "_blank" : undefined}
                  rel={social.external ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  sx={{ color: "inherit" }}
                >
                  {social.icon}
                </IconButton>
              </Tooltip>
            ))}
          </Stack>

          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © {new Date().getFullYear()} Aakash. All rights reserved.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
