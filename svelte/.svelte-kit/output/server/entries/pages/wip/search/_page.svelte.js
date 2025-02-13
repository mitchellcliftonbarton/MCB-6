import { c as create_ssr_component, e as escape, v as validate_component } from "../../../../chunks/ssr.js";
import { W as WipGrid } from "../../../../chunks/WipGrid.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { term, wipData } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-5iiiys_START -->${$$result.title = `<title>Mitchell Barton | WIP | Search results for: “${escape(term)}”</title>`, ""}<!-- HEAD_svelte-5iiiys_END -->`, ""} ${validate_component(WipGrid, "WipGrid").$$render(
    $$result,
    {
      data: wipData,
      term,
      basePath: "/wip/search?term=" + term
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};
