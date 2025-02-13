import * as universal from '../entries/pages/info/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/info/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/info/+page.js";
export const imports = ["_app/immutable/nodes/3.B-eVTkAp.js","_app/immutable/chunks/scheduler.DaRbBg4G.js","_app/immutable/chunks/index.Bh_7T8ID.js"];
export const stylesheets = [];
export const fonts = [];
