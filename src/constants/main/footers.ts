import { Links } from '../links'

export type FooterItemsProps = {
  footers: {
    title: string
    items: {
      displayText: string
      to: string
      external?: boolean
    }[]
  }[]
}

export const footerItems: FooterItemsProps = {
  footers: [
    {
      title: 'Developers',
      items: [
        {
          displayText: 'Github',
          to: Links.GITHUB,
          external: true
        }
      ]
    }
  ]
}
