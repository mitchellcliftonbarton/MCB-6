import { c as client } from "../../../../chunks/client.js";
import { e as error } from "../../../../chunks/index.js";
async function load({ params }) {
  const { slug = "" } = params || {};
  const wip = await client.fetch(
    `
      *[_type == "wip" && slug.current == $slug][0] {
        title,
        slug,
        date,
        media[]{
          _type,
          alt,
          asset->{
            ...,
            metadata
          },
          file{
            asset->{
              ...,
              metadata
            }
          },
          vimeo_url,
          preview_video{
            asset->{
              ...,
              metadata
            }
          },
          poster{
            asset->{
              ...,
              metadata
            },
            alt
          }
        },
        image{
          asset->{
            ...,
            metadata
          }
        },
        alt,
        medium,
        notes,
        related[]->{
          title,
          slug,
          date,
          media[]{
            _type,
            alt,
            asset->{
              ...,
              metadata
            },
            file{
              asset->{
                ...,
                metadata
              }
            },
            vimeo_url,
            preview_video{
              asset->{
                ...,
                metadata
              }
            },
            poster{
              asset->{
                ...,
                metadata
              },
              alt
            }
          },
          medium
        },
        "previousItem": *[_type == "wip" && media != null && (date > ^.date || (date == ^.date && _createdAt > ^._createdAt))] | order(date asc, _createdAt asc)[0] {
          slug
        },
        "nextItem": *[_type == "wip" && media != null && (date < ^.date || (date == ^.date && _createdAt < ^._createdAt))] | order(date desc, _createdAt desc)[0] {
          slug
        },
        "totalCount": count(*[_type == "wip" && media != null]),
        "currentIndex": count(*[_type == "wip" && media != null && (date > ^.date || (date == ^.date && _createdAt > ^._createdAt))] | order(date asc, _createdAt asc)) + 1,
        "firstItem": *[_type == "wip" && media != null] | order(date desc, _createdAt desc)[0] {
          slug
        },
        "lastItem": *[_type == "wip" && media != null] | order(date asc, _createdAt asc)[0] {
          slug
        }
      }
    `,
    { slug }
  );
  if (!wip) {
    error(404, {
      message: "Not found"
    });
  }
  return {
    wipDetail: wip
  };
}
export {
  load
};
