import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/evm-utils";

// props are passed from getServerSideProps
function Native({ nativeBalance, address }) {
  return (
    <div>
      <h3>Wallet: {address}</h3>
      <h3>Native Balance: {nativeBalance} ETH</h3>
    </div>
  );
}

// this gets called on every page render
export async function getServerSideProps(context) {
  // read the API KEY from `.env.local` and start the Moralis SDK
  await Moralis.start({
    apiKey: process.env.MORALIS_APIKEY,
  });

  // TODO: populate this from MetaMask/WalletConnect. (topher)
  const address = process.env.WALLET_ADDRESS;
  const nativeBalance = await Moralis.EvmApi.balance.getNativeBalance({
    chain: EvmChain.ETHEREUM,
    address,
  });

  return {
    // will be passed to the page component as props
    props: {
      address,
      nativeBalance: nativeBalance.result.balance.ether,
    },
  };
}

export default Native;
