import * as universal from '../entries/pages/wip/_slug_/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/wip/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/wip/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/5.BDG-L1TF.js","_app/immutable/chunks/globalStore.B6N8OPHQ.js","_app/immutable/chunks/index.Bh_7T8ID.js","_app/immutable/chunks/scheduler.DaRbBg4G.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/control.lsnNd6o-.js","_app/immutable/chunks/utils.uOkkGDQR.js","_app/immutable/chunks/format.BS2q7Gxc.js","_app/immutable/chunks/WipGridItem.BMmQTYcV.js","_app/immutable/chunks/NavOptionsDropdown.C0qjmeWp.js"];
export const stylesheets = ["_app/immutable/assets/5.oP2rbeky.css","_app/immutable/assets/WipGridItem.D9BbV_4A.css","_app/immutable/assets/NavOptionsDropdown.BKFW3-kn.css"];
export const fonts = [];
