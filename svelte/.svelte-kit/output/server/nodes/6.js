import * as universal from '../entries/pages/wip/search/_page.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/wip/search/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/wip/search/+page.js";
export const imports = ["_app/immutable/nodes/6.DRCUnj0e.js","_app/immutable/chunks/WipGrid.C6P4EH5C.js","_app/immutable/chunks/client.DNOLrnPx.js","_app/immutable/chunks/index.CgkC8aef.js","_app/immutable/chunks/scheduler.BlFFreo2.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/entry.Cxr5xxn8.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/globalStore.I_8C8FRG.js","_app/immutable/chunks/WipGridItem.BqpnS-QL.js","_app/immutable/chunks/format.BxKBOmgH.js","_app/immutable/chunks/SearchIcon.o9jgdQ7b.js"];
export const stylesheets = ["_app/immutable/assets/WipGrid.DS43BQsm.css","_app/immutable/assets/WipGridItem.D9BbV_4A.css"];
export const fonts = [];
