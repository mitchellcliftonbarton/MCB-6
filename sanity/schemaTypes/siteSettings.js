import {RichText} from '../utils/fields'

export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  groups: [
    {
      title: 'SEO',
      name: 'seo',
    },
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      group: 'seo',
      desciption: 'The title of the site',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'metaDescription',
      type: 'text',
      title: 'Meta Description',
      group: 'seo',
      description:
        'The meta description of the site. Will be used as the default — can be overriden on a per-page basis',
    },
    {
      name: 'ogImage',
      type: 'image',
      title: 'Open Graph Image',
      group: 'seo',
      description:
        'The image that will be used when sharing the site on social media. Will be used as the default — can be overriden on a per-page basis',
    },
    {
      title: 'Announcement',
      name: 'announcement',
      type: 'array',
      description: 'If present, this text will show an announcement bar on the home page.',
      of: RichText,
    },
  ],
}
