export interface NavSubItem {
  id: string;
  label: string;
}

export interface NavPanelItem {
  id: string;
  label: string;
  subItems?: NavSubItem[];
}

export const NAV_PANEL_ITEMS: NavPanelItem[] = [
  { id: "principles", label: "Our Principles" },
  { id: "vision", label: "Vision & Mission" },
  { id: "objectives", label: "Strategic Objectives" },
  { id: "modes-of-action", label: "Mode of Action" },
  { id: "achievements", label: "Achievements" },
  {
    id: "more-chapters",
    label: "Institutional Chapters",
    subItems: [
      { id: "history", label: "Our History" },
      { id: "governance", label: "How We Run" },
      { id: "symbol-flag", label: "Symbol & Flag" },
    ],
  },
];

export const ALL_NAV_IDS: string[] = [
  "principles",
  "vision",
  "objectives",
  "modes-of-action",
  "achievements",
  "more-chapters",
  "history",
  "governance",
  "symbol-flag",
];

export const FURTHER_CHAPTER_CARDS = [
  {
    id: "history",
    title: "Our History",
    href: "/about/our-history",
    description:
      "Originated on 5 June 2016 from an Eid shopping initiative at a railway platform by university students. Explore our 10-year journey, founding genesis, and leadership legacy.",
  },
  {
    id: "governance",
    title: "How We Run (Governance & Finance)",
    href: "/about/how-we-run",
    description:
      "A 3-tier constitutional governance framework ensuring democratic student leadership, strict financial governance, 100% voluntary student dues, and restricted child funds safeguarding.",
  },
  {
    id: "symbol-flag",
    title: "Symbol & Flag (Visual Identity)",
    href: "/about/symbol-flag",
    description:
      "Protective hands embracing a street child within a circle of unity, four symbolic banner colors, and our official motto uniting us to build a society free from street children.",
  },
];

export const CANONICAL_ABOUT_URL = "https://crcgstu.org/about";
