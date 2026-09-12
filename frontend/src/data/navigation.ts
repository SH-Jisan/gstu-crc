import { BreadcrumbItem } from "@/components/Breadcrumb";

export interface MegaMenuSubLink {
  label: string;
  href: string;
  badge?: string;
  isSubItem?: boolean;
  description?: string;
}

export interface MegaMenuColumn {
  title: string;
  href: string;
  description?: string;
  items?: MegaMenuSubLink[];
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
        title: "About",
        href: "/about",
        items: [
          {
            label: "Principles",
            href: "/about#principles",
            description: "Three fundamental principles (Brotherhood, Commitment, Trust) and 8 guiding values forming our ethical volunteer code.",
          },
          {
            label: "Vision and mission",
            href: "/about#vision",
            description: "Our vision for a street-child-free society, guided by 5 pillars ensuring protection, education, and dignity.",
          },
          {
            label: "Objectives",
            href: "/about#objectives",
            description: "Five strategic constitutional goals dedicated to child welfare, open schooling, health, and youth volunteer leadership.",
          },
          {
            label: "Mode of Action",
            href: "/about#modes-of-action",
            description: "Seven ground-level methodologies including direct aid, open schooling, institutional advocacy, and child safeguarding.",
          },
          {
            label: "Achievements",
            href: "/about#achievements",
            description: "Awarded Best Branch recognition with 1,200+ street children empowered, Hatekhori School, and 350+ student volunteers.",
          },
        ],
      },
      {
        title: "Our history",
        href: "/about#history",
        items: [
          {
            label: "How we founded",
            href: "/about#history",
            description: "Originated on 5 June 2016 from a railway station Eid initiative by university students dedicating themselves to street children.",
          },
          {
            label: "Leadership over years",
            href: "/about#leadership",
            description: "The student conveners, executive panels, and university faculty advisors who guided our decade-long journey since 2016.",
          },
        ],
      },
      {
        title: "How we run",
        href: "/about#governance",
        items: [
          {
            label: "Finance",
            href: "/about#finance",
            description: "Strict financial governance with restricted child funds, voluntary student dues, and 100% open independent audits.",
          },
          {
            label: "Governance Overview",
            href: "/about#governance",
            description: "A 3-tier constitutional framework ensuring democratic leadership, transparent field operations, and institutional continuity.",
          },
          {
            label: "Executive Council",
            href: "/about#executive-council",
            isSubItem: true,
            description: "The elected student leadership team actively managing day-to-day operations, Hatekhori School, and field campaigns.",
          },
          {
            label: "Permanent Council",
            href: "/about#permanent-council",
            isSubItem: true,
            description: "Supreme constitutional trustee body of founding members and alumni ensuring institutional ethics and policy continuity.",
          },
          {
            label: "Temporary Council",
            href: "/about#temporary-council",
            isSubItem: true,
            description: "Specialized independent ad-hoc committees appointed for election conduction, annual audits, and emergency mandates.",
          },
        ],
      },
      {
        title: "Symbol & Flag",
        href: "/about#symbol-flag",
        items: [
          {
            label: "Official Emblem & Logo",
            href: "/about#symbol-flag",
            description: "Protective hands embracing a street child within a circle of unity, symbolizing collective compassion, shelter, and hope.",
          },
          {
            label: "Flag Colors & Motto",
            href: "/about#symbol-flag",
            description: "Four symbolic banner colors and our official motto uniting us to build a society free from street children.",
          },
        ],
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
      { label: "Principles", href: "/about#principles" },
      { label: "Vision and mission", href: "/about#vision" },
      { label: "Objectives", href: "/about#objectives" },
      { label: "Mode of Action", href: "/about#modes-of-action" },
      { label: "Achievements", href: "/about#achievements" },
      { label: "How we founded", href: "/about#history" },
      { label: "Leadership over years", href: "/about#leadership" },
      { label: "Finance", href: "/about#finance" },
      { label: "Governance (Councils & Structure)", href: "/about#governance" },
      { label: "Executive Council", href: "/about#executive-council" },
      { label: "Permanent Council", href: "/about#permanent-council" },
      { label: "Temporary Council", href: "/about#temporary-council" },
      { label: "Symbol & Flag", href: "/about#symbol-flag" },
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
