import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as PageHero, i as Header, n as Card, o as Section, r as Footer } from "./Page-D-ye9995.mjs";
import { t as crc_banner_default } from "./crc-banner-CY90sJgE.mjs";
import { n as health_default, r as school_default, t as campaign_default } from "./health-5WR_AUYE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/media-CmQV1Cod.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PHOTOS = [
	{
		src: school_default,
		cat: "School classes",
		caption: "Outdoor class at the bus stand"
	},
	{
		src: campaign_default,
		cat: "Campaigns",
		caption: "Winter clothes distribution"
	},
	{
		src: health_default,
		cat: "Events",
		caption: "Mothers' nutrition awareness session"
	},
	{
		src: school_default,
		cat: "School classes",
		caption: "Reading circle, Class 2"
	},
	{
		src: campaign_default,
		cat: "Campaigns",
		caption: "Eid food packs for families"
	},
	{
		src: health_default,
		cat: "Events",
		caption: "Community meeting in the village programme"
	}
];
var CATS = [
	"All",
	"Events",
	"School classes",
	"Campaigns"
];
function Media() {
	const [cat, setCat] = (0, import_react.useState)("All");
	const shown = cat === "All" ? PHOTOS : PHOTOS.filter((p) => p.cat === cat);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				eyebrow: "Media & Gallery",
				title: "Our work, in pictures",
				intro: "Photos and videos from classes, campaigns and community events — plus press coverage of CRC."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				eyebrow: "Photo gallery",
				title: "Browse by category",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-8 flex flex-wrap gap-2",
					children: CATS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setCat(c),
						className: `px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-colors ${cat === c ? "bg-brand text-brand-foreground" : "border border-border hover:border-brand"}`,
						children: c
					}, c))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: shown.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "group border border-border overflow-hidden transition-all duration-200 hover:shadow-md bg-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.src,
								alt: p.caption,
								width: 1280,
								height: 854,
								loading: "lazy",
								className: "h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
							className: "p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-semibold tracking-[0.18em] text-brand uppercase",
								children: p.cat
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: p.caption
							})]
						})]
					}, i))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				tone: "ink",
				eyebrow: "Video gallery",
				title: "Watch CRC in action",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6 md:grid-cols-2 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-video w-full overflow-hidden shadow-md",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							className: "size-full border border-ink-foreground/20",
							src: "https://www.youtube.com/embed/videoseries?list=PLFgquLnL59alCl_2TQvOiD5Vgm1hCaGSI",
							title: "CRC video playlist",
							loading: "lazy",
							allowFullScreen: true
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4 text-ink-foreground/80",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Facebook Live sessions and YouTube documentaries about our classes, campaigns and annual events are collected here. Send us a link and we will embed it." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://facebook.com",
							className: "inline-block bg-brand px-5 py-3 font-display text-sm text-brand-foreground transition-colors duration-200 hover:bg-brand-deep",
							children: "Visit our Facebook page"
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				tone: "sand",
				eyebrow: "Press",
				title: "News coverage",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6 md:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
							title: "Local daily — 2024",
							children: "Feature on the Hatekhori school and its student teachers."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
							title: "Campus magazine — 2023",
							accent: "leaf",
							children: "Interview with the founding members on CRC's first seven years."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
							title: "Television report — 2022",
							accent: "ink",
							children: "Coverage of the winter clothes campaign in Gopalganj."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-sm text-muted-foreground",
					children: "Share article links with us and we will publish them with full citations."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				eyebrow: "Brand",
				title: "Our identity",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden border border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: crc_banner_default,
						alt: "CRC, GSTU official banner",
						width: 1920,
						height: 960,
						loading: "lazy",
						className: "w-full"
					})
				})
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
//#endregion
export { Media as component };
