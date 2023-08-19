import { HBox, LinkButton } from '@src/components'
import { navItems } from '@src/constants'
import { styled } from '@src/styles/stitches.config'

const NavBarBox = styled(HBox, {
  position: 'absolute',
  width: '100%',
  h: ['128px'],
  px: ['80px'],
  justify: 'space-between',
  items: 'center',
  zIndex: '$always-on-top',
  borderBottom: '1px solid $black20'
})

export const Navbar = () => {
  return (
    <NavBarBox>
      <HBox
        css={{
          w: ['fit-content']
        }}>
        Logo
        {/* Your brand logo here */}
      </HBox>
      <HBox
        css={{
          justify: 'center',
          items: 'center',
          w: 'fit-content',
          gapX: ['56px']
        }}>
        {navItems.map((item) => (
          <LinkButton
            key={item.displayText}
            href={item.to}
            target={item.external ? '_blank' : '_self'}
            css={{
              gapX: '4px'
            }}>
            {item.displayText}
          </LinkButton>
        ))}
      </HBox>
    </NavBarBox>
  )
}
