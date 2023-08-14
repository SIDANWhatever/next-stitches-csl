/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useCallback, useState } from 'react'
import { WalletInstance } from './type'

interface WalletContext {
  hasConnectedWallet: boolean
  connectedWalletInstance: WalletInstance
  connectedWalletName: string
  connectingWallet: boolean
  connectWallet?: (walletName: string) => Promise<void>
  disconnect?: () => void
  error?: unknown
}

const INITIAL_STATE = {
  walletName: '',
  walletInstance: {} as WalletInstance
}

export const WalletContext = createContext<WalletContext>({
  hasConnectedWallet: false,
  connectedWalletInstance: INITIAL_STATE.walletInstance,
  connectedWalletName: INITIAL_STATE.walletName,
  connectingWallet: false
})

export const WalletProvider = ({ children }: { children: JSX.Element }) => {
  const [error, setError] = useState<unknown>(undefined)

  const [connectingWallet, setConnectingWallet] = useState<boolean>(false)

  const [connectedWalletInstance, setConnectedWalletInstance] = useState<WalletInstance>(INITIAL_STATE.walletInstance)

  const [connectedWalletName, setConnectedWalletName] = useState<string>(INITIAL_STATE.walletName)

  const connectWallet = useCallback(async (walletName: string) => {
    setConnectingWallet(true)

    console.log('walletName', walletName)

    const wallet = window?.cardano[walletName]
    console.log('hook wallet', wallet)

    const tryConnectWallet = async () => {
      try {
        const walletInstance = await wallet.enable()
        if (!walletInstance) throw new Error('Wallet instance is undefined')
        setConnectedWalletInstance(walletInstance)
        setConnectedWalletName(walletName)
        setError(undefined)
      } catch (err) {
        // TODO: Ask user to connect Dapp Wallet in extension
        console.log('Hi please connect', err)
      }
    }
    if (wallet) {
      tryConnectWallet()
    } else {
      // TODO: Ask user to install browser wallet extension
      setError(error)
      console.error(error)
    }

    setConnectingWallet(false)
  }, [])

  const disconnect = useCallback(() => {
    setConnectedWalletName(INITIAL_STATE.walletName)
    setConnectedWalletInstance(INITIAL_STATE.walletInstance)
  }, [])

  const values = {
    hasConnectedWallet: INITIAL_STATE.walletName !== connectedWalletName,
    connectedWalletInstance,
    connectedWalletName,
    connectingWallet,
    connectWallet,
    disconnect,
    error
  }

  return <WalletContext.Provider value={values}>{children}</WalletContext.Provider>
}
