import { s as subscribe, n as null_to_empty } from "../../chunks/utils.js";
import { g as getContext, c as create_ssr_component, a as add_attribute, b as add_classes, e as escape, v as validate_component, d as each, f as createEventDispatcher } from "../../chunks/ssr.js";
import "../../chunks/client2.js";
import { s as searchActive, d as defaultItemsPerPage, i as isLargeQuery } from "../../chunks/globalStore.js";
import { L as LeftArrow, R as RightArrow } from "../../chunks/RightArrow.js";
import { S as SearchIcon } from "../../chunks/SearchIcon.js";
import { I as Image, V as VideoPreview, P as Play } from "../../chunks/Play.js";
import { format } from "date-fns";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const MainNavLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let active;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { link } = $$props;
  function isActive(path) {
    if (link.path === "/wip") {
      return path.includes(link.path);
    }
    return path === link.path;
  }
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  active = isActive($page.url.pathname);
  $$unsubscribe_page();
  return `<a${add_attribute("href", link.path, 0)}${add_classes((active ? "active" : "").trim())}>${escape(link.name)}</a>`;
});
const css$5 = {
  code: ".wip-controls.svelte-685vsh svg{width:2rem}",
  map: '{"version":3,"file":"WipDetailControls.svelte","sources":["WipDetailControls.svelte"],"sourcesContent":["<script>\\n\\timport LeftArrow from \'$lib/components/LeftArrow.svelte\';\\n\\timport RightArrow from \'$lib/components/RightArrow.svelte\';\\n\\n\\t// props\\n\\texport let wipDetail;\\n<\/script>\\n\\n<div class=\\"wip-controls col-span-6 lg:col-span-4 flex justify-center enter-in-1\\">\\n\\t<a\\n\\t\\thref={`/wip/${wipDetail.previousItem ? wipDetail.previousItem.slug.current : wipDetail.lastItem.slug.current}`}\\n\\t\\tclass=\\"order-2 lg:order-1\\"\\n\\t>\\n\\t\\t<LeftArrow />\\n\\t</a>\\n\\n\\t<div class=\\"order-1 lg:order-2 lg:px-20\\">\\n\\t\\t<p>\\n\\t\\t\\t{wipDetail.currentIndex} of {wipDetail.totalCount}\\n\\t\\t</p>\\n\\t</div>\\n\\n\\t{#if wipDetail.nextItem}\\n\\t\\t<a\\n\\t\\t\\thref={`/wip/${wipDetail.nextItem ? wipDetail.nextItem.slug.current : wipDetail.firstItem.slug.current}`}\\n\\t\\t\\tclass=\\"order-3\\"\\n\\t\\t>\\n\\t\\t\\t<RightArrow />\\n\\t\\t</a>\\n\\t{/if}\\n</div>\\n\\n<style>\\n\\t.wip-controls :global(svg) {\\n\\t\\twidth: 2rem;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAiCC,2BAAa,CAAS,GAAK,CAC1B,KAAK,CAAE,IACR"}'
};
const WipDetailControls = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { wipDetail } = $$props;
  if ($$props.wipDetail === void 0 && $$bindings.wipDetail && wipDetail !== void 0)
    $$bindings.wipDetail(wipDetail);
  $$result.css.add(css$5);
  return `<div class="wip-controls col-span-6 lg:col-span-4 flex justify-center enter-in-1 svelte-685vsh"><a${add_attribute(
    "href",
    `/wip/${wipDetail.previousItem ? wipDetail.previousItem.slug.current : wipDetail.lastItem.slug.current}`,
    0
  )} class="order-2 lg:order-1">${validate_component(LeftArrow, "LeftArrow").$$render($$result, {}, {}, {})}</a> <div class="order-1 lg:order-2 lg:px-20"><p>${escape(wipDetail.currentIndex)} of ${escape(wipDetail.totalCount)}</p></div> ${wipDetail.nextItem ? `<a${add_attribute(
    "href",
    `/wip/${wipDetail.nextItem ? wipDetail.nextItem.slug.current : wipDetail.firstItem.slug.current}`,
    0
  )} class="order-3">${validate_component(RightArrow, "RightArrow").$$render($$result, {}, {}, {})}</a>` : ``} </div>`;
});
const css$4 = {
  code: ".dropdown-content.svelte-h3n7bm.svelte-h3n7bm{opacity:0;transform:translateY(calc(100% + 15px));border:1px solid black;pointer-events:none;background-color:var(--white);transition:opacity 0.2s,\n			transform 0.2s}.nav-options-dropdown.open.svelte-h3n7bm .dropdown-content.svelte-h3n7bm{opacity:1;transform:translateY(calc(100% + 10px));pointer-events:auto}.dropdown-content.svelte-h3n7bm a.svelte-h3n7bm,.dropdown-content.svelte-h3n7bm button.svelte-h3n7bm{display:block;width:100%;padding:0.6rem 2.5rem;text-align:center;transition:background-color 0.3s;@media screen and (min-width: 1024px) {\n			padding: 1rem 3rem;\n		}}.dropdown-content.svelte-h3n7bm a.svelte-h3n7bm:hover,.dropdown-content.svelte-h3n7bm button.svelte-h3n7bm:hover{background-color:var(--grey-2)}.dropdown-content.svelte-h3n7bm button .search-button-shortcut.svelte-h3n7bm{color:var(--grey-3)}.dropdown-content.svelte-h3n7bm>.svelte-h3n7bm:not(:last-child){border-bottom:1px solid var(--grey-3)}",
  map: `{"version":3,"file":"NavOptionsDropdown.svelte","sources":["NavOptionsDropdown.svelte"],"sourcesContent":["<script>\\n\\timport { searchActive } from '$lib/stores/globalStore';\\n\\timport { onMount } from 'svelte';\\n\\texport let contextWipArchivePage;\\n\\n\\tlet isOpen = false;\\n\\tlet referrer = false;\\n\\n\\tconst openSearch = () => {\\n\\t\\t$searchActive = true;\\n\\t\\tisOpen = false;\\n\\t};\\n\\n\\tconst handleBack = () => {\\n\\t\\twindow.history.back();\\n\\t};\\n\\n\\tonMount(() => {\\n\\t\\t// check if referrer has same domain as current page\\n\\t\\tif (document.referrer.includes(window.location.hostname)) {\\n\\t\\t\\treferrer = true;\\n\\t\\t}\\n\\t});\\n<\/script>\\n\\n<div\\n\\tclass={\`nav-options-dropdown enter-in-1 delay-100 col-span-6 lg:col-span-4 hidden lg:flex justify-end relative \${isOpen ? 'open' : ''}\`}\\n>\\n\\t<button class=\\"dropdown-button\\" on:click={() => (isOpen = !isOpen)}>\\n\\t\\tTools <span class=\\"inline-block w-3\\">{isOpen ? '-' : '+'}</span>\\n\\t</button>\\n\\n\\t<div class=\\"dropdown-content absolute bottom-0 right-0 flex flex-col\\">\\n\\t\\t{#if referrer}\\n\\t\\t\\t<button on:click={handleBack}>Back</button>\\n\\t\\t{:else}\\n\\t\\t\\t<a href={contextWipArchivePage === 1 ? '/wip' : \`/wip?page_num=\${contextWipArchivePage}\`}\\n\\t\\t\\t\\t>Back</a\\n\\t\\t\\t>\\n\\t\\t{/if}\\n\\n\\t\\t<button on:click={openSearch}>\\n\\t\\t\\t<span>Search</span>\\n\\t\\t\\t<span class=\\"search-button-shortcut\\">⌘K</span>\\n\\t\\t</button>\\n\\n\\t\\t<!-- <button>View references/research</button> -->\\n\\t</div>\\n</div>\\n\\n<style>\\n\\t.dropdown-content {\\n\\t\\topacity: 0;\\n\\t\\ttransform: translateY(calc(100% + 15px));\\n\\t\\tborder: 1px solid black;\\n\\t\\tpointer-events: none;\\n\\t\\tbackground-color: var(--white);\\n\\t\\ttransition:\\n\\t\\t\\topacity 0.2s,\\n\\t\\t\\ttransform 0.2s;\\n\\t}\\n\\n\\t.nav-options-dropdown.open .dropdown-content {\\n\\t\\topacity: 1;\\n\\t\\ttransform: translateY(calc(100% + 10px));\\n\\t\\tpointer-events: auto;\\n\\t}\\n\\n\\t.dropdown-content a,\\n\\t.dropdown-content button {\\n\\t\\tdisplay: block;\\n\\t\\twidth: 100%;\\n\\t\\tpadding: 0.6rem 2.5rem;\\n\\t\\ttext-align: center;\\n\\t\\ttransition: background-color 0.3s;\\n\\n\\t\\t@media screen and (min-width: 1024px) {\\n\\t\\t\\tpadding: 1rem 3rem;\\n\\t\\t}\\n\\t}\\n\\n\\t.dropdown-content a:hover,\\n\\t.dropdown-content button:hover {\\n\\t\\tbackground-color: var(--grey-2);\\n\\t}\\n\\n\\t.dropdown-content button .search-button-shortcut {\\n\\t\\tcolor: var(--grey-3);\\n\\t}\\n\\n\\t.dropdown-content > *:not(:last-child) {\\n\\t\\tborder-bottom: 1px solid var(--grey-3);\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAmDC,6CAAkB,CACjB,OAAO,CAAE,CAAC,CACV,SAAS,CAAE,WAAW,KAAK,IAAI,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,CACxC,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CACvB,cAAc,CAAE,IAAI,CACpB,gBAAgB,CAAE,IAAI,OAAO,CAAC,CAC9B,UAAU,CACT,OAAO,CAAC,IAAI,CAAC;AAChB,GAAG,SAAS,CAAC,IACZ,CAEA,qBAAqB,mBAAK,CAAC,+BAAkB,CAC5C,OAAO,CAAE,CAAC,CACV,SAAS,CAAE,WAAW,KAAK,IAAI,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,CACxC,cAAc,CAAE,IACjB,CAEA,+BAAiB,CAAC,eAAC,CACnB,+BAAiB,CAAC,oBAAO,CACxB,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,MAAM,CAAC,MAAM,CACtB,UAAU,CAAE,MAAM,CAClB,UAAU,CAAE,gBAAgB,CAAC,IAAI,CAEjC,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,MAAM,CAAC,CAAC;AACxC,GAAG,SAAS,IAAI,CAAC,IAAI;AACrB,GACC,CAEA,+BAAiB,CAAC,eAAC,MAAM,CACzB,+BAAiB,CAAC,oBAAM,MAAO,CAC9B,gBAAgB,CAAE,IAAI,QAAQ,CAC/B,CAEA,+BAAiB,CAAC,MAAM,CAAC,qCAAwB,CAChD,KAAK,CAAE,IAAI,QAAQ,CACpB,CAEA,+BAAiB,CAAG,cAAC,KAAK,WAAW,CAAE,CACtC,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,QAAQ,CACtC"}`
};
const NavOptionsDropdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_searchActive;
  $$unsubscribe_searchActive = subscribe(searchActive, (value) => value);
  let { contextWipArchivePage } = $$props;
  if ($$props.contextWipArchivePage === void 0 && $$bindings.contextWipArchivePage && contextWipArchivePage !== void 0)
    $$bindings.contextWipArchivePage(contextWipArchivePage);
  $$result.css.add(css$4);
  $$unsubscribe_searchActive();
  return `<div class="${escape(null_to_empty(`nav-options-dropdown enter-in-1 delay-100 col-span-6 lg:col-span-4 hidden lg:flex justify-end relative ${""}`), true) + " svelte-h3n7bm"}"><button class="dropdown-button svelte-h3n7bm">Tools <span class="inline-block w-3">${escape("+")}</span></button> <div class="dropdown-content absolute bottom-0 right-0 flex flex-col svelte-h3n7bm">${`<a${add_attribute(
    "href",
    contextWipArchivePage === 1 ? "/wip" : `/wip?page_num=${contextWipArchivePage}`,
    0
  )} class="svelte-h3n7bm">Back</a>`} <button class="svelte-h3n7bm" data-svelte-h="svelte-gjry6y"><span>Search</span> <span class="search-button-shortcut svelte-h3n7bm">⌘K</span></button> </div> </div>`;
});
const css$3 = {
  code: "header.svelte-16vexa2.svelte-16vexa2{position:fixed;top:0px;left:0px;width:100%;height:var(--nav-height-mobile);z-index:500;@media screen and (min-width: 1024px) {\n			height: var(--nav-height);\n		}}header.svelte-16vexa2 nav li span.svelte-16vexa2{margin-left:-0.3em}header.svelte-16vexa2 nav li.svelte-16vexa2:not(:first-child){margin-left:0.3em}header.svelte-16vexa2 ul li.svelte-16vexa2 a.active{color:var(--primary)}",
  map: `{"version":3,"file":"MainNav.svelte","sources":["MainNav.svelte"],"sourcesContent":["<script>\\n\\timport { page } from '$app/stores';\\n\\timport { defaultItemsPerPage } from '$lib/stores/globalStore';\\n\\timport MainNavLink from './MainNavLink.svelte';\\n\\timport WipDetailControls from './WipDetailControls.svelte';\\n\\timport NavOptionsDropdown from './NavOptionsDropdown.svelte';\\n\\t// define nav links\\n\\tconst navLinks = [\\n\\t\\t{\\n\\t\\t\\tname: 'Info/CV',\\n\\t\\t\\tpath: '/info'\\n\\t\\t},\\n\\t\\t{\\n\\t\\t\\tname: 'WIP',\\n\\t\\t\\tpath: '/wip'\\n\\t\\t}\\n\\t];\\n\\n\\t// get wip data\\n\\t$: wipDetail = $page.data?.wipDetail;\\n\\t$: contextWipArchivePage = wipDetail\\n\\t\\t? Math.floor($page.data.wipDetail.currentIndex / $defaultItemsPerPage) + 1\\n\\t\\t: 1;\\n<\/script>\\n\\n<header\\n\\tclass=\\"w-full px-4 lg:px-base-1/2 py-4 lg:py-base-1/2 grid grid-cols-12 gap-2 lg:gap-base-1/2 items-start lg:items-center\\"\\n>\\n\\t<div class=\\"flex items-center col-span-6 lg:col-span-4\\">\\n\\t\\t<nav class=\\"h-full flex items-center\\">\\n\\t\\t\\t<ul>\\n\\t\\t\\t\\t<div>\\n\\t\\t\\t\\t\\t<li>\\n\\t\\t\\t\\t\\t\\t<MainNavLink link={{ name: 'Mitchell Barton', path: '/' }} />\\n\\t\\t\\t\\t\\t</li>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<div class=\\"flex items-center\\">\\n\\t\\t\\t\\t\\t{#each navLinks as link, index}\\n\\t\\t\\t\\t\\t\\t<li>\\n\\t\\t\\t\\t\\t\\t\\t<MainNavLink {link} />\\n\\t\\t\\t\\t\\t\\t\\t{#if index !== navLinks.length - 1}\\n\\t\\t\\t\\t\\t\\t\\t\\t<span>,</span>\\n\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t</li>\\n\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</ul>\\n\\t\\t</nav>\\n\\t</div>\\n\\n\\t{#if wipDetail}\\n\\t\\t<WipDetailControls {wipDetail} />\\n\\n\\t\\t{#if contextWipArchivePage}\\n\\t\\t\\t<NavOptionsDropdown {contextWipArchivePage} />\\n\\t\\t{/if}\\n\\t{/if}\\n</header>\\n\\n<style lang=\\"postcss\\">\\n\\theader {\\n\\t\\tposition: fixed;\\n\\t\\ttop: 0px;\\n\\t\\tleft: 0px;\\n\\t\\twidth: 100%;\\n\\t\\theight: var(--nav-height-mobile);\\n\\t\\tz-index: 500;\\n\\n\\t\\t@media screen and (min-width: 1024px) {\\n\\t\\t\\theight: var(--nav-height);\\n\\t\\t}\\n\\t}\\n\\n\\theader nav li span {\\n\\t\\tmargin-left: -0.3em;\\n\\t}\\n\\n\\theader nav li:not(:first-child) {\\n\\t\\tmargin-left: 0.3em;\\n\\t}\\n\\n\\theader ul li :global(a.active) {\\n\\t\\tcolor: var(--primary);\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA4DC,oCAAO,CACN,QAAQ,CAAE,KAAK,CACf,GAAG,CAAE,GAAG,CACR,IAAI,CAAE,GAAG,CACT,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,mBAAmB,CAAC,CAChC,OAAO,CAAE,GAAG,CAEZ,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,MAAM,CAAC,CAAC;AACxC,GAAG,QAAQ,IAAI,YAAY,CAAC;AAC5B,GACC,CAEA,qBAAM,CAAC,GAAG,CAAC,EAAE,CAAC,mBAAK,CAClB,WAAW,CAAE,MACd,CAEA,qBAAM,CAAC,GAAG,CAAC,iBAAE,KAAK,YAAY,CAAE,CAC/B,WAAW,CAAE,KACd,CAEA,qBAAM,CAAC,EAAE,CAAC,iBAAE,CAAS,QAAU,CAC9B,KAAK,CAAE,IAAI,SAAS,CACrB"}`
};
const MainNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let wipDetail;
  let contextWipArchivePage;
  let $defaultItemsPerPage, $$unsubscribe_defaultItemsPerPage;
  let $page, $$unsubscribe_page;
  $$unsubscribe_defaultItemsPerPage = subscribe(defaultItemsPerPage, (value) => $defaultItemsPerPage = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const navLinks = [{ name: "Info/CV", path: "/info" }, { name: "WIP", path: "/wip" }];
  $$result.css.add(css$3);
  wipDetail = $page.data?.wipDetail;
  contextWipArchivePage = wipDetail ? Math.floor($page.data.wipDetail.currentIndex / $defaultItemsPerPage) + 1 : 1;
  $$unsubscribe_defaultItemsPerPage();
  $$unsubscribe_page();
  return `<header class="w-full px-4 lg:px-base-1/2 py-4 lg:py-base-1/2 grid grid-cols-12 gap-2 lg:gap-base-1/2 items-start lg:items-center svelte-16vexa2"><div class="flex items-center col-span-6 lg:col-span-4"><nav class="h-full flex items-center"><ul><div><li class="svelte-16vexa2">${validate_component(MainNavLink, "MainNavLink").$$render(
    $$result,
    {
      link: { name: "Mitchell Barton", path: "/" }
    },
    {},
    {}
  )}</li></div> <div class="flex items-center">${each(navLinks, (link, index) => {
    return `<li class="svelte-16vexa2">${validate_component(MainNavLink, "MainNavLink").$$render($$result, { link }, {}, {})} ${index !== navLinks.length - 1 ? `<span class="svelte-16vexa2" data-svelte-h="svelte-a4u4fq">,</span>` : ``} </li>`;
  })}</div></ul></nav></div> ${wipDetail ? `${validate_component(WipDetailControls, "WipDetailControls").$$render($$result, { wipDetail }, {}, {})} ${contextWipArchivePage ? `${validate_component(NavOptionsDropdown, "NavOptionsDropdown").$$render($$result, { contextWipArchivePage }, {}, {})}` : ``}` : ``} </header>`;
});
const css$2 = {
  code: ".search-list-item.svelte-1j3mmbm .play-icon{width:1.2rem;color:var(--primary);margin-top:0.6rem}.search-list-item.svelte-1j3mmbm:hover{background-color:var(--grey-1)}",
  map: `{"version":3,"file":"SearchListItem.svelte","sources":["SearchListItem.svelte"],"sourcesContent":["<script>\\n\\timport Image from '$lib/components/Image.svelte';\\n\\timport VideoPreview from '$lib/components/VideoPreview.svelte';\\n\\timport Play from '$lib/components/Play.svelte';\\n\\timport { format } from 'date-fns';\\n\\n\\t// props\\n\\texport let item;\\n\\n\\t// get first media item\\n\\tconst firstMediaItem = item.media[0];\\n<\/script>\\n\\n<a\\n\\thref={\`/wip/\${item.slug.current}\`}\\n\\tclass=\\"search-list-item grid grid-cols-9 lg:grid-cols-6 gap-4 lg:gap-base-1/2 pt-6 lg:pt-base-1/2 pb-6 lg:pb-base\\"\\n>\\n\\t<div class=\\"col-span-2 pl-4\\">\\n\\t\\t<div class=\\"aspect-[3/4] lg:aspect-[3/2.5]\\">\\n\\t\\t\\t{#if firstMediaItem._type === 'Image' && firstMediaItem.asset}\\n\\t\\t\\t\\t<Image\\n\\t\\t\\t\\t\\timage={firstMediaItem}\\n\\t\\t\\t\\t\\talt={firstMediaItem.alt}\\n\\t\\t\\t\\t\\tclasses=\\"object-contain object-left w-full h-full\\"\\n\\t\\t\\t\\t\\tmaxSize=\\"xs\\"\\n\\t\\t\\t\\t/>\\n\\t\\t\\t{:else if firstMediaItem._type === 'Video' && firstMediaItem.file}\\n\\t\\t\\t\\t<VideoPreview\\n\\t\\t\\t\\t\\tmediaItem={firstMediaItem}\\n\\t\\t\\t\\t\\tclasses=\\"object-contain object-left w-full h-full\\"\\n\\t\\t\\t\\t/>\\n\\t\\t\\t{/if}\\n\\t\\t</div>\\n\\t</div>\\n\\n\\t<div class=\\"col-span-4 lg:col-span-2\\">\\n\\t\\t<h2>{item.title}</h2>\\n\\t</div>\\n\\n\\t<div class=\\"col-span-3 lg:col-span-1 text-right lg:text-left\\">\\n\\t\\t{#if item.date}\\n\\t\\t\\t<p>{format(new Date(item.date), 'MM.dd.yy')}</p>\\n\\t\\t{:else}\\n\\t\\t\\t<p class=\\"text-grey-4\\">N/A</p>\\n\\t\\t{/if}\\n\\t</div>\\n\\n\\t<div class=\\"col-span-1 hidden lg:block\\">\\n\\t\\t{#if item.medium}\\n\\t\\t\\t<p>{item.medium}</p>\\n\\t\\t\\t{#if firstMediaItem._type === 'Video'}\\n\\t\\t\\t\\t<Play />\\n\\t\\t\\t{/if}\\n\\t\\t{:else}\\n\\t\\t\\t<p class=\\"text-grey-4\\">N/A</p>\\n\\t\\t{/if}\\n\\t</div>\\n</a>\\n\\n<style>\\n\\t.search-list-item :global(.play-icon) {\\n\\t\\twidth: 1.2rem;\\n\\t\\tcolor: var(--primary);\\n\\t\\tmargin-top: 0.6rem;\\n\\t}\\n\\n\\t.search-list-item:hover {\\n\\t\\tbackground-color: var(--grey-1);\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA4DC,gCAAiB,CAAS,UAAY,CACrC,KAAK,CAAE,MAAM,CACb,KAAK,CAAE,IAAI,SAAS,CAAC,CACrB,UAAU,CAAE,MACb,CAEA,gCAAiB,MAAO,CACvB,gBAAgB,CAAE,IAAI,QAAQ,CAC/B"}`
};
const SearchListItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { item } = $$props;
  const firstMediaItem = item.media[0];
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  $$result.css.add(css$2);
  return `<a${add_attribute("href", `/wip/${item.slug.current}`, 0)} class="search-list-item grid grid-cols-9 lg:grid-cols-6 gap-4 lg:gap-base-1/2 pt-6 lg:pt-base-1/2 pb-6 lg:pb-base svelte-1j3mmbm"><div class="col-span-2 pl-4"><div class="aspect-[3/4] lg:aspect-[3/2.5]">${firstMediaItem._type === "Image" && firstMediaItem.asset ? `${validate_component(Image, "Image").$$render(
    $$result,
    {
      image: firstMediaItem,
      alt: firstMediaItem.alt,
      classes: "object-contain object-left w-full h-full",
      maxSize: "xs"
    },
    {},
    {}
  )}` : `${firstMediaItem._type === "Video" && firstMediaItem.file ? `${validate_component(VideoPreview, "VideoPreview").$$render(
    $$result,
    {
      mediaItem: firstMediaItem,
      classes: "object-contain object-left w-full h-full"
    },
    {},
    {}
  )}` : ``}`}</div></div> <div class="col-span-4 lg:col-span-2"><h2>${escape(item.title)}</h2></div> <div class="col-span-3 lg:col-span-1 text-right lg:text-left">${item.date ? `<p>${escape(format(new Date(item.date), "MM.dd.yy"))}</p>` : `<p class="text-grey-4" data-svelte-h="svelte-4i3nsv">N/A</p>`}</div> <div class="col-span-1 hidden lg:block">${item.medium ? `<p>${escape(item.medium)}</p> ${firstMediaItem._type === "Video" ? `${validate_component(Play, "Play").$$render($$result, {}, {}, {})}` : ``}` : `<p class="text-grey-4" data-svelte-h="svelte-4i3nsv">N/A</p>`}</div> </a>`;
});
const css$1 = {
  code: ".search-modal.svelte-1ed26dh.svelte-1ed26dh{z-index:10000;pointer-events:none;opacity:0;transition:opacity 0.3s}.closer.svelte-1ed26dh.svelte-1ed26dh{background-color:var(--white);opacity:0.85}.search-modal.active.svelte-1ed26dh.svelte-1ed26dh{opacity:1;pointer-events:auto}.modal.svelte-1ed26dh.svelte-1ed26dh{z-index:10;width:90vw;height:70svh;min-height:300px;max-height:500px;@media screen and (min-width: 1024px) {\n			min-width: 500px;\n			max-width: 700px;\n			width: 50vw;\n			height: 50svh;\n		}}.modal.svelte-1ed26dh .search-icon{width:1.3rem;position:absolute;left:0px;top:50%;transform:translateY(-50%)}input[type='search'].svelte-1ed26dh.svelte-1ed26dh{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0.6rem 0}input[type='search'].svelte-1ed26dh.svelte-1ed26dh::-webkit-search-decoration,input[type='search'].svelte-1ed26dh.svelte-1ed26dh::-webkit-search-cancel-button,input[type='search'].svelte-1ed26dh.svelte-1ed26dh::-webkit-search-results-button,input[type='search'].svelte-1ed26dh.svelte-1ed26dh::-webkit-search-results-decoration{display:none}input.svelte-1ed26dh.svelte-1ed26dh::-moz-selection{background-color:var(--black);color:var(--white)}input.svelte-1ed26dh.svelte-1ed26dh::selection{background-color:var(--black);color:var(--white)}.search-loader.svelte-1ed26dh.svelte-1ed26dh{width:150px;height:20px;display:flex;position:relative}.search-loader.svelte-1ed26dh.svelte-1ed26dh::before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--black);transform-origin:left;animation:svelte-1ed26dh-load 1s steps(11, jump-none) infinite}@keyframes svelte-1ed26dh-load{0%{transform:scaleX(0)}100%{transform:scaleX(1)}}.results.svelte-1ed26dh.svelte-1ed26dh{-ms-overflow-style:none;scrollbar-width:none;-webkit-overflow-scrolling:touch}.results.svelte-1ed26dh.svelte-1ed26dh::-webkit-scrollbar{display:none}.results.svelte-1ed26dh ul li.svelte-1ed26dh{border-top:1px solid var(--grey-3)}.results.svelte-1ed26dh ul li.svelte-1ed26dh:last-child{border-bottom:1px solid var(--grey-3)}",
  map: `{"version":3,"file":"SearchModal.svelte","sources":["SearchModal.svelte"],"sourcesContent":["<script>\\n\\t// import { page } from '$app/stores';\\n\\timport { goto } from '$app/navigation';\\n\\timport SearchIcon from './SearchIcon.svelte';\\n\\timport SearchListItem from './SearchListItem.svelte';\\n\\timport { createEventDispatcher } from 'svelte';\\n\\n\\t// props\\n\\texport let active;\\n\\n\\t// data\\n\\tconst dispatch = createEventDispatcher();\\n\\tlet searchInput, searchTerm;\\n\\tlet searchTimeout = null;\\n\\tlet searchResults = [];\\n\\tlet isLoading = false;\\n\\tlet previousActive = false;\\n\\n\\t// focus on input when modal is made active\\n\\t$: if (active !== previousActive) {\\n\\t\\tpreviousActive = active;\\n\\n\\t\\tif (active && searchInput) {\\n\\t\\t\\t// clear search term\\n\\t\\t\\tsearchTerm = '';\\n\\n\\t\\t\\t// focus on input\\n\\t\\t\\tsearchInput.focus();\\n\\t\\t}\\n\\t}\\n\\n\\t// handle search input with a debounce\\n\\t$: if (searchTerm && searchTerm !== '') {\\n\\t\\tisLoading = true;\\n\\t\\tclearTimeout(searchTimeout);\\n\\n\\t\\tsearchTimeout = setTimeout(async () => {\\n\\t\\t\\tconst res = await fetch('/api/search', {\\n\\t\\t\\t\\tbody: JSON.stringify({\\n\\t\\t\\t\\t\\tsearchTerm\\n\\t\\t\\t\\t}),\\n\\n\\t\\t\\t\\theaders: {\\n\\t\\t\\t\\t\\t'Content-Type': 'application/json'\\n\\t\\t\\t\\t},\\n\\n\\t\\t\\t\\tmethod: 'POST'\\n\\t\\t\\t});\\n\\n\\t\\t\\t// get response\\n\\t\\t\\tconst resObject = await res.json();\\n\\n\\t\\t\\t// handle errors\\n\\t\\t\\tif (resObject.status !== 'success') {\\n\\t\\t\\t\\treturn;\\n\\t\\t\\t}\\n\\n\\t\\t\\tsearchResults = resObject.data.wip;\\n\\n\\t\\t\\tisLoading = false;\\n\\t\\t}, 500);\\n\\t} else {\\n\\t\\tsearchResults = [];\\n\\t}\\n\\n\\tfunction handleSubmit() {\\n\\t\\tgoto(\`/wip/search?term=\${searchTerm}\`);\\n\\t}\\n<\/script>\\n\\n<div\\n\\tclass=\\"search-modal fixed top-0 left-0 w-full h-full flex justify-center items-center {active\\n\\t\\t? 'active'\\n\\t\\t: ''}\\"\\n>\\n\\t<button class=\\"closer fill-parent\\" on:click={() => dispatch('closeSearch')}></button>\\n\\n\\t<div class=\\"modal bg-white flex flex-col border border-black\\">\\n\\t\\t<div class=\\"flex-none pt-6 lg:pt-base px-6 lg:px-base\\">\\n\\t\\t\\t<form on:submit|preventDefault={handleSubmit}>\\n\\t\\t\\t\\t<div class=\\"relative\\">\\n\\t\\t\\t\\t\\t<SearchIcon />\\n\\n\\t\\t\\t\\t\\t<input\\n\\t\\t\\t\\t\\t\\tbind:this={searchInput}\\n\\t\\t\\t\\t\\t\\tbind:value={searchTerm}\\n\\t\\t\\t\\t\\t\\ttype=\\"search\\"\\n\\t\\t\\t\\t\\t\\tplaceholder=\\"Search in WIP..\\"\\n\\t\\t\\t\\t\\t\\tclass=\\"w-full bg-transparent text-black placeholder-black border-b border-black text-center\\"\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</form>\\n\\t\\t</div>\\n\\n\\t\\t<div class=\\"flex-1 flex justify-center items-center relative\\">\\n\\t\\t\\t{#if isLoading}\\n\\t\\t\\t\\t<div class=\\"search-loader\\"></div>\\n\\t\\t\\t{:else if searchTerm && searchTerm !== '' && searchResults.length > 0}\\n\\t\\t\\t\\t<div class=\\"results fill-parent px-6 lg:px-base pt-8 lg:pt-20 pb-40 overflow-y-auto\\">\\n\\t\\t\\t\\t\\t<ul>\\n\\t\\t\\t\\t\\t\\t{#each searchResults as result}\\n\\t\\t\\t\\t\\t\\t\\t<li>\\n\\t\\t\\t\\t\\t\\t\\t\\t<SearchListItem item={result} />\\n\\t\\t\\t\\t\\t\\t\\t</li>\\n\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t</ul>\\n\\n\\t\\t\\t\\t\\t<div class=\\"flex justify-center mt-8\\">\\n\\t\\t\\t\\t\\t\\t<a\\n\\t\\t\\t\\t\\t\\t\\thref={\`/wip/search?term=\${searchTerm}\`}\\n\\t\\t\\t\\t\\t\\t\\tclass=\\"bg-yellow lg:hover:bg-black lg:hover:text-white text-center py-6 px-6 inline-block\\"\\n\\t\\t\\t\\t\\t\\t\\t>View all results</a\\n\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t{:else if searchTerm && searchTerm !== '' && searchResults.length === 0}\\n\\t\\t\\t\\t<p>No results</p>\\n\\t\\t\\t{:else}\\n\\t\\t\\t\\t<p>Search by medium, title, or notes</p>\\n\\t\\t\\t{/if}\\n\\t\\t</div>\\n\\t</div>\\n</div>\\n\\n<style>\\n\\t.search-modal {\\n\\t\\tz-index: 10000;\\n\\t\\tpointer-events: none;\\n\\t\\topacity: 0;\\n\\t\\ttransition: opacity 0.3s;\\n\\t}\\n\\n\\t.closer {\\n\\t\\tbackground-color: var(--white);\\n\\t\\topacity: 0.85;\\n\\t}\\n\\n\\t.search-modal.active {\\n\\t\\topacity: 1;\\n\\t\\tpointer-events: auto;\\n\\t}\\n\\n\\t.modal {\\n\\t\\tz-index: 10;\\n\\t\\twidth: 90vw;\\n\\t\\theight: 70svh;\\n\\t\\tmin-height: 300px;\\n\\t\\tmax-height: 500px;\\n\\n\\t\\t@media screen and (min-width: 1024px) {\\n\\t\\t\\tmin-width: 500px;\\n\\t\\t\\tmax-width: 700px;\\n\\t\\t\\twidth: 50vw;\\n\\t\\t\\theight: 50svh;\\n\\t\\t}\\n\\t}\\n\\n\\t.search-modal.active .modal {\\n\\t\\t/* transform: translateY(0px); */\\n\\t}\\n\\n\\t.modal :global(.search-icon) {\\n\\t\\twidth: 1.3rem;\\n\\t\\tposition: absolute;\\n\\t\\tleft: 0px;\\n\\t\\ttop: 50%;\\n\\t\\ttransform: translateY(-50%);\\n\\t}\\n\\n\\tinput[type='search'] {\\n\\t\\toutline: none;\\n\\t\\t-webkit-appearance: none;\\n\\t\\t   -moz-appearance: none;\\n\\t\\t        appearance: none;\\n\\t\\tpadding: 0.6rem 0;\\n\\t}\\n\\n\\tinput[type='search']::-webkit-search-decoration,\\n\\tinput[type='search']::-webkit-search-cancel-button,\\n\\tinput[type='search']::-webkit-search-results-button,\\n\\tinput[type='search']::-webkit-search-results-decoration {\\n\\t\\tdisplay: none;\\n\\t}\\n\\n\\tinput::-moz-selection {\\n\\t\\tbackground-color: var(--black);\\n\\t\\tcolor: var(--white);\\n\\t}\\n\\n\\tinput::selection {\\n\\t\\tbackground-color: var(--black);\\n\\t\\tcolor: var(--white);\\n\\t}\\n\\n\\t.search-loader {\\n\\t\\twidth: 150px;\\n\\t\\theight: 20px;\\n\\t\\t/* border: 1px solid var(--black); */\\n\\t\\tdisplay: flex;\\n\\t\\tposition: relative;\\n\\t}\\n\\n\\t.search-loader::before {\\n\\t\\tcontent: '';\\n\\t\\tposition: absolute;\\n\\t\\ttop: 0;\\n\\t\\tleft: 0;\\n\\t\\twidth: 100%;\\n\\t\\theight: 100%;\\n\\t\\tbackground-color: var(--black);\\n\\t\\ttransform-origin: left;\\n\\t\\tanimation: load 1s steps(11, jump-none) infinite;\\n\\t}\\n\\n\\t@keyframes load {\\n\\t\\t0% {\\n\\t\\t\\ttransform: scaleX(0);\\n\\t\\t}\\n\\n\\t\\t100% {\\n\\t\\t\\ttransform: scaleX(1);\\n\\t\\t}\\n\\t}\\n\\n\\t.results {\\n\\t\\t-ms-overflow-style: none; /* IE and Edge */\\n\\t\\tscrollbar-width: none; /* Firefox */\\n\\t\\t-webkit-overflow-scrolling: touch;\\n\\t}\\n\\n\\t.results::-webkit-scrollbar {\\n\\t\\tdisplay: none; /* Chrome, Safari and Opera */\\n\\t}\\n\\n\\t.results ul li {\\n\\t\\tborder-top: 1px solid var(--grey-3);\\n\\t}\\n\\n\\t.results ul li:last-child {\\n\\t\\tborder-bottom: 1px solid var(--grey-3);\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA6HC,2CAAc,CACb,OAAO,CAAE,KAAK,CACd,cAAc,CAAE,IAAI,CACpB,OAAO,CAAE,CAAC,CACV,UAAU,CAAE,OAAO,CAAC,IACrB,CAEA,qCAAQ,CACP,gBAAgB,CAAE,IAAI,OAAO,CAAC,CAC9B,OAAO,CAAE,IACV,CAEA,aAAa,qCAAQ,CACpB,OAAO,CAAE,CAAC,CACV,cAAc,CAAE,IACjB,CAEA,oCAAO,CACN,OAAO,CAAE,EAAE,CACX,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,KAAK,CACb,UAAU,CAAE,KAAK,CACjB,UAAU,CAAE,KAAK,CAEjB,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,MAAM,CAAC,CAAC;AACxC,GAAG,WAAW,KAAK;AACnB,GAAG,WAAW,KAAK;AACnB,GAAG,OAAO,IAAI;AACd,GAAG,QAAQ,KAAK;AAChB,GACC,CAMA,qBAAM,CAAS,YAAc,CAC5B,KAAK,CAAE,MAAM,CACb,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,GAAG,CACT,GAAG,CAAE,GAAG,CACR,SAAS,CAAE,WAAW,IAAI,CAC3B,CAEA,KAAK,CAAC,IAAI,CAAC,QAAQ,+BAAE,CACpB,OAAO,CAAE,IAAI,CACb,kBAAkB,CAAE,IAAI,CACrB,eAAe,CAAE,IAAI,CAChB,UAAU,CAAE,IAAI,CACxB,OAAO,CAAE,MAAM,CAAC,CACjB,CAEA,KAAK,CAAC,IAAI,CAAC,QAAQ,+BAAC,2BAA2B,CAC/C,KAAK,CAAC,IAAI,CAAC,QAAQ,+BAAC,8BAA8B,CAClD,KAAK,CAAC,IAAI,CAAC,QAAQ,+BAAC,+BAA+B,CACnD,KAAK,CAAC,IAAI,CAAC,QAAQ,+BAAC,mCAAoC,CACvD,OAAO,CAAE,IACV,CAEA,mCAAK,gBAAiB,CACrB,gBAAgB,CAAE,IAAI,OAAO,CAAC,CAC9B,KAAK,CAAE,IAAI,OAAO,CACnB,CAEA,mCAAK,WAAY,CAChB,gBAAgB,CAAE,IAAI,OAAO,CAAC,CAC9B,KAAK,CAAE,IAAI,OAAO,CACnB,CAEA,4CAAe,CACd,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,IAAI,CAEZ,OAAO,CAAE,IAAI,CACb,QAAQ,CAAE,QACX,CAEA,4CAAc,QAAS,CACtB,OAAO,CAAE,EAAE,CACX,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,gBAAgB,CAAE,IAAI,OAAO,CAAC,CAC9B,gBAAgB,CAAE,IAAI,CACtB,SAAS,CAAE,mBAAI,CAAC,EAAE,CAAC,MAAM,EAAE,CAAC,CAAC,SAAS,CAAC,CAAC,QACzC,CAEA,WAAW,mBAAK,CACf,EAAG,CACF,SAAS,CAAE,OAAO,CAAC,CACpB,CAEA,IAAK,CACJ,SAAS,CAAE,OAAO,CAAC,CACpB,CACD,CAEA,sCAAS,CACR,kBAAkB,CAAE,IAAI,CACxB,eAAe,CAAE,IAAI,CACrB,0BAA0B,CAAE,KAC7B,CAEA,sCAAQ,mBAAoB,CAC3B,OAAO,CAAE,IACV,CAEA,uBAAQ,CAAC,EAAE,CAAC,iBAAG,CACd,UAAU,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,QAAQ,CACnC,CAEA,uBAAQ,CAAC,EAAE,CAAC,iBAAE,WAAY,CACzB,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,QAAQ,CACtC"}`
};
const SearchModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { active } = $$props;
  createEventDispatcher();
  let searchInput, searchTerm;
  let searchTimeout = null;
  let searchResults = [];
  let isLoading = false;
  let previousActive = false;
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  $$result.css.add(css$1);
  {
    if (active !== previousActive) {
      previousActive = active;
      if (active && searchInput) {
        searchTerm = "";
        searchInput.focus();
      }
    }
  }
  {
    if (searchTerm && searchTerm !== "") {
      isLoading = true;
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(
        async () => {
          const res = await fetch("/api/search", {
            body: JSON.stringify({ searchTerm }),
            headers: { "Content-Type": "application/json" },
            method: "POST"
          });
          const resObject = await res.json();
          if (resObject.status !== "success") {
            return;
          }
          searchResults = resObject.data.wip;
          isLoading = false;
        },
        500
      );
    } else {
      searchResults = [];
    }
  }
  return `<div class="${"search-modal fixed top-0 left-0 w-full h-full flex justify-center items-center " + escape(active ? "active" : "", true) + " svelte-1ed26dh"}"><button class="closer fill-parent svelte-1ed26dh"></button> <div class="modal bg-white flex flex-col border border-black svelte-1ed26dh"><div class="flex-none pt-6 lg:pt-base px-6 lg:px-base"><form><div class="relative">${validate_component(SearchIcon, "SearchIcon").$$render($$result, {}, {}, {})} <input type="search" placeholder="Search in WIP.." class="w-full bg-transparent text-black placeholder-black border-b border-black text-center svelte-1ed26dh"${add_attribute("this", searchInput, 0)}${add_attribute("value", searchTerm, 0)}></div></form></div> <div class="flex-1 flex justify-center items-center relative">${isLoading ? `<div class="search-loader svelte-1ed26dh"></div>` : `${searchTerm && searchTerm !== "" && searchResults.length > 0 ? `<div class="results fill-parent px-6 lg:px-base pt-8 lg:pt-20 pb-40 overflow-y-auto svelte-1ed26dh"><ul>${each(searchResults, (result) => {
    return `<li class="svelte-1ed26dh">${validate_component(SearchListItem, "SearchListItem").$$render($$result, { item: result }, {}, {})} </li>`;
  })}</ul> <div class="flex justify-center mt-8"><a${add_attribute("href", `/wip/search?term=${searchTerm}`, 0)} class="bg-yellow lg:hover:bg-black lg:hover:text-white text-center py-6 px-6 inline-block">View all results</a></div></div>` : `${searchTerm && searchTerm !== "" && searchResults.length === 0 ? `<p data-svelte-h="svelte-1xfjte7">No results</p>` : `<p data-svelte-h="svelte-15tuki">Search by medium, title, or notes</p>`}`}`}</div></div> </div>`;
});
const css = {
  code: "main.svelte-njt6ae{padding-top:var(--nav-height-mobile);@media screen and (min-width: 1024px) {\n			padding-top: var(--nav-height);\n		}}",
  map: `{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script>\\n\\timport '../styles/global.css';\\n\\timport MainNav from '$lib/components/MainNav.svelte';\\n\\timport SearchModal from '$lib/components/SearchModal.svelte';\\n\\timport { searchActive, isLargeQuery } from '$lib/stores/globalStore';\\n\\timport { beforeNavigate } from '$app/navigation';\\n\\timport { onMount } from 'svelte';\\n\\n\\tif (typeof window !== 'undefined') {\\n\\t\\timport('lazysizes');\\n\\t}\\n\\n\\t// data prop\\n\\texport let data;\\n\\n\\t// get site settings from data\\n\\tconst { siteSettings } = data;\\n\\n\\tlet showGrid = false;\\n\\n\\t// handle navigation\\n\\tbeforeNavigate(() => {\\n\\t\\t$searchActive = false;\\n\\t});\\n\\n\\tonMount(() => {\\n\\t\\t$isLargeQuery = window.matchMedia('(min-width: 1024px)').matches;\\n\\t});\\n\\n\\t// listen for command k shortcut\\n\\tconst handleKeyDown = (event) => {\\n\\t\\tif (event.metaKey && event.key === 'k') {\\n\\t\\t\\t$searchActive = !$searchActive;\\n\\t\\t}\\n\\t};\\n<\/script>\\n\\n<svelte:window on:keydown={handleKeyDown} />\\n\\n<svelte:head>\\n\\t<meta name=\\"description\\" content={siteSettings.metaDescription} />\\n\\t<meta property=\\"og:title\\" content=\\"Mitchell Barton\\" />\\n\\t<meta property=\\"og:description\\" content={siteSettings.metaDescription} />\\n\\t<meta property=\\"og:site_name\\" content=\\"Mitchell Barton\\" />\\n\\t<meta property=\\"og:locale\\" content=\\"en_US\\" />\\n\\t{#if siteSettings.ogImage?.asset?.url}\\n\\t\\t<meta property=\\"og:image\\" content={siteSettings.ogImage.asset.url} />\\n\\t{/if}\\n</svelte:head>\\n\\n<div class={\`main-container \${showGrid ? 'show-grid' : ''}\`}>\\n\\t<div class=\\"grid-system w-full h-base-1/2 bg-grey-1\\"></div>\\n\\n\\t<MainNav />\\n\\n\\t<div class=\\"grid-system w-full h-base-1/2 bg-grey-1\\"></div>\\n\\n\\t<main class=\\"px-4 lg:px-base-1/2\\">\\n\\t\\t<slot />\\n\\t</main>\\n\\n\\t<SearchModal active={$searchActive} on:closeSearch={() => ($searchActive = false)} />\\n\\n\\t<div\\n\\t\\tclass=\\"grid-system fixed top-0 left-0 w-full h-full flex justify-between z-[-1] pointer-events-none\\"\\n\\t>\\n\\t\\t<div class=\\"w-base-1/2 h-full bg-grey-1\\"></div>\\n\\t\\t<div class=\\"w-base-1/2 h-full bg-grey-1\\"></div>\\n\\t\\t<div class=\\"w-base-1/2 h-full bg-grey-1\\"></div>\\n\\t\\t<div class=\\"w-base-1/2 h-full bg-grey-1\\"></div>\\n\\t\\t<div class=\\"w-base-1/2 h-full bg-grey-1\\"></div>\\n\\t\\t<div class=\\"w-base-1/2 h-full bg-grey-1\\"></div>\\n\\t\\t<div class=\\"w-base-1/2 h-full bg-grey-1\\"></div>\\n\\t\\t<div class=\\"w-base-1/2 h-full bg-grey-1\\"></div>\\n\\t\\t<div class=\\"w-base-1/2 h-full bg-grey-1\\"></div>\\n\\t\\t<div class=\\"w-base-1/2 h-full bg-grey-1\\"></div>\\n\\t\\t<div class=\\"w-base-1/2 h-full bg-grey-1\\"></div>\\n\\t\\t<div class=\\"w-base-1/2 h-full bg-grey-1\\"></div>\\n\\t\\t<div class=\\"w-base-1/2 h-full bg-grey-1\\"></div>\\n\\t</div>\\n</div>\\n\\n<style>\\n\\tmain {\\n\\t\\tpadding-top: var(--nav-height-mobile);\\n\\n\\t\\t@media screen and (min-width: 1024px) {\\n\\t\\t\\tpadding-top: var(--nav-height);\\n\\t\\t}\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAmFC,kBAAK,CACJ,WAAW,CAAE,IAAI,mBAAmB,CAAC,CAErC,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,MAAM,CAAC,CAAC;AACxC,GAAG,aAAa,IAAI,YAAY,CAAC;AACjC,GACC"}`
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $searchActive, $$unsubscribe_searchActive;
  let $$unsubscribe_isLargeQuery;
  $$unsubscribe_searchActive = subscribe(searchActive, (value) => $searchActive = value);
  $$unsubscribe_isLargeQuery = subscribe(isLargeQuery, (value) => value);
  if (typeof window !== "undefined") {
    import("lazysizes");
  }
  let { data } = $$props;
  const { siteSettings } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_searchActive();
  $$unsubscribe_isLargeQuery();
  return ` ${$$result.head += `<!-- HEAD_svelte-wk314x_START --><meta name="description"${add_attribute("content", siteSettings.metaDescription, 0)}><meta property="og:title" content="Mitchell Barton"><meta property="og:description"${add_attribute("content", siteSettings.metaDescription, 0)}><meta property="og:site_name" content="Mitchell Barton"><meta property="og:locale" content="en_US">${siteSettings.ogImage?.asset?.url ? `<meta property="og:image"${add_attribute("content", siteSettings.ogImage.asset.url, 0)}>` : ``}<!-- HEAD_svelte-wk314x_END -->`, ""} <div${add_attribute("class", `main-container ${""}`, 0)}><div class="grid-system w-full h-base-1/2 bg-grey-1"></div> ${validate_component(MainNav, "MainNav").$$render($$result, {}, {}, {})} <div class="grid-system w-full h-base-1/2 bg-grey-1"></div> <main class="px-4 lg:px-base-1/2 svelte-njt6ae">${slots.default ? slots.default({}) : ``}</main> ${validate_component(SearchModal, "SearchModal").$$render($$result, { active: $searchActive }, {}, {})} <div class="grid-system fixed top-0 left-0 w-full h-full flex justify-between z-[-1] pointer-events-none" data-svelte-h="svelte-uros0k"><div class="w-base-1/2 h-full bg-grey-1"></div> <div class="w-base-1/2 h-full bg-grey-1"></div> <div class="w-base-1/2 h-full bg-grey-1"></div> <div class="w-base-1/2 h-full bg-grey-1"></div> <div class="w-base-1/2 h-full bg-grey-1"></div> <div class="w-base-1/2 h-full bg-grey-1"></div> <div class="w-base-1/2 h-full bg-grey-1"></div> <div class="w-base-1/2 h-full bg-grey-1"></div> <div class="w-base-1/2 h-full bg-grey-1"></div> <div class="w-base-1/2 h-full bg-grey-1"></div> <div class="w-base-1/2 h-full bg-grey-1"></div> <div class="w-base-1/2 h-full bg-grey-1"></div> <div class="w-base-1/2 h-full bg-grey-1"></div></div> </div>`;
});
export {
  Layout as default
};
