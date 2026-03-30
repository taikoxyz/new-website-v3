export const guideTaikoAlethiaData = {
  hero: {
    label: "Guide",
    title: "What is Taiko Alethia?",
    subtitle:
      "An Ethereum-equivalent rollup designed for based sequencing, where AI agents and decentralized applications scale at sub-cent cost.",
  },
  tldr: {
    title: "TL;DR",
    items: [
      "Taiko Alethia is Taiko\u2019s mainnet. It is an Ethereum-equivalent (Type 1) ZK-EVM rollup designed as a based rollup, built for applications that need cheap, censorship-resistant execution at scale.",
      "Any Ethereum smart contract, tool or wallet works on Taiko without modification. Transactions cost a fraction of a cent.",
      "Three independent operators handle block building today, with the architecture progressing toward fully permissionless L1 validator sequencing.",
      "Multi-proof security (ZK + TEE), sub-second preconfirmations and ERC-8004 agent identity registries round out the stack.",
    ],
  },
  what: {
    title: "What is Taiko Alethia?",
    paragraphs: [
      "Taiko Alethia is Taiko\u2019s mainnet. It is a Type 1 (Ethereum-equivalent) ZK-EVM rollup designed as a based rollup, where Ethereum L1 validators will ultimately sequence transactions instead of a centralized sequencer.",
      'The name \u201CAlethia\u201D comes from the Greek word for truth. The mainnet launched in May 2024. Any smart contract, developer tool or wallet that works on Ethereum works on Taiko Alethia without modification.',
      "Taiko Alethia is purpose-built for applications that need high-frequency, low-cost, censorship-resistant execution. That includes AI agents, DeFi protocols, on-chain games and any application where transaction costs on Ethereum L1 are prohibitive.",
    ],
    quickRef: {
      headers: ["Property", "Value"],
      rows: [
        ["Network type", "Ethereum L2 (designed as a based rollup)"],
        ["EVM compatibility", "Type 1 (Ethereum-equivalent)"],
        ["Sequencing", "3 independent operators (progressing toward L1 validators)"],
        ["Proof system", "Multi-proof: ZK (SP1, RISC0) + TEE (SGX)"],
        ["Chain ID", "167000"],
        ["RPC endpoint", "https://rpc.mainnet.taiko.xyz"],
        ["Block explorer", "https://taikoscan.io"],
        ["Native token", "TAIKO"],
      ],
    },
  },
  cost: {
    title: "How much does it cost to use Taiko Alethia?",
    intro:
      "Simple transfers on Taiko Alethia cost approximately $0.003. Contract interactions cost approximately $0.01. ERC-8004 agent identity updates cost under $0.01.",
    table: {
      headers: ["Operation", "Ethereum L1", "Taiko Alethia"],
      rows: [
        ["Simple transfer", "$1-5", "~$0.003"],
        ["Contract interaction", "$5-50", "~$0.01"],
        ["Identity update (ERC-8004)", "$2-10", "<$0.01"],
      ],
    },
    conclusion:
      "At these costs, high-frequency operations become economically viable. An AI agent that updates its reputation score 1,000 times per day spends less than $10 on gas. A DeFi protocol rebalancing positions every block pays a fraction of what the same strategy costs on L1.",
  },
  zkevm: {
    title: "What is a Type 1 ZK-EVM?",
    intro:
      "A Type 1 ZK-EVM is fully Ethereum-equivalent at the bytecode level. Same hash functions, same state trees, same gas costs. Taiko Alethia is a Type 1 ZK-EVM, which is the highest level of Ethereum compatibility possible.",
    preamble: "This means:",
    points: [
      { bold: "Zero migration overhead.", text: "Any smart contract deployed on Ethereum works on Taiko without modification." },
      { bold: "Existing tooling transfers directly.", text: "Hardhat, Foundry, Remix, Ethers.js, Viem, MetaMask. All of it works." },
      { bold: "No re-auditing required.", text: "Contracts behave identically because the execution environment is identical." },
    ],
    conclusion:
      "Type 2 and Type 3 ZK-EVMs make modifications to Ethereum\u2019s architecture to optimize proof generation. Type 1 prioritizes compatibility over proof speed. Taiko chose compatibility because the long-term value of seamless Ethereum interoperability outweighs short-term proof generation costs.",
  },
  based: {
    title: "What is a based rollup and how does Taiko use it?",
    intro:
      "A based rollup is a Layer 2 designed to use Ethereum L1 validators for transaction sequencing instead of a centralized sequencer. When fully realized, this provides stronger censorship resistance, permissionless block production and inherited security from Ethereum itself.",
    preamble: "Taiko Alethia is designed as a based rollup. When fully realized, based sequencing delivers:",
    points: [
      { bold: "No single party can censor transactions.", text: "Censorship would require corrupting Ethereum\u2019s validator set." },
      { bold: "Permissionless block production.", text: "Anyone can propose blocks without needing approval from a centralized operator." },
      { bold: "Inherited liveness.", text: "If Ethereum is live, Taiko is live. No dependency on a third-party sequencer staying online." },
    ],
    current:
      "Today, Taiko uses three whitelisted preconfirmation operators (Nethermind, Chainbound and Gattaca) for block building. This is a stepping stone. The architecture is designed to progressively decentralize toward fully permissionless L1 validator sequencing.",
    conclusion:
      "Even in its current form, Taiko avoids the single-sequencer model that most L2s rely on. Three independent operators provide stronger censorship resistance than one, and the path to full based sequencing is built into the protocol.",
  },
  multiproof: {
    title: "How does Taiko\u2019s multi-proof security work?",
    intro:
      "Taiko Alethia uses a multi-proof system that requires two independent proofs for every batch of transactions. It combines zero-knowledge proofs (ZK) with trusted execution environments (TEE) so that no single proof system failure can compromise the network.",
    preamble: "The four available verifiers:",
    verifiers: [
      { bold: "SGX (Geth):", text: "Mandatory for every batch. Hardware-based TEE attestation running the Geth client." },
      { bold: "SGX (Reth):", text: "TEE attestation running the Reth client. Can serve as the second proof." },
      { bold: "SP1:", text: "Zero-knowledge proof system. Can serve as the second proof." },
      { bold: "RISC0:", text: "Zero-knowledge proof system. Can serve as the second proof." },
    ],
    details: [
      "SGX (Geth) is always required. The second proof can come from any of the other three verifiers. A block can be proven without a ZK proof if both SGX (Geth) and SGX (Reth) are used together.",
      "If one proof system has a vulnerability, the other catches it. An attacker would need to compromise two independent systems simultaneously. As ZK proof technology matures, the protocol can shift weight toward ZK proofs over time.",
    ],
  },
  preconfirmations: {
    title: "What are preconfirmations on Taiko?",
    paragraphs: [
      "Preconfirmations provide sub-second transaction feedback on top of based sequencing. They solve the speed tradeoff that comes with based rollup design, where inheriting Ethereum\u2019s ~12 second block time can be too slow for many use cases.",
      "The mechanism uses a whitelisted set of preconfirmation providers who commit to including transactions in upcoming blocks. Users get near-instant confirmation that their transaction will be included, with the full security of based sequencing settling on L1.",
      "Preconfirmations launched on the Hekla testnet with a target block time of two seconds, ahead of mainnet deployment. For AI agents executing time-sensitive trades or multi-step workflows, sub-second feedback is the difference between a viable strategy and a failed one.",
    ],
  },
  agents: {
    title: "How do AI agents work on Taiko Alethia?",
    intro:
      "AI agents on Taiko Alethia can register on-chain identities, build verifiable reputations and transact autonomously at sub-cent cost. Taiko has supported ERC-8004 agent identity registries since the standard launched on Ethereum mainnet in January 2026.",
    erc8004: {
      title: "What is ERC-8004?",
      description:
        "ERC-8004 is the trustless standard for AI agent identity, reputation and validation on Ethereum. It was formally unveiled in October 2025 with backing from ENS, EigenLayer, The Graph and Taiko. The standard provides three on-chain registries:",
      registries: [
        { bold: "Identity Registry:", text: "ERC-721-based agent registration. Each agent gets a unique, verifiable on-chain identity that other agents and protocols can discover." },
        { bold: "Reputation Registry:", text: "Aggregated feedback system. Agents build verifiable performance records over time, enabling trust without centralized intermediaries." },
        { bold: "Validation Registry (not yet deployed):", text: "Transaction integrity verification. Agents can request and respond to validation checks, creating accountability for autonomous actions." },
      ],
      contracts: [
        { label: "Identity Registry", address: "0x8004A169FB4a3325136EB29fA0ceB6D2e539a432" },
        { label: "Reputation Registry", address: "0x8004BAa17C55a88189AE136b182e5fdA19dE9b63" },
      ],
    },
    useCases: {
      title: "What can AI agents do on Taiko?",
      items: [
        { bold: "DeFi Automation.", text: "Agents managing yield strategies, rebalancing portfolios or executing arbitrage. Sub-cent costs make high-frequency strategies viable." },
        { bold: "Cross-Chain Payments.", text: "Agents bridging assets and executing payments across chains via Taiko\u2019s native bridge or third-party providers including LiFi, Orbiter, Owlto and Rhino.fi." },
        { bold: "On-Chain Identity and Reputation.", text: "Agents building verifiable track records through ERC-8004 registries for use across the Ethereum ecosystem." },
        { bold: "Autonomous Trading.", text: "Agents executing trading strategies with censorship-resistant transaction ordering." },
        { bold: "Agent-to-Agent Coordination.", text: "Multiple agents discovering, verifying and transacting with each other through on-chain identity and reputation systems." },
      ],
    },
    tools: {
      title: "What developer tools exist for AI agents on Taiko?",
      description:
        "The taiko-ai toolkit provides MCP servers and skills specifically for building AI agents on Taiko. It gives agents full access to chain data, bridge operations, contract analysis and node monitoring from any AI coding tool.",
      link: { name: "Taiko AI Toolkit", url: "https://github.com/taikoxyz/taiko-ai" },
    },
  },
  comparison: {
    title: "How does Taiko Alethia compare to other L2s?",
    intro: "Taiko Alethia\u2019s key differentiator is its trajectory toward based sequencing.",
    headers: ["Feature", "Taiko Alethia", "Optimistic Rollups", "Other ZK Rollups", "Sidechains"],
    rows: [
      ["Sequencing", "Based (designed for L1 validators)", "Centralized sequencer", "Centralized sequencer", "Independent validators"],
      ["EVM compatibility", "Type 1 (equivalent)", "Type 2 (compatible)", "Type 2-4 (varies)", "Varies"],
      ["Proof system", "Multi-proof (ZK + TEE)", "Fraud proofs", "Single ZK proof", "N/A"],
      ["Censorship resistance", "Multi-operator (3 independent)", "Sequencer-dependent", "Sequencer-dependent", "Validator-dependent"],
      ["Withdrawal period", "Proof-based (no delay)", "7-day challenge", "Proof-based", "Varies"],
      ["Ethereum alignment", "Full (based rollup design)", "Partial", "Partial", "Minimal"],
    ],
    conclusion:
      "Taiko is designed as a based rollup, with a clear path from its current multi-operator model to full L1 validator sequencing. For autonomous agents and applications that need censorship-resistant transaction execution, that architectural commitment matters.",
  },
  audience: {
    title: "Who is Taiko Alethia built for?",
    items: [
      { title: "AI Agent Builders", description: "Agents need cheap, censorship-resistant transaction execution at scale. Taiko\u2019s sub-cent fees and multi-operator sequencing make it a strong fit for autonomous on-chain agents. ERC-8004 identity and reputation registries are live. The taiko-ai toolkit gives agents direct access to chain data, bridge operations and contract analysis." },
      { title: "Ethereum Developers", description: "If you build on Ethereum, you can build on Taiko with zero changes. Deploy the same contracts, use the same tools, target the same addresses. The only difference is cost and speed." },
      { title: "DeFi Protocols", description: "Full EVM equivalence means DeFi protocols can deploy without modification. Multi-operator sequencing reduces centralized MEV extraction. Multi-proof security provides the trust guarantees institutional capital requires." },
      { title: "Infrastructure Providers", description: "Node operators, RPC providers, indexers and bridge operators can run Taiko infrastructure using standard Ethereum tooling. No custom implementations required." },
    ],
  },
  getting_started: {
    title: "How do I get started with Taiko Alethia?",
    steps: [
      { title: "Step 1: Connect Your Wallet", description: "Add Taiko Alethia to MetaMask or any Ethereum-compatible wallet. RPC: https://rpc.mainnet.taiko.xyz. Chain ID: 167000." },
      { title: "Step 2: Bridge Assets", description: "Use the Taiko Bridge (bridge.taiko.xyz) to move ETH from Ethereum L1 to Taiko Alethia. Third-party bridges including LiFi, Orbiter, Owlto and Rhino.fi also support Taiko." },
      { title: "Step 3: Deploy or Interact", description: "Use Hardhat, Foundry or Remix. Point your RPC at Taiko and deploy. No contract changes needed. No custom compiler flags. If it works on Ethereum, it works on Taiko." },
    ],
  },
  resources: {
    title: "Developer Resources",
    links: [
      { name: "Taiko Documentation", url: "https://docs.taiko.xyz" },
      { name: "Taiko GitHub", url: "https://github.com/taikoxyz" },
      { name: "Block Explorer", url: "https://taikoscan.io" },
      { name: "Bridge", url: "https://bridge.taiko.xyz" },
      { name: "Grant Program", url: "https://taiko.xyz/grant-program" },
      { name: "Taiko AI Toolkit", url: "https://github.com/taikoxyz/taiko-ai" },
    ],
  },
  faq: {
    title: "Frequently Asked Questions",
    items: [
      { question: "What is the cheapest L2 for AI agents?", answer: "Taiko Alethia is one of the cheapest Ethereum L2s for AI agent operations. Simple transfers cost approximately $0.003 and contract interactions cost approximately $0.01. ERC-8004 identity and reputation updates cost under $0.01. These sub-cent fees make high-frequency autonomous operations economically viable." },
      { question: "Can I deploy any Ethereum smart contract on Taiko?", answer: "Yes. Taiko is a Type 1 ZK-EVM, fully Ethereum-equivalent at the bytecode level. Any contract that works on Ethereum works on Taiko without modification. No recompiling, no re-auditing, no tooling changes." },
      { question: "How do I deploy an AI agent on Taiko?", answer: "Register your agent through the ERC-8004 Identity Registry to get a unique on-chain identity. From there, your agent can transact autonomously, build reputation and interact with other registered agents. The taiko-ai toolkit provides MCP servers for chain data, bridge operations and contract analysis." },
      { question: "Does Taiko have a centralized sequencer?", answer: "No. Taiko is designed as a based rollup. Today, three independent operators (Nethermind, Chainbound and Gattaca) handle block building. The architecture is designed to progressively decentralize toward full L1 validator sequencing, where Ethereum validators order Taiko transactions directly." },
      { question: "What is Taiko\u2019s Chain ID?", answer: "Taiko Alethia\u2019s Chain ID is 167000. The RPC endpoint is https://rpc.mainnet.taiko.xyz." },
      { question: "How do I bridge ETH to Taiko?", answer: "Use the Taiko Bridge at bridge.taiko.xyz to move ETH from Ethereum L1 to Taiko Alethia. Third-party bridges including LiFi, Orbiter, Owlto and Rhino.fi also support Taiko." },
      { question: "Is Taiko Alethia fully decentralized?", answer: "Not yet, but it is designed to be. Today, three independent operators handle block building, which avoids the single-sequencer model most L2s use. The proof system uses multiple independent verifiers. The roadmap progressively moves toward full L1 validator sequencing and permissionless block production." },
      { question: "Can I use Hardhat or Foundry with Taiko?", answer: "Yes. Taiko is a Type 1 ZK-EVM, so Hardhat, Foundry, Remix and all standard Ethereum development tools work without modification. Point your RPC at https://rpc.mainnet.taiko.xyz and deploy." },
      { question: "What is the difference between Type 1 and Type 2 ZK-EVM?", answer: "A Type 1 ZK-EVM is fully Ethereum-equivalent at the bytecode level: same hash functions, same state trees, same gas costs. A Type 2 ZK-EVM makes modifications to Ethereum\u2019s architecture to optimize proof generation, which can break compatibility with some contracts and tooling. Taiko is Type 1. Most other ZK rollups are Type 2 or higher." },
      { question: "What is ERC-8004?", answer: "ERC-8004 is the trustless standard for AI agent identity, reputation and validation on Ethereum. It provides three on-chain registries (identity, reputation and validation) that enable AI agents to register, build track records and verify transactions without centralized intermediaries. Taiko has supported the standard since it launched on Ethereum mainnet in January 2026." },
      { question: "Is Taiko compatible with existing AI agent frameworks?", answer: "Yes. Any agent framework that interacts with EVM-compatible chains works with Taiko. The taiko-ai toolkit provides additional MCP servers and skills specifically for building on Taiko." },
      { question: "What are preconfirmations?", answer: "Preconfirmations provide sub-second transaction feedback on top of based sequencing. Designated providers commit to including transactions in upcoming blocks, giving users near-instant confirmation while full security settles on L1." },
      { question: "How does the multi-proof system work?", answer: "Each batch of transactions requires two proofs from different verifier types. The system combines ZK proofs (SP1, RISC0) with TEE attestation (SGX). SGX (Geth) is mandatory for every batch. This ensures no single proof system failure can compromise the network." },
      { question: "Which wallets work with Taiko?", answer: "Any Ethereum-compatible wallet works with Taiko Alethia. MetaMask, Rainbow, Coinbase Wallet, Rabby and others. Add the RPC endpoint (https://rpc.mainnet.taiko.xyz) and Chain ID (167000)." },
    ],
  },
  updated: "Last updated: March 2026. This guide is maintained by the Taiko team and updated as the network evolves.",
};
