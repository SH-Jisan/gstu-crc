import {
  Heart,
  Shield,
  Award,
  BookOpen,
  Users,
  Scale,
  Compass,
  FileText,
  GraduationCap,
  Megaphone,
  Handshake,
  Building2,
  HelpCircle,
  LucideIcon,
} from "lucide-react";

export interface GuidingValue {
  title: string;
  desc: string;
  icon: LucideIcon;
  color: string;
}

export interface MissionPillar {
  pillar: string;
  bengali: string;
  desc: string;
  icon: LucideIcon;
  color: string;
}

export interface StrategicObjective {
  num: string;
  title: string;
  desc: string;
}

export interface ModeOfAction {
  title: string;
  desc: string;
  icon: LucideIcon;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  desc: string;
}

// 1.1.2 Eight Guiding Values from Document
export const GUIDING_VALUES: GuidingValue[] = [
  {
    title: "Empathy (সহানুভূতি)",
    desc: "Understanding the circumstances, feelings, needs, and aspirations of underprivileged children and disadvantaged communities, responding with compassion and care.",
    icon: Heart,
    color: "text-rose-600 bg-rose-50 border-rose-200",
  },
  {
    title: "Respect (শ্রদ্ধা ও মর্যাদা)",
    desc: "Recognizing the inherent dignity and worth of every person, treating children, beneficiaries, members, and volunteers with fairness, dignity, and respect.",
    icon: Award,
    color: "text-amber-600 bg-amber-50 border-amber-200",
  },
  {
    title: "Non-discrimination (বৈষম্যহীনতা)",
    desc: "Providing services, opportunities, and participation without unfair discrimination based on race, nationality, religion, gender, social status, or political opinion.",
    icon: Scale,
    color: "text-emerald-600 bg-emerald-50 border-emerald-200",
  },
  {
    title: "Neutrality (নিরপেক্ষতা)",
    desc: "Strictly non-political, non-ideological, and non-partisan humanitarian service. CRC resources and platforms are never used for partisan division.",
    icon: Compass,
    color: "text-blue-600 bg-blue-50 border-blue-200",
  },
  {
    title: "Responsibility (দায়িত্বশীলতা)",
    desc: "Taking ownership of duties, decisions, and actions. Fulfilling responsibilities with sincerity, accountability, and due regard for the organization's policies and people.",
    icon: Shield,
    color: "text-purple-600 bg-purple-50 border-purple-200",
  },
  {
    title: "Transparency (স্বচ্ছতা)",
    desc: "Conducting organizational affairs openly and responsibly. Clear processes for decision-making, financial management, reporting, and resource utilization.",
    icon: FileText,
    color: "text-cyan-600 bg-cyan-50 border-cyan-200",
  },
  {
    title: "Teamwork (দলগত ঐক্য)",
    desc: "Achieving objectives through cooperation, communication, and collective action, recognizing that meaningful and sustainable impact is strengthened when people work together.",
    icon: Users,
    color: "text-indigo-600 bg-indigo-50 border-indigo-200",
  },
  {
    title: "Learning & Growth (ধারাবাহিক শিক্ষা)",
    desc: "Promoting continuous personal development, knowledge sharing, constructive feedback, and continuous improvement of members, volunteers, and practices.",
    icon: GraduationCap,
    color: "text-emerald-700 bg-emerald-50 border-emerald-200",
  },
];

// 1.3 Five Mission Pillars from Document
export const MISSIONS: MissionPillar[] = [
  {
    pillar: "Protection",
    bengali: "সুরক্ষা",
    desc: "To safeguard and promote children’s fundamental rights, including food, clothing, shelter, healthcare, and education.",
    icon: Shield,
    color: "border-[#e6000a] text-[#e6000a]",
  },
  {
    pillar: "Development",
    bengali: "সামগ্রিক বিকাশ",
    desc: "To support the social, moral, and psychological development of children and help them grow into confident and responsible individuals.",
    icon: GraduationCap,
    color: "border-[#007938] text-[#007938]",
  },
  {
    pillar: "Awareness",
    bengali: "সচেতনতা বৃদ্ধি",
    desc: "To raise public awareness about children’s rights, their needs, and the responsibilities of society toward them.",
    icon: Megaphone,
    color: "border-amber-600 text-amber-600",
  },
  {
    pillar: "Engagement",
    bengali: "যুব সম্পৃক্ততা",
    desc: "To encourage and empower young people and university students to actively participate in social service and community development.",
    icon: Users,
    color: "border-blue-600 text-blue-600",
  },
  {
    pillar: "Humanity",
    bengali: "মানবিক মূল্যবোধ",
    desc: "To foster a culture of love, compassion, empathy, and humanity within society through sustained collective action.",
    icon: Heart,
    color: "border-rose-600 text-rose-600",
  },
];

// 1.4 Five Strategic Objectives from Document
export const OBJECTIVES: StrategicObjective[] = [
  {
    num: "01",
    title: "Essential Living & Welfare Support",
    desc: "To improve the living conditions, opportunities, and well-being of underprivileged children by addressing their essential educational, health, and welfare needs.",
  },
  {
    num: "02",
    title: "Holistic Development & Life Skills",
    desc: "To facilitate the holistic development of children by providing opportunities for education, life skills, creativity, social interaction, and personal growth.",
  },
  {
    num: "03",
    title: "Public Awareness & Child Rights",
    desc: "To increase public awareness and community responsibility regarding children's rights, protection, welfare, and social development.",
  },
  {
    num: "04",
    title: "Active Youth Volunteer Network",
    desc: "To develop an active and capable youth volunteer network through participation, leadership development, training, teamwork, and community service.",
  },
  {
    num: "05",
    title: "Culture of Compassion & Sustainable Action",
    desc: "To cultivate a culture of love, compassion, empathy, and humanity through collective, transparent, and sustainable social action.",
  },
];

// 1.5 Seven Modes of Action from Document
export const MODES_OF_ACTION: ModeOfAction[] = [
  {
    title: "1. Raising Awareness",
    desc: "Campaigns, educational programs, community outreach, and public communication addressing children's rights, education, health, and humanitarian concerns.",
    icon: Megaphone,
  },
  {
    title: "2. Engaging People",
    desc: "Mobilizing university students, volunteers, alumni, and community members to contribute their time, skills, ideas, and resources directly to social action.",
    icon: Users,
  },
  {
    title: "3. Collaboration",
    desc: "Working with educational institutions, social organizations, professionals, donors, and community groups to combine technical expertise and resources.",
    icon: Handshake,
  },
  {
    title: "4. Advocacy",
    desc: "Constructive dialogue, evidence, and responsible communication with authorities and stakeholders to support and encourage fulfilling obligations toward children.",
    icon: Building2,
  },
  {
    title: "5. Persuasion",
    desc: "Encouraging members and leaders through respectful, confidential bilateral dialogue to perform duties voluntarily and uphold responsibilities.",
    icon: HelpCircle,
  },
  {
    title: "6. Direct Support",
    desc: "Immediate assistance: Hatekhori Free School, healthcare initiatives, food and clothing distribution, Eid & winter clothes, and emergency disaster relief.",
    icon: BookOpen,
  },
  {
    title: "7. Child Safeguarding",
    desc: "Placing the dignity, safety, privacy, rights, and best interests of children at the center, ensuring no action exposes them to harm, exploitation, or loss of dignity.",
    icon: Shield,
  },
];

// Milestone Timeline
export const TIMELINE: TimelineMilestone[] = [
  {
    year: "2016 (Origin)",
    title: "The Spark at the Railway Station",
    desc: "Md. Rasel Ahmed saw children collecting recyclables in torn clothes during Eid shopping, and with his friends, used their Eid shopping money to buy clothes for them. He realized a structured, collective initiative was necessary.",
  },
  {
    year: "5 June 2016",
    title: "Formal Founding & CRC GSTU Branch",
    desc: "Md. Rasel Ahmed met Md. Sakib Ahmed (1st-year Management student at GSTU) in Kashiani, Gopalganj. Together with university friends, they formally founded CRC Foundation and CRC GSTU as the first branch under the slogan 'The World Will Be Free from Street Children by Connected Together'.",
  },
  {
    year: "2017",
    title: "Establishment of Hatekhori School",
    desc: "Recognizing education as the foundation for long-term child transformation, CRC GSTU established Hatekhori School as its first institutional educational initiative, run voluntarily by university student teachers.",
  },
  {
    year: "2019–2021",
    title: "District & Upazila Expansion",
    desc: "Launched Gopalganj Town Chapter, Tungipara Chapter, and Kotalipara Chapter, expanding winter relief, maternal healthcare awareness, and daily nutrition support.",
  },
  {
    year: "2022–2024",
    title: "National Campus Network & Hubs",
    desc: "CRC Central Branch established in Khulna as organizational hub. Campus branches established at Islamic University (IU), University of Barisal (BU), and Mawlana Bhashani Science and Technology University (MBSTU).",
  },
  {
    year: "2025–2026",
    title: "A Decade of Impact & Best Branch Honor",
    desc: "Celebrating 10 years of service (2016–2026). Over 350 active student volunteers, 1,200+ street children supported, and CRC GSTU honored with the prestigious Best Branch Prize recognition.",
  },
];
