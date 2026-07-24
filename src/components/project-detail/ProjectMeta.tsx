import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import type { Project } from "@/types/project";

export function ProjectMeta({ project }: { project: Project }) {
  return (
    <Stack spacing={2} sx={{ mb: 4 }}>
      <Typography variant="h3" sx={{ fontWeight: 700 }}>
        {project.title}
      </Typography>

      <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: "wrap" }}>
        {project.tags.map((tag) => (
          <Chip key={tag} label={tag} color="primary" variant="outlined" size="small" />
        ))}
      </Stack>

      <Typography variant="body1" color="text.secondary">
        {project.longDescription ?? project.shortDescription}
      </Typography>

      <Button
        component="a"
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        variant="contained"
        color="secondary"
        startIcon={<GitHubIcon />}
        sx={{ alignSelf: "flex-start" }}
      >
        See more on GitHub (Excel workings + PDF)
      </Button>
    </Stack>
  );
}
