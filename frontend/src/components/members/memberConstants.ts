export const CATEGORIES = [
  { label: "All Members", value: "All" },
  { label: "Executive Body", value: "Executive" },
  { label: "Volunteer Teachers", value: "Volunteer" },
  { label: "Branch Leads", value: "Branch Lead" },
  { label: "Faculty Advisors", value: "Advisor" },
  { label: "Founding Mentors", value: "Founding" },
];

export const BLOOD_GROUPS = ["All", "A+", "B+", "O+", "AB+", "A-", "O-"];

export const getCategoryColor = (category: string) => {
  switch (category) {
    case "Founding":
      return "bg-red-500/15 text-[#e6000a] border-red-500/30";
    case "Executive":
      return "bg-amber-500/15 text-amber-800 border-amber-500/30";
    case "Volunteer":
      return "bg-emerald-500/15 text-emerald-800 border-emerald-500/30";
    case "Branch Lead":
      return "bg-blue-500/15 text-blue-800 border-blue-500/30";
    case "Advisor":
      return "bg-purple-500/15 text-purple-800 border-purple-500/30";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};
