import csl from '@emurgo/cardano-serialization-lib-browser'
import { WalletInstance } from '@src/cardano/hook/type'

export const multisig = async (wallet: WalletInstance, partiallySignedTx: string) => {
  const cslSignedTx = csl.Transaction.from_hex(partiallySignedTx)
  const userTxWitness = await wallet.signTx(partiallySignedTx, true)
  const cslUserWitness = csl.TransactionWitnessSet.from_hex(userTxWitness)
  const cslTxWitnessSet = cslSignedTx.witness_set()
  const cslTxVKeys = cslTxWitnessSet.vkeys()
  const cslUserWitnessVKeys = cslUserWitness.vkeys()
  if (cslUserWitnessVKeys && cslTxVKeys) {
    for (let i = 0; i < cslUserWitnessVKeys.len(); i++) {
      cslTxVKeys.add(cslUserWitnessVKeys.get(i))
    }
    cslTxWitnessSet.set_vkeys(cslTxVKeys)
  }
  const cslFinalSignedTx = csl.Transaction.new(cslSignedTx.body(), cslTxWitnessSet, cslSignedTx.auxiliary_data())
  const signedTx = cslFinalSignedTx.to_hex()
  return signedTx
}