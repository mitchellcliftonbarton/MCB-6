import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.rVV1NTPN.js","_app/immutable/chunks/client.DNOLrnPx.js","_app/immutable/chunks/index.CgkC8aef.js","_app/immutable/chunks/scheduler.BlFFreo2.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/RightArrow.Cj-AaLAp.js","_app/immutable/chunks/entry.Cxr5xxn8.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/globalStore.I_8C8FRG.js","_app/immutable/chunks/SearchIcon.o9jgdQ7b.js","_app/immutable/chunks/format.BxKBOmgH.js"];
export const stylesheets = ["_app/immutable/assets/0.5URe5uJE.css"];
export const fonts = [];
