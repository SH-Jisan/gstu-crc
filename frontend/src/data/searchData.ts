export interface SearchItem {
  id: string;
  title: string;
  description: string;
  category: "School" | "Action" | "Program" | "Member" | "Branch" | "History" | "Governance" | "About" | "Media";
  href: string;
  keywords: string[];
  badge?: string;
}

export const SEARCH_ITEMS: SearchItem[] = [
  // 1. School
  {
    id: "hatekhori-school",
    title: "Hatekhori Free Open School",
    description: "Daily outdoor education, free books, learning kits, and basic literacy for underprivileged street children in Gopalganj.",
    category: "School",
    href: "/school",
    keywords: ["school", "education", "hatekhori", "hatekhori school", "classes", "books", "study", "children", "shikkha", "free school"],
    badge: "Flagship",
  },
  {
    id: "school-curriculum",
    title: "Hatekhori Curriculum & Learning Levels",
    description: "Bengali, English, basic mathematics, moral ethics, hygiene practices, and life skills designed for street-connected children.",
    category: "School",
    href: "/school#curriculum",
    keywords: ["curriculum", "syllabus", "math", "english", "bangla", "ethics", "learning", "levels"],
  },

  // 2. Action & Support
  {
    id: "sponsor-child",
    title: "Sponsor a Child (Monthly Support)",
    description: "Support a street child's complete education, nutrition, and health with 1,500 BDT/month via bKash, Nagad, or Bank Transfer.",
    category: "Action",
    href: "/#sponsor",
    keywords: ["donate", "donation", "sponsor", "sponsor a child", "money", "bkash", "nagad", "bank", "taka", "fund", "give", "help"],
    badge: "Direct Impact",
  },
  {
    id: "become-volunteer",
    title: "Become a Volunteer with CRC",
    description: "Join 350+ active student volunteers across universities to teach, mentor, and protect vulnerable street children.",
    category: "Action",
    href: "/members",
    keywords: ["volunteer", "join", "apply", "membership", "student", "teach", "help", "community"],
  },

  // 3. Programs
  {
    id: "winter-warmth",
    title: "Winter Warmth & Blanket Distribution",
    description: "Annual humanitarian drive distributing heavy warm blankets, sweaters, and winter clothes to street children and families.",
    category: "Program",
    href: "/programs",
    keywords: ["winter", "sheet", "blanket", "warmth", "sweater", "cold", "relief", "campaign", "clothes"],
  },
  {
    id: "health-camps",
    title: "Free Healthcare, Dental & Eye Camps",
    description: "Routine health checkups, essential prescription medicines, dental hygiene kits, and emergency treatments.",
    category: "Program",
    href: "/programs",
    keywords: ["health", "medical", "doctor", "medicine", "eye", "dental", "treatment", "clinic", "checkup"],
  },
  {
    id: "eid-festive",
    title: "Eid Happiness & Festive Clothing Aid",
    description: "Providing brand new Eid outfits, nutritious celebration meals, and joy packages to street-connected children.",
    category: "Program",
    href: "/programs",
    keywords: ["eid", "festive", "food", "new clothes", "eid gift", "happiness", "celebration"],
  },
  {
    id: "nutritional-meals",
    title: "Daily Nutrition & Emergency Feeding",
    description: "Protein-rich healthy snacks, clean drinking water, and cooked meals during school sessions and floods.",
    category: "Program",
    href: "/programs",
    keywords: ["food", "nutrition", "meal", "feeding", "diet", "protein", "hunger", "emergency relief"],
  },

  // 4. Governance & Promises
  {
    id: "how-we-run",
    title: "How We Run & Constitutional Governance",
    description: "3-tier organizational structure (Permanent, Executive, General) with audited financial books and transparent records.",
    category: "Governance",
    href: "/about/how-we-run",
    keywords: ["governance", "how we run", "structure", "audit", "accounts", "transparency", "constitution", "hierarchy"],
  },
  {
    id: "child-safeguarding",
    title: "Child Safeguarding Charter & Ethics",
    description: "Strict zero-tolerance policy against child abuse, exploitation, and corporal punishment, backed by verified reporting protocols.",
    category: "Governance",
    href: "/promises",
    keywords: ["safeguarding", "child rights", "safety", "promises", "protection", "abuse prevention", "ethics"],
  },

  // 5. History & Identity
  {
    id: "our-history",
    title: "Our 10-Year History (2016–2026)",
    description: "Founded on 5 June 2016 at GSTU by passionate undergraduate students to transform railway and roadside kids' lives.",
    category: "History",
    href: "/about/our-history",
    keywords: ["history", "origin", "founding", "2016", "journey", "milestones", "story", "gstu founding"],
  },
  {
    id: "symbol-flag",
    title: "Symbol, Flag Colors & Official Motto",
    description: "The protective red & black hands logo, the 4 flag colors, and our guiding ethos: Brotherhood, Commitment, Trust.",
    category: "About",
    href: "/about/symbol-flag",
    keywords: ["symbol", "flag", "logo", "motto", "meaning", "colors", "emblem", "brotherhood", "trust"],
  },
  {
    id: "principles-vision",
    title: "Principles, Vision & Constitutional Mission",
    description: "Core constitutional tenets, 5 strategic pillars, and the long-term vision of a Bangladesh free from street children.",
    category: "About",
    href: "/about#vision",
    keywords: ["principles", "vision", "mission", "values", "goals", "pillars", "about crc"],
  },

  // 6. Members & People
  {
    id: "executive-body",
    title: "Executive Body & Leadership Council",
    description: "The President, General Secretary, organizing secretaries, and central department heads managing daily operations.",
    category: "Member",
    href: "/members",
    keywords: ["executive", "president", "secretary", "committee", "leaders", "council", "management", "cabinet"],
  },
  {
    id: "blood-donors",
    title: "Emergency Blood Donors Directory",
    description: "Searchable directory of verified volunteer blood donors across blood groups (A+, B+, O+, AB+, etc.).",
    category: "Member",
    href: "/members",
    keywords: ["blood", "donors", "roktodan", "emergency", "blood group", "o positive", "b positive", "a positive"],
    badge: "Emergency",
  },
  {
    id: "faculty-advisors",
    title: "Faculty Advisors & Institutional Mentors",
    description: "Distinguished professors and faculty advisors from GSTU providing academic and strategic stewardship.",
    category: "Member",
    href: "/members",
    keywords: ["advisors", "faculty", "teachers", "mentors", "professors", "patrons", "gstu faculty"],
  },

  // 7. Branches
  {
    id: "branches-network",
    title: "Branches Network Across Bangladesh",
    description: "Central GSTU Branch, plus active chapters at KUET, RUET, SUST, Dhaka University, and emerging college units.",
    category: "Branch",
    href: "/branches",
    keywords: ["branch", "branches", "network", "kuet", "ruet", "sust", "dhaka", "gopalganj", "khulna", "rajshahi"],
  },

  // 8. Media
  {
    id: "media-gallery",
    title: "Media, Documentaries & Photo Archive",
    description: "High-resolution ground field photography, short documentary films, and news articles on CRC's impact.",
    category: "Media",
    href: "/media",
    keywords: ["media", "photos", "gallery", "video", "documentary", "pictures", "press", "news"],
  },
];

export const POPULAR_SEARCH_TAGS = [
  { label: "🎓 Hatekhori School", query: "school" },
  { label: "❤️ Sponsor a Child", query: "sponsor" },
  { label: "👥 Executive Body", query: "executive" },
  { label: "🩺 Free Health Camp", query: "health" },
  { label: "❄️ Winter Clothes", query: "winter" },
  { label: "🩸 Blood Donors", query: "blood" },
  { label: "🏛️ Branches", query: "branch" },
  { label: "📜 Our History", query: "history" },
];

export const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  School: { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
  Action: { bg: "bg-red-50", text: "text-red-700", border: "border-red-200" },
  Program: { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200" },
  Member: { bg: "bg-amber-50", text: "text-amber-800", border: "border-amber-200" },
  Branch: { bg: "bg-indigo-50", text: "text-indigo-700", border: "border-indigo-200" },
  History: { bg: "bg-orange-50", text: "text-orange-800", border: "border-orange-200" },
  Governance: { bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-200" },
  About: { bg: "bg-gray-100", text: "text-gray-800", border: "border-gray-300" },
  Media: { bg: "bg-teal-50", text: "text-teal-700", border: "border-teal-200" },
};
