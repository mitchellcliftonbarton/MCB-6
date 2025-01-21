import {RichText, Image, Video} from '../utils/fields'
import {ProjectsIcon} from '@sanity/icons'
import {format} from 'date-fns'

export default {
  name: 'wip',
  type: 'document',
  title: 'WIP',
  icon: ProjectsIcon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
      },
    },
    {
      title: 'Date',
      name: 'date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Media',
      name: 'media',
      type: 'array',
      of: [...Image, ...Video],
      options: {
        layout: 'grid',
      },
    },
    {
      title: 'Medium',
      name: 'medium',
      type: 'text',
    },
    {
      title: 'Notes',
      name: 'notes',
      type: 'array',
      of: RichText,
    },
    // reference to wipCategory items in a checkbox list
    {
      title: 'Categories',
      name: 'categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'wipCategory'}],
        },
      ],
    },
    {
      title: 'Related WIPs',
      name: 'related',
      type: 'array',
      layout: 'grid',
      of: [
        {
          type: 'reference',
          to: [{type: 'wip'}],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
      slug: 'slug',
      media: 'media',
    },
    prepare({title, date, slug, media}) {
      const hasMedia = media && media.length > 0
      let mediaPreview = hasMedia ? media[0] : null

      return {
        title: title,
        subtitle: `${slug.current} / ${format(new Date(date), 'MMM dd, yyyy')}`,
        media: mediaPreview,
      }
    },
  },
}
