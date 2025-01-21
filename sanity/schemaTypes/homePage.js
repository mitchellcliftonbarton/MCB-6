import {RichText} from '../utils/fields'
import {TextIcon, ImageIcon} from '@sanity/icons'

export default {
  name: 'homePage',
  type: 'document',
  title: 'Home Page',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'gridItems',
      type: 'array',
      title: 'GridItems',
      of: [
        {
          type: 'object',
          name: 'textBlock',
          icon: TextIcon,
          fields: [
            {
              title: 'Text',
              name: 'text',
              type: 'array',
              of: RichText,
            },
            {
              title: 'Column Count',
              name: 'columnCount',
              type: 'string',
              options: {
                list: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
              },
              initialValue: '3',
            },
          ],
          preview: {
            select: {
              text: 'text',
              columnCount: 'columnCount',
            },
            prepare: (selection) => {
              const {text, columnCount} = selection
              return {
                title: text[0].children[0].text,
                subtitle: `${columnCount} columns`,
              }
            },
          },
        },
        {
          type: 'object',
          name: 'imageBlock',
          icon: ImageIcon,
          fields: [
            {
              title: 'Slug',
              name: 'slug',
              type: 'slug',
              validation: (Rule) => Rule.required(),
              options: {
                source: 'text',
              },
            },
            {
              title: 'Image',
              name: 'image',
              type: 'image',
            },
            {
              title: 'Alt Text',
              name: 'alt',
              type: 'string',
            },
            {
              title: 'Text',
              name: 'text',
              type: 'array',
              of: RichText,
            },
            {
              title: 'Column Count',
              name: 'columnCount',
              type: 'string',
              options: {
                list: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
              },
              initialValue: '3',
            },
            {
              title: 'Disable Lazy Loading',
              name: 'disableLazyLoading',
              type: 'boolean',
              description:
                'If checked, the image will load immediately instead of waiting for it to scroll into view',
            },
          ],
          preview: {
            select: {
              text: 'text',
              columnCount: 'columnCount',
              image: 'image',
            },
            prepare: (selection) => {
              const {text, columnCount, image} = selection
              return {
                title: text[0].children[0].text,
                subtitle: `${columnCount} columns`,
                media: image,
              }
            },
          },
        },
      ],
    },
  ],
}
