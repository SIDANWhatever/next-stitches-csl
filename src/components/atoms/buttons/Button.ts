import { styled } from '@src/styles/stitches.config'

export const Button = styled('button', {
  display: 'flex',
  pos: 'relative',
  p: ['8px 20px'],
  // bg: '$bgPrimary',
  rounded: '$button',
  fontFamily: '$primary',
  gradient: '$primary',
  justifyContent: 'center',
  cursor: 'pointer',
  borderStyle: 'none',
  '&:hover': {
    boxShadow: '$lg',
    opacity: '$hover'
  },
  variants: {
    style: {
      primary: {
        color: '$white',
        gradient: '$gradient-primary-button'
      },
      secondary: {
        color: '$textOnSecondary',
        gradient: '$gradient-secondary-button'
      },
      'action-primary': {
        p: ['4px 16px'],
        color: '$white',
        gradient: '$gradient-primary-button',
        rounded: '$button-action',
        border: '1px solid $primary'
      },
      'action-secondary': {
        p: ['4px 16px'],
        color: '$textSecondary',
        bg: '$white',
        rounded: '$button-action',
        border: '1px solid $primary'
      }
    },
    size: {
      sm: {
        p: ['6px 10px']
      },
      md: {
        p: ['8px 20px']
      },
      lg: {
        p: ['15px 25px']
      }
    }
  }
})
