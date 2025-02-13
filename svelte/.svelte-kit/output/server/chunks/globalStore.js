import { r as readable, w as writable } from "./index2.js";
const defaultItemsPerPage = readable(36);
const searchActive = writable(false);
const isLargeQuery = writable(false);
export {
  defaultItemsPerPage as d,
  isLargeQuery as i,
  searchActive as s
};
