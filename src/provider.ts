import { Provider as EthersProvider } from "ethers";
import { all } from "./call";
import { getEthBalance } from "./calls";
import { ContractCall } from "./types";
import multicallAddresses from "./multicall-addresses";

export class Provider {
  private _provider: EthersProvider;
  private _multicallAddress: string;

  constructor(provider: EthersProvider, chainId?: number) {
    this._provider = provider;
    this._multicallAddress = getAddressForChainId(chainId);
  }

  public async init() {
    // Only required if `chainId` was not provided in constructor
    this._multicallAddress = await getAddress(this._provider);
  }

  public getEthBalance(address: string) {
    if (!this._provider) {
      throw new Error("Provider should be initialized before use.");
    }
    return getEthBalance(address, this._multicallAddress);
  }

  public async all<T extends any[] = any[]>(calls: ContractCall[]) {
    if (!this._provider) {
      throw new Error("Provider should be initialized before use.");
    }
    return all<T>(calls, this._multicallAddress, this._provider);
  }
}

export function setMulticallAddress(chainId: number, address: string) {
  multicallAddresses[chainId] = address;
}

function getAddressForChainId(chainId: number) {
  return multicallAddresses[chainId];
}

async function getAddress(provider: EthersProvider) {
  const { chainId } = await provider.getNetwork();
  return getAddressForChainId(Number(chainId));
}
