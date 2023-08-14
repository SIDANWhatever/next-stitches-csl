declare type ConStr0<T> = { constructor: 0; fields: T }
declare type ConStr1<T> = { constructor: 1; fields: T }
declare type BuiltinByteString = { bytes: string }
declare type Integer = { int: number }
declare type ValidatorHash = BuiltinByteString
declare type PaymentPubKeyHash = BuiltinByteString
declare type PubKeyHash = PaymentPubKeyHash
declare type POSIXTime = Integer
declare type MaybeStakingHash = ConStr1<[]> // TODO: Adding staking
declare type ScriptAddress = ConStr0<[ConStr1<[ValidatorHash]>, MaybeStakingHash]>
declare type AssetClass = { constructor: 0; fields: [{ bytes: string }, { bytes: string }] }
declare type PlutusData =
  | BuiltinByteString
  | Integer
  | MaybeStakingHash
  | ScriptAddress
  | AssetClass
  | PaymentPubKeyHash
  | PubKeyHash
  | POSIXTime

export { ConStr0, ConStr1, BuiltinByteString, Integer, ValidatorHash, PaymentPubKeyHash, PubKeyHash, POSIXTime, MaybeStakingHash, ScriptAddress, AssetClass, PlutusData }