import { styled } from '@src/styles/stitches.config'

export const Card = styled('div', {
  display: 'flex',
  w: '100%',
  bg: '$white',
  color: '$title',
  rounded: '$card',
  justify: 'center',
  boxShadow: '$card'
})

export const HCard = styled(Card, {
  variants: {
    direction: {
      rowReverse: {
        flexDirection: 'row-reverse'
      }
    }
  }
})

export const VCard = styled(Card, {
  flexDirection: 'column',
  variants: {
    direction: {
      columnReverse: {
        flexDirection: 'column-reverse'
      }
    },
    popup: {
      wallet: {
        backgroundColor: '$bgSecondary',
        w: ['247px', '385px', '413px'],
        borderTop: '3.5px solid $primary',
        padding: '32px',
        rounded: '0'
      }
    }
  }
})
