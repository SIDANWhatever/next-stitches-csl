import { PageBackground, PageLayout, Text, VBox } from '@src/components'
import { styled } from '@src/styles/stitches.config'

const MainBox = styled(VBox, {
  position: 'relative',
  h: '100%',
  maxW: '1440px',
  margin: '0px auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
})

export default function Home() {
  return (
    <>
      <PageLayout>
        <PageBackground />

        <MainBox>
          <VBox
            css={{
              h: '100vh',
              justify: 'center',
              items: 'center'
            }}>
            <Text main="welcome">Hello World</Text>
          </VBox>
        </MainBox>
      </PageLayout>
    </>
  )
}
