import { WalletError } from '@src/appRedux/features/condition/conditionSlice'
import {
  ConnectWalletAddressDialog,
  ConnectWalletCollateralDialog,
  ConnectWalletFailedDialog,
  ConnectWalletInstallDialog
} from '@src/components'

export const RenderWalletErrorDialog = (error: WalletError) => {
  switch (error) {
    case 'address':
      return <ConnectWalletAddressDialog />
    case 'collateral':
      return <ConnectWalletCollateralDialog />
    case 'failed':
      return <ConnectWalletFailedDialog />
    case 'install':
      return <ConnectWalletInstallDialog />
    case '':
    default:
      return <></>
  }
}
