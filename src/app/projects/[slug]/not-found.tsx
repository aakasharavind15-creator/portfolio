import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function ProjectNotFound() {
  return (
    <>
      <Header />
      <Container maxWidth="sm" sx={{ py: 10, textAlign: "center" }}>
        <Stack spacing={3} sx={{ alignItems: "center" }}>
          <Typography variant="h4">Project not found</Typography>
          <Typography color="text.secondary">
            The project you&apos;re looking for doesn&apos;t exist or may have moved.
          </Typography>
          <Button component="a" href="/#projects" variant="contained" color="secondary">
            Back to projects
          </Button>
        </Stack>
      </Container>
      <Footer />
    </>
  );
}
