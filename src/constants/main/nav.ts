export type NavItemsProps = {
  displayText: string
  to: string
  external: boolean
}

export const navItems: NavItemsProps[] = [
  {
    displayText: 'Home',
    to: '/',
    external: false
  }
]
