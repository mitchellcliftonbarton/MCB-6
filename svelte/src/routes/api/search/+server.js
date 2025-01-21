import { json } from '@sveltejs/kit';
import { client } from '$lib/sanity/client.js';

export async function POST({ request }) {
	const { searchTerm } = await request.json();

	const wip =
		await client.fetch(`*[_type == "wip" && ([title, medium] match "${searchTerm.toLowerCase()}*" || notes[].children[].text match "${searchTerm.toLowerCase()}*")][0...8] {
		title,
    slug,
    medium,
		date,
    notes,
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
	}`);

	return json({
		status: 'success',
		data: {
			text: `you searched for ${searchTerm}`,
			wip
		}
	});
}
