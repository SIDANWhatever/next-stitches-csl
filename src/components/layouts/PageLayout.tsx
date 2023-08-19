import { useCondition } from '@src/appRedux/features'
import { Footer, GeneralErrorDialog, Navbar, VBox } from '@src/components'
import { RenderWalletErrorDialog } from '@src/helpers'
import { styled } from '@src/styles/stitches.config'
import { DateTime, Settings } from 'luxon'
import Head from 'next/head'
import { FC, ReactNode } from 'react'

const LayoutBox = styled(VBox, {
  position: 'relative',
  w: '100%',
  items: 'center',
  justify: 'center',
  minH: '100dvh',
  overflow: 'hidden',
  pt: ['80px'] // Navbar height
})

export interface PageLayoutProps {
  children: ReactNode
}

export const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  const conditionStore = useCondition()

  const SITE_TITLE = 'Next Stitches csl boilerplate'
  Settings.defaultLocale = DateTime.now().locale || 'en-HK'

  return (
    <>
      <Head>
        <link href="/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
        <link href="/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
        <link href="/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
        <link href="/favicon-16x16.png" rel="apple-touch-icon" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        <link href="/favicon.ico" rel="icon" />
        <meta content={SITE_TITLE} />
        <meta content="Cardano Name Service is a decentralized naming service for the Cardano blockchain." name="description" />
        <meta name="viewport" content="viewport-fit=cover, width=device-width, initial-scale=1.0" />
      </Head>
      <main>
        <Navbar />
        <LayoutBox>
          {conditionStore.showGeneralError && (
            <GeneralErrorDialog onClose={() => conditionStore.setGeneralError(!conditionStore.showGeneralError)} />
          )}
          {RenderWalletErrorDialog(conditionStore.showWalletError)}

          {children}
          <Footer />
        </LayoutBox>
      </main>
    </>
  )
}
