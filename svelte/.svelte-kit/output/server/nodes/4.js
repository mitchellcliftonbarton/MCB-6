import * as universal from '../entries/pages/wip/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/wip/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/wip/+page.js";
export const imports = ["_app/immutable/nodes/4.Dr_tg3Nf.js","_app/immutable/chunks/WipGrid.iMlKs7Wd.js","_app/immutable/chunks/globalStore.B6N8OPHQ.js","_app/immutable/chunks/index.Bh_7T8ID.js","_app/immutable/chunks/scheduler.DaRbBg4G.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/control.lsnNd6o-.js","_app/immutable/chunks/entry.BkTQpsGg.js","_app/immutable/chunks/WipGridItem.BMmQTYcV.js","_app/immutable/chunks/format.BS2q7Gxc.js","_app/immutable/chunks/SearchIcon.DiK98R3h.js"];
export const stylesheets = ["_app/immutable/assets/WipGrid.CUD_zGCB.css","_app/immutable/assets/WipGridItem.D9BbV_4A.css"];
export const fonts = [];
