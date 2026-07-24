import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        bgcolor: "primary.main",
        color: "primary.contrastText",
        py: { xs: 10, md: 14 },
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={3} sx={{ alignItems: "flex-start" }}>
          <Typography variant="overline" sx={{ color: "secondary.main", fontWeight: 700 }}>
            Financial Analyst · Fresher
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 700 }}>
            Hi, I&apos;m Aakash.
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9, fontWeight: 400, maxWidth: 560 }}>
            I turn financial data into clear, decision-ready analysis --
            financial modeling, valuation, and variance analysis for
            businesses that need answers, not just numbers.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            href="#projects"
            sx={{ mt: 1 }}
          >
            View Projects
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
