import { c as create_ssr_component } from "../../chunks/ssr.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-f03n2_START -->${$$result.title = `<title>Mitchell Barton | 404</title>`, ""}<!-- HEAD_svelte-f03n2_END -->`, ""} <div class="mt-40" data-svelte-h="svelte-qum06t"><h1>404</h1> <p>The page you are looking for does not exist.</p> <a href="/" class="text-red">Go back to the home page</a></div>`;
});
export {
  Error as default
};
