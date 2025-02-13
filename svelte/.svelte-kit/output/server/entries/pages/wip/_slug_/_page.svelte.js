import { n as null_to_empty } from "../../../../chunks/utils.js";
import { c as create_ssr_component, a as add_attribute, v as validate_component, e as escape, d as each } from "../../../../chunks/ssr.js";
import { format } from "date-fns";
import { c as components, P as PortableText } from "../../../../chunks/utils2.js";
import { I as Image } from "../../../../chunks/Play.js";
import { W as WipGridItem } from "../../../../chunks/WipGridItem.js";
import { N as NavOptionsDropdown } from "../../../../chunks/NavOptionsDropdown.js";
const Video = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { mediaItem, classes } = $$props;
  const previewVideo = mediaItem.preview_video;
  const poster = mediaItem.poster;
  if ($$props.mediaItem === void 0 && $$bindings.mediaItem && mediaItem !== void 0)
    $$bindings.mediaItem(mediaItem);
  if ($$props.classes === void 0 && $$bindings.classes && classes !== void 0)
    $$bindings.classes(classes);
  return `${previewVideo ? ` <video${add_attribute("class", classes, 0)}${add_attribute("poster", poster.asset.url, 0)} loop playsinline preload="metadata" controls><source${add_attribute("src", previewVideo.asset.url, 0)} type="video/mp4"></video>` : `${validate_component(Image, "Image").$$render(
    $$result,
    {
      image: poster,
      alt: poster.alt,
      classes: "media-contain " + classes
    },
    {},
    {}
  )}`}`;
});
const css = {
  code: ".info.svelte-35slvr.svelte-35slvr.svelte-35slvr{height:auto;@media screen and (min-width: 1024px) {\n			height: calc(100svh - var(--nav-height));\n		}}.info.svelte-35slvr>.svelte-35slvr+.svelte-35slvr{margin-top:1.5rem}.related.svelte-35slvr.svelte-35slvr.svelte-35slvr{@media screen and (min-width: 1024px) {\n			min-height: calc(100svh - var(--nav-height));\n		}}.related-inner.svelte-35slvr.svelte-35slvr.svelte-35slvr{margin:auto}.related-items.svelte-35slvr li.svelte-35slvr.svelte-35slvr{border-top:1px solid var(--grey-3);border-left:1px solid var(--grey-3);border-right:1px solid var(--grey-3)}.related-items.svelte-35slvr li.svelte-35slvr.svelte-35slvr:last-child{border-bottom:1px solid var(--grey-3)}.breadcrumbs.svelte-35slvr svg{width:1.1rem;margin:0 0.6rem}.image-container.is-image.svelte-35slvr.svelte-35slvr.svelte-35slvr{max-height:calc(100svh - (var(--nav-height) * 3));margin:0 auto}.image-container.svelte-35slvr video{@media screen and (min-width: 1024px) {\n			max-width: 100%;\n			max-height: calc(100svh - (var(--nav-height) * 3.5));\n		}}.image.svelte-35slvr>.svelte-35slvr+.svelte-35slvr{margin-top:2rem;@media screen and (min-width: 1024px) {\n			margin-top: 5rem;\n		}}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n\\timport { format } from 'date-fns';\\n\\timport { PortableText } from '@portabletext/svelte';\\n\\timport { components } from '$lib/utils';\\n\\timport Image from '$lib/components/Image.svelte';\\n\\timport Video from '$lib/components/Video.svelte';\\n\\timport WipGridItem from '$lib/components/WipGridItem.svelte';\\n\\timport NavOptionsDropdown from '$lib/components/NavOptionsDropdown.svelte';\\n\\timport { onMount } from 'svelte';\\n\\n\\t// props\\n\\texport let data;\\n\\n\\t// making this reactive so the page updates when the data changes\\n\\t$: wip = data.wipDetail;\\n\\n\\tlet showNotes = false;\\n\\n\\tonMount(() => {\\n\\t\\tconsole.log(wip.media);\\n\\t});\\n<\/script>\\n\\n<svelte:head>\\n\\t<title>Mitchell Barton | WIP | {wip.title}</title>\\n</svelte:head>\\n\\n<div class=\\"wip-container grid grid-cols-4 items-start pb-32 lg:pb-60\\">\\n\\t{#key wip}\\n\\t\\t<div class=\\"flex lg:hidden justify-between bg-grey-1 col-span-4 py-2 px-4 z-10 relative\\">\\n\\t\\t\\t<p>{wip.currentIndex} of {wip.totalCount}</p>\\n\\n\\t\\t\\t<NavOptionsDropdown wipDetail={wip} />\\n\\t\\t</div>\\n\\n\\t\\t<div\\n\\t\\t\\tclass=\\"info enter-in-1 pt-8 lg:pt-0 lg:px-32 col-span-4 lg:col-span-1 flex flex-col items-center justify-center\\"\\n\\t\\t>\\n\\t\\t\\t<div class=\\"breadcrumbs text-center\\">\\n\\t\\t\\t\\t<h1 class=\\"italic inline\\">{wip.title}</h1>\\n\\n\\t\\t\\t\\t{#if wip.date}\\n\\t\\t\\t\\t\\t<p class=\\"text-grey-5\\">{format(new Date(wip.date), 'MM.dd.yy')}</p>\\n\\t\\t\\t\\t{/if}\\n\\n\\t\\t\\t\\t{#if wip.medium}\\n\\t\\t\\t\\t\\t<p class=\\"text-grey-5\\">{wip.medium}</p>\\n\\t\\t\\t\\t{/if}\\n\\t\\t\\t</div>\\n\\n\\t\\t\\t{#if wip.notes}\\n\\t\\t\\t\\t<div class=\\"text-center hidden lg:block\\">\\n\\t\\t\\t\\t\\t<PortableText value={wip.notes} {components} />\\n\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t<div class=\\"lg:hidden text-center\\">\\n\\t\\t\\t\\t\\t<button on:click={() => (showNotes = !showNotes)}>\\n\\t\\t\\t\\t\\t\\tNotes <span class=\\"inline-block w-4\\">{showNotes ? '-' : '+'}</span>\\n\\t\\t\\t\\t\\t</button>\\n\\n\\t\\t\\t\\t\\t{#if showNotes}\\n\\t\\t\\t\\t\\t\\t<div class=\\"mt-4\\">\\n\\t\\t\\t\\t\\t\\t\\t<PortableText value={wip.notes} {components} />\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t{/if}\\n\\t\\t</div>\\n\\n\\t\\t<div class=\\"image enter-in-1 col-span-4 lg:col-span-2 mt-12 lg:mt-0 lg:py-20\\">\\n\\t\\t\\t{#if wip.media.length > 0}\\n\\t\\t\\t\\t{#each wip.media as media}\\n\\t\\t\\t\\t\\t<div\\n\\t\\t\\t\\t\\t\\tclass={\`image-container relative \${media._type === 'Image' && media.asset ? 'is-image' : 'is-video'}\`}\\n\\t\\t\\t\\t\\t\\tstyle=\\"aspect-ratio: {media.asset?.metadata?.dimensions?.aspectRatio ?? 'auto'};\\"\\n\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t<figure class={media.asset?.metadata?.dimensions?.aspectRatio ? 'fill-parent' : ''}>\\n\\t\\t\\t\\t\\t\\t\\t{#if media._type === 'Image' && media.asset}\\n\\t\\t\\t\\t\\t\\t\\t\\t<Image image={media} alt={media.alt} classes=\\"media-cover\\" />\\n\\t\\t\\t\\t\\t\\t\\t{:else if media._type === 'Video' && media.file}\\n\\t\\t\\t\\t\\t\\t\\t\\t<Video mediaItem={media} classes=\\"media-contain\\" />\\n\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t</figure>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t{/each}\\n\\t\\t\\t{/if}\\n\\t\\t</div>\\n\\n\\t\\t{#if wip?.related?.length > 0}\\n\\t\\t\\t<div class=\\"related enter-in-1 lg:px-32 col-span-4 lg:col-span-1 flex flex-col py-20\\">\\n\\t\\t\\t\\t<div class=\\"related-inner text-center\\">\\n\\t\\t\\t\\t\\t<h2>Related</h2>\\n\\n\\t\\t\\t\\t\\t<ul class=\\"related-items mt-8\\">\\n\\t\\t\\t\\t\\t\\t{#each wip.related as item}\\n\\t\\t\\t\\t\\t\\t\\t<li class=\\"w-[200px]\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<WipGridItem {item} />\\n\\t\\t\\t\\t\\t\\t\\t</li>\\n\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t</ul>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t{/if}\\n\\t{/key}\\n</div>\\n\\n<style>\\n\\t.info {\\n\\t\\theight: auto;\\n\\n\\t\\t@media screen and (min-width: 1024px) {\\n\\t\\t\\theight: calc(100svh - var(--nav-height));\\n\\t\\t}\\n\\t}\\n\\n\\t.info > * + * {\\n\\t\\tmargin-top: 1.5rem;\\n\\t}\\n\\n\\t.related {\\n\\t\\t@media screen and (min-width: 1024px) {\\n\\t\\t\\tmin-height: calc(100svh - var(--nav-height));\\n\\t\\t}\\n\\t}\\n\\n\\t.related-inner {\\n\\t\\tmargin: auto;\\n\\t}\\n\\n\\t.related-items li {\\n\\t\\tborder-top: 1px solid var(--grey-3);\\n\\t\\tborder-left: 1px solid var(--grey-3);\\n\\t\\tborder-right: 1px solid var(--grey-3);\\n\\t}\\n\\n\\t.related-items li:last-child {\\n\\t\\tborder-bottom: 1px solid var(--grey-3);\\n\\t}\\n\\n\\t.breadcrumbs :global(svg) {\\n\\t\\twidth: 1.1rem;\\n\\t\\tmargin: 0 0.6rem;\\n\\t}\\n\\n\\t.image-container.is-image {\\n\\t\\tmax-height: calc(100svh - (var(--nav-height) * 3));\\n\\t\\tmargin: 0 auto;\\n\\t}\\n\\n\\t/* .image-container :global(img), */\\n\\t.image-container :global(video) {\\n\\t\\t@media screen and (min-width: 1024px) {\\n\\t\\t\\tmax-width: 100%;\\n\\t\\t\\tmax-height: calc(100svh - (var(--nav-height) * 3.5));\\n\\t\\t}\\n\\t}\\n\\n\\t.image > * + * {\\n\\t\\tmargin-top: 2rem;\\n\\n\\t\\t@media screen and (min-width: 1024px) {\\n\\t\\t\\tmargin-top: 5rem;\\n\\t\\t}\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA2GC,+CAAM,CACL,MAAM,CAAE,IAAI,CAEZ,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,MAAM,CAAC,CAAC;AACxC,GAAG,QAAQ,KAAK,MAAM,CAAC,CAAC,CAAC,IAAI,YAAY,CAAC,CAAC;AAC3C,GACC,CAEA,mBAAK,CAAG,cAAC,CAAG,cAAE,CACb,UAAU,CAAE,MACb,CAEA,kDAAS,CACR,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,MAAM,CAAC,CAAC;AACxC,GAAG,YAAY,KAAK,MAAM,CAAC,CAAC,CAAC,IAAI,YAAY,CAAC,CAAC;AAC/C,GACC,CAEA,wDAAe,CACd,MAAM,CAAE,IACT,CAEA,4BAAc,CAAC,8BAAG,CACjB,UAAU,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,QAAQ,CAAC,CACnC,WAAW,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,QAAQ,CAAC,CACpC,YAAY,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,QAAQ,CACrC,CAEA,4BAAc,CAAC,8BAAE,WAAY,CAC5B,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,QAAQ,CACtC,CAEA,0BAAY,CAAS,GAAK,CACzB,KAAK,CAAE,MAAM,CACb,MAAM,CAAE,CAAC,CAAC,MACX,CAEA,gBAAgB,mDAAU,CACzB,UAAU,CAAE,KAAK,MAAM,CAAC,CAAC,CAAC,CAAC,IAAI,YAAY,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAClD,MAAM,CAAE,CAAC,CAAC,IACX,CAGA,8BAAgB,CAAS,KAAO,CAC/B,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,MAAM,CAAC,CAAC;AACxC,GAAG,WAAW,IAAI;AAClB,GAAG,YAAY,KAAK,MAAM,CAAC,CAAC,CAAC,CAAC,IAAI,YAAY,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC;AACvD,GACC,CAEA,oBAAM,CAAG,cAAC,CAAG,cAAE,CACd,UAAU,CAAE,IAAI,CAEhB,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,MAAM,CAAC,CAAC;AACxC,GAAG,YAAY,IAAI;AACnB,GACC"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let wip;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  wip = data.wipDetail;
  return `${$$result.head += `<!-- HEAD_svelte-mww7q4_START -->${$$result.title = `<title>Mitchell Barton | WIP | ${escape(wip.title)}</title>`, ""}<!-- HEAD_svelte-mww7q4_END -->`, ""} <div class="wip-container grid grid-cols-4 items-start pb-32 lg:pb-60"><div class="flex lg:hidden justify-between bg-grey-1 col-span-4 py-2 px-4 z-10 relative"><p>${escape(wip.currentIndex)} of ${escape(wip.totalCount)}</p> ${validate_component(NavOptionsDropdown, "NavOptionsDropdown").$$render($$result, { wipDetail: wip }, {}, {})}</div> <div class="info enter-in-1 pt-8 lg:pt-0 lg:px-32 col-span-4 lg:col-span-1 flex flex-col items-center justify-center svelte-35slvr"><div class="breadcrumbs text-center svelte-35slvr"><h1 class="italic inline">${escape(wip.title)}</h1> ${wip.date ? `<p class="text-grey-5">${escape(format(new Date(wip.date), "MM.dd.yy"))}</p>` : ``} ${wip.medium ? `<p class="text-grey-5">${escape(wip.medium)}</p>` : ``}</div> ${wip.notes ? `<div class="text-center hidden lg:block svelte-35slvr">${validate_component(PortableText, "PortableText").$$render($$result, { value: wip.notes, components }, {}, {})}</div> <div class="lg:hidden text-center svelte-35slvr"><button>Notes <span class="inline-block w-4">${escape("+")}</span></button> ${``}</div>` : ``}</div> <div class="image enter-in-1 col-span-4 lg:col-span-2 mt-12 lg:mt-0 lg:py-20 svelte-35slvr">${wip.media.length > 0 ? `${each(wip.media, (media) => {
    return `<div class="${escape(
      null_to_empty(`image-container relative ${media._type === "Image" && media.asset ? "is-image" : "is-video"}`),
      true
    ) + " svelte-35slvr"}" style="${"aspect-ratio: " + escape(media.asset?.metadata?.dimensions?.aspectRatio ?? "auto", true) + ";"}"><figure${add_attribute(
      "class",
      media.asset?.metadata?.dimensions?.aspectRatio ? "fill-parent" : "",
      0
    )}>${media._type === "Image" && media.asset ? `${validate_component(Image, "Image").$$render(
      $$result,
      {
        image: media,
        alt: media.alt,
        classes: "media-cover"
      },
      {},
      {}
    )}` : `${media._type === "Video" && media.file ? `${validate_component(Video, "Video").$$render(
      $$result,
      {
        mediaItem: media,
        classes: "media-contain"
      },
      {},
      {}
    )}` : ``}`}</figure> </div>`;
  })}` : ``}</div> ${wip?.related?.length > 0 ? `<div class="related enter-in-1 lg:px-32 col-span-4 lg:col-span-1 flex flex-col py-20 svelte-35slvr"><div class="related-inner text-center svelte-35slvr"><h2 data-svelte-h="svelte-1nm7e2v">Related</h2> <ul class="related-items mt-8 svelte-35slvr">${each(wip.related, (item) => {
    return `<li class="w-[200px] svelte-35slvr">${validate_component(WipGridItem, "WipGridItem").$$render($$result, { item }, {}, {})} </li>`;
  })}</ul></div></div>` : ``} </div>`;
});
export {
  Page as default
};
