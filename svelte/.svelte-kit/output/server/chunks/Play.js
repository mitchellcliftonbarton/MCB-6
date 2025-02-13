import { c as create_ssr_component, a as add_attribute, v as validate_component } from "./ssr.js";
import { u as urlFor } from "./client.js";
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let srcset;
  let sizes;
  let { image, alt, disableLazyLoading, classes } = $$props;
  let { maxSize = "lg" } = $$props;
  let imageUrls = [];
  const sizeObjects = [
    { name: "xs", width: 200 },
    { name: "sm", width: 500 },
    { name: "md", width: 800 },
    { name: "lg", width: 1500 }
  ];
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.disableLazyLoading === void 0 && $$bindings.disableLazyLoading && disableLazyLoading !== void 0)
    $$bindings.disableLazyLoading(disableLazyLoading);
  if ($$props.classes === void 0 && $$bindings.classes && classes !== void 0)
    $$bindings.classes(classes);
  if ($$props.maxSize === void 0 && $$bindings.maxSize && maxSize !== void 0)
    $$bindings.maxSize(maxSize);
  {
    {
      imageUrls = [];
      for (const size of sizeObjects) {
        const imageUrl = urlFor(image.asset.url).width(size.width).url();
        imageUrls.push({ width: size.width, url: imageUrl });
        if (size.name === maxSize) {
          break;
        }
      }
    }
  }
  srcset = imageUrls.map((image2) => `${image2.url} ${image2.width}w`).join(", ");
  sizes = imageUrls.map((image2) => `(max-width: ${image2.width}px) ${image2.width}px`).join(", ");
  return `<img${add_attribute("data-srcset", srcset, 0)}${add_attribute("sizes", sizes, 0)}${add_attribute("alt", alt, 0)}${add_attribute("loading", disableLazyLoading ? "eager" : "lazy", 0)}${add_attribute("fetchpriority", disableLazyLoading ? "high" : "auto", 0)}${add_attribute("class", `lazyload ${classes}`, 0)}>`;
});
const VideoPreview = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let previewVideo;
  let poster;
  let { mediaItem, classes } = $$props;
  if ($$props.mediaItem === void 0 && $$bindings.mediaItem && mediaItem !== void 0)
    $$bindings.mediaItem(mediaItem);
  if ($$props.classes === void 0 && $$bindings.classes && classes !== void 0)
    $$bindings.classes(classes);
  previewVideo = mediaItem.preview_video;
  poster = mediaItem.poster;
  return `${previewVideo ? `<video${add_attribute("class", classes, 0)}${add_attribute("poster", poster.asset.url, 0)} autoplay loop muted playsinline preload="metadata"><source${add_attribute("src", previewVideo.asset.url, 0)} type="video/mp4"></video>` : `${validate_component(Image, "Image").$$render(
    $$result,
    {
      image: poster,
      alt: poster.alt,
      classes: "media-contain"
    },
    {},
    {}
  )}`}`;
});
const Play = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg class="play-icon" viewBox="0 0 82 94" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M82 47L0.250003 93.7654L0.250007 0.234627L82 47Z" fill="currentColor"></path></svg>`;
});
export {
  Image as I,
  Play as P,
  VideoPreview as V
};
