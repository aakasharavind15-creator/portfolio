export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription?: string;
  tags: string[];
  pdfPath: string;
  githubUrl: string;
  thumbnail?: string;
  dateCompleted?: string;
  featured?: boolean;
}
