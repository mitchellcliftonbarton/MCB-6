export const RichText = [
  {
    type: 'block',
    marks: {
      annotations: [
        {
          name: 'link',
          type: 'object',
          title: 'External link',
          fields: [
            {
              name: 'href',
              type: 'string',
              title: 'URL',
            },
            {
              title: 'Open in new tab',
              name: 'blank',
              type: 'boolean',
            },
          ],
        },
      ],
    },
  },
]

export const Image = [
  {
    type: 'image',
    name: 'Image',
    fields: [
      {
        name: 'alt',
        type: 'string',
        title: 'Alt text',
      },
    ],
  },
]

export const Video = [
  {
    type: 'object',
    name: 'Video',
    fields: [
      {
        name: 'video_type',
        type: 'string',
        title: 'Video Type',
        options: {
          list: [
            {title: 'MP4', value: 'mp4'},
            {title: 'Vimeo', value: 'vimeo'},
          ],
          layout: 'radio',
        },
        initialValue: 'mp4',
      },
      {
        name: 'file',
        type: 'file',
        title: 'MP4',
        options: {
          accept: 'video/mp4',
        },
        hidden: ({parent}) => parent.video_type !== 'mp4',
      },
      {
        name: 'vimeo_url',
        type: 'url',
        title: 'Vimeo URL',
        hidden: ({parent}) => parent.video_type !== 'vimeo',
      },
      {
        name: 'preview_video',
        type: 'file',
        title: 'Preview Video',
        options: {
          accept: 'video/mp4',
        },
        description: 'Shouldnt be longer than 5 seconds.',
      },
      {
        name: 'poster',
        type: 'image',
        title: 'Poster image',
        fields: [
          {
            name: 'alt',
            type: 'string',
            title: 'Alt text',
          },
        ],
      },
    ],
  },
]
