export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt","web-77Sans-Regular.woff2"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain",".woff2":"font/woff2"},
	_: {
		client: {"start":"_app/immutable/entry/start.BGZ0otow.js","app":"_app/immutable/entry/app.BKCsDr4J.js","imports":["_app/immutable/entry/start.BGZ0otow.js","_app/immutable/chunks/entry.BkTQpsGg.js","_app/immutable/chunks/scheduler.DaRbBg4G.js","_app/immutable/chunks/control.lsnNd6o-.js","_app/immutable/entry/app.BKCsDr4J.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/scheduler.DaRbBg4G.js","_app/immutable/chunks/index.Bh_7T8ID.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/search",
				pattern: /^\/api\/search\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/search/_server.js'))
			},
			{
				id: "/api/subscribe-user",
				pattern: /^\/api\/subscribe-user\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/subscribe-user/_server.js'))
			},
			{
				id: "/api/wip",
				pattern: /^\/api\/wip\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/wip/_server.js'))
			},
			{
				id: "/wip",
				pattern: /^\/wip\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/wip/search",
				pattern: /^\/wip\/search\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/wip/[slug]",
				pattern: /^\/wip\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
