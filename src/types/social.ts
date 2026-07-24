import type { ReactNode } from "react";

export interface SocialLink {
  label: string;
  href: string;
  icon: ReactNode;
  external?: boolean;
  tooltip?: string;
}
