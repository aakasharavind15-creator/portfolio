import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from "@mui/icons-material/Email";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import type { SocialLink } from "@/types/social";

// Placeholder social links. Replace hrefs with your real profile URLs.
// "Contact info" is not an external link -- it shows your details in a
// tooltip and scrolls to the contact anchor instead of navigating away.
export const socials: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/your-profile",
    icon: <LinkedInIcon />,
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/your-username",
    icon: <GitHubIcon />,
    external: true,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@your-channel",
    icon: <YouTubeIcon />,
    external: true,
  },
  {
    label: "Email",
    href: "mailto:aakashsmartrock@gmail.com",
    icon: <EmailIcon />,
  },
  {
    label: "Naukri",
    href: "https://www.naukri.com/mnjuser/profile",
    icon: <BusinessCenterIcon />,
    external: true,
    tooltip: "Naukri profile",
  },
  {
    label: "Contact info",
    href: "#contact",
    icon: <ContactPhoneIcon />,
    tooltip: "Pune, India · +91-XXXXXXXXXX",
  },
];
