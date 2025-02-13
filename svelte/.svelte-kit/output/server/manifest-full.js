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
		client: {"start":"_app/immutable/entry/start.SeFwDIyI.js","app":"_app/immutable/entry/app.RX_jeD4l.js","imports":["_app/immutable/entry/start.SeFwDIyI.js","_app/immutable/chunks/entry.Cxr5xxn8.js","_app/immutable/chunks/scheduler.BlFFreo2.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/entry/app.RX_jeD4l.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/scheduler.BlFFreo2.js","_app/immutable/chunks/index.CgkC8aef.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
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
				id: "/info",
				pattern: /^\/info\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/wip",
				pattern: /^\/wip\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/wip/search",
				pattern: /^\/wip\/search\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/wip/[slug]",
				pattern: /^\/wip\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
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
