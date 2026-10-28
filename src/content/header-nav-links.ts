/** Desktop nav mega-menu items — hrefs match anchors on `/services` or `#ai-products` on home. */

export type NavDropdownLink = {
  label: string;
  href: string;
  blurb: string;
  icon: string;
};

export type NavDropdownGroup = {
  heading: string;
  items: NavDropdownLink[];
};

function service(
  label: string,
  href: string,
  blurb: string,
  icon: string,
): NavDropdownLink {
  return { label, href, blurb, icon };
}

export const headerServicesNavGroups: NavDropdownGroup[] = [
  {
    heading: "Product engineering",
    items: [
      service(
        "AI Application Development",
        "/#ai-products",
        "Voice, chat, agents, and intelligent product layers.",
        "service-ai",
      ),
      service(
        "Web App Development",
        "/services#web-applications",
        "Full-stack web apps and SaaS platforms.",
        "service-web",
      ),
      service(
        "Mobile App Development",
        "/services#mobile-applications",
        "Native and cross-platform iOS & Android apps.",
        "service-mobile",
      ),
    ],
  },
  {
    heading: "Experience & platform",
    items: [
      service(
        "UI/UX Design",
        "/services#design",
        "Research-led product design and design systems.",
        "service-design",
      ),
      service(
        "Cloud & DevOps",
        "/services#cloud",
        "Cloud-native architecture, CI/CD, and ops.",
        "service-cloud",
      ),
      service(
        "IT Staff Augmentation",
        "/services#staff-augmentation",
        "Senior engineers embedded with your team.",
        "service-team",
      ),
    ],
  },
];

/** Flat list for mobile menu and any consumers that need a single array. */
export const headerServicesDropdown: NavDropdownLink[] =
  headerServicesNavGroups.flatMap((group) => group.items);
