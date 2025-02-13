import * as universal from '../entries/pages/wip/_slug_/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/wip/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/wip/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/5.DwzaAsz7.js","_app/immutable/chunks/client.DNOLrnPx.js","_app/immutable/chunks/index.CgkC8aef.js","_app/immutable/chunks/scheduler.BlFFreo2.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/utils.Ct7lYG3D.js","_app/immutable/chunks/format.BxKBOmgH.js","_app/immutable/chunks/WipGridItem.BqpnS-QL.js"];
export const stylesheets = ["_app/immutable/assets/5.DATQ1vSU.css","_app/immutable/assets/WipGridItem.D9BbV_4A.css"];
export const fonts = [];
