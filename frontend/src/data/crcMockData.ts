export interface CouncilMember {
  id: string;
  name: string;
  designation: string;
  councilType: "Permanent" | "Executive" | "Temporary";
  committee: string;
  branch: string;
  tenure: string;
  bloodGroup: string;
  photo: string;
  bio: string;
}

export interface Campaign {
  id: string;
  title: string;
  category: string;
  summary: string;
  targetAmount: number;
  raisedAmount: number;
  donorsCount: number;
  banner: string;
  isEmergency?: boolean;
}

export interface Branch {
  id: string;
  name: string;
  university: string;
  location: string;
  coordinator: string;
  phone: string;
  volunteersCount: number;
  establishedYear: number;
}

export interface Notice {
  id: string;
  title: string;
  date: string;
  category: "Circular" | "Event" | "Audit" | "Recruitment";
  fileSize: string;
}

export const CRC_META = {
  name: "Come for Road Child (CRC)",
  bengaliName: "কাম ফর রোড চাইল্ড (সিআরসি)",
  slogan: "The World Will Be Free from Street Children by Connected Together",
  bengaliSlogan: "পথশিশু মুক্ত বিশ্ব গড়ি, ভালোবাসায় হাত ধরি",
  foundedDate: "5 June 2016",
  founders: ["Md. Rasel Ahmed", "Md. Sakib Ahmed"],
  hotline: "+880 1700-000000",
  email: "contact@gstu-crc.org",
  centralOffice: "Khulna, Bangladesh",
  flagshipBranch: "Gopalganj Science and Technology University (GSTU)",
};

export const MOCK_STATS = [
  { label: "Children in Hatekhori School", value: "520+", icon: "School" },
  { label: "Active Volunteer Network", value: "1,450+", icon: "Users" },
  { label: "University & City Branches", value: "8+", icon: "MapPin" },
  { label: "Winter & Relief Beneficiaries", value: "24,000+", icon: "Heart" },
  { label: "Audit Transparency Rate", value: "100%", icon: "ShieldCheck" },
];

export const MOCK_CAMPAIGNS: Campaign[] = [
  {
    id: "camp-01",
    title: "Hatekhori School Annual Education & Nutrition Fund 2026",
    category: "Child Education",
    summary: "Providing books, uniform, nutritious midday meals, and stationery to 520+ street children studying at CRC Hatekhori free schools.",
    targetAmount: 350000,
    raisedAmount: 268500,
    donorsCount: 142,
    banner: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80",
    isEmergency: true,
  },
  {
    id: "camp-02",
    title: "Winter Warmth Drive: Blankets for Destitute Children",
    category: "Seasonal Relief",
    summary: "Distributing high-grade warm blankets, sweaters, and winter caps across railway stations and vulnerable slums.",
    targetAmount: 180000,
    raisedAmount: 145000,
    donorsCount: 89,
    banner: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "camp-03",
    title: "Healthcare & Free Medical Checkup Camps for Street Children",
    category: "Health & Wellbeing",
    summary: "Routine pediatric checkups, free prescription medicines, hygiene awareness kits, and emergency surgical fund.",
    targetAmount: 200000,
    raisedAmount: 98000,
    donorsCount: 64,
    banner: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80",
  },
];

export const MOCK_COUNCILS: CouncilMember[] = [
  {
    id: "cm-01",
    name: "Md. Rasel Ahmed",
    designation: "Founder & Founding President",
    councilType: "Permanent",
    committee: "Permanent Council / Advisory",
    branch: "Central / GSTU",
    tenure: "Lifetime Founder",
    bloodGroup: "B+",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    bio: "Initiated CRC on Eid 2016 after witnessing street children collecting recyclables at a railway platform, dedicating his life to child welfare.",
  },
  {
    id: "cm-02",
    name: "Md. Sakib Ahmed",
    designation: "Founding President, CRC GSTU Branch",
    councilType: "Permanent",
    committee: "Permanent Council / Coordinator Committee",
    branch: "GSTU Branch",
    tenure: "Founder & Permanent Member",
    bloodGroup: "O+",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    bio: "First-year Management Studies student at GSTU who co-founded the flagship GSTU branch on 5 June 2016 and expanded Hatekhori School.",
  },
  {
    id: "cm-03",
    name: "Tanvir Hasan",
    designation: "Current President",
    councilType: "Executive",
    committee: "Executive Committee (2025-2026)",
    branch: "GSTU Branch",
    tenure: "2025 - 2026",
    bloodGroup: "A+",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    bio: "Leading nationwide university chapter coordination, child rehabilitation programs, and institutional transparency.",
  },
  {
    id: "cm-04",
    name: "Nusrat Jahan",
    designation: "General Secretary",
    councilType: "Executive",
    committee: "Executive Committee (2025-2026)",
    branch: "GSTU Branch",
    tenure: "2025 - 2026",
    bloodGroup: "AB+",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    bio: "Oversees day-to-day administrative operations, volunteer mobilization, and weekly curriculum at Hatekhori School.",
  },
  {
    id: "cm-05",
    name: "Dr. Kazi Mahfuzur Rahman",
    designation: "Chief Advisor",
    councilType: "Permanent",
    committee: "Advisory Committee",
    branch: "Central Committee",
    tenure: "Standing Advisor",
    bloodGroup: "O+",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    bio: "Senior Academician providing strategic governance, ethical oversight, and non-partisan alignment guidance.",
  },
  {
    id: "cm-06",
    name: "Sabbir Hossain",
    designation: "Convener, Internal Audit Committee",
    councilType: "Temporary",
    committee: "Audit & Transparency Council",
    branch: "Central Branch",
    tenure: "Special Mandate (2025-2026)",
    bloodGroup: "B+",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    bio: "Independently reviews all branch expenditures, donor fund allocations, and financial records ensuring zero discrepancies.",
  },
];

export const MOCK_BRANCHES: Branch[] = [
  {
    id: "br-01",
    name: "CRC GSTU Branch (Founding Branch)",
    university: "Gopalganj Science and Technology University",
    location: "Gopalganj, Dhaka Division",
    coordinator: "Md. Sakib Ahmed & Executive Committee",
    phone: "+880 1711-223344",
    volunteersCount: 480,
    establishedYear: 2016,
  },
  {
    id: "br-02",
    name: "CRC Central Branch",
    university: "Khulna Central Secretariat",
    location: "Khulna, Bangladesh",
    coordinator: "Central Executive Council",
    phone: "+880 1722-334455",
    volunteersCount: 320,
    establishedYear: 2017,
  },
  {
    id: "br-03",
    name: "CRC Islamic University Branch",
    university: "Islamic University (IU)",
    location: "Kushtia, Khulna Division",
    coordinator: "IU Campus Volunteer Council",
    phone: "+880 1733-445566",
    volunteersCount: 260,
    establishedYear: 2018,
  },
  {
    id: "br-04",
    name: "CRC University of Barisal Branch",
    university: "University of Barisal (BU)",
    location: "Barisal, Bangladesh",
    coordinator: "BU Regional Secretariat",
    phone: "+880 1744-556677",
    volunteersCount: 210,
    establishedYear: 2019,
  },
  {
    id: "br-05",
    name: "CRC Mawlana Bhashani STU Branch",
    university: "Mawlana Bhashani Science and Technology University (MBSTU)",
    location: "Tangail, Dhaka Division",
    coordinator: "MBSTU Student Council",
    phone: "+880 1755-667788",
    volunteersCount: 180,
    establishedYear: 2020,
  },
];

export const MOCK_NOTICES: Notice[] = [
  {
    id: "not-01",
    title: "Annual External Chartered Accountant Audit Report (FY 2024-2025)",
    date: "August 15, 2025",
    category: "Audit",
    fileSize: "2.4 MB (PDF)",
  },
  {
    id: "not-02",
    title: "CRC Constitution & Code of Conduct: Official Statutory Text",
    date: "June 05, 2025",
    category: "Circular",
    fileSize: "1.8 MB (PDF)",
  },
  {
    id: "not-03",
    title: "Hatekhori School New Academic Batch Enrollment Notice 2026",
    date: "January 10, 2026",
    category: "Event",
    fileSize: "850 KB (PDF)",
  },
  {
    id: "not-04",
    title: "Call for Volunteer Membership Applications (All Campus Chapters)",
    date: "February 01, 2026",
    category: "Recruitment",
    fileSize: "620 KB (PDF)",
  },
];
