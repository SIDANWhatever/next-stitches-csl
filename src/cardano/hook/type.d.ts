declare global {
  interface Window {
    cardano: Cardano;
  }
}
declare type Cardano = {
  [key: string]: {
    name: string;
    icon: string;
    apiVersion: string;
    enable: () => Promise<WalletInstance>;
  };
};
declare type WalletInstance = {
  experimental: ExperimentalFeatures;
  getBalance(): Promise<string>;
  getChangeAddress(): Promise<string>;
  getNetworkId(): Promise<number>;
  getRewardAddresses(): Promise<string[]>;
  getUnusedAddresses(): Promise<string[]>;
  getUsedAddresses(): Promise<string[]>;
  getUtxos(): Promise<string[] | undefined>;
  signData(address: string, payload: string): Promise<DataSignature>;
  signTx(tx: string, partialSign: boolean): Promise<string>;
  submitTx(tx: string): Promise<string>;
};
declare type ExperimentalFeatures = {
  getCollateral(): Promise<string[] | undefined>;
};
declare type DataSignature = {
  signature: string
  key: string
};

export { Cardano, WalletInstance, ExperimentalFeatures, DataSignature };
