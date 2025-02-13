import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { W as WipGrid } from "../../../chunks/WipGrid.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1qmwnl2_START -->${$$result.title = `<title>Mitchell Barton | WIP</title>`, ""}<!-- HEAD_svelte-1qmwnl2_END -->`, ""} ${validate_component(WipGrid, "WipGrid").$$render($$result, { data }, {}, {})}`;
});
export {
  Page as default
};
