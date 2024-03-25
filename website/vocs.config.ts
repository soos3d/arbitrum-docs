import remarkMermaid from "remark-mermaidjs";
import { defineConfig } from "vocs";

export default defineConfig({
  title: "Arbitrum Docs",
  markdown: {
    remarkPlugins: [remarkMermaid],
  },
  sidebar: [
    {
      text: "Welcome",
      collapsed: true,
      items: [
        {
          text: "A gentle introduction",
          link: "/welcome/arbitrum-gentle-introduction",
        },
        { text: "Get started", link: "/welcome/get-started" },
      ],
    },
    {
      text: "Build decentralized apps",
      collapsed: true,
      items: [
        {
          text: "Quickstart (Solidity)",
          link: "/for-devs/quickstart-solidity-hardhat",
        },
        {
          text: "Estimate gas",
          link: "/devs-how-tos/how-to-estimate-gas",
        },
        {
          text: "Chains and testnets",
          link: "/for-devs/concepts/public-chains",
        },
        {
          text: "Cross-chain messaging",
          link: "/for-devs/cross-chain-messsaging",
        },
        {
          text: "Arbitrum vs Ethereum",
          collapsed: true,
          items: [
            {
              text: "Comparison overview",
              link: "/for-devs/concepts/differences-between-arbitrum-ethereum/overview",
            },
            {
              text: "Block numbers and time",
              link: "/for-devs/concepts/differences-between-arbitrum-ethereum/block-numbers-and-time",
            },
            {
              text: "RPC methods",
              link: "/for-devs/concepts/differences-between-arbitrum-ethereum/rpc-methods",
            },
            {
              text: "Solidity support",
              link: "/for-devs/concepts/differences-between-arbitrum-ethereum/solidity-support",
            },
          ],
        },
        {
          text: "Oracles",
          collapsed: true,
          items: [
            {
              text: "Overview",
              link: "/for-devs/concepts/oracles",
            },
            {
              text: "Use oracles in your app",
              link: "/devs-how-tos/how-to-use-oracles",
            },
            {
              text: "Reference",
              link: "/for-devs/dev-tools-and-resources/oracles",
            },
          ],
        },
        {
          text: "Precompiles",
          collapsed: true,
          items: [
            {
              text: "Overview",
              link: "/for-devs/concepts/precompiles",
            },
            {
              text: "Reference",
              link: "/for-devs/dev-tools-and-resources/precompiles",
            },
          ],
        },
        {
          text: "NodeInterface",
          collapsed: true,
          items: [
            {
              text: "Overview",
              link: "/for-devs/concepts/nodeinterface",
            },
            {
              text: "Reference",
              link: "/for-devs/dev-tools-and-resources/nodeinterface",
            },
          ],
        },
        {
          text: "Token bridging",
          collapsed: true,
          items: [
            {
              text: "Overview",
              link: "/for-devs/concepts/token-bridge/token-bridge-overview",
            },
            {
              text: "Get started",
              link: "/devs-how-tos/bridge-tokens/how-to-bridge-tokens-overview",
            },
            {
              text: "Use the standard gateway",
              link: "/devs-how-tos/bridge-tokens/how-to-bridge-tokens-standard",
            },
            {
              text: "Use the generic-custom gateway",
              link: "/devs-how-tos/bridge-tokens/how-to-bridge-tokens-generic-custom",
            },
            {
              text: "Use the custom gateway",
              link: "/devs-how-tos/bridge-tokens/how-to-bridge-tokens-custom-gateway",
            },
            {
              text: "Bridging Ether",
              link: "/for-devs/concepts/token-bridge/token-bridge-ether",
            },
            {
              text: "Bridging ERC-20 tokens",
              link: "/for-devs/concepts/token-bridge/token-bridge-erc20",
            },
          ],
        },
        {
          text: "Reference",
          collapsed: true,
          items: [
            {
              text: "RPC endpoints and providers",
              link: "/node-running/node-providers",
            },
            {
              text: "Smart contract addresses",
              link: "/for-devs/useful-addresses",
            },
            {
              text: "Chain parameters",
              link: "/for-devs/chain-params",
            },
            {
              text: "Development frameworks",
              link: "/for-devs/dev-tools-and-resources/development-frameworks",
            },
            {
              text: "Web3 libraries and tools",
              link: "/for-devs/dev-tools-and-resources/web3-libraries-tools",
            },
            {
              text: "Monitoring tools and block explorers",
              link: "/for-devs/dev-tools-and-resources/monitoring-tools-block-explorers",
            },
            {
              text: "Debugging tools",
              link: "/for-devs/dev-tools-and-resources/debugging-tools",
            },
            {
              text: "Mainnet risks",
              link: "/mainnet-risks",
            },
          ],
        },
        {
          text: "Troubleshooting",
          link: "/for-devs/troubleshooting-building",
        },
        {
          text: "Arbitrum SDK",
          link: "/sdk",
        },
        {
          text: "Tutorials",
        },
      ],
    },
    {
      text: "Run an Orbit chain",
      collapsed: true,
      items: [
        {
          text: "A gentle introduction",
          link: "/launch-orbit-chain/orbit-gentle-introduction",
        },
        {
          text: "Quickstart",
          link: "/launch-orbit-chain/orbit-quickstart",
        },
      ],
    },
    {
      text: "Write Stylus contracts",
      collapsed: true,
      items: [
        {
          text: "A gentle introduction",
          link: "/stylus/stylus-gentle-introduction",
        },
        {
          text: "Quickstart (Rust)",
          link: "/stylus/stylus-quickstart",
        },
      ],
    },
    {
      text: "Run an Arbitrum node",
      collapsed: true,
      items: [
        {
          text: "Overview",
          link: "/node-running/gentle-introduction-run-node",
        },
        {
          text: "Quickstart",
          link: "/node-running/quickstart-running-a-node",
        },
      ],
    },
    {
      text: "Arbitrum bridge",
      collapsed: true,
      items: [
        {
          text: "Quickstart",
          link: "/getting-started-users",
        },
        {
          text: "Troubleshooting",
          link: "/for-users/troubleshooting-users",
        },
        {
          text: "USDC on Arbitrum One",
          link: "/bridge-tokens/concepts/usdc-concept",
        },
      ],
    },
    {
      text: "Orbit SDK",
      collapsed: true,
      items: [
        { text: "Overview", link: "/orbit-sdk" },
        {
          text: "Modules",
          items: [{ text: "Utils", link: "/orbit-sdk/modules/utils" }],
        },
      ],
    },
    {
      text: "Arbitrum SDK",
      collapsed: true,
      items: [
        { text: "Overview", link: "/arbitrum-sdk" },
        {
          text: "Classes",
          collapsed: true,
          items: [
            { text: "Address", link: "/arbitrum-sdk/classes/Address" },
            {
              text: "ArbitrumProvider",
              link: "/arbitrum-sdk/classes/ArbitrumProvider",
            },
            {
              text: "Erc20Bridger",
              link: "/arbitrum-sdk/classes/Erc20Bridger",
            },
            { text: "EthBridger", link: "/arbitrum-sdk/classes/EthBridger" },
            {
              text: "EventFetcher",
              link: "/arbitrum-sdk/classes/EventFetcher",
            },
            { text: "InboxTools", link: "/arbitrum-sdk/classes/InboxTools" },
            {
              text: "L1ToL2Message",
              link: "/arbitrum-sdk/classes/L1ToL2Message",
            },
            {
              text: "L1ToL2MessageGasEstimator",
              link: "/arbitrum-sdk/classes/L1ToL2MessageGasEstimator",
            },
            {
              text: "L1ToL2MessageReader",
              link: "/arbitrum-sdk/classes/L1ToL2MessageReader",
            },
            {
              text: "L1ToL2MessageReaderClassic",
              link: "/arbitrum-sdk/classes/L1ToL2MessageReaderClassic",
            },
            {
              text: "L1ToL2MessageWriter",
              link: "/arbitrum-sdk/classes/L1ToL2MessageWriter",
            },
            {
              text: "L1TransactionReceipt",
              link: "/arbitrum-sdk/classes/L1TransactionReceipt",
            },
            {
              text: "L2ToL1Message",
              link: "/arbitrum-sdk/classes/L2ToL1Message",
            },
            {
              text: "L2ToL1MessageReader",
              link: "/arbitrum-sdk/classes/L2ToL1MessageReader",
            },
            {
              text: "L2ToL1MessageWriter",
              link: "/arbitrum-sdk/classes/L2ToL1MessageWriter",
            },
            {
              text: "L2TransactionReceipt",
              link: "/arbitrum-sdk/classes/L2TransactionReceipt",
            },
            { text: "MultiCaller", link: "/arbitrum-sdk/classes/MultiCaller" },
            {
              text: "RetryableDataTools",
              link: "/arbitrum-sdk/classes/RetryableDataTools",
            },
          ],
        },
        {
          text: "Enums",
          collapsed: true,
          items: [
            {
              text: "EthDepositStatus",
              link: "/arbitrum-sdk/enums/EthDepositStatus",
            },
            {
              text: "L1ToL2MessageStatus",
              link: "/arbitrum-sdk/enums/L1ToL2MessageStatus",
            },
            {
              text: "L2ToL1MessageStatus",
              link: "/arbitrum-sdk/enums/L2ToL1MessageStatus",
            },
          ],
        },
        {
          text: "Interfaces",
          collapsed: true,
          items: [
            {
              text: "L1ContractTransaction",
              link: "/arbitrum-sdk/interfaces/L1ContractTransaction",
            },
            { text: "L1Network", link: "/arbitrum-sdk/interfaces/L1Network" },
            { text: "L1Networks", link: "/arbitrum-sdk/interfaces/L1Networks" },
            {
              text: "L2ContractTransaction",
              link: "/arbitrum-sdk/interfaces/L2ContractTransaction",
            },
            { text: "L2Network", link: "/arbitrum-sdk/interfaces/L2Network" },
            { text: "L2Networks", link: "/arbitrum-sdk/interfaces/L2Networks" },
            {
              text: "RetryableData",
              link: "/arbitrum-sdk/interfaces/RetryableData",
            },
          ],
        },
        {
          text: "Namespaces",
          items: [
            { text: "Constants", link: "/arbitrum-sdk/namespaces/constants" },
          ],
        },
      ],
    },
    {
      text: "How Arbitrum works",
      collapsed: true,
      items: [],
    },
    {
      text: "FAQ",
      link: "/learn-more/faq",
    },
    {
      text: "Glossary",
      link: "/intro/glossary",
    },
    {
      text: "Contribute",
      link: "/for-devs/contribute",
    },
  ],
});
