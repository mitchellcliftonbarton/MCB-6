import { c as create_ssr_component, a as add_attribute, v as validate_component, e as escape } from "./ssr.js";
import { I as Image, V as VideoPreview, P as Play } from "./Play.js";
import { format } from "date-fns";
const css = {
  code: "@media screen and (min-width: 1024px){a.svelte-tbcu43:hover{border-color:var(--grey-3);background-color:var(--grey-1)}}.wip-grid-item.svelte-tbcu43 .play-icon{width:1.2rem;color:var(--primary)}",
  map: `{"version":3,"file":"WipGridItem.svelte","sources":["WipGridItem.svelte"],"sourcesContent":["<script>\\n\\timport Image from '$lib/components/Image.svelte';\\n\\timport VideoPreview from '$lib/components/VideoPreview.svelte';\\n\\timport Play from '$lib/components/Play.svelte';\\n\\t// import DotLoader from '$lib/components/DotLoader.svelte';\\n\\timport { format } from 'date-fns';\\n\\n\\t// props\\n\\texport let item;\\n\\n\\t// let imageLoaded = false;\\n\\n\\t// get first media item\\n\\t$: firstMediaItem = item.media[0];\\n<\/script>\\n\\n<a\\n\\thref={\`/wip/\${item.slug.current}\`}\\n\\tclass=\\"wip-grid-item aspect-square flex flex-col px-4 pt-4 pb-8\\"\\n>\\n\\t<div class=\\"image aspect-[3/4] lg:aspect-[3/2.5] relative\\">\\n\\t\\t<figure class=\\"fill-parent p-4\\">\\n\\t\\t\\t<!-- {#if !imageLoaded}\\n\\t\\t\\t\\t<DotLoader />\\n\\t\\t\\t{/if} -->\\n\\n\\t\\t\\t{#if firstMediaItem._type === 'Image' && firstMediaItem.asset}\\n\\t\\t\\t\\t<Image\\n\\t\\t\\t\\t\\timage={firstMediaItem}\\n\\t\\t\\t\\t\\talt={firstMediaItem.alt}\\n\\t\\t\\t\\t\\tclasses=\\"media-contain\\"\\n\\t\\t\\t\\t\\tmaxSize=\\"xs\\"\\n\\t\\t\\t\\t/>\\n\\t\\t\\t{:else if firstMediaItem._type === 'Video' && firstMediaItem.file}\\n\\t\\t\\t\\t<VideoPreview mediaItem={firstMediaItem} classes=\\"media-contain\\" />\\n\\t\\t\\t{/if}\\n\\t\\t</figure>\\n\\t</div>\\n\\n\\t<div class=\\"titles flex-none text-center pt-4\\">\\n\\t\\t<h2>{item.title}</h2>\\n\\n\\t\\t{#if item.medium || item.date}\\n\\t\\t\\t<div class=\\"mt-1 leading-[1.2] text-grey-5\\">\\n\\t\\t\\t\\t{#if item.date}\\n\\t\\t\\t\\t\\t<p>{format(new Date(item.date), 'MM.dd.yy')}</p>\\n\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t{#if item.medium}\\n\\t\\t\\t\\t\\t<p class=\\"line-clamp-1\\">{item.medium}</p>\\n\\t\\t\\t\\t{/if}\\n\\t\\t\\t</div>\\n\\t\\t{/if}\\n\\n\\t\\t{#if firstMediaItem._type === 'Video'}\\n\\t\\t\\t<div class=\\"flex justify-center mt-3\\">\\n\\t\\t\\t\\t<Play />\\n\\t\\t\\t</div>\\n\\t\\t{/if}\\n\\t</div>\\n</a>\\n\\n<style>\\n\\t/* a {\\n\\t\\tborder: 1px solid transparent;\\n\\t\\ttransition: border-color 0.3s;\\n\\t} */\\n\\n\\t@media screen and (min-width: 1024px) {\\n\\t\\ta:hover {\\n\\t\\t\\tborder-color: var(--grey-3);\\n\\t\\t\\tbackground-color: var(--grey-1);\\n\\t\\t}\\n\\t}\\n\\n\\t.wip-grid-item :global(.play-icon) {\\n\\t\\twidth: 1.2rem;\\n\\t\\tcolor: var(--primary);\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAmEC,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,MAAM,CAAE,CACrC,eAAC,MAAO,CACP,YAAY,CAAE,IAAI,QAAQ,CAAC,CAC3B,gBAAgB,CAAE,IAAI,QAAQ,CAC/B,CACD,CAEA,4BAAc,CAAS,UAAY,CAClC,KAAK,CAAE,MAAM,CACb,KAAK,CAAE,IAAI,SAAS,CACrB"}`
};
const WipGridItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let firstMediaItem;
  let { item } = $$props;
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  $$result.css.add(css);
  firstMediaItem = item.media[0];
  return `<a${add_attribute("href", `/wip/${item.slug.current}`, 0)} class="wip-grid-item aspect-square flex flex-col px-4 pt-4 pb-8 svelte-tbcu43"><div class="image aspect-[3/4] lg:aspect-[3/2.5] relative"><figure class="fill-parent p-4"> ${firstMediaItem._type === "Image" && firstMediaItem.asset ? `${validate_component(Image, "Image").$$render(
    $$result,
    {
      image: firstMediaItem,
      alt: firstMediaItem.alt,
      classes: "media-contain",
      maxSize: "xs"
    },
    {},
    {}
  )}` : `${firstMediaItem._type === "Video" && firstMediaItem.file ? `${validate_component(VideoPreview, "VideoPreview").$$render(
    $$result,
    {
      mediaItem: firstMediaItem,
      classes: "media-contain"
    },
    {},
    {}
  )}` : ``}`}</figure></div> <div class="titles flex-none text-center pt-4"><h2>${escape(item.title)}</h2> ${item.medium || item.date ? `<div class="mt-1 leading-[1.2] text-grey-5">${item.date ? `<p>${escape(format(new Date(item.date), "MM.dd.yy"))}</p>` : ``} ${item.medium ? `<p class="line-clamp-1">${escape(item.medium)}</p>` : ``}</div>` : ``} ${firstMediaItem._type === "Video" ? `<div class="flex justify-center mt-3">${validate_component(Play, "Play").$$render($$result, {}, {}, {})}</div>` : ``}</div> </a>`;
});
export {
  WipGridItem as W
};
