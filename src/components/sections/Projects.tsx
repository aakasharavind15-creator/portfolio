import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <Box id="projects" sx={{ py: { xs: 8, md: 10 } }}>
      <Container maxWidth="md">
        <Typography variant="h4" sx={{ mb: 4 }}>
          Projects
        </Typography>
        <Grid container spacing={3}>
          {projects.map((project) => (
            <Grid key={project.id} size={{ xs: 12, sm: 6 }}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
