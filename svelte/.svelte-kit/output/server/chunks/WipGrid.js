import { s as subscribe, n as null_to_empty } from "./utils.js";
import { c as create_ssr_component, f as createEventDispatcher, a as add_attribute, e as escape, v as validate_component, d as each, b as add_classes } from "./ssr.js";
import "./client2.js";
import { d as defaultItemsPerPage, s as searchActive } from "./globalStore.js";
import { W as WipGridItem } from "./WipGridItem.js";
import { S as SearchIcon } from "./SearchIcon.js";
const PaginationLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_defaultItemsPerPage;
  $$unsubscribe_defaultItemsPerPage = subscribe(defaultItemsPerPage, (value) => value);
  let { href, label } = $$props;
  createEventDispatcher();
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  $$unsubscribe_defaultItemsPerPage();
  return `<a${add_attribute("href", href, 0)}>${escape(label)}</a>`;
});
const css$2 = {
  code: ".pagination.svelte-a8ekpi a + ul{margin-left:5rem}.pagination.svelte-a8ekpi ul + a{margin-left:5rem}.pagination.svelte-a8ekpi ul li.active a{text-decoration-line:underline;text-decoration-thickness:0.1em;text-underline-offset:0.15em}",
  map: `{"version":3,"file":"Pagination.svelte","sources":["Pagination.svelte"],"sourcesContent":["<script>\\n\\timport { createEventDispatcher } from 'svelte';\\n\\timport PaginationLink from './PaginationLink.svelte';\\n\\n\\t// props\\n\\texport let paginationData,\\n\\t\\tbasePath = '/wip';\\n\\n\\t// data\\n\\tconst dispatch = createEventDispatcher();\\n\\n\\t$: prevPageLink = paginationData.prevPageLink;\\n\\t$: nextPageLink = paginationData.nextPageLink;\\n\\t$: isLastPage = paginationData.isLastPage;\\n\\t$: isFirstPage = paginationData.isFirstPage;\\n\\t$: pageNum = paginationData.pageNum;\\n\\t$: totalPages = paginationData.totalPages;\\n\\n\\t// parse link function\\n\\tfunction parseLink(num) {\\n\\t\\t// create phony url with the base path added to it\\n\\t\\tconst url = new URL('https://test.com' + basePath);\\n\\n\\t\\t// if the page number is 1, just return the base path\\n\\t\\tif (num === 1) {\\n\\t\\t\\treturn \`\${basePath}\`;\\n\\t\\t} else {\\n\\t\\t\\t// otherwise, add the page number to the search params\\n\\t\\t\\turl.searchParams.set('page_num', num);\\n\\n\\t\\t\\t// then just return the pathname and search params\\n\\t\\t\\treturn url.pathname + '?' + url.searchParams.toString();\\n\\t\\t}\\n\\t}\\n\\n\\t// // build pagination links\\n\\tconst groupMax = 3; // this must be an odd number\\n\\tconst middleGroupNum = Math.floor(groupMax / 2) + 1;\\n\\tconst leftOverNumber = groupMax - middleGroupNum;\\n\\n\\t$: {\\n\\t\\tpaginationLinks = [];\\n\\n\\t\\tif (totalPages <= groupMax * 2) {\\n\\t\\t\\t// if the totalpages is less than or equal to groupMax * 2, show all page numbers\\n\\t\\t\\tfor (let i = 1; i <= totalPages; i++) {\\n\\t\\t\\t\\tpaginationLinks.push({\\n\\t\\t\\t\\t\\tlink: parseLink(i),\\n\\t\\t\\t\\t\\tlabel: i\\n\\t\\t\\t\\t});\\n\\t\\t\\t}\\n\\t\\t} else if (pageNum <= groupMax) {\\n\\t\\t\\t// if the current page is less than or equal to groupMax and less than or equal to middleGroupNum, show the first groupMax page numbers and the last page number\\n\\n\\t\\t\\tconst totalToShow = pageNum === groupMax ? groupMax + leftOverNumber : groupMax;\\n\\n\\t\\t\\tfor (let i = 1; i <= totalToShow; i++) {\\n\\t\\t\\t\\tpaginationLinks.push({\\n\\t\\t\\t\\t\\tlink: parseLink(i),\\n\\t\\t\\t\\t\\tlabel: i\\n\\t\\t\\t\\t});\\n\\t\\t\\t}\\n\\n\\t\\t\\tpaginationLinks.push({\\n\\t\\t\\t\\tlink: null,\\n\\t\\t\\t\\tlabel: '...'\\n\\t\\t\\t});\\n\\n\\t\\t\\tpaginationLinks.push({\\n\\t\\t\\t\\tlink: parseLink(totalPages),\\n\\t\\t\\t\\tlabel: totalPages\\n\\t\\t\\t});\\n\\t\\t} else if (pageNum >= totalPages - middleGroupNum) {\\n\\t\\t\\t// if the current page is greater than totalPages - middleGroupNum, show the first page number and the last groupMax page numbers\\n\\n\\t\\t\\tpaginationLinks.push({\\n\\t\\t\\t\\tlink: parseLink(1),\\n\\t\\t\\t\\tlabel: 1\\n\\t\\t\\t});\\n\\n\\t\\t\\tpaginationLinks.push({\\n\\t\\t\\t\\tlink: null,\\n\\t\\t\\t\\tlabel: '...'\\n\\t\\t\\t});\\n\\n\\t\\t\\tconst totalToAdd = pageNum === totalPages - middleGroupNum ? 0 : leftOverNumber;\\n\\n\\t\\t\\tfor (let i = totalPages - groupMax + totalToAdd; i <= totalPages; i++) {\\n\\t\\t\\t\\tpaginationLinks.push({\\n\\t\\t\\t\\t\\tlink: parseLink(i),\\n\\t\\t\\t\\t\\tlabel: i\\n\\t\\t\\t\\t});\\n\\t\\t\\t}\\n\\t\\t} else {\\n\\t\\t\\tpaginationLinks.push({\\n\\t\\t\\t\\tlink: parseLink(1),\\n\\t\\t\\t\\tlabel: 1\\n\\t\\t\\t});\\n\\n\\t\\t\\tpaginationLinks.push({\\n\\t\\t\\t\\tlink: null,\\n\\t\\t\\t\\tlabel: '...'\\n\\t\\t\\t});\\n\\n\\t\\t\\tfor (let i = pageNum - middleGroupNum + 1; i <= pageNum + middleGroupNum - 1; i++) {\\n\\t\\t\\t\\tpaginationLinks.push({\\n\\t\\t\\t\\t\\tlink: parseLink(i),\\n\\t\\t\\t\\t\\tlabel: i\\n\\t\\t\\t\\t});\\n\\t\\t\\t}\\n\\n\\t\\t\\tpaginationLinks.push({\\n\\t\\t\\t\\tlink: null,\\n\\t\\t\\t\\tlabel: '...'\\n\\t\\t\\t});\\n\\n\\t\\t\\tpaginationLinks.push({\\n\\t\\t\\t\\tlink: parseLink(totalPages),\\n\\t\\t\\t\\tlabel: totalPages\\n\\t\\t\\t});\\n\\t\\t}\\n\\t}\\n\\n\\t$: paginationLinks = [];\\n\\n\\t// handle pagination link clicked\\n\\tfunction handlePaginationLinkClicked(event) {\\n\\t\\tdispatch('pagination-link-clicked', event.detail);\\n\\t}\\n\\n\\tfunction handleSetLoading(event) {\\n\\t\\tdispatch('set-loading', event.detail);\\n\\t}\\n<\/script>\\n\\n<div class=\\"pagination flex justify-center mt-20 enter-in-1 delay-100\\">\\n\\t{#if !isFirstPage}\\n\\t\\t<PaginationLink\\n\\t\\t\\thref={parseLink(prevPageLink.pageNum)}\\n\\t\\t\\tlabel=\\"Prev\\"\\n\\t\\t\\ton:pagination-link-clicked={handlePaginationLinkClicked}\\n\\t\\t\\ton:set-loading={handleSetLoading}\\n\\t\\t/>\\n\\t{/if}\\n\\n\\t{#if paginationLinks.length > 0}\\n\\t\\t<ul class=\\"flex gap-4\\">\\n\\t\\t\\t{#each paginationLinks as link}\\n\\t\\t\\t\\t<li class:active={link.label === pageNum}>\\n\\t\\t\\t\\t\\t{#if link.link}\\n\\t\\t\\t\\t\\t\\t<PaginationLink\\n\\t\\t\\t\\t\\t\\t\\thref={link.link}\\n\\t\\t\\t\\t\\t\\t\\tlabel={link.label}\\n\\t\\t\\t\\t\\t\\t\\ton:pagination-link-clicked={handlePaginationLinkClicked}\\n\\t\\t\\t\\t\\t\\t\\ton:set-loading={handleSetLoading}\\n\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t<span>{link.label}</span>\\n\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t</li>\\n\\t\\t\\t{/each}\\n\\t\\t</ul>\\n\\t{/if}\\n\\n\\t{#if !isLastPage}\\n\\t\\t<PaginationLink\\n\\t\\t\\thref={parseLink(nextPageLink.pageNum)}\\n\\t\\t\\tlabel=\\"Next\\"\\n\\t\\t\\ton:pagination-link-clicked={handlePaginationLinkClicked}\\n\\t\\t\\ton:set-loading={handleSetLoading}\\n\\t\\t/>\\n\\t{/if}\\n</div>\\n\\n<style>\\n\\t.pagination :global(a + ul) {\\n\\t\\tmargin-left: 5rem;\\n\\t}\\n\\n\\t.pagination :global(ul + a) {\\n\\t\\tmargin-left: 5rem;\\n\\t}\\n\\n\\t.pagination :global(ul li.active a) {\\n\\t\\ttext-decoration-line: underline;\\n\\t\\ttext-decoration-thickness: 0.1em;\\n\\t\\ttext-underline-offset: 0.15em;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA+KC,yBAAW,CAAS,MAAQ,CAC3B,WAAW,CAAE,IACd,CAEA,yBAAW,CAAS,MAAQ,CAC3B,WAAW,CAAE,IACd,CAEA,yBAAW,CAAS,cAAgB,CACnC,oBAAoB,CAAE,SAAS,CAC/B,yBAAyB,CAAE,KAAK,CAChC,qBAAqB,CAAE,MACxB"}`
};
const groupMax = 3;
const Pagination = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let prevPageLink;
  let nextPageLink;
  let isLastPage;
  let isFirstPage;
  let pageNum;
  let totalPages;
  let paginationLinks;
  let { paginationData, basePath = "/wip" } = $$props;
  createEventDispatcher();
  function parseLink(num) {
    const url = new URL("https://test.com" + basePath);
    if (num === 1) {
      return `${basePath}`;
    } else {
      url.searchParams.set("page_num", num);
      return url.pathname + "?" + url.searchParams.toString();
    }
  }
  const middleGroupNum = Math.floor(groupMax / 2) + 1;
  const leftOverNumber = groupMax - middleGroupNum;
  if ($$props.paginationData === void 0 && $$bindings.paginationData && paginationData !== void 0)
    $$bindings.paginationData(paginationData);
  if ($$props.basePath === void 0 && $$bindings.basePath && basePath !== void 0)
    $$bindings.basePath(basePath);
  $$result.css.add(css$2);
  prevPageLink = paginationData.prevPageLink;
  nextPageLink = paginationData.nextPageLink;
  isLastPage = paginationData.isLastPage;
  isFirstPage = paginationData.isFirstPage;
  pageNum = paginationData.pageNum;
  totalPages = paginationData.totalPages;
  {
    {
      paginationLinks = [];
      if (totalPages <= groupMax * 2) {
        for (let i = 1; i <= totalPages; i++) {
          paginationLinks.push({ link: parseLink(i), label: i });
        }
      } else if (pageNum <= groupMax) {
        const totalToShow = pageNum === groupMax ? groupMax + leftOverNumber : groupMax;
        for (let i = 1; i <= totalToShow; i++) {
          paginationLinks.push({ link: parseLink(i), label: i });
        }
        paginationLinks.push({ link: null, label: "..." });
        paginationLinks.push({
          link: parseLink(totalPages),
          label: totalPages
        });
      } else if (pageNum >= totalPages - middleGroupNum) {
        paginationLinks.push({ link: parseLink(1), label: 1 });
        paginationLinks.push({ link: null, label: "..." });
        const totalToAdd = pageNum === totalPages - middleGroupNum ? 0 : leftOverNumber;
        for (let i = totalPages - groupMax + totalToAdd; i <= totalPages; i++) {
          paginationLinks.push({ link: parseLink(i), label: i });
        }
      } else {
        paginationLinks.push({ link: parseLink(1), label: 1 });
        paginationLinks.push({ link: null, label: "..." });
        for (let i = pageNum - middleGroupNum + 1; i <= pageNum + middleGroupNum - 1; i++) {
          paginationLinks.push({ link: parseLink(i), label: i });
        }
        paginationLinks.push({ link: null, label: "..." });
        paginationLinks.push({
          link: parseLink(totalPages),
          label: totalPages
        });
      }
    }
  }
  paginationLinks = [];
  return `<div class="pagination flex justify-center mt-20 enter-in-1 delay-100 svelte-a8ekpi">${!isFirstPage ? `${validate_component(PaginationLink, "PaginationLink").$$render(
    $$result,
    {
      href: parseLink(prevPageLink.pageNum),
      label: "Prev"
    },
    {},
    {}
  )}` : ``} ${paginationLinks.length > 0 ? `<ul class="flex gap-4">${each(paginationLinks, (link) => {
    return `<li${add_classes((link.label === pageNum ? "active" : "").trim())}>${link.link ? `${validate_component(PaginationLink, "PaginationLink").$$render($$result, { href: link.link, label: link.label }, {}, {})}` : `<span>${escape(link.label)}</span>`} </li>`;
  })}</ul>` : ``} ${!isLastPage ? `${validate_component(PaginationLink, "PaginationLink").$$render(
    $$result,
    {
      href: parseLink(nextPageLink.pageNum),
      label: "Next"
    },
    {},
    {}
  )}` : ``} </div>`;
});
const css$1 = {
  code: ".search-button.svelte-wf26b9 svg{width:1.1rem;transform:translateY(0.5px);@media screen and (min-width: 1024px) {\n			width: 1.3rem;\n		}}.search-button-text.svelte-wf26b9 .search-button-shortcut.svelte-wf26b9{color:var(--grey-3)}",
  map: `{"version":3,"file":"WipSearchButton.svelte","sources":["WipSearchButton.svelte"],"sourcesContent":["<script>\\n\\timport { searchActive } from '$lib/stores/globalStore';\\n\\timport SearchIcon from '$lib/components/SearchIcon.svelte';\\n\\n\\tconst toggleSearch = () => {\\n\\t\\t$searchActive = !$searchActive;\\n\\t};\\n<\/script>\\n\\n<button\\n\\ton:click={toggleSearch}\\n\\tclass=\\"enter-in-1 search-button lg:hover:text-primary duration-300 transition-colors flex items-center\\"\\n>\\n\\t<SearchIcon />\\n\\t<span class=\\"search-button-text ml-2 lg:ml-3\\">\\n\\t\\t<span>Search</span>\\n\\t\\t<span class=\\"search-button-shortcut hidden lg:inline\\">⌘K</span>\\n\\t</span>\\n</button>\\n\\n<style>\\n\\t.search-button :global(svg) {\\n\\t\\twidth: 1.1rem;\\n\\t\\ttransform: translateY(0.5px);\\n\\n\\t\\t@media screen and (min-width: 1024px) {\\n\\t\\t\\twidth: 1.3rem;\\n\\t\\t}\\n\\t}\\n\\n\\t.search-button-text .search-button-shortcut {\\n\\t\\tcolor: var(--grey-3);\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAqBC,4BAAc,CAAS,GAAK,CAC3B,KAAK,CAAE,MAAM,CACb,SAAS,CAAE,WAAW,KAAK,CAAC,CAE5B,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,MAAM,CAAC,CAAC;AACxC,GAAG,OAAO,MAAM;AAChB,GACC,CAEA,iCAAmB,CAAC,qCAAwB,CAC3C,KAAK,CAAE,IAAI,QAAQ,CACpB"}`
};
const WipSearchButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_searchActive;
  $$unsubscribe_searchActive = subscribe(searchActive, (value) => value);
  $$result.css.add(css$1);
  $$unsubscribe_searchActive();
  return `<button class="enter-in-1 search-button lg:hover:text-primary duration-300 transition-colors flex items-center svelte-wf26b9">${validate_component(SearchIcon, "SearchIcon").$$render($$result, {}, {}, {})} <span class="search-button-text ml-2 lg:ml-3 svelte-wf26b9" data-svelte-h="svelte-1a59jtf"><span>Search</span> <span class="search-button-shortcut hidden lg:inline svelte-wf26b9">⌘K</span></span> </button>`;
});
const css = {
  code: ".grid-view.svelte-1a3dvfe li.svelte-1a3dvfe{border-bottom:1px solid var(--grey-3);border-right:1px solid var(--grey-3);display:flex;align-items:stretch}.grid-view.svelte-1a3dvfe li.svelte-1a3dvfe a{flex:1;width:100%}.grid-view.svelte-1a3dvfe li.svelte-1a3dvfe:nth-child(-n + 2){border-top:1px solid var(--grey-3)}.grid-view.svelte-1a3dvfe li.svelte-1a3dvfe:nth-child(-n + 6){@media screen and (min-width: 1024px) {\n			border-top: 1px solid var(--grey-3);\n		}}.grid-view.svelte-1a3dvfe li.svelte-1a3dvfe:nth-child(2n + 1){border-left:1px solid var(--grey-3);@media screen and (min-width: 1024px) {\n			border-left: none;\n		}}.grid-view.svelte-1a3dvfe li.svelte-1a3dvfe:nth-child(6n + 1){@media screen and (min-width: 1024px) {\n			border-left: 1px solid var(--grey-3);\n		}}.list.svelte-1a3dvfe li{border-top:1px solid var(--grey-3)}.list.svelte-1a3dvfe li:last-child{border-bottom:1px solid var(--grey-3)}.content-container.svelte-1a3dvfe.svelte-1a3dvfe{transition:opacity 0.4s;pointer-events:auto}",
  map: `{"version":3,"file":"WipGrid.svelte","sources":["WipGrid.svelte"],"sourcesContent":["<script>\\n\\timport { goto } from '$app/navigation';\\n\\timport Pagination from '$lib/components/Pagination.svelte';\\n\\timport WipGridItem from '$lib/components/WipGridItem.svelte';\\n\\timport WipSearchButton from '$lib/components/WipSearchButton.svelte';\\n\\n\\t// props\\n\\texport let data,\\n\\t\\tterm,\\n\\t\\tbasePath = '/wip';\\n\\n\\t// data\\n\\tlet loading = false;\\n\\n\\t// make wip reactive\\n\\t$: wipItems = data.wip;\\n\\t$: paginationData = data.paginationData;\\n\\t$: totalCount = data.totalCount;\\n\\t$: range = data.range;\\n\\t$: searchTerm = term;\\n\\n\\t// handle pagination link clicked\\n\\tfunction handlePaginationLinkClicked(event) {\\n\\t\\tgoto(event.detail.href);\\n\\n\\t\\twipItems = event.detail.data.wip;\\n\\t\\tpaginationData = event.detail.data.paginationData;\\n\\t\\trange = event.detail.data.range;\\n\\t\\tloading = false;\\n\\t}\\n\\n\\tfunction handleSetLoading(event) {\\n\\t\\tloading = event.detail;\\n\\t}\\n<\/script>\\n\\n<div class=\\"mt-20 lg:mt-40 pb-40 lg:pb-60\\">\\n\\t<div class=\\"enter-in-1 text-center max-w-[250px] mx-auto\\">\\n\\t\\t<h1>WIP</h1>\\n\\t\\t{#if searchTerm}\\n\\t\\t\\t<p class=\\"mt-6\\">\\n\\t\\t\\t\\t{totalCount} results for: <span class=\\"bg-pink\\">“{searchTerm}”</span>\\n\\t\\t\\t</p>\\n\\t\\t{/if}\\n\\t</div>\\n\\n\\t<div class={\`content-container mt-8 lg:mt-48\`}>\\n\\t\\t<div class=\\"flex justify-between items-center\\">\\n\\t\\t\\t<WipSearchButton />\\n\\n\\t\\t\\t{#if loading === false}\\n\\t\\t\\t\\t<p class=\\"enter-in-1\\">{range.from} - {range.to} of {totalCount} items</p>\\n\\t\\t\\t{/if}\\n\\t\\t</div>\\n\\n\\t\\t{#if loading === false}\\n\\t\\t\\t<ul class=\\"enter-in-1 delay-100 grid-view grid grid-cols-2 lg:grid-cols-6 mt-4 lg:mt-6\\">\\n\\t\\t\\t\\t{#each wipItems as item}\\n\\t\\t\\t\\t\\t<li key={item._id}>\\n\\t\\t\\t\\t\\t\\t<WipGridItem {item} />\\n\\t\\t\\t\\t\\t</li>\\n\\t\\t\\t\\t{/each}\\n\\t\\t\\t</ul>\\n\\n\\t\\t\\t{#if paginationData.totalPages > 1}\\n\\t\\t\\t\\t<Pagination\\n\\t\\t\\t\\t\\t{paginationData}\\n\\t\\t\\t\\t\\t{basePath}\\n\\t\\t\\t\\t\\ton:pagination-link-clicked={handlePaginationLinkClicked}\\n\\t\\t\\t\\t\\ton:set-loading={handleSetLoading}\\n\\t\\t\\t\\t/>\\n\\t\\t\\t{/if}\\n\\t\\t{/if}\\n\\t</div>\\n</div>\\n\\n<style>\\n\\t/* add bottom and right border to all items */\\n\\t.grid-view li {\\n\\t\\tborder-bottom: 1px solid var(--grey-3);\\n\\t\\tborder-right: 1px solid var(--grey-3);\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: stretch;\\n\\t}\\n\\n\\t.grid-view li :global(a) {\\n\\t\\tflex: 1;\\n\\t\\twidth: 100%;\\n\\t}\\n\\n\\t/* add top border to first 2 items on mobile only */\\n\\t.grid-view li:nth-child(-n + 2) {\\n\\t\\tborder-top: 1px solid var(--grey-3);\\n\\t}\\n\\n\\t/* add top border to first 6 items on desktop only */\\n\\t.grid-view li:nth-child(-n + 6) {\\n\\t\\t@media screen and (min-width: 1024px) {\\n\\t\\t\\tborder-top: 1px solid var(--grey-3);\\n\\t\\t}\\n\\t}\\n\\n\\t/* add left border to first item on each row for mobile. */\\n\\t.grid-view li:nth-child(2n + 1) {\\n\\t\\tborder-left: 1px solid var(--grey-3);\\n\\n\\t\\t@media screen and (min-width: 1024px) {\\n\\t\\t\\tborder-left: none;\\n\\t\\t}\\n\\t}\\n\\n\\t/* add left border to first item on each row for desktop. */\\n\\t.grid-view li:nth-child(6n + 1) {\\n\\t\\t@media screen and (min-width: 1024px) {\\n\\t\\t\\tborder-left: 1px solid var(--grey-3);\\n\\t\\t}\\n\\t}\\n\\n\\t.list :global(li) {\\n\\t\\tborder-top: 1px solid var(--grey-3);\\n\\t}\\n\\n\\t.list :global(li:last-child) {\\n\\t\\tborder-bottom: 1px solid var(--grey-3);\\n\\t}\\n\\n\\t.content-container {\\n\\t\\ttransition: opacity 0.4s;\\n\\t\\tpointer-events: auto;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA8EC,yBAAU,CAAC,iBAAG,CACb,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,QAAQ,CAAC,CACtC,YAAY,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,QAAQ,CAAC,CACrC,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,OACd,CAEA,yBAAU,CAAC,iBAAE,CAAS,CAAG,CACxB,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,IACR,CAGA,yBAAU,CAAC,iBAAE,WAAW,MAAM,CAAE,CAC/B,UAAU,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,QAAQ,CACnC,CAGA,yBAAU,CAAC,iBAAE,WAAW,MAAM,CAAE,CAC/B,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,MAAM,CAAC,CAAC;AACxC,GAAG,YAAY,GAAG,CAAC,KAAK,CAAC,IAAI,QAAQ,CAAC;AACtC,GACC,CAGA,yBAAU,CAAC,iBAAE,WAAW,MAAM,CAAE,CAC/B,WAAW,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,QAAQ,CAAC,CAEpC,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,MAAM,CAAC,CAAC;AACxC,GAAG,aAAa,IAAI;AACpB,GACC,CAGA,yBAAU,CAAC,iBAAE,WAAW,MAAM,CAAE,CAC/B,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,MAAM,CAAC,CAAC;AACxC,GAAG,aAAa,GAAG,CAAC,KAAK,CAAC,IAAI,QAAQ,CAAC;AACvC,GACC,CAEA,oBAAK,CAAS,EAAI,CACjB,UAAU,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,QAAQ,CACnC,CAEA,oBAAK,CAAS,aAAe,CAC5B,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,QAAQ,CACtC,CAEA,gDAAmB,CAClB,UAAU,CAAE,OAAO,CAAC,IAAI,CACxB,cAAc,CAAE,IACjB"}`
};
const WipGrid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let wipItems;
  let paginationData;
  let totalCount;
  let range;
  let searchTerm;
  let { data, term, basePath = "/wip" } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.term === void 0 && $$bindings.term && term !== void 0)
    $$bindings.term(term);
  if ($$props.basePath === void 0 && $$bindings.basePath && basePath !== void 0)
    $$bindings.basePath(basePath);
  $$result.css.add(css);
  wipItems = data.wip;
  paginationData = data.paginationData;
  totalCount = data.totalCount;
  range = data.range;
  searchTerm = term;
  return `<div class="mt-20 lg:mt-40 pb-40 lg:pb-60"><div class="enter-in-1 text-center max-w-[250px] mx-auto"><h1 data-svelte-h="svelte-1eeoqyu">WIP</h1> ${searchTerm ? `<p class="mt-6">${escape(totalCount)} results for: <span class="bg-pink">“${escape(searchTerm)}”</span></p>` : ``}</div> <div class="${escape(null_to_empty(`content-container mt-8 lg:mt-48`), true) + " svelte-1a3dvfe"}"><div class="flex justify-between items-center">${validate_component(WipSearchButton, "WipSearchButton").$$render($$result, {}, {}, {})} ${`<p class="enter-in-1">${escape(range.from)} - ${escape(range.to)} of ${escape(totalCount)} items</p>`}</div> ${`<ul class="enter-in-1 delay-100 grid-view grid grid-cols-2 lg:grid-cols-6 mt-4 lg:mt-6 svelte-1a3dvfe">${each(wipItems, (item) => {
    return `<li${add_attribute("key", item._id, 0)} class="svelte-1a3dvfe">${validate_component(WipGridItem, "WipGridItem").$$render($$result, { item }, {}, {})} </li>`;
  })}</ul> ${paginationData.totalPages > 1 ? `${validate_component(Pagination, "Pagination").$$render($$result, { paginationData, basePath }, {}, {})}` : ``}`}</div> </div>`;
});
export {
  WipGrid as W
};
