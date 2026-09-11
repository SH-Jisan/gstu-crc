import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Menu, i as Phone, l as Facebook, n as X, o as MapPin, s as Mail, t as Youtube } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Page-D-ye9995.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NAV = [
	{
		to: "/about",
		label: "About CRC"
	},
	{
		to: "/programs",
		label: "Programs & Activities"
	},
	{
		to: "/school",
		label: "CRC School"
	},
	{
		to: "/branches",
		label: "Branches"
	},
	{
		to: "/members",
		label: "Members"
	},
	{
		to: "/media",
		label: "Media & Gallery"
	},
	{
		to: "/get-involved",
		label: "Get Involved"
	},
	{
		to: "/resources",
		label: "Resources"
	},
	{
		to: "/contact",
		label: "Contact Us"
	}
];
function Header() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "bg-ink text-ink-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-1.5 text-[11px] font-semibold tracking-[0.22em] uppercase",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-brand",
						children: "Estd. 2016"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden gap-6 sm:flex",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Brotherhood" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Commitment" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Trust" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "mailto:crcgstu@gmail.com",
						className: "hover:text-brand",
						children: "crcgstu@gmail.com"
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-b-4 border-brand bg-background/95 backdrop-blur-sm shadow-sm transition-all",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl items-center gap-4 px-4 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "group flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-11 items-center justify-center bg-brand font-display text-lg text-brand-foreground transition-transform duration-300 group-hover:scale-105 group-hover:shadow-md",
							children: "CRC"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "leading-tight",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-display text-base transition-colors duration-200 group-hover:text-brand",
								children: "Come For Road Child"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[11px] font-semibold tracking-[0.18em] text-muted-foreground uppercase",
								children: "GSTU Branch"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "ml-auto hidden items-center gap-1 xl:flex",
						children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: "relative px-2.5 py-2 text-[13px] font-semibold text-foreground transition-all duration-200 hover:text-brand hover:-translate-y-0.5",
							activeProps: { className: "text-brand font-bold" },
							children: item.label
						}, item.to))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/donate",
						className: "ml-auto bg-brand px-5 py-2.5 font-display text-sm tracking-wide text-brand-foreground transition-all duration-300 hover:bg-brand-deep hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 xl:ml-2",
						children: "Donate"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Toggle navigation",
						onClick: () => setOpen((v) => !v),
						className: "p-2 transition-transform active:scale-95 xl:hidden",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-6 transition-transform rotate-90 duration-200" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-6" })
					})
				]
			}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "border-t border-border bg-background px-4 pb-4 xl:hidden animate-in fade-in slide-in-from-top-2 duration-200",
				children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: item.to,
					onClick: () => setOpen(false),
					className: "block border-b border-border py-3 text-sm font-semibold transition-all duration-200 hover:text-brand hover:translate-x-1",
					activeProps: { className: "text-brand font-bold" },
					children: item.label
				}, item.to))
			})]
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-24 bg-ink text-ink-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 bg-brand" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-aos": "fade-up",
						"data-aos-duration": "600",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex size-12 items-center justify-center bg-brand font-display text-lg text-brand-foreground transition-transform duration-300 hover:scale-105 hover:shadow-lg",
								children: "CRC"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 font-display text-lg",
								children: "Come For Road Child"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-ink-foreground/70",
								children: "“পথশিশু মুক্ত পৃথিবী গড়ব একসাথে” — a student-run voluntary organisation working for street children since 2016."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://facebook.com",
										"aria-label": "Facebook",
										className: "flex size-9 items-center justify-center border border-ink-foreground/25 transition-all duration-300 hover:bg-brand hover:border-brand hover:scale-110 hover:-translate-y-0.5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "size-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://youtube.com",
										"aria-label": "YouTube",
										className: "flex size-9 items-center justify-center border border-ink-foreground/25 transition-all duration-300 hover:bg-brand hover:border-brand hover:scale-110 hover:-translate-y-0.5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Youtube, { className: "size-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "mailto:crcgstu@gmail.com",
										"aria-label": "Email",
										className: "flex size-9 items-center justify-center border border-ink-foreground/25 transition-all duration-300 hover:bg-brand hover:border-brand hover:scale-110 hover:-translate-y-0.5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4" })
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-aos": "fade-up",
						"data-aos-duration": "600",
						"data-aos-delay": "100",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xs font-semibold tracking-[0.2em] text-brand uppercase",
							children: "Explore"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-2 text-sm",
							children: NAV.slice(0, 5).map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: i.to,
								className: "inline-block text-ink-foreground/75 transition-all duration-200 hover:text-brand hover:translate-x-1",
								children: i.label
							}) }, i.to))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-aos": "fade-up",
						"data-aos-duration": "600",
						"data-aos-delay": "200",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xs font-semibold tracking-[0.2em] text-brand uppercase",
							children: "Participate"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-4 space-y-2 text-sm",
							children: [NAV.slice(5).map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: i.to,
								className: "inline-block text-ink-foreground/75 transition-all duration-200 hover:text-brand hover:translate-x-1",
								children: i.label
							}) }, i.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/donate",
								className: "inline-block text-ink-foreground/75 transition-all duration-200 hover:text-brand hover:translate-x-1 font-semibold text-brand",
								children: "Donate →"
							}) })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-aos": "fade-up",
						"data-aos-duration": "600",
						"data-aos-delay": "300",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xs font-semibold tracking-[0.2em] text-brand uppercase",
							children: "Head Office"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-4 space-y-3 text-sm text-ink-foreground/75",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-4 shrink-0 text-leaf" }), "Gopalganj Science & Technology University, Gopalganj 8100, Bangladesh"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mt-0.5 size-4 shrink-0 text-leaf" }), "crcgstu@gmail.com"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "mt-0.5 size-4 shrink-0 text-leaf" }), "+880 1XXX-XXXXXX"]
								})
							]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-ink-foreground/12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-ink-foreground/55 sm:flex-row sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Come For Road Child (CRC), GSTU Branch."
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Brotherhood · Commitment · Trust" })]
				})
			})
		]
	});
}
function PageHero({ eyebrow, title, intro }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "slash-band bg-brand text-brand-foreground overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10 mx-auto max-w-7xl px-4 py-16 md:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-[0.28em] uppercase opacity-85",
					children: eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 max-w-3xl text-4xl leading-[1.05] md:text-6xl",
					children: title
				}),
				intro && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-2xl text-base opacity-90 md:text-lg",
					children: intro
				})
			]
		})
	});
}
function Section({ id, eyebrow, title, lead, children, tone = "default" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: `${tone === "sand" ? "bg-sand" : tone === "ink" ? "bg-ink text-ink-foreground" : "bg-background"} scroll-mt-28`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 py-14 md:py-20",
			children: [
				eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-[0.28em] text-brand uppercase",
					children: eyebrow
				}),
				title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 max-w-3xl text-3xl md:text-4xl",
					children: title
				}),
				lead && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: `mt-4 max-w-3xl ${tone === "ink" ? "text-ink-foreground/75" : "text-muted-foreground"}`,
					children: lead
				}),
				children && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10",
					children
				})
			]
		})
	});
}
function Card({ title, children, accent = "brand", delay }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `border border-border border-l-4 bg-card p-6 ${accent === "leaf" ? "border-l-leaf hover:border-l-leaf" : accent === "ink" ? "border-l-ink hover:border-l-ink" : "border-l-brand hover:border-l-brand-deep"} transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "text-lg font-semibold",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 text-sm leading-relaxed text-muted-foreground",
			children
		})]
	});
}
function Bullets({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "space-y-2 text-sm text-muted-foreground",
		children: items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "flex gap-2 transition-colors hover:text-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1.5 shrink-0 bg-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: i })]
		}, i))
	});
}
//#endregion
export { PageHero as a, Header as i, Card as n, Section as o, Footer as r, Bullets as t };
