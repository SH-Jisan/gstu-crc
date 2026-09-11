import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { o as MapPin } from "../_libs/lucide-react.mjs";
import { a as PageHero, i as Header, n as Card, o as Section, r as Footer, t as Bullets } from "./Page-D-ye9995.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/branches-C9vgM_84.js
var import_jsx_runtime = require_jsx_runtime();
var BRANCHES = [
	{
		name: "GSTU Branch",
		place: "Gopalganj Science & Technology University",
		year: "2016",
		lead: true
	},
	{
		name: "Gopalganj Town",
		place: "Gopalganj Sadar",
		year: "2019"
	},
	{
		name: "Tungipara",
		place: "Tungipara Upazila",
		year: "2021"
	},
	{
		name: "Kotalipara",
		place: "Kotalipara Upazila",
		year: "2022"
	},
	{
		name: "Muksudpur",
		place: "Muksudpur Upazila",
		year: "2023"
	},
	{
		name: "Dhaka Chapter",
		place: "Dhaka Metropolitan",
		year: "2024"
	}
];
function Branches() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				eyebrow: "CRC Branches",
				title: "One organisation, many neighbourhoods",
				intro: "Each branch runs its own classes, committees and reporting under the central committee's charter."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				eyebrow: "Branch list",
				title: "Where CRC works today",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3",
					children: [BRANCHES.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-background p-6 transition-colors duration-200 hover:bg-brand/5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-semibold",
									children: b.name
								}), b.lead && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "bg-brand px-2 py-1 text-[10px] font-semibold tracking-wider text-brand-foreground uppercase",
									children: "Founding"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 flex items-center gap-2 text-sm text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4 text-leaf shrink-0" }),
									" ",
									b.place
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-xs font-semibold tracking-wider text-muted-foreground uppercase",
								children: ["Established ", b.year]
							})
						]
					}, b.name)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center justify-center bg-sand p-6 text-center text-sm font-semibold text-muted-foreground transition-colors hover:bg-brand/10",
						children: "More branches coming — applications open to any campus."
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				tone: "sand",
				eyebrow: "Branch page structure",
				title: "What every branch page contains",
				lead: "A standard structure keeps every branch comparable, auditable and easy to hand over each year.",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6 md:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
							title: "Branch overview",
							children: "Founding date, working area, number of students, class venues and current focus."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
							title: "Executive committee",
							accent: "leaf",
							children: "President, General Secretary, Treasurer, Organising Secretary and departmental secretaries with tenure dates."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
							title: "Permanent committees",
							accent: "ink",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bullets, { items: [
								"Education",
								"Finance & Audit",
								"Membership & Discipline",
								"Media & Publicity"
							] })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
							title: "Branch members",
							children: "Full member directory with ID numbers, joining year and current responsibility."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
							title: "Branch activities",
							accent: "leaf",
							children: "Weekly class logs, campaigns, awareness sessions and community events."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
							title: "Reports & documents",
							accent: "ink",
							children: "Monthly expense reports, annual report, branch policy and meeting resolutions."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				eyebrow: "Open a branch",
				title: "Bring CRC to your campus",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "max-w-3xl text-muted-foreground",
					children: [
						"Any group of students willing to run weekly classes can apply for a branch charter. The central committee reviews the application, assigns a mentor branch and issues the branch policy and document set. Write to",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "mailto:crcgstu@gmail.com",
							className: "font-semibold text-brand hover:underline",
							children: "crcgstu@gmail.com"
						}),
						" ",
						"to start."
					]
				})
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
//#endregion
export { Branches as component };
