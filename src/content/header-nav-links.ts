/** Desktop nav mega-menu items — hrefs match anchors on `/services` or `#ai-products` on home. */

export type NavDropdownLink = { label: string; href: string };

export const headerServicesDropdown: NavDropdownLink[] = [
  {
    label: "AI Application Development",
    href: "/#ai-products",
  },
  {
    label: "Web App Development",
    href: "/services#web-applications",
  },
  {
    label: "Mobile App Development",
    href: "/services#mobile-applications",
  },
  {
    label: "UI/UX Design",
    href: "/services#design",
  },
  {
    label: "Cloud & DevOps",
    href: "/services#cloud",
  },
  {
    label: "IT Staff Augmentation",
    href: "/services#staff-augmentation",
  },
];
