import { useCondition } from '@src/appRedux/features'
import { MessageDialog } from '@src/components'

export const ConnectWalletFailedDialog = () => {
  const conditionStore = useCondition()

  const onClose = () => {
    conditionStore.setWalletError('')
  }
  return (
    <MessageDialog
      title="Failed"
      content={`Connect Wallet Failed`}
      onClose={() => onClose()}
      actionText="Try Again"
      action={() => onClose()}
    />
  )
}

export const ConnectWalletInstallDialog = () => {
  const conditionStore = useCondition()

  const onClose = () => {
    conditionStore.setWalletError('')
  }
  return (
    <MessageDialog
      title="Failed"
      content={`Connect Wallet Failed. Please install and connect Dapp Wallet to continue using the service.`}
      onClose={() => onClose()}
      actionText="Try Again"
      action={() => onClose()}
    />
  )
}

export const ConnectWalletCollateralDialog = () => {
  const conditionStore = useCondition()

  const onClose = () => {
    conditionStore.setWalletError('')
  }
  return (
    <MessageDialog
      title="Failed"
      content={`Connect Wallet Failed. Please set collateral to your wallet to continue using the service.`}
      onClose={() => onClose()}
      actionText="Try Again"
      action={() => onClose()}
    />
  )
}

export const ConnectWalletAddressDialog = () => {
  const conditionStore = useCondition()

  const onClose = () => {
    conditionStore.setWalletError('')
  }
  return (
    <MessageDialog
      title="Failed"
      content={`Connect Wallet Failed. Please make at least 1 transaction with your wallet to continue using the service.`}
      onClose={() => onClose()}
      actionText="Try Again"
      action={() => onClose()}
    />
  )
}
