// vocs.config.ts
import remarkMermaid from "file:///Users/douglance/Developer/oc/arbitrum-docs/website/node_modules/remark-mermaidjs/index.js";
import { defineConfig } from "file:///Users/douglance/Developer/oc/arbitrum-docs/website/node_modules/vocs/_lib/index.js";
var vocs_config_default = defineConfig({
  title: "Arbitrum Docs",
  markdown: {
    remarkPlugins: [remarkMermaid]
  },
  sidebar: [
    {
      text: "Welcome",
      items: [
        {
          text: "Arbitrum Gentle Introduction",
          link: "/welcome/arbitrum-gentle-introduction"
        },
        { text: "Get Started", link: "/welcome/get-started" }
      ]
    },
    {
      text: "Intro",
      items: [
        { text: "Introduction", link: "/intro/intro" },
        { text: "Glossary", link: "/intro/glossary" }
      ]
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
          link: "/arbos/l1-to-l2-messaging"
        },
        {
          text: "L2 to L1 Messaging",
          link: "/arbos/l2-to-l1-messaging"
        }
      ]
    },
    {
      text: "Inside Arbitrum Nitro",
      link: "/inside-arbitrum-nitro/inside-arbitrum-nitro"
    },
    { text: "Why Nitro?", link: "/why-nitro" },
    {
      text: "Proving",
      items: [
        {
          text: "Challenge Manager",
          link: "/proving/challenge-manager"
        },
        { text: "OSP Assumptions", link: "/proving/osp-assumptions" },
        { text: "WASM to WAVM", link: "/proving/wasm-to-wavm" },
        {
          text: "WAVM Custom Opcodes",
          link: "/proving/wavm-custom-opcodes"
        },
        { text: "WAVM Floats", link: "/proving/wavm-floats" },
        { text: "WAVM Modules", link: "/proving/wavm-modules" }
      ]
    },
    { text: "Assertion Tree", link: "/assertion-tree" },
    {
      text: "Getting Started",
      items: [
        { text: "For Developers", link: "/getting-started" },
        { text: "For Users", link: "/getting-started-users" }
      ]
    },
    {
      text: "Node Running",
      items: [
        {
          text: "Gentle Introduction",
          link: "/node-running/gentle-introduction-run-node"
        },
        {
          text: "Quickstart",
          link: "/node-running/quickstart-running-a-node"
        },
        {
          text: "How-tos",
          items: [
            {
              text: "Run a Full Node",
              link: "/node-running/how-tos/running-a-full-node"
            },
            {
              text: "Run a Local Dev Node",
              link: "/node-running/how-tos/local-dev-node"
            },
            {
              text: "Data Availability Committee",
              items: [
                {
                  text: "Introduction",
                  link: "/node-running/how-tos/data-availability-committee/introduction"
                },
                {
                  text: "Configure the DAC in Your Chain",
                  link: "/node-running/how-tos/data-availability-committee/configure-the-dac-in-your-chain"
                },
                {
                  text: "Deploy a DAS",
                  link: "/node-running/how-tos/data-availability-committee/deploy-a-das"
                },
                {
                  text: "Deploy a Mirror DAS",
                  link: "/node-running/how-tos/data-availability-committee/deploy-a-mirror-das"
                }
              ]
            }
            // ... other how-tos ...
          ]
        },
        {
          text: "Reference",
          items: [
            {
              text: "L1 Ethereum RPC Providers",
              link: "/node-running/reference/ethereum-beacon-rpc-providers"
            },
            {
              text: "ArbOS Software Releases",
              items: [
                {
                  text: "Overview",
                  link: "/node-running/reference/arbos-software-releases/overview"
                },
                {
                  text: "ArbOS 20 Atlas",
                  link: "/node-running/reference/arbos-software-releases/arbos20"
                },
                {
                  text: "ArbOS 11",
                  link: "/node-running/reference/arbos-software-releases/arbos11"
                }
              ]
            }
          ]
        },
        {
          text: "Troubleshooting",
          link: "/node-running/troubleshooting-running-nodes"
        },
        { text: "FAQ", link: "/node-running/faq" }
      ]
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
                  link: "/for-devs/concepts/differences-between-arbitrum-ethereum/overview"
                },
                {
                  text: "Block Numbers and Time",
                  link: "/for-devs/concepts/differences-between-arbitrum-ethereum/block-numbers-and-time"
                },
                {
                  text: "RPC Methods",
                  link: "/for-devs/concepts/differences-between-arbitrum-ethereum/rpc-methods"
                },
                {
                  text: "Solidity Support",
                  link: "/for-devs/concepts/differences-between-arbitrum-ethereum/solidity-support"
                }
              ]
            },
            {
              text: "Node Interface",
              link: "/for-devs/concepts/nodeinterface"
            },
            { text: "Oracles", link: "/for-devs/concepts/oracles" },
            {
              text: "Precompiles",
              link: "/for-devs/concepts/precompiles"
            },
            {
              text: "Public Chains",
              link: "/for-devs/concepts/public-chains"
            },
            {
              text: "Token Bridge",
              items: [
                {
                  text: "Token Bridge Overview",
                  link: "/for-devs/concepts/token-bridge/token-bridge-overview"
                },
                {
                  text: "Bridging ERC20 Tokens",
                  link: "/for-devs/concepts/token-bridge/token-bridge-erc20"
                },
                {
                  text: "Bridging Ether",
                  link: "/for-devs/concepts/token-bridge/token-bridge-ether"
                }
              ]
            }
          ]
        },
        { text: "Contribute", link: "/for-devs/contribute" },
        {
          text: "Cross-chain Messaging",
          link: "/for-devs/cross-chain-messsaging"
        },
        {
          text: "Dev Tools and Resources",
          items: [
            {
              text: "Debugging Tools",
              link: "/for-devs/dev-tools-and-resources/debugging-tools"
            },
            {
              text: "Development Frameworks",
              link: "/for-devs/dev-tools-and-resources/development-frameworks"
            },
            {
              text: "Monitoring Tools and Block Explorers",
              link: "/for-devs/dev-tools-and-resources/monitoring-tools-block-explorers"
            },
            {
              text: "Node Interface",
              link: "/for-devs/dev-tools-and-resources/nodeinterface"
            },
            {
              text: "Oracles",
              link: "/for-devs/dev-tools-and-resources/oracles"
            },
            {
              text: "Precompiles",
              link: "/for-devs/dev-tools-and-resources/precompiles"
            },
            {
              text: "Web3 Libraries and Tools",
              link: "/for-devs/dev-tools-and-resources/web3-libraries-tools"
            }
          ]
        },
        {
          text: "Quickstart Solidity Hardhat",
          link: "/for-devs/quickstart-solidity-hardhat"
        },
        {
          text: "Troubleshooting",
          link: "/for-devs/troubleshooting-building"
        },
        { text: "Useful Addresses", link: "/for-devs/useful-addresses" }
      ]
    },
    {
      text: "Developers How-tos",
      items: [
        {
          text: "Bridge Tokens",
          items: [
            {
              text: "Bridge Tokens Custom Gateway",
              link: "/devs-how-tos/bridge-tokens/how-to-bridge-tokens-custom-gateway"
            },
            {
              text: "Bridge Tokens Generic Custom",
              link: "/devs-how-tos/bridge-tokens/how-to-bridge-tokens-generic-custom"
            },
            {
              text: "Bridge Tokens Overview",
              link: "/devs-how-tos/bridge-tokens/how-to-bridge-tokens-overview"
            },
            {
              text: "Bridge Tokens Standard",
              link: "/devs-how-tos/bridge-tokens/how-to-bridge-tokens-standard"
            }
          ]
        },
        {
          text: "Estimate Gas",
          link: "/devs-how-tos/how-to-estimate-gas"
        },
        {
          text: "Use Oracles",
          link: "/devs-how-tos/how-to-use-oracles"
        }
      ]
    },
    {
      text: "Bridge Tokens",
      items: [
        {
          text: "USDC Concept",
          link: "/bridge-tokens/concepts/usdc-concept"
        },
        {
          text: "Gentle Introduction to Bridge",
          link: "/bridge-tokens/gentle-introduction-bridge"
        }
      ]
    },
    { text: "Transaction Lifecycle", link: "/tx-lifecycle" },
    { text: "Mainnet Risks", link: "/mainnet-risks" },
    {
      text: "Launch Orbit Chain",
      items: [
        {
          text: "Gentle Introduction",
          link: "/launch-orbit-chain/orbit-gentle-introduction"
        },
        {
          text: "Quickstart",
          link: "/launch-orbit-chain/orbit-quickstart"
        },
        {
          text: "How-tos",
          items: [
            {
              text: "Customize Deployment Config",
              link: "/launch-orbit-chain/how-tos/customize-deployment-configuration"
            },
            {
              text: "Customize Precompile",
              link: "/launch-orbit-chain/how-tos/customize-precompile"
            },
            {
              text: "Customize STF",
              link: "/launch-orbit-chain/how-tos/customize-stf"
            },
            {
              text: "Add Your Chain to the Bridge",
              link: "/launch-orbit-chain/how-tos/add-orbit-chain-to-bridge-ui"
            },
            {
              text: "Upgrade ArbOS",
              link: "/launch-orbit-chain/how-tos/arbos-upgrade"
            }
          ]
        },
        {
          text: "Concepts",
          items: [
            {
              text: "Keyset Generation (AnyTrust Chains)",
              link: "/launch-orbit-chain/concepts/anytrust-orbit-chain-keyset-generation"
            },
            {
              text: "Orbit Chain Ownership",
              link: "/launch-orbit-chain/concepts/chain-ownership"
            },
            {
              text: "Custom Gas Token SDK",
              link: "/launch-orbit-chain/concepts/custom-gas-token-sdk"
            },
            {
              text: "Public Preview",
              link: "/launch-orbit-chain/concepts/public-preview-expectations"
            }
          ]
        },
        {
          text: "Reference",
          items: [
            {
              text: "Command-line Options",
              link: "/launch-orbit-chain/reference/command-line-options"
            },
            {
              text: "Additional Configuration Parameters",
              link: "/launch-orbit-chain/reference/additional-configuration-parameters"
            }
          ]
        },
        {
          text: "Troubleshooting",
          link: "/launch-orbit-chain/troubleshooting-building-orbit"
        }
      ]
    },
    {
      text: "Stylus",
      items: [
        {
          text: "Gentle Introduction",
          link: "/stylus/stylus-gentle-introduction"
        },
        { text: "Quickstart", link: "/stylus/stylus-quickstart" },
        {
          text: "How-tos",
          items: [
            {
              text: "Run a Local Dev Node",
              link: "/stylus/how-tos/local-stylus-dev-node"
            },
            {
              text: "Adding Support for New Languages",
              link: "/stylus/how-tos/adding-support-for-new-languages"
            },
            {
              text: "Optimizing Binaries",
              link: "/stylus/how-tos/optimizing-binaries"
            }
          ]
        },
        {
          text: "Concepts",
          items: [
            { text: "Gas and Ink", link: "/stylus/concepts/stylus-gas" },
            {
              text: "Public Preview",
              link: "/stylus/concepts/public-preview-expectations"
            }
          ]
        },
        {
          text: "Reference",
          items: [
            {
              text: "Rust SDK Guide",
              link: "/stylus/reference/rust-sdk-guide"
            },
            {
              text: "Stylus SDK",
              link: "/stylus/reference/stylus-sdk"
            },
            {
              text: "Testnets",
              link: "/stylus/reference/testnet-information"
            },
            {
              text: "Opcode Hostio Pricing",
              link: "/stylus/reference/opcode-hostio-pricing"
            }
          ]
        },
        {
          text: "Troubleshooting",
          link: "/stylus/troubleshooting-building-stylus"
        }
      ]
    },
    {
      text: "For Users",
      items: [
        { text: "Contribute", link: "/for-users/contribute" },
        {
          text: "Troubleshooting",
          link: "/for-users/troubleshooting-users"
        }
      ]
    },
    {
      text: "Sequencer",
      link: "/sequencer"
    },
    { text: "Inside AnyTrust", link: "/inside-anytrust" },
    {
      text: "Diagrams",
      items: [
        {
          text: "Challenge Manager",
          link: "/diagrams/_challenge-manager"
        },
        { text: "Deposit ETH", link: "/diagrams/_deposit-eth" },
        { text: "Withdraw ETH", link: "/diagrams/_withdraw-eth" }
      ]
    },
    { text: "Example", link: "/example" },
    {
      text: "Learn More",
      items: [
        { text: "Contribute", link: "/learn-more/contribute" },
        { text: "FAQ", link: "/learn-more/faq" }
      ]
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
              link: "/arbitrum-sdk/classes/ArbitrumProvider"
            },
            {
              text: "Erc20Bridger",
              link: "/arbitrum-sdk/classes/Erc20Bridger"
            },
            { text: "EthBridger", link: "/arbitrum-sdk/classes/EthBridger" },
            {
              text: "EventFetcher",
              link: "/arbitrum-sdk/classes/EventFetcher"
            },
            { text: "InboxTools", link: "/arbitrum-sdk/classes/InboxTools" },
            {
              text: "L1ToL2Message",
              link: "/arbitrum-sdk/classes/L1ToL2Message"
            },
            {
              text: "L1ToL2MessageGasEstimator",
              link: "/arbitrum-sdk/classes/L1ToL2MessageGasEstimator"
            },
            {
              text: "L1ToL2MessageReader",
              link: "/arbitrum-sdk/classes/L1ToL2MessageReader"
            },
            {
              text: "L1ToL2MessageReaderClassic",
              link: "/arbitrum-sdk/classes/L1ToL2MessageReaderClassic"
            },
            {
              text: "L1ToL2MessageWriter",
              link: "/arbitrum-sdk/classes/L1ToL2MessageWriter"
            },
            {
              text: "L1TransactionReceipt",
              link: "/arbitrum-sdk/classes/L1TransactionReceipt"
            },
            {
              text: "L2ToL1Message",
              link: "/arbitrum-sdk/classes/L2ToL1Message"
            },
            {
              text: "L2ToL1MessageReader",
              link: "/arbitrum-sdk/classes/L2ToL1MessageReader"
            },
            {
              text: "L2ToL1MessageWriter",
              link: "/arbitrum-sdk/classes/L2ToL1MessageWriter"
            },
            {
              text: "L2TransactionReceipt",
              link: "/arbitrum-sdk/classes/L2TransactionReceipt"
            },
            { text: "MultiCaller", link: "/arbitrum-sdk/classes/MultiCaller" },
            {
              text: "RetryableDataTools",
              link: "/arbitrum-sdk/classes/RetryableDataTools"
            }
          ]
        },
        {
          text: "Enums",
          items: [
            {
              text: "EthDepositStatus",
              link: "/arbitrum-sdk/enums/EthDepositStatus"
            },
            {
              text: "L1ToL2MessageStatus",
              link: "/arbitrum-sdk/enums/L1ToL2MessageStatus"
            },
            {
              text: "L2ToL1MessageStatus",
              link: "/arbitrum-sdk/enums/L2ToL1MessageStatus"
            }
          ]
        },
        {
          text: "Interfaces",
          items: [
            {
              text: "L1ContractTransaction",
              link: "/arbitrum-sdk/interfaces/L1ContractTransaction"
            },
            { text: "L1Network", link: "/arbitrum-sdk/interfaces/L1Network" },
            { text: "L1Networks", link: "/arbitrum-sdk/interfaces/L1Networks" },
            {
              text: "L2ContractTransaction",
              link: "/arbitrum-sdk/interfaces/L2ContractTransaction"
            },
            { text: "L2Network", link: "/arbitrum-sdk/interfaces/L2Network" },
            { text: "L2Networks", link: "/arbitrum-sdk/interfaces/L2Networks" },
            {
              text: "RetryableData",
              link: "/arbitrum-sdk/interfaces/RetryableData"
            }
          ]
        },
        {
          text: "Namespaces",
          items: [
            { text: "Constants", link: "/arbitrum-sdk/namespaces/constants" }
          ]
        }
      ]
    },
    {
      text: "Orbit SDK",
      items: [
        { text: "Overview", link: "/orbit-sdk" },
        {
          text: "Modules",
          items: [{ text: "Utils", link: "/orbit-sdk/modules/utils" }]
        }
      ]
    }
  ]
});
export {
  vocs_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidm9jcy5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvZG91Z2xhbmNlL0RldmVsb3Blci9vYy9hcmJpdHJ1bS1kb2NzL3dlYnNpdGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9kb3VnbGFuY2UvRGV2ZWxvcGVyL29jL2FyYml0cnVtLWRvY3Mvd2Vic2l0ZS92b2NzLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvZG91Z2xhbmNlL0RldmVsb3Blci9vYy9hcmJpdHJ1bS1kb2NzL3dlYnNpdGUvdm9jcy5jb25maWcudHNcIjtpbXBvcnQgcmVtYXJrTWVybWFpZCBmcm9tIFwicmVtYXJrLW1lcm1haWRqc1wiO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZvY3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgdGl0bGU6IFwiQXJiaXRydW0gRG9jc1wiLFxuICBtYXJrZG93bjoge1xuICAgIHJlbWFya1BsdWdpbnM6IFtyZW1hcmtNZXJtYWlkXSxcbiAgfSxcbiAgc2lkZWJhcjogW1xuICAgIHtcbiAgICAgIHRleHQ6IFwiV2VsY29tZVwiLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiQXJiaXRydW0gR2VudGxlIEludHJvZHVjdGlvblwiLFxuICAgICAgICAgIGxpbms6IFwiL3dlbGNvbWUvYXJiaXRydW0tZ2VudGxlLWludHJvZHVjdGlvblwiLFxuICAgICAgICB9LFxuICAgICAgICB7IHRleHQ6IFwiR2V0IFN0YXJ0ZWRcIiwgbGluazogXCIvd2VsY29tZS9nZXQtc3RhcnRlZFwiIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogXCJJbnRyb1wiLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiBcIkludHJvZHVjdGlvblwiLCBsaW5rOiBcIi9pbnRyby9pbnRyb1wiIH0sXG4gICAgICAgIHsgdGV4dDogXCJHbG9zc2FyeVwiLCBsaW5rOiBcIi9pbnRyby9nbG9zc2FyeVwiIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogXCJBcmJPU1wiLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiBcIkFyYk9TIE92ZXJ2aWV3XCIsIGxpbms6IFwiL2FyYm9zL2FyYm9zXCIgfSxcbiAgICAgICAgeyB0ZXh0OiBcIkdhcyBNYW5hZ2VtZW50XCIsIGxpbms6IFwiL2FyYm9zL2dhc1wiIH0sXG4gICAgICAgIHsgdGV4dDogXCJHZXRoIENvbXBhdGliaWxpdHlcIiwgbGluazogXCIvYXJib3MvZ2V0aFwiIH0sXG4gICAgICAgIHsgdGV4dDogXCJMYXllciAxIFByaWNpbmdcIiwgbGluazogXCIvYXJib3MvbDEtcHJpY2luZ1wiIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIkwxIHRvIEwyIE1lc3NhZ2luZ1wiLFxuICAgICAgICAgIGxpbms6IFwiL2FyYm9zL2wxLXRvLWwyLW1lc3NhZ2luZ1wiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJMMiB0byBMMSBNZXNzYWdpbmdcIixcbiAgICAgICAgICBsaW5rOiBcIi9hcmJvcy9sMi10by1sMS1tZXNzYWdpbmdcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBcIkluc2lkZSBBcmJpdHJ1bSBOaXRyb1wiLFxuICAgICAgbGluazogXCIvaW5zaWRlLWFyYml0cnVtLW5pdHJvL2luc2lkZS1hcmJpdHJ1bS1uaXRyb1wiLFxuICAgIH0sXG4gICAgeyB0ZXh0OiBcIldoeSBOaXRybz9cIiwgbGluazogXCIvd2h5LW5pdHJvXCIgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBcIlByb3ZpbmdcIixcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIkNoYWxsZW5nZSBNYW5hZ2VyXCIsXG4gICAgICAgICAgbGluazogXCIvcHJvdmluZy9jaGFsbGVuZ2UtbWFuYWdlclwiLFxuICAgICAgICB9LFxuICAgICAgICB7IHRleHQ6IFwiT1NQIEFzc3VtcHRpb25zXCIsIGxpbms6IFwiL3Byb3Zpbmcvb3NwLWFzc3VtcHRpb25zXCIgfSxcbiAgICAgICAgeyB0ZXh0OiBcIldBU00gdG8gV0FWTVwiLCBsaW5rOiBcIi9wcm92aW5nL3dhc20tdG8td2F2bVwiIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIldBVk0gQ3VzdG9tIE9wY29kZXNcIixcbiAgICAgICAgICBsaW5rOiBcIi9wcm92aW5nL3dhdm0tY3VzdG9tLW9wY29kZXNcIixcbiAgICAgICAgfSxcbiAgICAgICAgeyB0ZXh0OiBcIldBVk0gRmxvYXRzXCIsIGxpbms6IFwiL3Byb3Zpbmcvd2F2bS1mbG9hdHNcIiB9LFxuICAgICAgICB7IHRleHQ6IFwiV0FWTSBNb2R1bGVzXCIsIGxpbms6IFwiL3Byb3Zpbmcvd2F2bS1tb2R1bGVzXCIgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7IHRleHQ6IFwiQXNzZXJ0aW9uIFRyZWVcIiwgbGluazogXCIvYXNzZXJ0aW9uLXRyZWVcIiB9LFxuICAgIHtcbiAgICAgIHRleHQ6IFwiR2V0dGluZyBTdGFydGVkXCIsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6IFwiRm9yIERldmVsb3BlcnNcIiwgbGluazogXCIvZ2V0dGluZy1zdGFydGVkXCIgfSxcbiAgICAgICAgeyB0ZXh0OiBcIkZvciBVc2Vyc1wiLCBsaW5rOiBcIi9nZXR0aW5nLXN0YXJ0ZWQtdXNlcnNcIiB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6IFwiTm9kZSBSdW5uaW5nXCIsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJHZW50bGUgSW50cm9kdWN0aW9uXCIsXG4gICAgICAgICAgbGluazogXCIvbm9kZS1ydW5uaW5nL2dlbnRsZS1pbnRyb2R1Y3Rpb24tcnVuLW5vZGVcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiUXVpY2tzdGFydFwiLFxuICAgICAgICAgIGxpbms6IFwiL25vZGUtcnVubmluZy9xdWlja3N0YXJ0LXJ1bm5pbmctYS1ub2RlXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIkhvdy10b3NcIixcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiBcIlJ1biBhIEZ1bGwgTm9kZVwiLFxuICAgICAgICAgICAgICBsaW5rOiBcIi9ub2RlLXJ1bm5pbmcvaG93LXRvcy9ydW5uaW5nLWEtZnVsbC1ub2RlXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiBcIlJ1biBhIExvY2FsIERldiBOb2RlXCIsXG4gICAgICAgICAgICAgIGxpbms6IFwiL25vZGUtcnVubmluZy9ob3ctdG9zL2xvY2FsLWRldi1ub2RlXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiBcIkRhdGEgQXZhaWxhYmlsaXR5IENvbW1pdHRlZVwiLFxuICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6IFwiSW50cm9kdWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICBsaW5rOiBcIi9ub2RlLXJ1bm5pbmcvaG93LXRvcy9kYXRhLWF2YWlsYWJpbGl0eS1jb21taXR0ZWUvaW50cm9kdWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiBcIkNvbmZpZ3VyZSB0aGUgREFDIGluIFlvdXIgQ2hhaW5cIixcbiAgICAgICAgICAgICAgICAgIGxpbms6IFwiL25vZGUtcnVubmluZy9ob3ctdG9zL2RhdGEtYXZhaWxhYmlsaXR5LWNvbW1pdHRlZS9jb25maWd1cmUtdGhlLWRhYy1pbi15b3VyLWNoYWluXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiBcIkRlcGxveSBhIERBU1wiLFxuICAgICAgICAgICAgICAgICAgbGluazogXCIvbm9kZS1ydW5uaW5nL2hvdy10b3MvZGF0YS1hdmFpbGFiaWxpdHktY29tbWl0dGVlL2RlcGxveS1hLWRhc1wiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogXCJEZXBsb3kgYSBNaXJyb3IgREFTXCIsXG4gICAgICAgICAgICAgICAgICBsaW5rOiBcIi9ub2RlLXJ1bm5pbmcvaG93LXRvcy9kYXRhLWF2YWlsYWJpbGl0eS1jb21taXR0ZWUvZGVwbG95LWEtbWlycm9yLWRhc1wiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gLi4uIG90aGVyIGhvdy10b3MgLi4uXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiUmVmZXJlbmNlXCIsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogXCJMMSBFdGhlcmV1bSBSUEMgUHJvdmlkZXJzXCIsXG4gICAgICAgICAgICAgIGxpbms6IFwiL25vZGUtcnVubmluZy9yZWZlcmVuY2UvZXRoZXJldW0tYmVhY29uLXJwYy1wcm92aWRlcnNcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6IFwiQXJiT1MgU29mdHdhcmUgUmVsZWFzZXNcIixcbiAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiBcIk92ZXJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgICBsaW5rOiBcIi9ub2RlLXJ1bm5pbmcvcmVmZXJlbmNlL2FyYm9zLXNvZnR3YXJlLXJlbGVhc2VzL292ZXJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiBcIkFyYk9TIDIwIEF0bGFzXCIsXG4gICAgICAgICAgICAgICAgICBsaW5rOiBcIi9ub2RlLXJ1bm5pbmcvcmVmZXJlbmNlL2FyYm9zLXNvZnR3YXJlLXJlbGVhc2VzL2FyYm9zMjBcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6IFwiQXJiT1MgMTFcIixcbiAgICAgICAgICAgICAgICAgIGxpbms6IFwiL25vZGUtcnVubmluZy9yZWZlcmVuY2UvYXJib3Mtc29mdHdhcmUtcmVsZWFzZXMvYXJib3MxMVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIlRyb3VibGVzaG9vdGluZ1wiLFxuICAgICAgICAgIGxpbms6IFwiL25vZGUtcnVubmluZy90cm91Ymxlc2hvb3RpbmctcnVubmluZy1ub2Rlc1wiLFxuICAgICAgICB9LFxuICAgICAgICB7IHRleHQ6IFwiRkFRXCIsIGxpbms6IFwiL25vZGUtcnVubmluZy9mYXFcIiB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6IFwiRm9yIERldmVsb3BlcnNcIixcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogXCJDaGFpbiBQYXJhbWV0ZXJzXCIsIGxpbms6IFwiL2Zvci1kZXZzL2NoYWluLXBhcmFtc1wiIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIkNvbmNlcHRzXCIsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogXCJEaWZmZXJlbmNlcyBCZXR3ZWVuIEFyYml0cnVtIGFuZCBFdGhlcmV1bVwiLFxuICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6IFwiT3ZlcnZpZXdcIixcbiAgICAgICAgICAgICAgICAgIGxpbms6IFwiL2Zvci1kZXZzL2NvbmNlcHRzL2RpZmZlcmVuY2VzLWJldHdlZW4tYXJiaXRydW0tZXRoZXJldW0vb3ZlcnZpZXdcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6IFwiQmxvY2sgTnVtYmVycyBhbmQgVGltZVwiLFxuICAgICAgICAgICAgICAgICAgbGluazogXCIvZm9yLWRldnMvY29uY2VwdHMvZGlmZmVyZW5jZXMtYmV0d2Vlbi1hcmJpdHJ1bS1ldGhlcmV1bS9ibG9jay1udW1iZXJzLWFuZC10aW1lXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiBcIlJQQyBNZXRob2RzXCIsXG4gICAgICAgICAgICAgICAgICBsaW5rOiBcIi9mb3ItZGV2cy9jb25jZXB0cy9kaWZmZXJlbmNlcy1iZXR3ZWVuLWFyYml0cnVtLWV0aGVyZXVtL3JwYy1tZXRob2RzXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiBcIlNvbGlkaXR5IFN1cHBvcnRcIixcbiAgICAgICAgICAgICAgICAgIGxpbms6IFwiL2Zvci1kZXZzL2NvbmNlcHRzL2RpZmZlcmVuY2VzLWJldHdlZW4tYXJiaXRydW0tZXRoZXJldW0vc29saWRpdHktc3VwcG9ydFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiBcIk5vZGUgSW50ZXJmYWNlXCIsXG4gICAgICAgICAgICAgIGxpbms6IFwiL2Zvci1kZXZzL2NvbmNlcHRzL25vZGVpbnRlcmZhY2VcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IHRleHQ6IFwiT3JhY2xlc1wiLCBsaW5rOiBcIi9mb3ItZGV2cy9jb25jZXB0cy9vcmFjbGVzXCIgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogXCJQcmVjb21waWxlc1wiLFxuICAgICAgICAgICAgICBsaW5rOiBcIi9mb3ItZGV2cy9jb25jZXB0cy9wcmVjb21waWxlc1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogXCJQdWJsaWMgQ2hhaW5zXCIsXG4gICAgICAgICAgICAgIGxpbms6IFwiL2Zvci1kZXZzL2NvbmNlcHRzL3B1YmxpYy1jaGFpbnNcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6IFwiVG9rZW4gQnJpZGdlXCIsXG4gICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGV4dDogXCJUb2tlbiBCcmlkZ2UgT3ZlcnZpZXdcIixcbiAgICAgICAgICAgICAgICAgIGxpbms6IFwiL2Zvci1kZXZzL2NvbmNlcHRzL3Rva2VuLWJyaWRnZS90b2tlbi1icmlkZ2Utb3ZlcnZpZXdcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6IFwiQnJpZGdpbmcgRVJDMjAgVG9rZW5zXCIsXG4gICAgICAgICAgICAgICAgICBsaW5rOiBcIi9mb3ItZGV2cy9jb25jZXB0cy90b2tlbi1icmlkZ2UvdG9rZW4tYnJpZGdlLWVyYzIwXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiBcIkJyaWRnaW5nIEV0aGVyXCIsXG4gICAgICAgICAgICAgICAgICBsaW5rOiBcIi9mb3ItZGV2cy9jb25jZXB0cy90b2tlbi1icmlkZ2UvdG9rZW4tYnJpZGdlLWV0aGVyXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgeyB0ZXh0OiBcIkNvbnRyaWJ1dGVcIiwgbGluazogXCIvZm9yLWRldnMvY29udHJpYnV0ZVwiIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIkNyb3NzLWNoYWluIE1lc3NhZ2luZ1wiLFxuICAgICAgICAgIGxpbms6IFwiL2Zvci1kZXZzL2Nyb3NzLWNoYWluLW1lc3NzYWdpbmdcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiRGV2IFRvb2xzIGFuZCBSZXNvdXJjZXNcIixcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiBcIkRlYnVnZ2luZyBUb29sc1wiLFxuICAgICAgICAgICAgICBsaW5rOiBcIi9mb3ItZGV2cy9kZXYtdG9vbHMtYW5kLXJlc291cmNlcy9kZWJ1Z2dpbmctdG9vbHNcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6IFwiRGV2ZWxvcG1lbnQgRnJhbWV3b3Jrc1wiLFxuICAgICAgICAgICAgICBsaW5rOiBcIi9mb3ItZGV2cy9kZXYtdG9vbHMtYW5kLXJlc291cmNlcy9kZXZlbG9wbWVudC1mcmFtZXdvcmtzXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiBcIk1vbml0b3JpbmcgVG9vbHMgYW5kIEJsb2NrIEV4cGxvcmVyc1wiLFxuICAgICAgICAgICAgICBsaW5rOiBcIi9mb3ItZGV2cy9kZXYtdG9vbHMtYW5kLXJlc291cmNlcy9tb25pdG9yaW5nLXRvb2xzLWJsb2NrLWV4cGxvcmVyc1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogXCJOb2RlIEludGVyZmFjZVwiLFxuICAgICAgICAgICAgICBsaW5rOiBcIi9mb3ItZGV2cy9kZXYtdG9vbHMtYW5kLXJlc291cmNlcy9ub2RlaW50ZXJmYWNlXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiBcIk9yYWNsZXNcIixcbiAgICAgICAgICAgICAgbGluazogXCIvZm9yLWRldnMvZGV2LXRvb2xzLWFuZC1yZXNvdXJjZXMvb3JhY2xlc1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogXCJQcmVjb21waWxlc1wiLFxuICAgICAgICAgICAgICBsaW5rOiBcIi9mb3ItZGV2cy9kZXYtdG9vbHMtYW5kLXJlc291cmNlcy9wcmVjb21waWxlc1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogXCJXZWIzIExpYnJhcmllcyBhbmQgVG9vbHNcIixcbiAgICAgICAgICAgICAgbGluazogXCIvZm9yLWRldnMvZGV2LXRvb2xzLWFuZC1yZXNvdXJjZXMvd2ViMy1saWJyYXJpZXMtdG9vbHNcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiUXVpY2tzdGFydCBTb2xpZGl0eSBIYXJkaGF0XCIsXG4gICAgICAgICAgbGluazogXCIvZm9yLWRldnMvcXVpY2tzdGFydC1zb2xpZGl0eS1oYXJkaGF0XCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIlRyb3VibGVzaG9vdGluZ1wiLFxuICAgICAgICAgIGxpbms6IFwiL2Zvci1kZXZzL3Ryb3VibGVzaG9vdGluZy1idWlsZGluZ1wiLFxuICAgICAgICB9LFxuICAgICAgICB7IHRleHQ6IFwiVXNlZnVsIEFkZHJlc3Nlc1wiLCBsaW5rOiBcIi9mb3ItZGV2cy91c2VmdWwtYWRkcmVzc2VzXCIgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBcIkRldmVsb3BlcnMgSG93LXRvc1wiLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiQnJpZGdlIFRva2Vuc1wiLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6IFwiQnJpZGdlIFRva2VucyBDdXN0b20gR2F0ZXdheVwiLFxuICAgICAgICAgICAgICBsaW5rOiBcIi9kZXZzLWhvdy10b3MvYnJpZGdlLXRva2Vucy9ob3ctdG8tYnJpZGdlLXRva2Vucy1jdXN0b20tZ2F0ZXdheVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogXCJCcmlkZ2UgVG9rZW5zIEdlbmVyaWMgQ3VzdG9tXCIsXG4gICAgICAgICAgICAgIGxpbms6IFwiL2RldnMtaG93LXRvcy9icmlkZ2UtdG9rZW5zL2hvdy10by1icmlkZ2UtdG9rZW5zLWdlbmVyaWMtY3VzdG9tXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiBcIkJyaWRnZSBUb2tlbnMgT3ZlcnZpZXdcIixcbiAgICAgICAgICAgICAgbGluazogXCIvZGV2cy1ob3ctdG9zL2JyaWRnZS10b2tlbnMvaG93LXRvLWJyaWRnZS10b2tlbnMtb3ZlcnZpZXdcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6IFwiQnJpZGdlIFRva2VucyBTdGFuZGFyZFwiLFxuICAgICAgICAgICAgICBsaW5rOiBcIi9kZXZzLWhvdy10b3MvYnJpZGdlLXRva2Vucy9ob3ctdG8tYnJpZGdlLXRva2Vucy1zdGFuZGFyZFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJFc3RpbWF0ZSBHYXNcIixcbiAgICAgICAgICBsaW5rOiBcIi9kZXZzLWhvdy10b3MvaG93LXRvLWVzdGltYXRlLWdhc1wiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJVc2UgT3JhY2xlc1wiLFxuICAgICAgICAgIGxpbms6IFwiL2RldnMtaG93LXRvcy9ob3ctdG8tdXNlLW9yYWNsZXNcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBcIkJyaWRnZSBUb2tlbnNcIixcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIlVTREMgQ29uY2VwdFwiLFxuICAgICAgICAgIGxpbms6IFwiL2JyaWRnZS10b2tlbnMvY29uY2VwdHMvdXNkYy1jb25jZXB0XCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIkdlbnRsZSBJbnRyb2R1Y3Rpb24gdG8gQnJpZGdlXCIsXG4gICAgICAgICAgbGluazogXCIvYnJpZGdlLXRva2Vucy9nZW50bGUtaW50cm9kdWN0aW9uLWJyaWRnZVwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHsgdGV4dDogXCJUcmFuc2FjdGlvbiBMaWZlY3ljbGVcIiwgbGluazogXCIvdHgtbGlmZWN5Y2xlXCIgfSxcbiAgICB7IHRleHQ6IFwiTWFpbm5ldCBSaXNrc1wiLCBsaW5rOiBcIi9tYWlubmV0LXJpc2tzXCIgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBcIkxhdW5jaCBPcmJpdCBDaGFpblwiLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiR2VudGxlIEludHJvZHVjdGlvblwiLFxuICAgICAgICAgIGxpbms6IFwiL2xhdW5jaC1vcmJpdC1jaGFpbi9vcmJpdC1nZW50bGUtaW50cm9kdWN0aW9uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIlF1aWNrc3RhcnRcIixcbiAgICAgICAgICBsaW5rOiBcIi9sYXVuY2gtb3JiaXQtY2hhaW4vb3JiaXQtcXVpY2tzdGFydFwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJIb3ctdG9zXCIsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogXCJDdXN0b21pemUgRGVwbG95bWVudCBDb25maWdcIixcbiAgICAgICAgICAgICAgbGluazogXCIvbGF1bmNoLW9yYml0LWNoYWluL2hvdy10b3MvY3VzdG9taXplLWRlcGxveW1lbnQtY29uZmlndXJhdGlvblwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogXCJDdXN0b21pemUgUHJlY29tcGlsZVwiLFxuICAgICAgICAgICAgICBsaW5rOiBcIi9sYXVuY2gtb3JiaXQtY2hhaW4vaG93LXRvcy9jdXN0b21pemUtcHJlY29tcGlsZVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogXCJDdXN0b21pemUgU1RGXCIsXG4gICAgICAgICAgICAgIGxpbms6IFwiL2xhdW5jaC1vcmJpdC1jaGFpbi9ob3ctdG9zL2N1c3RvbWl6ZS1zdGZcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6IFwiQWRkIFlvdXIgQ2hhaW4gdG8gdGhlIEJyaWRnZVwiLFxuICAgICAgICAgICAgICBsaW5rOiBcIi9sYXVuY2gtb3JiaXQtY2hhaW4vaG93LXRvcy9hZGQtb3JiaXQtY2hhaW4tdG8tYnJpZGdlLXVpXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiBcIlVwZ3JhZGUgQXJiT1NcIixcbiAgICAgICAgICAgICAgbGluazogXCIvbGF1bmNoLW9yYml0LWNoYWluL2hvdy10b3MvYXJib3MtdXBncmFkZVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJDb25jZXB0c1wiLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6IFwiS2V5c2V0IEdlbmVyYXRpb24gKEFueVRydXN0IENoYWlucylcIixcbiAgICAgICAgICAgICAgbGluazogXCIvbGF1bmNoLW9yYml0LWNoYWluL2NvbmNlcHRzL2FueXRydXN0LW9yYml0LWNoYWluLWtleXNldC1nZW5lcmF0aW9uXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiBcIk9yYml0IENoYWluIE93bmVyc2hpcFwiLFxuICAgICAgICAgICAgICBsaW5rOiBcIi9sYXVuY2gtb3JiaXQtY2hhaW4vY29uY2VwdHMvY2hhaW4tb3duZXJzaGlwXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiBcIkN1c3RvbSBHYXMgVG9rZW4gU0RLXCIsXG4gICAgICAgICAgICAgIGxpbms6IFwiL2xhdW5jaC1vcmJpdC1jaGFpbi9jb25jZXB0cy9jdXN0b20tZ2FzLXRva2VuLXNka1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogXCJQdWJsaWMgUHJldmlld1wiLFxuICAgICAgICAgICAgICBsaW5rOiBcIi9sYXVuY2gtb3JiaXQtY2hhaW4vY29uY2VwdHMvcHVibGljLXByZXZpZXctZXhwZWN0YXRpb25zXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIlJlZmVyZW5jZVwiLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6IFwiQ29tbWFuZC1saW5lIE9wdGlvbnNcIixcbiAgICAgICAgICAgICAgbGluazogXCIvbGF1bmNoLW9yYml0LWNoYWluL3JlZmVyZW5jZS9jb21tYW5kLWxpbmUtb3B0aW9uc1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogXCJBZGRpdGlvbmFsIENvbmZpZ3VyYXRpb24gUGFyYW1ldGVyc1wiLFxuICAgICAgICAgICAgICBsaW5rOiBcIi9sYXVuY2gtb3JiaXQtY2hhaW4vcmVmZXJlbmNlL2FkZGl0aW9uYWwtY29uZmlndXJhdGlvbi1wYXJhbWV0ZXJzXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIlRyb3VibGVzaG9vdGluZ1wiLFxuICAgICAgICAgIGxpbms6IFwiL2xhdW5jaC1vcmJpdC1jaGFpbi90cm91Ymxlc2hvb3RpbmctYnVpbGRpbmctb3JiaXRcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBcIlN0eWx1c1wiLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiR2VudGxlIEludHJvZHVjdGlvblwiLFxuICAgICAgICAgIGxpbms6IFwiL3N0eWx1cy9zdHlsdXMtZ2VudGxlLWludHJvZHVjdGlvblwiLFxuICAgICAgICB9LFxuICAgICAgICB7IHRleHQ6IFwiUXVpY2tzdGFydFwiLCBsaW5rOiBcIi9zdHlsdXMvc3R5bHVzLXF1aWNrc3RhcnRcIiB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJIb3ctdG9zXCIsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogXCJSdW4gYSBMb2NhbCBEZXYgTm9kZVwiLFxuICAgICAgICAgICAgICBsaW5rOiBcIi9zdHlsdXMvaG93LXRvcy9sb2NhbC1zdHlsdXMtZGV2LW5vZGVcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6IFwiQWRkaW5nIFN1cHBvcnQgZm9yIE5ldyBMYW5ndWFnZXNcIixcbiAgICAgICAgICAgICAgbGluazogXCIvc3R5bHVzL2hvdy10b3MvYWRkaW5nLXN1cHBvcnQtZm9yLW5ldy1sYW5ndWFnZXNcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6IFwiT3B0aW1pemluZyBCaW5hcmllc1wiLFxuICAgICAgICAgICAgICBsaW5rOiBcIi9zdHlsdXMvaG93LXRvcy9vcHRpbWl6aW5nLWJpbmFyaWVzXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIkNvbmNlcHRzXCIsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgdGV4dDogXCJHYXMgYW5kIElua1wiLCBsaW5rOiBcIi9zdHlsdXMvY29uY2VwdHMvc3R5bHVzLWdhc1wiIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6IFwiUHVibGljIFByZXZpZXdcIixcbiAgICAgICAgICAgICAgbGluazogXCIvc3R5bHVzL2NvbmNlcHRzL3B1YmxpYy1wcmV2aWV3LWV4cGVjdGF0aW9uc1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJSZWZlcmVuY2VcIixcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiBcIlJ1c3QgU0RLIEd1aWRlXCIsXG4gICAgICAgICAgICAgIGxpbms6IFwiL3N0eWx1cy9yZWZlcmVuY2UvcnVzdC1zZGstZ3VpZGVcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6IFwiU3R5bHVzIFNES1wiLFxuICAgICAgICAgICAgICBsaW5rOiBcIi9zdHlsdXMvcmVmZXJlbmNlL3N0eWx1cy1zZGtcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6IFwiVGVzdG5ldHNcIixcbiAgICAgICAgICAgICAgbGluazogXCIvc3R5bHVzL3JlZmVyZW5jZS90ZXN0bmV0LWluZm9ybWF0aW9uXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiBcIk9wY29kZSBIb3N0aW8gUHJpY2luZ1wiLFxuICAgICAgICAgICAgICBsaW5rOiBcIi9zdHlsdXMvcmVmZXJlbmNlL29wY29kZS1ob3N0aW8tcHJpY2luZ1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJUcm91Ymxlc2hvb3RpbmdcIixcbiAgICAgICAgICBsaW5rOiBcIi9zdHlsdXMvdHJvdWJsZXNob290aW5nLWJ1aWxkaW5nLXN0eWx1c1wiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6IFwiRm9yIFVzZXJzXCIsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6IFwiQ29udHJpYnV0ZVwiLCBsaW5rOiBcIi9mb3ItdXNlcnMvY29udHJpYnV0ZVwiIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIlRyb3VibGVzaG9vdGluZ1wiLFxuICAgICAgICAgIGxpbms6IFwiL2Zvci11c2Vycy90cm91Ymxlc2hvb3RpbmctdXNlcnNcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBcIlNlcXVlbmNlclwiLFxuICAgICAgbGluazogXCIvc2VxdWVuY2VyXCIsXG4gICAgfSxcbiAgICB7IHRleHQ6IFwiSW5zaWRlIEFueVRydXN0XCIsIGxpbms6IFwiL2luc2lkZS1hbnl0cnVzdFwiIH0sXG4gICAge1xuICAgICAgdGV4dDogXCJEaWFncmFtc1wiLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiQ2hhbGxlbmdlIE1hbmFnZXJcIixcbiAgICAgICAgICBsaW5rOiBcIi9kaWFncmFtcy9fY2hhbGxlbmdlLW1hbmFnZXJcIixcbiAgICAgICAgfSxcbiAgICAgICAgeyB0ZXh0OiBcIkRlcG9zaXQgRVRIXCIsIGxpbms6IFwiL2RpYWdyYW1zL19kZXBvc2l0LWV0aFwiIH0sXG4gICAgICAgIHsgdGV4dDogXCJXaXRoZHJhdyBFVEhcIiwgbGluazogXCIvZGlhZ3JhbXMvX3dpdGhkcmF3LWV0aFwiIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAgeyB0ZXh0OiBcIkV4YW1wbGVcIiwgbGluazogXCIvZXhhbXBsZVwiIH0sXG4gICAge1xuICAgICAgdGV4dDogXCJMZWFybiBNb3JlXCIsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6IFwiQ29udHJpYnV0ZVwiLCBsaW5rOiBcIi9sZWFybi1tb3JlL2NvbnRyaWJ1dGVcIiB9LFxuICAgICAgICB7IHRleHQ6IFwiRkFRXCIsIGxpbms6IFwiL2xlYXJuLW1vcmUvZmFxXCIgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7IHRleHQ6IFwiQXVkaXQgUmVwb3J0c1wiLCBsaW5rOiBcIi9hdWRpdC1yZXBvcnRzXCIgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBcIkFyYml0cnVtIFNES1wiLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyB0ZXh0OiBcIk92ZXJ2aWV3XCIsIGxpbms6IFwiL2FyYml0cnVtLXNka1wiIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIkNsYXNzZXNcIixcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgeyB0ZXh0OiBcIkFkZHJlc3NcIiwgbGluazogXCIvYXJiaXRydW0tc2RrL2NsYXNzZXMvQWRkcmVzc1wiIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6IFwiQXJiaXRydW1Qcm92aWRlclwiLFxuICAgICAgICAgICAgICBsaW5rOiBcIi9hcmJpdHJ1bS1zZGsvY2xhc3Nlcy9BcmJpdHJ1bVByb3ZpZGVyXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiBcIkVyYzIwQnJpZGdlclwiLFxuICAgICAgICAgICAgICBsaW5rOiBcIi9hcmJpdHJ1bS1zZGsvY2xhc3Nlcy9FcmMyMEJyaWRnZXJcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IHRleHQ6IFwiRXRoQnJpZGdlclwiLCBsaW5rOiBcIi9hcmJpdHJ1bS1zZGsvY2xhc3Nlcy9FdGhCcmlkZ2VyXCIgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogXCJFdmVudEZldGNoZXJcIixcbiAgICAgICAgICAgICAgbGluazogXCIvYXJiaXRydW0tc2RrL2NsYXNzZXMvRXZlbnRGZXRjaGVyXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyB0ZXh0OiBcIkluYm94VG9vbHNcIiwgbGluazogXCIvYXJiaXRydW0tc2RrL2NsYXNzZXMvSW5ib3hUb29sc1wiIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6IFwiTDFUb0wyTWVzc2FnZVwiLFxuICAgICAgICAgICAgICBsaW5rOiBcIi9hcmJpdHJ1bS1zZGsvY2xhc3Nlcy9MMVRvTDJNZXNzYWdlXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiBcIkwxVG9MMk1lc3NhZ2VHYXNFc3RpbWF0b3JcIixcbiAgICAgICAgICAgICAgbGluazogXCIvYXJiaXRydW0tc2RrL2NsYXNzZXMvTDFUb0wyTWVzc2FnZUdhc0VzdGltYXRvclwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogXCJMMVRvTDJNZXNzYWdlUmVhZGVyXCIsXG4gICAgICAgICAgICAgIGxpbms6IFwiL2FyYml0cnVtLXNkay9jbGFzc2VzL0wxVG9MMk1lc3NhZ2VSZWFkZXJcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6IFwiTDFUb0wyTWVzc2FnZVJlYWRlckNsYXNzaWNcIixcbiAgICAgICAgICAgICAgbGluazogXCIvYXJiaXRydW0tc2RrL2NsYXNzZXMvTDFUb0wyTWVzc2FnZVJlYWRlckNsYXNzaWNcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6IFwiTDFUb0wyTWVzc2FnZVdyaXRlclwiLFxuICAgICAgICAgICAgICBsaW5rOiBcIi9hcmJpdHJ1bS1zZGsvY2xhc3Nlcy9MMVRvTDJNZXNzYWdlV3JpdGVyXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiBcIkwxVHJhbnNhY3Rpb25SZWNlaXB0XCIsXG4gICAgICAgICAgICAgIGxpbms6IFwiL2FyYml0cnVtLXNkay9jbGFzc2VzL0wxVHJhbnNhY3Rpb25SZWNlaXB0XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiBcIkwyVG9MMU1lc3NhZ2VcIixcbiAgICAgICAgICAgICAgbGluazogXCIvYXJiaXRydW0tc2RrL2NsYXNzZXMvTDJUb0wxTWVzc2FnZVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogXCJMMlRvTDFNZXNzYWdlUmVhZGVyXCIsXG4gICAgICAgICAgICAgIGxpbms6IFwiL2FyYml0cnVtLXNkay9jbGFzc2VzL0wyVG9MMU1lc3NhZ2VSZWFkZXJcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6IFwiTDJUb0wxTWVzc2FnZVdyaXRlclwiLFxuICAgICAgICAgICAgICBsaW5rOiBcIi9hcmJpdHJ1bS1zZGsvY2xhc3Nlcy9MMlRvTDFNZXNzYWdlV3JpdGVyXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiBcIkwyVHJhbnNhY3Rpb25SZWNlaXB0XCIsXG4gICAgICAgICAgICAgIGxpbms6IFwiL2FyYml0cnVtLXNkay9jbGFzc2VzL0wyVHJhbnNhY3Rpb25SZWNlaXB0XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyB0ZXh0OiBcIk11bHRpQ2FsbGVyXCIsIGxpbms6IFwiL2FyYml0cnVtLXNkay9jbGFzc2VzL011bHRpQ2FsbGVyXCIgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogXCJSZXRyeWFibGVEYXRhVG9vbHNcIixcbiAgICAgICAgICAgICAgbGluazogXCIvYXJiaXRydW0tc2RrL2NsYXNzZXMvUmV0cnlhYmxlRGF0YVRvb2xzXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIkVudW1zXCIsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogXCJFdGhEZXBvc2l0U3RhdHVzXCIsXG4gICAgICAgICAgICAgIGxpbms6IFwiL2FyYml0cnVtLXNkay9lbnVtcy9FdGhEZXBvc2l0U3RhdHVzXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiBcIkwxVG9MMk1lc3NhZ2VTdGF0dXNcIixcbiAgICAgICAgICAgICAgbGluazogXCIvYXJiaXRydW0tc2RrL2VudW1zL0wxVG9MMk1lc3NhZ2VTdGF0dXNcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6IFwiTDJUb0wxTWVzc2FnZVN0YXR1c1wiLFxuICAgICAgICAgICAgICBsaW5rOiBcIi9hcmJpdHJ1bS1zZGsvZW51bXMvTDJUb0wxTWVzc2FnZVN0YXR1c1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJJbnRlcmZhY2VzXCIsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogXCJMMUNvbnRyYWN0VHJhbnNhY3Rpb25cIixcbiAgICAgICAgICAgICAgbGluazogXCIvYXJiaXRydW0tc2RrL2ludGVyZmFjZXMvTDFDb250cmFjdFRyYW5zYWN0aW9uXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyB0ZXh0OiBcIkwxTmV0d29ya1wiLCBsaW5rOiBcIi9hcmJpdHJ1bS1zZGsvaW50ZXJmYWNlcy9MMU5ldHdvcmtcIiB9LFxuICAgICAgICAgICAgeyB0ZXh0OiBcIkwxTmV0d29ya3NcIiwgbGluazogXCIvYXJiaXRydW0tc2RrL2ludGVyZmFjZXMvTDFOZXR3b3Jrc1wiIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6IFwiTDJDb250cmFjdFRyYW5zYWN0aW9uXCIsXG4gICAgICAgICAgICAgIGxpbms6IFwiL2FyYml0cnVtLXNkay9pbnRlcmZhY2VzL0wyQ29udHJhY3RUcmFuc2FjdGlvblwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgdGV4dDogXCJMMk5ldHdvcmtcIiwgbGluazogXCIvYXJiaXRydW0tc2RrL2ludGVyZmFjZXMvTDJOZXR3b3JrXCIgfSxcbiAgICAgICAgICAgIHsgdGV4dDogXCJMMk5ldHdvcmtzXCIsIGxpbms6IFwiL2FyYml0cnVtLXNkay9pbnRlcmZhY2VzL0wyTmV0d29ya3NcIiB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0ZXh0OiBcIlJldHJ5YWJsZURhdGFcIixcbiAgICAgICAgICAgICAgbGluazogXCIvYXJiaXRydW0tc2RrL2ludGVyZmFjZXMvUmV0cnlhYmxlRGF0YVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJOYW1lc3BhY2VzXCIsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgdGV4dDogXCJDb25zdGFudHNcIiwgbGluazogXCIvYXJiaXRydW0tc2RrL25hbWVzcGFjZXMvY29uc3RhbnRzXCIgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6IFwiT3JiaXQgU0RLXCIsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6IFwiT3ZlcnZpZXdcIiwgbGluazogXCIvb3JiaXQtc2RrXCIgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiTW9kdWxlc1wiLFxuICAgICAgICAgIGl0ZW1zOiBbeyB0ZXh0OiBcIlV0aWxzXCIsIGxpbms6IFwiL29yYml0LXNkay9tb2R1bGVzL3V0aWxzXCIgfV0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMlUsT0FBTyxtQkFBbUI7QUFDclcsU0FBUyxvQkFBb0I7QUFFN0IsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsT0FBTztBQUFBLEVBQ1AsVUFBVTtBQUFBLElBQ1IsZUFBZSxDQUFDLGFBQWE7QUFBQSxFQUMvQjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1A7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxRQUNMO0FBQUEsVUFDRSxNQUFNO0FB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QUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixPQUFPO0FBQUEsWUFDTDtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE9BQU87QUFBQSxZQUNMO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLFFBQ0w7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQSxFQUFFLE1BQU0sY0FBYyxNQUFNLDRCQUE0QjtBQUFBLFFBQ3hEO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixPQUFPO0FBQUEsWUFDTDtBQUFB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QUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBLEVBQUUsTUFBTSxlQUFlLE1BQU0sb0NBQW9DO0FBQUEsWUFDakU7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixPQUFPO0FBQUEsWUFDTDtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixPQUFPO0FBQUEsWUFDTDtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBLEVBQUUsTUFBTSxhQUFhLE1BQU0scUNBQXFDO0FBQUEsWUFDaEUsRUFBRSxNQUFNLGNBQWMsTUFBTSxzQ0FBc0M7QUFBQSxZQUNsRTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBLEVBQUUsTUFBTSxhQUFhLE1BQU0scUNBQXFDO0FBQUEsWUFDaEUsRUFBRSxNQUFNLGNBQWMsTUFBTSxzQ0FBc0M7QUFBQSxZQUNsRTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE9BQU87QUFBQSxZQUNMLEVBQUUsTUFBTSxhQUFhLE1BQU0scUNBQXFDO0FBQUEsVUFDbEU7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsUUFDTCxFQUFFLE1BQU0sWUFBWSxNQUFNLGFBQWE7QUFBQSxRQUN2QztBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sT0FBTyxDQUFDLEVBQUUsTUFBTSxTQUFTLE1BQU0sMkJBQTJCLENBQUM7QUFBQSxRQUM3RDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
