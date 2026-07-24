import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";

export default function ProjectNotFound() {
  return (
    <>
      <Header />
      <main className="mx-auto flex max-w-sm flex-col items-center gap-4 px-4 pt-40 pb-16 text-center">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <p className="text-muted-foreground">
          The project you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <Button asChild>
          <Link href="/#projects">Back to projects</Link>
        </Button>
      </main>
      <Footer />
    </>
  );
}
