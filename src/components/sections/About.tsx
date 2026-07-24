import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

export function About() {
  return (
    <Box id="about" sx={{ py: { xs: 8, md: 10 } }}>
      <Container maxWidth="md">
        <Grid container spacing={4} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, sm: 4 }} sx={{ display: "flex", justifyContent: "center" }}>
            <Avatar
              src="/images/profile-placeholder.svg"
              alt="Aakash"
              sx={{ width: 160, height: 160, border: "4px solid", borderColor: "secondary.main" }}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 8 }}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              About Me
            </Typography>
            <Typography variant="body1" color="text.secondary">
              I&apos;m a Financial Analyst fresher with a strong foundation in
              financial modeling, valuation, and Excel-based analysis built
              through academic coursework and self-driven projects. I enjoy
              breaking down financial statements to find the story behind the
              numbers, and I&apos;m looking for an opportunity to apply that
              rigor on a real analyst team.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
