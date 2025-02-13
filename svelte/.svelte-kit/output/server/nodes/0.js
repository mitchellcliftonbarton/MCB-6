import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.wy5BWCIZ.js","_app/immutable/chunks/globalStore.B6N8OPHQ.js","_app/immutable/chunks/index.Bh_7T8ID.js","_app/immutable/chunks/scheduler.DaRbBg4G.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/control.lsnNd6o-.js","_app/immutable/chunks/RightArrow.C0et9zsm.js","_app/immutable/chunks/entry.BkTQpsGg.js","_app/immutable/chunks/NavOptionsDropdown.C0qjmeWp.js","_app/immutable/chunks/SearchIcon.DiK98R3h.js","_app/immutable/chunks/format.BS2q7Gxc.js"];
export const stylesheets = ["_app/immutable/assets/0.tMDJlT1r.css","_app/immutable/assets/NavOptionsDropdown.BKFW3-kn.css"];
export const fonts = [];
