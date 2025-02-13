import * as universal from '../entries/pages/info/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/info/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/info/+page.js";
export const imports = ["_app/immutable/nodes/3.C8lPiKK7.js","_app/immutable/chunks/scheduler.BlFFreo2.js","_app/immutable/chunks/index.CgkC8aef.js"];
export const stylesheets = [];
export const fonts = [];
