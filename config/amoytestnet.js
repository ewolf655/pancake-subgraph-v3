/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
    network: "amoytestnet",
    wNativeAddress: "0xa5733b3a8e62a8faf43b0376d5faf46e89b3033e",
    v3: {
      // WPOL-USDC 500
      wNativeStablePoolAddress: "0xa9c5e7e9cc7d9c17768f0b69477a2cf73d1392c9",
      stableIsToken0: true,
      factoryAddress: "0xbda94ee8758d20165db1979f7ea642c2df56b107",
      startBlock: 	13883385,
      stableCoins: [
        "0x41e94eb019c0762f9bfcf9fb1e58725bfb0e7582", // USDC
        "0x1616d425cd540b256475cbfb604586c8598ec0fb"
      ],
      whitelistAddresses: [
        "0xa5733b3a8e62a8faf43b0376d5faf46e89b3033e", // WPOL
        "0x1616d425cd540b256475cbfb604586c8598ec0fb", // USDT
        "0x41e94eb019c0762f9bfcf9fb1e58725bfb0e7582", // USDC
      ],
      nonfungiblePositionManagerAddress: "0xf098d488268fe60178587b3f685a565025f965ae",
      nonfungiblePositionManagerStartBlock: 13883385,
      minPOLLocked: 10,
    },
    masterChefV3: {
      masterChefAddress: "0xB499C5ba4D0E613324f7215f53FEc1F0b4e97082",
      startBlock: 13883385,
    },
    predictionV2: {
      startBlock: 13883385,
      address: "0x18B2A687610328590Bc8F2e5fEdDe3b582A49cdA",
    },
  };
  