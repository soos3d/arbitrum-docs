import React from "react";
// import a from "@docusaurus/a";

// import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  // Svg: ''
  description: string;
  href?: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Quickstart Stylus",
    // Svg: ''
    href: "/stylus/stylus-quickstart",
    description:
      "Use Stylus to write an EVM-compatible smart contract in Rust.",
  },
  {
    title: "Quickstart Build a dApp (Solidity)",
    // Svg: ''
    href: "/for-devs/quickstart-solidity-hardhat",
    description:
      "Deploy a cupcake vending machine contract locally, then to Arbitrum Goerli, then to Arbitrum Mainnet.",
  },
  {
    title: "Quickstart Run a node",
    // Svg: ''
    href: "/node-running/quickstart-running-a-node",
    description:
      "Learn how to run a node to interact with any Arbitrum network.",
  },
  {
    title: "Quickstart Bridge tokens",
    // Svg: ''
    href: "/getting-started-users",
    description:
      "Learn how to transfer tokens between Ethereum's L1 chain and Arbitrum's L2 chains using Arbitrum Bridge.",
  },
  {
    title: "The Arbitrum DAO",
    // Svg: ''
    href: "https://docs.arbitrum.foundation/",
    description:
      "Learn about the decentralized organization that governs the One and Nova chains.",
  },
  {
    title: "Quickstart Launch an Orbit chain",
    // Svg: ''
    href: "/launch-orbit-chain/orbit-quickstart",
    description:
      "Learn how to launch a local Orbit chain that settles to the public Arbitrum Goerli testnet.",
  },
];

function Feature({ title, description, href }: FeatureItem) {
  return (
    <a href={href}>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section>
      <h3>Resources</h3>
      <div>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
