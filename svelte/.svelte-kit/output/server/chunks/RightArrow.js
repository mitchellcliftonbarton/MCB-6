import { c as create_ssr_component } from "./ssr.js";
const LeftArrow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg class="left-arrow" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg" vector-effect="non-scaling-stroke"><path d="M1 3.5H6.5" stroke="currentColor" stroke-width=".4"></path><path d="M5 1L1 3.5L5 6" stroke="currentColor" stroke-width=".4"></path></svg>`;
});
const RightArrow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg class="right-arrow-icon" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg" vector-effect="non-scaling-stroke"><path d="M5.5 3.5L0 3.5" stroke="currentColor" stroke-width=".4"></path><path d="M1.5 6L5.5 3.5L1.5 1" stroke="currentColor" stroke-width=".4"></path></svg>`;
});
export {
  LeftArrow as L,
  RightArrow as R
};
