import { CloseIcon } from '@assets/icons'
import { ButtonWrapper, HBox, IconWrapper, Overlay, OverlayInteract, VCard } from '@src/components'
import { styled } from '@src/styles/stitches.config'
import { ReactNode } from 'react'

const DialogContentBox = styled(VCard, {
  position: 'relative',
  display: 'flex',
  justifyContent: 'start',
  inset: '0 0 0 0',
  margin: 'auto',
  p: ['20px'],
  text: ['40px'],
  bg: '$white',
  w: ['80%', '60%', '40%'],
  h: 'content-fit',
  z: 1000,
  variants: {
    size: {
      xs: {
        w: ['80%', '60%', '40%']
      },
      sm: {
        w: ['80%', '60%', '50%']
      },
      md: {
        w: ['80%', '70%', '60%']
      },
      lg: {
        w: ['90%', '80%', '70%']
      }
    }
  }
})

const DialogTopBox = styled(HBox, {
  justify: 'space-between',
  zIndex: 10
})

export type DialogProps = {
  children: ReactNode
  onClose: () => void
  size?: 'lg' | 'md' | 'sm' | 'xs'
}

export const Dialog = ({ children, onClose, size = 'sm' }: DialogProps) => {
  return (
    <Overlay>
      <OverlayInteract onClick={() => onClose()} />
      <DialogContentBox size={size}>
        <DialogTopBox>
          <IconWrapper
            css={{
              w: ['14px'],
              h: ['14px'],
              ml: ['40px']
            }}>
            {/* Your brand logo here */}
          </IconWrapper>
          <ButtonWrapper onClick={() => onClose()}>
            <CloseIcon />
          </ButtonWrapper>
        </DialogTopBox>
        {children}
      </DialogContentBox>
    </Overlay>
  )
}
