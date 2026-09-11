import { BreadcrumbItem } from "@/components/Breadcrumb";

export interface MegaMenuColumn {
  title: string;
  href: string;
  description: string;
}

export interface MegaMenuSection {
  spotlight: {
    title: string;
    description: string;
    ctaText: string;
    ctaHref: string;
  };
  columns: MegaMenuColumn[];
}

export interface NavDropdownItem {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  id?: string;
  dropdown?: NavDropdownItem[];
}

export const megaMenus: Record<string, MegaMenuSection> = {
  about: {
    spotlight: {
      title: "We are Come For Road Child (CRC)",
      description:
        "A student-led volunteer social welfare organization founded on 5 June 2016 at GSTU, dedicated to ensuring the fundamental rights, education, and healthcare of underprivileged street children.",
      ctaText: "Discover who we are",
      ctaHref: "/about",
    },
    columns: [
      {
        title: "History & Genesis",
        href: "/about#history",
        description:
          "From a 2016 Eid shopping moment at a railway station to an organized nationwide campus movement.",
      },
      {
        title: "Principles & Values",
        href: "/about#principles",
        description:
          "Brotherhood, Commitment, and Trust guiding our 8 operational values and non-profit ethics.",
      },
      {
        title: "How We Are Run",
        href: "/about#governance",
        description:
          "A 3-Council structure (Permanent, Executive, Temporary) ensuring transparent, student-led management.",
      },
      {
        title: "Milestones & Awards",
        href: "/about#timeline",
        description:
          "A 10-year development trajectory and official recognition with the Best Branch Prize.",
      },
    ],
  },
  programs: {
    spotlight: {
      title: "Our Humanitarian Programs",
      description:
        "Direct field operations, basic education, healthcare checkups, and seasonal emergency relief for street children across Bangladesh.",
      ctaText: "Explore all programs",
      ctaHref: "/programs",
    },
    columns: [
      {
        title: "Street Child Education",
        href: "/programs#education",
        description:
          "Free open-air schooling, stationery, books, and basic literacy training for street children.",
      },
      {
        title: "Nutrition & Health Camps",
        href: "/programs#health-camps",
        description:
          "Routine doctor checkups, hygiene kits, soap distribution, and treatment for seasonal illnesses.",
      },
      {
        title: "Winter Warmth & Relief",
        href: "/programs#winter-warmth",
        description:
          "Annual distribution of warm sweaters, blankets, and rations to floating homeless families.",
      },
      {
        title: "Child Safeguarding",
        href: "/programs#safeguarding",
        description:
          "Safe shelter support, anti-trafficking vigilance, and emergency rescue protocols.",
      },
    ],
  },
  school: {
    spotlight: {
      title: "Hatekhori Free School",
      description:
        "Our flagship open-air education initiative transforming street children into confident, literate learners with moral and formal foundation.",
      ctaText: "View school model",
      ctaHref: "/school",
    },
    columns: [
      {
        title: "Class Curriculum",
        href: "/school#curriculum",
        description:
          "Structured tiers from Pre-Primary basics to Grade 8 mainstream school transitions.",
      },
      {
        title: "Weekly Timetable",
        href: "/school#schedule",
        description:
          "Flexible afternoon sessions accommodating children's daily survival routines.",
      },
      {
        title: "Volunteer Teaching",
        href: "/school#standards",
        description:
          "GSTU university students acting as dedicated mentors, tutors, and positive role models.",
      },
    ],
  },
  branches: {
    spotlight: {
      title: "Campus & Regional Chapters",
      description:
        "A synchronized network of passionate university student volunteers driving street child welfare across divisions and districts.",
      ctaText: "Explore all branches",
      ctaHref: "/branches",
    },
    columns: [
      {
        title: "GSTU Central Branch",
        href: "/branches#gstu",
        description:
          "The founding branch and central operational engine headquartered in Gopalganj.",
      },
      {
        title: "Town & Upazila Wings",
        href: "/branches#upazila",
        description:
          "Gopalganj Town, Tungipara, and Kotalipara local volunteer action teams.",
      },
      {
        title: "Divisional Chapters",
        href: "/branches#divisional",
        description:
          "Expanding initiatives across Barishal, Khulna, and neighboring universities.",
      },
    ],
  },
  media: {
    spotlight: {
      title: "Media, Press & Documentary",
      description:
        "Authentic photographs, video documentaries, and press coverage of our field campaigns and milestones from 2016 to the present day.",
      ctaText: "Explore media gallery",
      ctaHref: "/media",
    },
    columns: [
      {
        title: "Photo Archives",
        href: "/media#gallery",
        description:
          "High-resolution captures of Hatekhori classrooms, Eid clothes distribution, and relief drives.",
      },
      {
        title: "Documentary Stories",
        href: "/media#video",
        description:
          "Impact videos and authentic interviews with student volunteers and school beneficiaries.",
      },
      {
        title: "Press & News Coverage",
        href: "/media#press",
        description:
          "National and regional newspaper reports, recognition, and branch achievements.",
      },
    ],
  },
};

export const megaMenuKeys = ["about", "programs", "school", "branches", "media"] as const;

export const defaultRouteBreadcrumbMap: Record<string, BreadcrumbItem[]> = {
  "/about": [{ label: "About Us" }],
  "/members": [{ label: "About Us", href: "/about" }, { label: "Members Directory" }],
  "/programs": [{ label: "Programs & Activities" }],
  "/school": [{ label: "Programs", href: "/programs" }, { label: "Hatekhori Free School" }],
  "/branches": [{ label: "Branches" }],
  "/media": [{ label: "Media & Gallery" }],
  "/promises": [{ label: "Our Promises" }],
};

export const navItems: NavItem[] = [
  {
    label: "About CRC",
    href: "/about",
    id: "about",
    dropdown: [
      { label: "Overview & History", href: "/about#history" },
      { label: "Vision, Mission & Values", href: "/about#vision" },
      { label: "5 Core Principles", href: "/about#principles" },
      { label: "Executive Leadership", href: "/about#leadership" },
      { label: "Growth Timeline", href: "/about#timeline" },
    ],
  },
  {
    label: "Programs & Activities",
    href: "/programs",
    id: "programs",
    dropdown: [
      { label: "All 7 Core Programs", href: "/programs" },
      { label: "Street Children Education", href: "/programs#education" },
      { label: "Nutrition & Health Camps", href: "/programs#health-camps" },
      { label: "Winter Warmth & Relief", href: "/programs#winter-warmth" },
      { label: "Child Safeguarding Policy", href: "/programs#safeguarding" },
    ],
  },
  {
    label: "CRC School",
    href: "/school",
    id: "school",
    dropdown: [
      { label: "Hatekhori Free School", href: "/school" },
      { label: "Class Curriculum (Pre-Primary to 8)", href: "/school#curriculum" },
      { label: "Weekly Timetable Routine", href: "/school#schedule" },
      { label: "Volunteer Teaching Standards", href: "/school#standards" },
    ],
  },
  {
    label: "Branches",
    href: "/branches",
    id: "branches",
    dropdown: [
      { label: "All 6 Campus Chapters", href: "/branches" },
      { label: "GSTU Central Branch", href: "/branches#gstu" },
      { label: "Gopalganj Town Chapter", href: "/branches#town" },
      { label: "Tungipara & Kotalipara", href: "/branches#upazila" },
      { label: "Barishal & Khulna Wings", href: "/branches#divisional" },
    ],
  },
  {
    label: "Members",
    href: "/members",
  },
  {
    label: "Media & Gallery",
    href: "/media",
    id: "media",
    dropdown: [
      { label: "Photo Archives", href: "/media#gallery" },
      { label: "Documentary Video", href: "/media#video" },
      { label: "Press & News Coverage", href: "/media#press" },
      { label: "Official CRC Banner", href: "/media#banner" },
    ],
  },
  {
    label: "Get Involved",
    href: "/#volunteer",
  },
  {
    label: "Resources",
    href: "/programs#safeguarding",
  },
  {
    label: "Contact Us",
    href: "/about#contact",
  },
];
