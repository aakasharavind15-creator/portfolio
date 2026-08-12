import { Mail, Briefcase, Phone } from "lucide-react";
import { SiGithub, SiYoutube } from "@icons-pack/react-simple-icons";
import { LinkedinIcon } from "@/components/icons/linkedin-icon";
import type { SocialLink } from "@/types/social";
import { profile } from "@/data/profile";

// Placeholder social links. Replace hrefs with your real profile URLs.
// "Contact info" is not an external link -- it shows your details in a
// tooltip and scrolls to the contact anchor instead of navigating away.
export const socials: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/your-profile",
    icon: <LinkedinIcon className="size-5" />,
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/your-username",
    icon: <SiGithub size={20} />,
    external: true,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@your-channel",
    icon: <SiYoutube size={20} />,
    external: true,
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: <Mail className="size-5" />,
  },
  {
    label: "Naukri",
    href: "https://www.naukri.com/mnjuser/profile",
    icon: <Briefcase className="size-5" />,
    external: true,
    tooltip: "Naukri profile",
  },
  {
    label: "Contact info",
    href: "#contact",
    icon: <Phone className="size-5" />,
    tooltip: `${profile.location} · ${profile.phone}`,
  },
];
