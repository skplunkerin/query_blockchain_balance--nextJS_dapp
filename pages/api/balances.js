import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/evm-utils";

export default async function handler(req, res) {
  // read the API KEY from `.env.local` and start the Moralis SDK
  await Moralis.start({
    apiKey: process.env.MORALIS_APIKEY,
  });

  // TODO: populate this from MetaMask/WalletConnect. (topher)
  const address = process.env.WALLET_ADDRESS;

  // Promise.all() for receiving data async from two endpoints:
  const [nativeBalance, tokenBalances] = await Promise.all([
    Moralis.EvmApi.balance.getNativeBalance({
      chain: EvmChain.ETHEREUM,
      address,
    }),
    Moralis.EvmApi.token.getWalletTokenBalances({
      chain: EvmChain.ETHEREUM,
      address,
    }),
  ]);

  res.status(200).json({
    // format the output
    nativeBalance: nativeBalance.result.balance.ether,
    tokenBalances: tokenBalances.result.map((token) => token.display()),
  });
}
