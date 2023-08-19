import { DiscordIcon, MediumIcon, TwitterIcon } from '@assets/icons'
import { SocialLinks, footerItems } from '@src/constants'
import { ButtonWrapper, HBox, HLine, LinkButton, Text, VBox, VLine } from '@src/components'
import { styled } from '@src/styles/stitches.config'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const FooterBox = styled(VBox, {
  display: 'flex',
  flexDirection: 'column',
  justify: 'center',
  items: 'center',
  w: ['80%', '80%', '100%', '100%'],
  p: ['24px 20px 0px 20px', '24px 20px 0px 20px', '80px 100px 0px 100px', '124px 130px 0px 130px'],
  gapY: ['16px', '16px', '28px'],
  overflow: 'hidden'
})

const FooterInfoBox = styled(VBox, {
  items: 'start',
  justify: 'start',
  gapY: ['12px'],
  w: ['80%', '80%', '80%', '30%'],
  mr: ['12%']
})

const FooterContentBox = styled(HBox, {
  w: ['80%', '80%', '80%', '50%'],
  items: 'start',
  justify: 'start',
  color: '$white',
  gapX: ['20px']
})

const FooterSectionBox = styled(VBox, {
  items: 'start',
  justify: 'start',
  gapY: ['12px']
})

export const Footer = () => {
  const [width, setWidth] = useState(1000)
  useEffect(() => {
    setWidth(window.innerWidth)
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [])

  const onMediumClick = () => {
    window.open(SocialLinks.MEDIUM, '_blank')
  }

  const onTwitterClick = () => {
    window.open(SocialLinks.TWITTER, '_blank')
  }

  const onDiscordClick = () => {
    window.open(SocialLinks.DISCORD, '_blank')
  }

  return (
    <FooterBox id="footerContainer">
      <HBox
        css={{
          position: 'relative',
          flexDir: ['column', 'column', 'column', 'row'],
          gapY: '44px'
        }}>
        <FooterInfoBox>
          <VBox
            css={{
              h: '100%',
              justify: 'space-between',
              items: 'start'
            }}>
            <HBox
              css={{
                w: '100%',
                gapX: ['12px']
              }}>
              <ButtonWrapper onClick={() => onMediumClick()}>
                <MediumIcon />
              </ButtonWrapper>
              <ButtonWrapper onClick={() => onTwitterClick()}>
                <TwitterIcon />
              </ButtonWrapper>
              <ButtonWrapper onClick={() => onDiscordClick()}>
                <DiscordIcon />
              </ButtonWrapper>
            </HBox>
          </VBox>
        </FooterInfoBox>
        <FooterContentBox>
          {footerItems.footers.map((footerSection) => (
            <FooterSectionBox key={footerSection.title}>
              <Text
                footer="title"
                css={{
                  mb: ['12px']
                }}>
                {footerSection.title}
              </Text>
              {footerSection.items.map((sectionItem) => (
                <LinkButton key={sectionItem.displayText} href={sectionItem.to} target={sectionItem.external ? '_blank' : '_self'}>
                  <Text footer="link">{sectionItem.displayText}</Text>
                </LinkButton>
              ))}
            </FooterSectionBox>
          ))}
        </FooterContentBox>
      </HBox>
      <VBox
        css={{
          w: '100%',
          justify: 'center'
        }}>
        <HLine
          css={{
            h: '2px',
            background: '$white'
          }}
        />
        <Text
          footer="copyright"
          css={{
            mt: ['16px', '16px', '32px'],
            mb: ['12px', '12px', '20px'],
            display: 'flex'
          }}>
          Copyright @
          <Text
            footer="company"
            css={{
              ml: ['4px']
            }}>
            Your company
          </Text>
          . All Rights Reserved.
        </Text>
      </VBox>
    </FooterBox>
  )
}
