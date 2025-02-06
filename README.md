# ethers-v6-multicall

Make multiple Ethereum network requests in a single HTTP query. [ethcall](https://github.com/Destiner/ethcall) for ethers v6.

## Update

- Updated `ethers` dependency to version 6 by Ilia Aksakov.

## API

- `Contract(address, abi)`: Create contract instance; calling `contract.callFuncName` will yield a `call` object
- `all(calls)`: Execute all calls in a single request
- `calls`: List of helper call methods
- `getEthBalance(address)`: Returns account ether balance

## Example

```ts
import { Contract, Provider } from "ethers-v6-multicall";
import { InfuraProvider } from "ethers";

import erc20Abi from "./abi/erc20.json";

const infuraKey = "INSERT_YOUR_KEY_HERE";
const provider = new InfuraProvider("mainnet", infuraKey);

const daiAddress = "0x6b175474e89094c44da98b954eedeac495271d0f";

async function call() {
  const ethcallProvider = new Provider(provider);

  await ethcallProvider.init(); // Only required when `chainId` is not provided in the `Provider` constructor

  const daiContract = new Contract(daiAddress, erc20Abi);

  const uniswapDaiPool = "0x2a1530c4c41db0b0b2bb646cb5eb1a67b7158667";

  const ethBalanceCall = ethcallProvider.getEthBalance(uniswapDaiPool);
  const daiBalanceCall = daiContract.balanceOf(uniswapDaiPool);

  const [ethBalance, daiBalance] = await ethcallProvider.all([
    ethBalanceCall,
    daiBalanceCall,
  ]);

  console.log("ETH Balance:", ethBalance.toString());
  console.log("DAI Balance:", daiBalance.toString());
}

call();
```

## Supported chains

- Ethereum
- Goerli
- ThaiChain
- OP Mainnet
- Flare Mainnet
- Songbird Canary-Network
- Cronos Mainnet
- Rootstock Mainnet
- Rootstock Testnet
- Telos
- LUKSO
- Crab Network
- Darwinia Network
- XinFin Network
- Apothem Network
- BNB Smart Chain
- Syscoin Mainnet
- OKC
- Conflux eSpace Testnet
- Viction Testnet
- Binance Smart Chain Testnet
- Gnosis
- Velas EVM Mainnet
- ThunderCore Mainnet
- Shibarium
- Fuse
- Polygon
- Sonic
- Puppynet Shibarium
- Manta Pacific Mainnet
- X1 Testnet
- X Layer Mainnet
- BitTorrent
- opBNB
- Happychain Testnet
- Nexilix Smart Chain
- Plinga
- Fantom
- Fraxtal
- Kroma
- Guru Network Mainnet
- Boba Network
- ZKsync Sepolia Testnet
- Filecoin Mainnet
- KCC Mainnet
- ZKsync Era
- Cronos Testnet
- Shape
- PulseChain
- Cronos zkEVM Mainnet
- Optimism Goerli
- PGN
- Areon Network
- World Chain
- Flow EVM Testnet
- Rollux Mainnet
- MetaChain Mainnet
- Astar
- Metis Goerli
- Flow EVM Previewnet
- Redstone
- Koi Network
- Flow EVM Mainnet
- QL1
- Wanchain
- Mode Testnet
- PulseChain V4
- Lyra Chain
- Zora Goerli Testnet
- Klaytn Baobab Testnet
- Conflux eSpace
- Metis
- Polygon zkEVM
- Core Dao
- DeFiChain EVM Mainnet
- DeFiChain EVM Testnet
- Lisk
- Moonbeam
- Moonriver
- Moonbase Alpha
- Unichain Sepolia
- Sei Network
- Polygon zkEVM Testnet
- MetaChain Istanbul
- Gravity Alpha Mainnet
- Metal L2
- Soneium Mainnet
- LightLink Phoenix Mainnet
- LightLink Pegasus Testnet
- Swellchain
- Soneium Minato Testnet
- Sanko
- Dogechain
- Ronin
- Saigon Testnet
- Aleph Zero Testnet
- SnaxChain
- Kava EVM Testnet
- Kava EVM
- RSS3 VSL Sepolia Testnet
- Atleta Olympia
- GOAT
- Kroma Sepolia
- Polygon zkEVM Cardona
- Fraxtal Testnet
- inEVM Mainnet
- Abstract
- Crossbell
- Astar zkEVM
- DOS Chain Testnet
- APEX Testnet
- Fantom Testnet
- LUKSO Testnet
- Lisk Sepolia
- Nexi
- Beam
- IoTeX
- IoTeX Testnet
- MEVerse Chain Testnet
- World Chain Sepolia
- Mantle
- Mantle Testnet
- Mantle Sepolia Testnet
- Humanode
- Superseed
- Saga
- opBNB Testnet
- Syscoin Tanenbaum Testnet
- ZetaChain
- ZetaChain Athens Testnet
- InitVerse Mainnet
- InitVerse Genesis Testnet
- MEVerse Chain Mainnet
- Cyber
- The Root Network
- The Root Network - Porcini
- Canto
- DOS Chain
- Kaia
- Zenchain Testnet
- Base
- IOTA EVM
- JIBCHAIN L1
- Monad Testnet
- Gnosis Chiado
- Arthera
- Arthera Testnet
- Shape Sepolia Testnet
- Abstract Testnet
- Artela Testnet
- RSS3 VSL Mainnet
- SnaxChain Testnet
- Beam Testnet
- Immutable zkEVM
- Phoenix Blockchain
- Immutable zkEVM Testnet
- Humanode Testnet 5
- EOS EVM Testnet
- Holesky
- Garnet Testnet
- EOS EVM
- Unreal
- Oasis Sapphire
- Bitgert Mainnet
- Fusion Mainnet
- Ape Chain
- Mode Mainnet
- Aleph Zero
- Donatuz
- Arbitrum One
- Arbitrum Nova
- Celo
- AssetChain Testnet
- ZKFair Mainnet
- Etherlink
- Avalanche Fuji
- Avalanche
- Alfajores
- Fusion Testnet
- Zircuit Testnet
- Zircuit Mainnet
- Sophon
- Superseed Sepolia
- DFK Chain
- Superposition
- Rollux Testnet
- PGN
- Linea Goerli Testnet
- Linea Sepolia Testnet
- Linea Mainnet
- BOB
- Treasure
- Geist Mainnet
- Creator
- Godwoken Mainnet
- Polygon Mumbai
- Polygon Amoy
- Berachain bArtio
- Blast
- Base Goerli
- Base Sepolia
- Jibchain Testnet
- Plume Devnet
- Plume Mainnet
- re.al
- Taiko Mainnet
- Taiko Jolnir (Alpha-5 Testnet)
- Taiko Hekla L2
- Bitlayer Testnet
- Bitlayer Mainnet
- Arbitrum Goerli
- Arbitrum Sepolia
- Scroll Sepolia
- Scroll
- DustBoy IoT
- Polter Testnet
- Xai Mainnet
- BOB Sepolia
- Treasure Topaz Testnet
- Forma
- PlayFi Albireo Testnet
- Funki Sepolia Sandbox
- Manta Pacific Testnet
- Manta Pacific Sepolia Testnet
- Astar zkEVM Testnet zKyoto
- Zora
- Fluence
- Sepolia
- OP Sepolia
- Corn
- Corn Testnet
- SKALE Nebula Testnet
- Fluence Testnet
- Cyber Testnet
- Blast Sepolia
- Neon EVM DevNet
- Neon EVM MainNet
- Meld
- Sophon Testnet
- SKALE Calypso Testnet
- Lumia Mainnet
- Zora Sepolia
- SKALE Titan Hub
- Aurora
- SKALE | Titan Community Hub
- SKALE Europa Testnet
- SKALE | Nebula Gaming Hub
- SKALE | Calypso NFT Hub
- Harmony One
- Lumia Testnet
- SKALE | Europa Liquidity Hub
- Fluence Stage
- Palm
- Palm Testnet
