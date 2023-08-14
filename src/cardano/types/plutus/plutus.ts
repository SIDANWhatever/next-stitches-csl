import { AssetClass, BuiltinByteString, ConStr0, ConStr1, Integer, MaybeStakingHash, POSIXTime, PaymentPubKeyHash, PubKeyHash, ScriptAddress } from "./type"

export const conStr0 = <T>(constructorFields: T): ConStr0<T> => ({ constructor: 0, fields: constructorFields })
export const conStr1 = <T>(constructorFields: T): ConStr1<T> => ({ constructor: 1, fields: constructorFields })
export const maybeStakingHash = (): MaybeStakingHash => conStr1<[]>([])
export const builtinByteString = (bytes: string): BuiltinByteString => ({ bytes })
export const scriptAddress = (bytes: string): ScriptAddress =>
  conStr0<[ConStr1<[BuiltinByteString]>, MaybeStakingHash]>([
    conStr1<[BuiltinByteString]>([builtinByteString(bytes)]),
    maybeStakingHash(),
  ])
export const assetClass = (policyId: string, tokenName: string): AssetClass =>
  conStr0<[BuiltinByteString, BuiltinByteString]>([builtinByteString(policyId), builtinByteString(tokenName)])
export const paymentPubKeyHash = (bytes: string): PaymentPubKeyHash => builtinByteString(bytes)
export const pubKeyHash = (bytes: string): PubKeyHash => builtinByteString(bytes)
export const posixTime = (int: number): POSIXTime => ({ int })
export const integer = (int: number): Integer => ({ int })
