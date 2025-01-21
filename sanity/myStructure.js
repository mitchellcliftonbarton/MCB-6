import {CogIcon, HomeIcon, AsteriskIcon} from '@sanity/icons'

export const myStructure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .icon(CogIcon)
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.listItem()
        .title('Home Page')
        .icon(HomeIcon)
        .child(S.document().schemaType('homePage').documentId('homePage')),
      S.listItem()
        .title('WIP')
        .icon(AsteriskIcon)
        .child(
          S.list()
            .title('WIP')
            .items([
              S.documentTypeListItem('wip').title('WIP Items'),
              S.documentTypeListItem('wipCategory').title('WIP Categories'),
            ]),
        ),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !['siteSettings', 'homePage', 'wip', 'wipCategory'].includes(listItem.getId()),
      ),
    ])
