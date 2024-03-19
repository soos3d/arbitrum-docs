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
      items: [
        {
          text: "Arbitrum Gentle Introduction",
          link: "/welcome/arbitrum-gentle-introduction",
        },
        { text: "Get Started", link: "/welcome/get-started" },
      ],
    },
    {
      text: "Intro",
      items: [
        { text: "Introduction", link: "/intro/intro" },
        { text: "Glossary", link: "/intro/glossary" },
      ],
    },
    {
      text: "ArbOS",
      items: [
        { text: "ArbOS Overview", link: "/arbos/arbos" },
        { text: "Gas Management", link: "/arbos/gas" },
        { text: "Geth Compatibility", link: "/arbos/geth" },
        { text: "Layer 1 Pricing", link: "/arbos/l1-pricing" },
        {
          text: "L1 to L2 Messaging",
          link: "/arbos/l1-to-l2-messaging",
        },
        {
          text: "L2 to L1 Messaging",
          link: "/arbos/l2-to-l1-messaging",
        },
      ],
    },
    {
      text: "Inside Arbitrum Nitro",
      link: "/inside-arbitrum-nitro/inside-arbitrum-nitro",
    },
    { text: "Why Nitro?", link: "/why-nitro" },
    {
      text: "Proving",
      items: [
        {
          text: "Challenge Manager",
          link: "/proving/challenge-manager",
        },
        { text: "OSP Assumptions", link: "/proving/osp-assumptions" },
        { text: "WASM to WAVM", link: "/proving/wasm-to-wavm" },
        {
          text: "WAVM Custom Opcodes",
          link: "/proving/wavm-custom-opcodes",
        },
        { text: "WAVM Floats", link: "/proving/wavm-floats" },
        { text: "WAVM Modules", link: "/proving/wavm-modules" },
      ],
    },
    { text: "Assertion Tree", link: "/assertion-tree" },
    {
      text: "Getting Started",
      items: [
        { text: "For Developers", link: "/getting-started" },
        { text: "For Users", link: "/getting-started-users" },
      ],
    },
    {
      text: "Node Running",
      items: [
        {
          text: "Gentle Introduction",
          link: "/node-running/gentle-introduction-run-node",
        },
        {
          text: "Quickstart",
          link: "/node-running/quickstart-running-a-node",
        },
        {
          text: "How-tos",
          items: [
            {
              text: "Run a Full Node",
              link: "/node-running/how-tos/running-a-full-node",
            },
            {
              text: "Run a Local Dev Node",
              link: "/node-running/how-tos/local-dev-node",
            },
            {
              text: "Data Availability Committee",
              items: [
                {
                  text: "Introduction",
                  link: "/node-running/how-tos/data-availability-committee/introduction",
                },
                {
                  text: "Configure the DAC in Your Chain",
                  link: "/node-running/how-tos/data-availability-committee/configure-the-dac-in-your-chain",
                },
                {
                  text: "Deploy a DAS",
                  link: "/node-running/how-tos/data-availability-committee/deploy-a-das",
                },
                {
                  text: "Deploy a Mirror DAS",
                  link: "/node-running/how-tos/data-availability-committee/deploy-a-mirror-das",
                },
              ],
            },
            // ... other how-tos ...
          ],
        },
        {
          text: "Reference",
          items: [
            {
              text: "L1 Ethereum RPC Providers",
              link: "/node-running/reference/ethereum-beacon-rpc-providers",
            },
            {
              text: "ArbOS Software Releases",
              items: [
                {
                  text: "Overview",
                  link: "/node-running/reference/arbos-software-releases/overview",
                },
                {
                  text: "ArbOS 20 Atlas",
                  link: "/node-running/reference/arbos-software-releases/arbos20",
                },
                {
                  text: "ArbOS 11",
                  link: "/node-running/reference/arbos-software-releases/arbos11",
                },
              ],
            },
          ],
        },
        {
          text: "Troubleshooting",
          link: "/node-running/troubleshooting-running-nodes",
        },
        { text: "FAQ", link: "/node-running/faq" },
      ],
    },
    {
      text: "For Developers",
      items: [
        { text: "Chain Parameters", link: "/for-devs/chain-params" },
        {
          text: "Concepts",
          items: [
            {
              text: "Differences Between Arbitrum and Ethereum",
              items: [
                {
                  text: "Overview",
                  link: "/for-devs/concepts/differences-between-arbitrum-ethereum/overview",
                },
                {
                  text: "Block Numbers and Time",
                  link: "/for-devs/concepts/differences-between-arbitrum-ethereum/block-numbers-and-time",
                },
                {
                  text: "RPC Methods",
                  link: "/for-devs/concepts/differences-between-arbitrum-ethereum/rpc-methods",
                },
                {
                  text: "Solidity Support",
                  link: "/for-devs/concepts/differences-between-arbitrum-ethereum/solidity-support",
                },
              ],
            },
            {
              text: "Node Interface",
              link: "/for-devs/concepts/nodeinterface",
            },
            { text: "Oracles", link: "/for-devs/concepts/oracles" },
            {
              text: "Precompiles",
              link: "/for-devs/concepts/precompiles",
            },
            {
              text: "Public Chains",
              link: "/for-devs/concepts/public-chains",
            },
            {
              text: "Token Bridge",
              items: [
                {
                  text: "Token Bridge Overview",
                  link: "/for-devs/concepts/token-bridge/token-bridge-overview",
                },
                {
                  text: "Bridging ERC20 Tokens",
                  link: "/for-devs/concepts/token-bridge/token-bridge-erc20",
                },
                {
                  text: "Bridging Ether",
                  link: "/for-devs/concepts/token-bridge/token-bridge-ether",
                },
              ],
            },
          ],
        },
        { text: "Contribute", link: "/for-devs/contribute" },
        {
          text: "Cross-chain Messaging",
          link: "/for-devs/cross-chain-messsaging",
        },
        {
          text: "Dev Tools and Resources",
          items: [
            {
              text: "Debugging Tools",
              link: "/for-devs/dev-tools-and-resources/debugging-tools",
            },
            {
              text: "Development Frameworks",
              link: "/for-devs/dev-tools-and-resources/development-frameworks",
            },
            {
              text: "Monitoring Tools and Block Explorers",
              link: "/for-devs/dev-tools-and-resources/monitoring-tools-block-explorers",
            },
            {
              text: "Node Interface",
              link: "/for-devs/dev-tools-and-resources/nodeinterface",
            },
            {
              text: "Oracles",
              link: "/for-devs/dev-tools-and-resources/oracles",
            },
            {
              text: "Precompiles",
              link: "/for-devs/dev-tools-and-resources/precompiles",
            },
            {
              text: "Web3 Libraries and Tools",
              link: "/for-devs/dev-tools-and-resources/web3-libraries-tools",
            },
          ],
        },
        {
          text: "Quickstart Solidity Hardhat",
          link: "/for-devs/quickstart-solidity-hardhat",
        },
        {
          text: "Troubleshooting",
          link: "/for-devs/troubleshooting-building",
        },
        { text: "Useful Addresses", link: "/for-devs/useful-addresses" },
      ],
    },
    {
      text: "Developers How-tos",
      items: [
        {
          text: "Bridge Tokens",
          items: [
            {
              text: "Bridge Tokens Custom Gateway",
              link: "/devs-how-tos/bridge-tokens/how-to-bridge-tokens-custom-gateway",
            },
            {
              text: "Bridge Tokens Generic Custom",
              link: "/devs-how-tos/bridge-tokens/how-to-bridge-tokens-generic-custom",
            },
            {
              text: "Bridge Tokens Overview",
              link: "/devs-how-tos/bridge-tokens/how-to-bridge-tokens-overview",
            },
            {
              text: "Bridge Tokens Standard",
              link: "/devs-how-tos/bridge-tokens/how-to-bridge-tokens-standard",
            },
          ],
        },
        {
          text: "Estimate Gas",
          link: "/devs-how-tos/how-to-estimate-gas",
        },
        {
          text: "Use Oracles",
          link: "/devs-how-tos/how-to-use-oracles",
        },
      ],
    },
    {
      text: "Bridge Tokens",
      items: [
        {
          text: "USDC Concept",
          link: "/bridge-tokens/concepts/usdc-concept",
        },
        {
          text: "Gentle Introduction to Bridge",
          link: "/bridge-tokens/gentle-introduction-bridge",
        },
      ],
    },
    { text: "Transaction Lifecycle", link: "/tx-lifecycle" },
    { text: "Mainnet Risks", link: "/mainnet-risks" },
    {
      text: "Launch Orbit Chain",
      items: [
        {
          text: "Gentle Introduction",
          link: "/launch-orbit-chain/orbit-gentle-introduction",
        },
        {
          text: "Quickstart",
          link: "/launch-orbit-chain/orbit-quickstart",
        },
        {
          text: "How-tos",
          items: [
            {
              text: "Customize Deployment Config",
              link: "/launch-orbit-chain/how-tos/customize-deployment-configuration",
            },
            {
              text: "Customize Precompile",
              link: "/launch-orbit-chain/how-tos/customize-precompile",
            },
            {
              text: "Customize STF",
              link: "/launch-orbit-chain/how-tos/customize-stf",
            },
            {
              text: "Add Your Chain to the Bridge",
              link: "/launch-orbit-chain/how-tos/add-orbit-chain-to-bridge-ui",
            },
            {
              text: "Upgrade ArbOS",
              link: "/launch-orbit-chain/how-tos/arbos-upgrade",
            },
          ],
        },
        {
          text: "Concepts",
          items: [
            {
              text: "Keyset Generation (AnyTrust Chains)",
              link: "/launch-orbit-chain/concepts/anytrust-orbit-chain-keyset-generation",
            },
            {
              text: "Orbit Chain Ownership",
              link: "/launch-orbit-chain/concepts/chain-ownership",
            },
            {
              text: "Custom Gas Token SDK",
              link: "/launch-orbit-chain/concepts/custom-gas-token-sdk",
            },
            {
              text: "Public Preview",
              link: "/launch-orbit-chain/concepts/public-preview-expectations",
            },
          ],
        },
        {
          text: "Reference",
          items: [
            {
              text: "Command-line Options",
              link: "/launch-orbit-chain/reference/command-line-options",
            },
            {
              text: "Additional Configuration Parameters",
              link: "/launch-orbit-chain/reference/additional-configuration-parameters",
            },
          ],
        },
        {
          text: "Troubleshooting",
          link: "/launch-orbit-chain/troubleshooting-building-orbit",
        },
      ],
    },
    {
      text: "Stylus",
      items: [
        {
          text: "Gentle Introduction",
          link: "/stylus/stylus-gentle-introduction",
        },
        { text: "Quickstart", link: "/stylus/stylus-quickstart" },
        {
          text: "How-tos",
          items: [
            {
              text: "Run a Local Dev Node",
              link: "/stylus/how-tos/local-stylus-dev-node",
            },
            {
              text: "Adding Support for New Languages",
              link: "/stylus/how-tos/adding-support-for-new-languages",
            },
            {
              text: "Optimizing Binaries",
              link: "/stylus/how-tos/optimizing-binaries",
            },
          ],
        },
        {
          text: "Concepts",
          items: [
            { text: "Gas and Ink", link: "/stylus/concepts/stylus-gas" },
            {
              text: "Public Preview",
              link: "/stylus/concepts/public-preview-expectations",
            },
          ],
        },
        {
          text: "Reference",
          items: [
            {
              text: "Rust SDK Guide",
              link: "/stylus/reference/rust-sdk-guide",
            },
            {
              text: "Stylus SDK",
              link: "/stylus/reference/stylus-sdk",
            },
            {
              text: "Testnets",
              link: "/stylus/reference/testnet-information",
            },
            {
              text: "Opcode Hostio Pricing",
              link: "/stylus/reference/opcode-hostio-pricing",
            },
          ],
        },
        {
          text: "Troubleshooting",
          link: "/stylus/troubleshooting-building-stylus",
        },
      ],
    },
    {
      text: "For Users",
      items: [
        { text: "Contribute", link: "/for-users/contribute" },
        {
          text: "Troubleshooting",
          link: "/for-users/troubleshooting-users",
        },
      ],
    },
    {
      text: "Sequencer",
      link: "/sequencer",
    },
    { text: "Inside AnyTrust", link: "/inside-anytrust" },
    {
      text: "Diagrams",
      items: [
        {
          text: "Challenge Manager",
          link: "/diagrams/_challenge-manager",
        },
        { text: "Deposit ETH", link: "/diagrams/_deposit-eth" },
        { text: "Withdraw ETH", link: "/diagrams/_withdraw-eth" },
      ],
    },
    { text: "Example", link: "/example" },
    {
      text: "Learn More",
      items: [
        { text: "Contribute", link: "/learn-more/contribute" },
        { text: "FAQ", link: "/learn-more/faq" },
      ],
    },
    { text: "Audit Reports", link: "/audit-reports" },
    {
      text: "Arbitrum SDK",
      items: [
        { text: "Overview", link: "/arbitrum-sdk" },
        {
          text: "Classes",
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
      text: "Orbit SDK",
      items: [
        { text: "Overview", link: "/orbit-sdk" },
        {
          text: "Modules",
          items: [{ text: "Utils", link: "/orbit-sdk/modules/utils" }],
        },
      ],
    },
  ],
});
