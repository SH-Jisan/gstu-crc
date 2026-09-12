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

export interface FundamentalPrinciple {
  num: string;
  name: string;
  bengali: string;
  quote: string;
  explanation: string;
  icon: LucideIcon;
  borderColor: string;
  iconColor: string;
  bgColor: string;
}

export interface GuidingValue {
  num: string;
  title: string;
  bengali: string;
  quote: string;
  explanation: string;
  icon: LucideIcon;
  color: string;
  badgeBg: string;
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
  explanation: string;
}

export interface ModeOfAction {
  num: string;
  title: string;
  bengali: string;
  summary: string;
  details: string;
  icon: LucideIcon;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  desc: string;
}

// 1.1.1 Three Fundamental Principles from Document
export const FUNDAMENTAL_PRINCIPLES: FundamentalPrinciple[] = [
  {
    num: "1",
    name: "Brotherhood",
    bengali: "ভাতৃত্ব ও সংহতি",
    quote:
      "“CRC GSTU promotes a spirit of brotherhood, solidarity, mutual respect, and care among its members and volunteers and encourages them to work together as one community.”",
    explanation:
      "Brotherhood reflects the belief that members are part of a common community working towards a shared purpose. It encourages mutual support, compassion, cooperation, and a sense of belonging while recognizing and respecting the individuality and contribution of every member.",
    icon: Heart,
    borderColor: "border-[#e6000a]",
    iconColor: "text-[#e6000a]",
    bgColor: "bg-red-950/40",
  },
  {
    num: "2",
    name: "Commitment",
    bengali: "দায়বদ্ধতা ও নিষ্ঠা",
    quote:
      "“CRC GSTU remains committed to its mission and objectives and encourages its members and volunteers to serve with sincerity, dedication, perseverance, and a spirit of responsibility.”",
    explanation:
      "Commitment means more than participation in organizational activities. It involves a willingness to remain dedicated to the organization's purpose, fulfill responsibilities, overcome challenges, and continue serving even when circumstances are difficult. Through commitment, CRC GSTU seeks to turn its ideals into sustained action.",
    icon: Shield,
    borderColor: "border-[#007938]",
    iconColor: "text-[#007938]",
    bgColor: "bg-green-950/40",
  },
  {
    num: "3",
    name: "Trust",
    bengali: "বিশ্বাস ও সততা",
    quote:
      "“CRC GSTU seeks to earn and protect the trust of the people it serves, its members, volunteers, partners, and the wider community through honesty, integrity, confidentiality, and sincere service.”",
    explanation:
      "Trust is essential to meaningful and lasting service. CRC GSTU recognizes that children, beneficiaries, families, members, and partners place confidence in the organization and its people. Members are therefore expected to act honestly, protect confidential information, respect commitments, and use that trust responsibly.",
    icon: Award,
    borderColor: "border-amber-500",
    iconColor: "text-amber-500",
    bgColor: "bg-amber-950/40",
  },
];

// 1.1.2 Eight Guiding Values from Document
export const GUIDING_VALUES: GuidingValue[] = [
  {
    num: "1",
    title: "Empathy",
    bengali: "সহানুভূতি",
    quote:
      "“CRC GSTU seeks to understand the circumstances, feelings, needs, and aspirations of the people it serves, particularly children and disadvantaged communities, and responds with compassion and care.”",
    explanation:
      "Empathy enables CRC GSTU to look beyond immediate needs and understand the experiences of those it seeks to support. It encourages members and volunteers to listen, understand, and respond sensitively to the realities faced by underprivileged children and other vulnerable members of society.",
    icon: Heart,
    color: "text-rose-600 bg-rose-50 border-rose-200",
    badgeBg: "bg-rose-100 text-rose-800",
  },
  {
    num: "2",
    title: "Respect",
    bengali: "শ্রদ্ধা ও মর্যাদা",
    quote:
      "“CRC GSTU recognizes the dignity and worth of every person and treats children, beneficiaries, members, volunteers, and community members with fairness, dignity, and respect.”",
    explanation:
      "Respect is fundamental to every interaction undertaken by CRC GSTU. The organization seeks to create an environment in which every individual feels valued and heard, regardless of their background, circumstances, or position. Particular care shall be taken to protect the dignity and well-being of children and vulnerable people.",
    icon: Award,
    color: "text-amber-600 bg-amber-50 border-amber-200",
    badgeBg: "bg-amber-100 text-amber-800",
  },
  {
    num: "3",
    title: "Non-discrimination",
    bengali: "বৈষম্যহীনতা",
    quote:
      "“CRC GSTU provides its services, opportunities, and participation without unfair discrimination based on race, nationality, religion, gender, social status, political opinion, or other personal characteristics.”",
    explanation:
      "CRC GSTU believes that every person deserves equal dignity and fair treatment. No individual shall be excluded from assistance, participation, or opportunities on the basis of characteristics unrelated to their needs or legitimate organizational requirements. The organization seeks to promote an inclusive environment where differences are respected rather than used as grounds for exclusion.",
    icon: Scale,
    color: "text-emerald-600 bg-emerald-50 border-emerald-200",
    badgeBg: "bg-emerald-100 text-emerald-800",
  },
  {
    num: "4",
    title: "Neutrality",
    bengali: "নিরপেক্ষতা",
    quote:
      "“CRC GSTU does not allow political, ideological, personal, or partisan interests to influence its humanitarian and social activities or its service to people in need.”",
    explanation:
      "Neutrality enables CRC GSTU to remain focused on its mission and maintain the confidence of the communities it serves. Members may hold their own personal beliefs and opinions, but the organization's name, resources, platforms, and activities shall not be used to promote partisan interests or create division. CRC GSTU shall remain focused on serving people and communities according to its mission.",
    icon: Compass,
    color: "text-blue-600 bg-blue-50 border-blue-200",
    badgeBg: "bg-blue-100 text-blue-800",
  },
  {
    num: "5",
    title: "Responsibility",
    bengali: "দায়িত্বশীলতা",
    quote:
      "“CRC GSTU expects every member and volunteer to fulfill their responsibilities with sincerity, accountability, and due regard for the organization's mission, policies, people, and resources.”",
    explanation:
      "Responsibility means taking ownership of one's duties, decisions, and actions. Every member has a role in maintaining the effectiveness, integrity, and reputation of the organization. CRC GSTU encourages its members to perform their responsibilities properly and on time and to accept accountability for the consequences of their actions.",
    icon: Shield,
    color: "text-purple-600 bg-purple-50 border-purple-200",
    badgeBg: "bg-purple-100 text-purple-800",
  },
  {
    num: "6",
    title: "Transparency",
    bengali: "স্বচ্ছতা",
    quote:
      "“CRC GSTU conducts its activities openly and responsibly and promotes transparency, accountability, and appropriate access to information in its organizational affairs.”",
    explanation:
      "Transparency strengthens trust and enables members and stakeholders to understand how the organization operates. CRC GSTU seeks to maintain clear and responsible processes for decision-making, financial management, reporting, and the use of organizational resources while respecting necessary confidentiality and privacy.",
    icon: FileText,
    color: "text-cyan-600 bg-cyan-50 border-cyan-200",
    badgeBg: "bg-cyan-100 text-cyan-800",
  },
  {
    num: "7",
    title: "Teamwork",
    bengali: "দলগত ঐক্য",
    quote:
      "“CRC GSTU achieves its objectives through cooperation, participation, communication, and collective action, recognizing that meaningful and sustainable impact is strengthened when people work together.”",
    explanation:
      "Teamwork brings together the knowledge, skills, experiences, and efforts of different individuals. CRC GSTU encourages members and volunteers to support one another, share knowledge, communicate openly, and work collectively toward common objectives. Individual contributions are valued as part of a greater collective effort.",
    icon: Users,
    color: "text-indigo-600 bg-indigo-50 border-indigo-200",
    badgeBg: "bg-indigo-100 text-indigo-800",
  },
  {
    num: "8",
    title: "Learning & Growth",
    bengali: "ধারাবাহিক শিক্ষা ও প্রবৃদ্ধি",
    quote:
      "“CRC GSTU promotes continuous learning, personal development, knowledge sharing, and the improvement of its members, volunteers, and organizational practices.”",
    explanation:
      "CRC GSTU recognizes that an organization serving society must continue to learn and improve. Members and volunteers are encouraged to develop their knowledge and skills, learn from experience, share what they know, receive constructive feedback, and seek better ways of serving the community. Continuous learning strengthens both individual capacity and the long-term effectiveness of the organization.",
    icon: GraduationCap,
    color: "text-emerald-700 bg-emerald-50 border-emerald-200",
    badgeBg: "bg-emerald-100 text-emerald-800",
  },
];

// 1.2 Vision Statement from Document
export const VISION = {
  quote:
    "“We envision a child-friendly, humane, and just society free from street children, where every child’s fundamental rights are ensured and where love, compassion, and humanity are embraced and promoted throughout society.”",
  bengali:
    "“পথশিশু মুক্ত একটি শিশুবান্ধব, মানবিক ও ন্যায়ভিত্তিক সমাজ যেখানে প্রতিটি শিশুর মৌলিক অধিকার নিশ্চিত হবে এবং ভালোবাসা, সহানুভূতি ও মানবতা সর্বত্র লালিত হবে।”",
};

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
    desc: "To encourage and empower young people to actively participate in social service and community development.",
    icon: Users,
    color: "border-blue-600 text-blue-600",
  },
  {
    pillar: "Humanity",
    bengali: "মানবিক মূল্যবোধ",
    desc: "To foster a culture of love, compassion, empathy, and humanity within society.",
    icon: Heart,
    color: "border-rose-600 text-rose-600",
  },
];

// 1.4 Five Strategic Objectives from Document
export const OBJECTIVES: StrategicObjective[] = [
  {
    num: "01",
    title:
      "Improving the living conditions, opportunities, and well-being of underprivileged children by addressing their essential educational, health, and welfare needs.",
    explanation:
      "We work to identify and respond to the essential needs of underprivileged children, helping create better opportunities for their education, health, welfare, and overall well-being.",
  },
  {
    num: "02",
    title:
      "Facilitating the holistic development of children by providing opportunities for education, life skills, creativity, social interaction, and personal growth.",
    explanation:
      "We seek to provide children with opportunities not only to learn, but also to develop life skills, express their creativity, interact positively with others, and grow as individuals.",
  },
  {
    num: "03",
    title:
      "Increasing public awareness and community responsibility regarding children's rights, protection, welfare, and development.",
    explanation:
      "We seek to build greater understanding and responsibility within society so that children's rights, protection, welfare, and development become a shared concern and responsibility.",
  },
  {
    num: "04",
    title:
      "Developing an active and capable youth volunteer network through participation, leadership development, training, teamwork, and community service.",
    explanation:
      "We aim to create an environment where young people can participate actively, develop leadership and practical skills, work as a team, receive meaningful training, and gain experience through community service.",
  },
  {
    num: "05",
    title:
      "Cultivating a culture of love, compassion, empathy, and humanity through collective and sustainable social action.",
    explanation:
      "We strive to turn these values into meaningful action by working collectively and sustainably to create positive change in the lives of people and within society.",
  },
];

// 1.5 Seven Modes of Action from Document
export const MODES_OF_ACTION: ModeOfAction[] = [
  {
    num: "1",
    title: "Raising awareness",
    bengali: "সচেতনতা বৃদ্ধি",
    summary:
      "CRC raises awareness to help individuals and communities recognize social issues, understand their responsibilities, and respond positively to the needs of children and vulnerable communities.",
    details:
      "Awareness may take the form of campaigns, educational programs, community outreach, public communication, and other appropriate initiatives addressing children's rights, education, health, social responsibility, and humanitarian concerns.",
    icon: Megaphone,
  },
  {
    num: "2",
    title: "Engaging people",
    bengali: "মানুষের সম্পৃক্ততা",
    summary:
      "CRC seeks to involve individuals, particularly young people, in addressing social needs and contributing to community development.",
    details:
      "This may include mobilizing students, volunteers, alumni, and community members to contribute their time, knowledge, skills, ideas, and resources. Through meaningful participation, CRC creates opportunities for individuals to move beyond awareness and contribute directly to social action.",
    icon: Users,
  },
  {
    num: "3",
    title: "Collaboration",
    bengali: "সহযোগিতা ও অংশীদারিত্ব",
    summary:
      "CRC works with individuals, institutions, organizations, and communities whose knowledge, resources, expertise, or position can contribute to addressing a social need or achieving a common objective.",
    details:
      "Where additional support is required, CRC may seek assistance from relevant stakeholders, including educational institutions, professionals, social organizations, donors, community groups, and other appropriate partners. Such support may involve technical expertise, financial or material resources, professional services, volunteer networks, or other forms of assistance.",
    icon: Handshake,
  },
  {
    num: "4",
    title: "Advocacy",
    bengali: "অ্যাডভোকেসি ও সংলাপ",
    summary:
      "CRC may engage with authorities and other responsible stakeholders when a social issue requires action beyond the organization's own capacity.",
    details:
      "Through constructive dialogue, evidence, awareness, community engagement, and responsible communication, CRC encourages those responsible to recognize and fulfill their obligations toward children and vulnerable communities. CRC does not seek to replace the responsibilities of competent authorities, but to encourage, support, and contribute to their fulfillment.",
    icon: Building2,
  },
  {
    num: "5",
    title: "Persuasion",
    bengali: "পরামর্শ ও অনুপ্রেরণা",
    summary:
      "Where a member holding a position of responsibility does not fulfill the duties or responsibilities assigned to that position, CRC may seek to encourage the member to take appropriate action through respectful, bilateral dialogue.",
    details:
      "Persuasion should first seek to understand the reasons for the failure to perform the responsibility and to encourage the member to address the matter voluntarily. Such dialogue should remain respectful and confidential, where appropriate, and focus on the responsibilities of the position rather than on the individual.",
    icon: HelpCircle,
  },
  {
    num: "6",
    title: "Providing direct support",
    bengali: "সরাসরি সহায়তা প্রদান",
    summary:
      "Where children or communities face needs that require immediate assistance, and where CRC has the capacity to respond, the organization may provide direct support.",
    details:
      "Such support may include educational assistance, healthcare initiatives, food and clothing distribution, humanitarian relief, and other welfare activities. Programs such as Hatekhori School, health campaigns, Eid and winter clothing distribution, Iftar programs, and relief initiatives form part of this approach.",
    icon: BookOpen,
  },
  {
    num: "7",
    title: "Safeguarding",
    bengali: "শিশু ও সুবিধাবঞ্চিতদের সুরক্ষা",
    summary:
      "CRC places the dignity, safety, privacy, rights, and best interests of the people it serves at the center of its actions.",
    details:
      "Particular care is required when working with children and vulnerable individuals. CRC therefore takes appropriate measures in the collection and use of personal information and photographs, the conduct of activities, the provision of assistance, and interactions with beneficiaries, ensuring that its actions do not expose them to unnecessary harm, exploitation, discrimination, or loss of dignity.",
    icon: Shield,
  },
];

// 1.6 Achievements from Document
export const ACHIEVEMENTS = {
  title: "Best Branch Prize",
  badge: "Official Recognition",
  nomination:
    "“CRC GSTU Branch has been nominated for the Best Branch recognition in appreciation of its active participation, impactful initiatives, and continued commitment to serving children and the community.”",
  highlights: [
    {
      metric: "2016",
      label: "First Branch Established",
      detail: "Founded simultaneously with CRC Foundation on 5 June 2016.",
    },
    {
      metric: "2017",
      label: "Hatekhori Free School",
      detail: "First institutional educational initiative of CRC.",
    },
    {
      metric: "350+",
      label: "Student Volunteers",
      detail: "Active university student mentors giving voluntary service.",
    },
    {
      metric: "1,200+",
      label: "Children Empowered",
      detail: "Provided education, clothes, health care, and nutrition.",
    },
  ],
};

// Milestone Timeline (Section 3.1 & 1.6)
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
