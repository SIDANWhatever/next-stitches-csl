import { useAppDispatch, useAppSelector } from '@src/appRedux/hooks'
import { WalletError, setGeneralError, setShowOrHide, setWalletError } from './conditionSlice'

class ConditionRedux {
  dispatch = useAppDispatch()

  isShowWallet = useAppSelector((state) => state.condition.showConnect)
  showGeneralError = useAppSelector((state) => state.condition.showGeneralError)
  showWalletError = useAppSelector((state) => state.condition.showWalletError)

  showWallet() {
    this.dispatch(setShowOrHide(true))
  }

  hideWallet() {
    this.dispatch(setShowOrHide(false))
  }

  setGeneralError(show: boolean) {
    this.dispatch(setGeneralError(show))
  }

  setWalletError(error: WalletError) {
    this.dispatch(setWalletError(error))
  }
}

export const useCondition = () => {
  return new ConditionRedux()
}
