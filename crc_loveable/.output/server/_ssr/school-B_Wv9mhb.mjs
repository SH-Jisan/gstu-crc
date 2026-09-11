import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as PageHero, i as Header, n as Card, o as Section, r as Footer, t as Bullets } from "./Page-D-ye9995.mjs";
import { n as health_default, r as school_default, t as campaign_default } from "./health-5WR_AUYE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/school-B_Wv9mhb.js
var import_jsx_runtime = require_jsx_runtime();
var CLASSES = [
	[
		"Pre-primary",
		"Ages 4–6",
		"Alphabet, numbers 1–50, colours, songs, free play"
	],
	[
		"Class 1–2",
		"Ages 6–8",
		"Bangla & English reading, addition/subtraction, drawing"
	],
	[
		"Class 3–5",
		"Ages 8–11",
		"Grammar, multiplication/division, science basics, hygiene"
	],
	[
		"Class 6–8",
		"Ages 11–14",
		"Full subject set, exam preparation, life-skills and career talks"
	]
];
var TIMETABLE = [
	[
		"Saturday",
		"Bangla",
		"Mathematics",
		"Drawing"
	],
	[
		"Sunday",
		"English",
		"Science",
		"Play"
	],
	[
		"Monday",
		"Mathematics",
		"Bangla",
		"Hygiene"
	],
	[
		"Tuesday",
		"English",
		"Social studies",
		"Songs"
	],
	[
		"Wednesday",
		"Revision",
		"Mathematics",
		"Sports"
	],
	[
		"Thursday",
		"Moral story",
		"Group discussion",
		"Cultural"
	]
];
function School() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				eyebrow: "CRC School",
				title: "Hatekhori — the first letters",
				intro: "A free school for children who have never held a pencil. Pre-primary to Class 8, taught entirely by university student volunteers."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				eyebrow: "About",
				title: "What Hatekhori is",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid items-center gap-8 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground",
						children: "“Hatekhori” is the Bangla word for a child's very first writing lesson. Our school carries that name because most of our students arrive with no schooling at all. There are no fees, no uniforms to buy and no admission tests — books, slates, snacks and hygiene kits are provided by CRC. Children who reach Class 5 level are supported to transfer into government primary schools while staying in our after-school programme."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: school_default,
							alt: "Hatekhori class in session",
							width: 1280,
							height: 854,
							loading: "lazy",
							className: "w-full object-cover"
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				tone: "sand",
				eyebrow: "Class categories",
				title: "Pre-primary to Class 8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-px bg-border md:grid-cols-4",
					children: CLASSES.map(([name, age, focus]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-background p-6 transition-colors duration-200 hover:bg-brand/5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-brand",
								children: name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs font-semibold tracking-wide text-muted-foreground uppercase",
								children: age
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted-foreground",
								children: focus
							})
						]
					}, name))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				eyebrow: "Teaching model",
				title: "University students as teachers",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bullets, { items: [
						"Each teacher commits to a minimum of two class days per week for one semester",
						"New volunteers shadow a senior teacher for two weeks before leading a class",
						"Lesson plans are activity-based and prepared a week in advance",
						"A class monitor records attendance and reports absent children for home visits"
					] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto border border-border shadow-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-left text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "bg-ink text-ink-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "p-3 font-display text-xs tracking-wider uppercase",
										children: "Day"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "p-3 font-display text-xs tracking-wider uppercase",
										children: "Period 1"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "p-3 font-display text-xs tracking-wider uppercase",
										children: "Period 2"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "p-3 font-display text-xs tracking-wider uppercase",
										children: "Period 3"
									})
								] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: TIMETABLE.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
								className: "border-t border-border transition-colors hover:bg-brand/5",
								children: row.map((cell, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: `p-3 ${i === 0 ? "font-semibold text-foreground" : "text-muted-foreground"}`,
									children: cell
								}, cell + i))
							}, row[0])) })]
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				tone: "ink",
				eyebrow: "Student gallery",
				title: "Life inside the classroom",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 md:grid-cols-3",
					children: [
						school_default,
						campaign_default,
						health_default
					].map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden border border-ink-foreground/20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src,
							alt: `Hatekhori school moment ${i + 1}`,
							width: 1280,
							height: 854,
							loading: "lazy",
							className: "h-56 w-full object-cover"
						})
					}, i))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				tone: "sand",
				eyebrow: "Assessment & entry",
				title: "Exams, results and admission",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6 md:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
							title: "Exams",
							children: "Three assessments a year — first term, half-yearly and annual — plus continuous classroom evaluation."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
							title: "Results",
							accent: "leaf",
							children: "Result sheets are read out at the parents meeting and handed to guardians with a progress comment."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
							title: "Admission & enrolment",
							accent: "ink",
							children: "Open all year. A guardian visits the branch office with the child; volunteers complete a short enrolment form and home survey. Admission is free."
						})
					]
				})
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
//#endregion
export { School as component };
