import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type WalletError = 'failed' | 'collateral' | 'address' | 'install' | ''

interface ConditionState {
  showConnect: boolean
  showGeneralError: boolean
  showWalletError: WalletError
}

export const initialState: ConditionState = {
  showConnect: false,
  showGeneralError: false,
  showWalletError: ''
}

export const conditionSlice = createSlice({
  name: 'condition',
  initialState,
  reducers: {
    setShowOrHide: (state, action: PayloadAction<boolean>) => {
      state.showConnect = action.payload
    },
    setGeneralError: (state, action: PayloadAction<boolean>) => {
      state.showGeneralError = action.payload
    },
    setWalletError: (state, action: PayloadAction<WalletError>) => {
      state.showWalletError = action.payload
    }
  }
})

export const { setShowOrHide, setGeneralError, setWalletError } = conditionSlice.actions

export default conditionSlice.reducer
