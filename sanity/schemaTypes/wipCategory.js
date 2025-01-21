import {PackageIcon} from '@sanity/icons'

export default {
  name: 'wipCategory',
  type: 'document',
  title: 'WIP Category',
  icon: PackageIcon,
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
  ],
}
