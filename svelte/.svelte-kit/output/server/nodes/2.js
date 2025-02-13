import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.Db_6llw1.js","_app/immutable/chunks/client.DNOLrnPx.js","_app/immutable/chunks/index.CgkC8aef.js","_app/immutable/chunks/scheduler.BlFFreo2.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/entry.Cxr5xxn8.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/RightArrow.Cj-AaLAp.js","_app/immutable/chunks/utils.Ct7lYG3D.js","_app/immutable/chunks/globalStore.I_8C8FRG.js"];
export const stylesheets = ["_app/immutable/assets/2.DhCfBy13.css"];
export const fonts = [];
