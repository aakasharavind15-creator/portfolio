import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProjectMeta } from "@/components/project-detail/ProjectMeta";
import { PdfViewer } from "@/components/project-detail/PdfViewer";
import { getProjectBySlug, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return { title: "Project not found" };
  }
  return {
    title: `${project.title} | Aakash's Portfolio`,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />
      <Container maxWidth="md" sx={{ py: { xs: 4, md: 6 } }}>
        <Box sx={{ mb: 3 }}>
          <Button component="a" href="/#projects" startIcon={<ArrowBackIcon />}>
            Back to projects
          </Button>
        </Box>
        <ProjectMeta project={project} />
        <PdfViewer pdfPath={project.pdfPath} />
      </Container>
      <Footer />
    </>
  );
}
