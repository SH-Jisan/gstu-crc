import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-xzx3YUFB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-nGLexIoC.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
function AosInit() {
	const pathname = useRouterState()?.location?.pathname ?? "";
	(0, import_react.useEffect)(() => {
		let aosInstance = null;
		import("../_libs/aos.mjs").then((n) => /* @__PURE__ */ __toESM(n.t())).then((module) => {
			const AOS = module.default || module;
			aosInstance = AOS;
			AOS.init({
				duration: 700,
				easing: "ease-out-cubic",
				once: false,
				mirror: true,
				offset: 50,
				delay: 50
			});
			AOS.refresh();
		});
		const handleLoad = () => {
			if (aosInstance) aosInstance.refresh();
		};
		window.addEventListener("load", handleLoad);
		return () => window.removeEventListener("load", handleLoad);
	}, []);
	(0, import_react.useEffect)(() => {
		const timer = setTimeout(() => {
			import("../_libs/aos.mjs").then((n) => /* @__PURE__ */ __toESM(n.t())).then((module) => {
				(module.default || module).refresh();
			});
		}, 150);
		return () => clearTimeout(timer);
	}, [pathname]);
	return null;
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$6 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "CRC, GSTU — Come For Road Child" },
			{
				name: "description",
				content: "Come For Road Child (CRC), GSTU Branch — a student volunteer organisation educating and supporting street children in Bangladesh since 2016."
			},
			{
				name: "author",
				content: "Come For Road Child, GSTU"
			},
			{
				property: "og:title",
				content: "CRC, GSTU — Come For Road Child"
			},
			{
				property: "og:description",
				content: "Educating and protecting street children in Bangladesh since 2016."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Archivo+Black&family=Barlow:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$6.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AosInit, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})]
	});
}
var $$splitComponentImporter$5 = () => import("./routes-CjKq1TyC.mjs");
var Route$5 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "CRC, GSTU — Come For Road Child | Street Children Education" },
		{
			name: "description",
			content: "Come For Road Child (CRC), GSTU Branch educates, feeds and protects street children in Bangladesh. Volunteer, sponsor a child, or donate today."
		},
		{
			property: "og:title",
			content: "CRC, GSTU — Come For Road Child"
		},
		{
			property: "og:description",
			content: "Street children education, nutrition and Hatekhori School since 2016."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./about-YTdZmooP.mjs");
var Route$4 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About CRC — History, Vision & Values | CRC, GSTU" },
		{
			name: "description",
			content: "Who we are: the history, vision, mission, values, leadership and journey of Come For Road Child (CRC), GSTU Branch since 2016."
		},
		{
			property: "og:title",
			content: "About Come For Road Child (CRC), GSTU"
		},
		{
			property: "og:description",
			content: "History, vision, values, leadership and timeline of CRC since 2016."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./branches-C9vgM_84.mjs");
var Route$3 = createFileRoute("/branches")({
	head: () => ({ meta: [
		{ title: "CRC Branches — Committees, Members & Reports | CRC, GSTU" },
		{
			name: "description",
			content: "Explore CRC branches: branch overview, executive and permanent committees, members, activities, reports and documents."
		},
		{
			property: "og:title",
			content: "CRC Branches"
		},
		{
			property: "og:description",
			content: "Branch overviews, committees, activities and reports across CRC."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./media-CmQV1Cod.mjs");
var Route$2 = createFileRoute("/media")({
	head: () => ({ meta: [
		{ title: "Media & Gallery — Photos, Videos & Press | CRC, GSTU" },
		{
			name: "description",
			content: "Photo gallery of CRC events, school classes and campaigns, plus video gallery and press coverage of Come For Road Child, GSTU."
		},
		{
			property: "og:title",
			content: "CRC Media & Gallery"
		},
		{
			property: "og:description",
			content: "Photos, videos and press coverage from CRC events, classes and campaigns."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./programs-zzjDCjxO.mjs");
var Route$1 = createFileRoute("/programs")({
	head: () => ({ meta: [
		{ title: "Programs & Activities — Education, Nutrition, Campaigns | CRC, GSTU" },
		{
			name: "description",
			content: "CRC programs: street children education, nutrition and health support, Hatekhori school support, winter clothes and food campaigns, awareness and community engagement."
		},
		{
			property: "og:title",
			content: "CRC Programs & Activities"
		},
		{
			property: "og:description",
			content: "Education, nutrition, campaigns, awareness and community programmes run by CRC."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./school-B_Wv9mhb.mjs");
var Route = createFileRoute("/school")({
	head: () => ({ meta: [
		{ title: "Hatekhori — CRC School for Street Children | CRC, GSTU" },
		{
			name: "description",
			content: "Hatekhori is CRC's school for street children: pre-primary to Class 8, activity-based weekly plans, university student teachers, exams, results and free admission."
		},
		{
			property: "og:title",
			content: "CRC School — Hatekhori"
		},
		{
			property: "og:description",
			content: "Pre-primary to Class 8 free schooling for street children, taught by students."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$5.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$6
	}),
	AboutRoute: Route$4.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$6
	}),
	BranchesRoute: Route$3.update({
		id: "/branches",
		path: "/branches",
		getParentRoute: () => Route$6
	}),
	MediaRoute: Route$2.update({
		id: "/media",
		path: "/media",
		getParentRoute: () => Route$6
	}),
	ProgramsRoute: Route$1.update({
		id: "/programs",
		path: "/programs",
		getParentRoute: () => Route$6
	}),
	SchoolRoute: Route.update({
		id: "/school",
		path: "/school",
		getParentRoute: () => Route$6
	})
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
