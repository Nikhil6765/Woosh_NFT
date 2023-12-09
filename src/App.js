import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import "./App.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Home from "./pages/Home";
import {useEffect, React} from "react";
import Index from "./pages/Index";
const{ethers} = require("ethers");


const router = createBrowserRouter([
  {
    path: "/",
    element: <Index/>,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

const scroll : Chain = {
  id: 534351,
  name: 'Scroll',
  network: 'scroll',
  iconUrl: 'https://example.com/icon.svg',
  iconBackground: '#fff',
  nativeCurrency: {
    decimals: 18,
    name: 'Scroll',
    symbol: 'ETH',
  },
  rpcUrls: {
    public: { http: ['https://sepolia-rpc.scroll.io	'] },
    default: { http: ['https://sepolia-rpc.scroll.io	'] },
  },
  blockExplorers: {
    default: { name: 'ScrollScan', url: 'https://sepolia.scrollscan.com' },
    etherscan: { name: 'ScrollScan', url: 'https://sepolia.scrollscan.com' },
  },
  contracts: {
    multicall3: {
      address: '0xf373dfD3d34609286a0F931c009c0b07fC5e8302',
      blockCreated: 11_907_934,
    },
  },
  testnet: true,
};

const { chains, provider } = configureChains(
  
  [chain.mainnet, chain.polygon, chain.goerli, chain.arbitrum, chain.sepolia,scroll ],
  [
    // alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My Git NFT App',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

function App() {

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider  chains={chains} coolMode={chains} theme={darkTheme({
      accentColor: '#7b3fe4',
      accentColorForeground: 'white',
      borderRadius: 'small',
      fontStack: 'system',
      overlayBlur: 'small',
    })}>
    <>
      <RouterProvider  router={router} />
      
    </>
      </RainbowKitProvider>
    </WagmiConfig>                    
  );
}

export default App;
