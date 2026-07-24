import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { ProjectMeta } from "@/components/project-detail/project-meta";
import { PdfViewer } from "@/components/project-detail/pdf-viewer";
import { FadeIn } from "@/components/motion/fade-in";
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
      <main className="mx-auto max-w-3xl px-4 pt-28 pb-16 sm:px-6">
        <FadeIn y={8}>
          <Button asChild variant="ghost" className="mb-4 -ml-3">
            <Link href="/#projects">
              <ArrowLeft className="size-4" />
              Back to projects
            </Link>
          </Button>
          <ProjectMeta project={project} />
          <PdfViewer pdfPath={project.pdfPath} />
        </FadeIn>
      </main>
      <Footer />
    </>
  );
}
