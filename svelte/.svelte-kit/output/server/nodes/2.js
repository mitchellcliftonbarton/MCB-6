import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.BGH7xYf_.js","_app/immutable/chunks/globalStore.B6N8OPHQ.js","_app/immutable/chunks/index.Bh_7T8ID.js","_app/immutable/chunks/scheduler.DaRbBg4G.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/control.lsnNd6o-.js","_app/immutable/chunks/entry.BkTQpsGg.js","_app/immutable/chunks/RightArrow.C0et9zsm.js","_app/immutable/chunks/utils.uOkkGDQR.js"];
export const stylesheets = ["_app/immutable/assets/2.DhCfBy13.css"];
export const fonts = [];
