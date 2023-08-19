import { Overlay } from '@src/components'
import { keyframes, styled } from '@src/styles/stitches.config'

const ringAnimation = keyframes({
  '0%': {
    transform: 'rotate(0deg)'
  },
  '100%': {
    transform: 'rotate(360deg)'
  }
})

const spanAnimation = keyframes({
  '0%': {
    transform: 'rotate(45deg)'
  },
  '100%': {
    transform: 'rotate(405deg)'
  }
})

const Ring = styled('div', {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  width: '176px',
  height: '176px',
  background: 'transparent',
  border: '1px solid #333033',
  borderRadius: 'calc(50% - 2px)',
  '&:before': {
    content: '',
    position: 'absolute',
    top: '-3px',
    left: '-3px',
    width: '100%',
    height: '100%',
    border: '3px solid transparent',
    background: 'transparent',
    borderTop: '3px solid #FBC985',
    borderRight: '3px solid #FBC985',
    borderRadius: '50%',
    animation: `${ringAnimation} 2s linear infinite`
  }
})

const Span = styled('span', {
  display: 'block',
  position: 'absolute',
  top: 'calc(50% - 2px)',
  left: '50%',
  width: 'calc(50% - 1px)',
  height: '4px',
  background: 'transparent',
  transformOrigin: 'left',
  animation: `${spanAnimation} 2s linear infinite`,
  '&:before': {
    content: '',
    position: 'absolute',
    top: '-6px',
    right: '-8px',
    width: '11px',
    height: '11px',
    background: '#FBC985',
    borderRadius: '50%',
    boxShadow: '0 0 20px 4px #FBC985'
  }
})

export const Loading = () => {
  return (
    <Overlay>
      <Ring>
        <Span />
      </Ring>
    </Overlay>
  )
}
