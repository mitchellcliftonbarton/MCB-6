import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
	projectId: 'gtluhvlm',
	dataset: 'production',
	apiVersion: '2024-07-19',
	useCdn: true
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
	return builder.image(source);
};

export const getImageHeight = (width, aspectRatio) => {
	return width / aspectRatio;
};

export const wipFragment = `
	_id,
	title,
	slug,
	date,
	_createdAt,
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
	medium,
	categories[]->{
		slug,
		title
	},
	related[]->{
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
		}
	},`;
