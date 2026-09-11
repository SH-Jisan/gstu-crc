globalThis.__nitro_main__ = import.meta.url;
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/about-BpcCmNbP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"16c0-SlNkqiwr7eyxfIKzzTSoudW1Ibc\"",
		"mtime": "2026-09-09T18:08:20.393Z",
		"size": 5824,
		"path": "../public/assets/about-BpcCmNbP.js"
	},
	"/assets/aos-Fa0kVvur.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3819-LpF7SJ8zvyaA+nk97d/4kDEkmqk\"",
		"mtime": "2026-09-09T18:08:20.393Z",
		"size": 14361,
		"path": "../public/assets/aos-Fa0kVvur.js"
	},
	"/assets/branches-BQlJFBrQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e5a-cEfwlkqz54or4lJ5bOgY3IOO4c8\"",
		"mtime": "2026-09-09T18:08:20.393Z",
		"size": 3674,
		"path": "../public/assets/branches-BQlJFBrQ.js"
	},
	"/assets/campaign-Cycb5Nho.jpg": {
		"type": "image/jpeg",
		"etag": "\"26c48-fmx1/q2on+2tuADVDx7Q9+p0IqE\"",
		"mtime": "2026-09-09T18:08:20.398Z",
		"size": 158792,
		"path": "../public/assets/campaign-Cycb5Nho.jpg"
	},
	"/assets/crc-banner-DIENy6BO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"37-E6Te5F6OZPK3texjCwDcVkUPqTE\"",
		"mtime": "2026-09-09T18:08:20.395Z",
		"size": 55,
		"path": "../public/assets/crc-banner-DIENy6BO.js"
	},
	"/assets/health-mlbrYpa1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"83-zmQ5e9e+pM/B0B48hPobtcf3VzA\"",
		"mtime": "2026-09-09T18:08:20.396Z",
		"size": 131,
		"path": "../public/assets/health-mlbrYpa1.js"
	},
	"/assets/health-BQeIQGmt.jpg": {
		"type": "image/jpeg",
		"etag": "\"1a3a9-Qt6Kbo0LZwj7P8eG8pemftaJWJ4\"",
		"mtime": "2026-09-09T18:08:20.399Z",
		"size": 107433,
		"path": "../public/assets/health-BQeIQGmt.jpg"
	},
	"/assets/media-ouQb0gMv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fff-dAK9m/f2cI+IfuwzfVG5g/BNLPY\"",
		"mtime": "2026-09-09T18:08:20.396Z",
		"size": 4095,
		"path": "../public/assets/media-ouQb0gMv.js"
	},
	"/assets/Page-D1etSH87.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2e09-WPMCZ0sxF1U06Z4oBFBjnASpLGo\"",
		"mtime": "2026-09-09T18:08:20.392Z",
		"size": 11785,
		"path": "../public/assets/Page-D1etSH87.js"
	},
	"/assets/programs-Cuw0sL_N.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1412-YkXOlVzYUjR/ThzPixzxoprb1bI\"",
		"mtime": "2026-09-09T18:08:20.397Z",
		"size": 5138,
		"path": "../public/assets/programs-Cuw0sL_N.js"
	},
	"/assets/rolldown-runtime-CbXtAM7H.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"24d-+aXgvbJ1Wwcp2A8AXKIBByksYC8\"",
		"mtime": "2026-09-09T18:08:20.397Z",
		"size": 589,
		"path": "../public/assets/rolldown-runtime-CbXtAM7H.js"
	},
	"/assets/school-E3v7uQfE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13dc-uxIJEhwZvXbzjv94d+Id6/nwW+c\"",
		"mtime": "2026-09-09T18:08:20.397Z",
		"size": 5084,
		"path": "../public/assets/school-E3v7uQfE.js"
	},
	"/assets/routes-TvoYjeHN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"231e-Ui++hPg302pd1LiJiun7AbxYx04\"",
		"mtime": "2026-09-09T18:08:20.397Z",
		"size": 8990,
		"path": "../public/assets/routes-TvoYjeHN.js"
	},
	"/assets/crc-banner-CcLqJjgM.png": {
		"type": "image/png",
		"etag": "\"4fd3c-XTIhyWbzPhzyajBNU6zWecQIsKs\"",
		"mtime": "2026-09-09T18:08:20.398Z",
		"size": 326972,
		"path": "../public/assets/crc-banner-CcLqJjgM.png"
	},
	"/assets/styles-nGLexIoC.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1abf8-Kas5yzlqOSsUmVympQLQCpDP5gs\"",
		"mtime": "2026-09-09T18:08:20.399Z",
		"size": 109560,
		"path": "../public/assets/styles-nGLexIoC.css"
	},
	"/assets/school-vw6rm2QF.jpg": {
		"type": "image/jpeg",
		"etag": "\"23a92-fesdy0qdKLTRStkgMZB5qJfv4ec\"",
		"mtime": "2026-09-09T18:08:20.399Z",
		"size": 146066,
		"path": "../public/assets/school-vw6rm2QF.jpg"
	},
	"/assets/index-Cd04KLT2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5d2e2-+e5TV5eNSvvkd8KPkQkbnQA2xfw\"",
		"mtime": "2026-09-09T18:08:20.391Z",
		"size": 381666,
		"path": "../public/assets/index-Cd04KLT2.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_9ARqWJ = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_9ARqWJ
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
