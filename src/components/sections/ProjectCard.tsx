"use client";

import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Link from "next/link";
import type { Project } from "@/types/project";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardActionArea
        component={Link}
        href={`/projects/${project.slug}`}
        sx={{ flexGrow: 1, display: "flex", flexDirection: "column", alignItems: "stretch" }}
      >
        {project.thumbnail && (
          <CardMedia
            component="img"
            src={project.thumbnail}
            alt={project.title}
            sx={{ height: 160, objectFit: "cover", bgcolor: "grey.200" }}
          />
        )}
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
            {project.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {project.shortDescription}
          </Typography>
          <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: "wrap" }}>
            {project.tags.map((tag) => (
              <Chip key={tag} label={tag} size="small" variant="outlined" color="primary" />
            ))}
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
