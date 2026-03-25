export const guideErc8004Data = {
  hero: {
    label: "Guide",
    title: "ERC-8004: The Trustless Agent Standard on Taiko",
    subtitle:
      "A guide to ERC-8004 on Taiko: what it is, how it works and how to register an AI Agent.",
  },
  tldr: {
    title: "TL;DR",
    items: [
      "ERC-8004 is Ethereum\u2019s standard for giving AI Agents verifiable on-chain identities, portable reputation records and independent task verification.",
      "Co-authored by teams from MetaMask, the Ethereum Foundation, Google and Coinbase, the standard went live on Ethereum mainnet in late January 2026 and is deployable on any EVM-compatible chain.",
      "Taiko deployed its registries within days of the mainnet launch, making it one of the first L2s to support ERC-8004.",
      "The standard is still in Draft status with a v2 specification in active development.",
    ],
  },
  what: {
    title: "What is ERC-8004?",
    intro:
      "Before ERC-8004, every system that needed to verify an AI Agent\u2019s identity or track record had to build its own solution: private APIs, custom contracts, siloed databases. None of it was portable, and an agent\u2019s reputation on one platform meant nothing on another.",
    description:
      'ERC-8004 (officially "Trustless Agents") replaces that fragmentation with three shared on-chain registries for identity, reputation and validation. The standard is deliberately minimal: it handles who an agent is and whether it can be trusted, and leaves everything else (payments, communication, business logic) to other protocols. Taiko deployed its registries in early February 2026, within days of the Ethereum mainnet launch, making it one of the first L2s to support the standard.',
  },
  registries: {
    title: "The Three Registries",
    items: [
      {
        title: "Identity Registry",
        description:
          "The Identity Registry is an ERC-721-based system where each AI Agent is represented as an NFT with a unique agentId linked to an off-chain registration file (hosted on IPFS, HTTPS or as a base64 data URI) describing its capabilities, endpoints and supported protocols. Because agent identities are standard ERC-721 tokens, they work immediately with existing wallet infrastructure, NFT tooling and block explorers.",
      },
      {
        title: "Reputation Registry",
        description:
          "The Reputation Registry records how agents perform. Clients submit scores (0\u2013100) with optional tags and evidence links, and each submission requires a cryptographic signature from the agent server to prevent spam while keeping feedback data public and composable. Different platforms can build their own scoring models on top of the same raw on-chain data, creating competitive reputation services rather than a single monopoly scorer.",
      },
      {
        title: "Validation Registry",
        status: "Not yet deployed on Ethereum mainnet or Taiko.",
        description:
          "The Validation Registry will provide hooks for requesting and recording independent verification of agent work. Validators could include stake-secured re-execution services, zkML verifiers, TEE oracles or trusted judges.",
        note: "The spec for this registry is still being refined in collaboration with the TEE community. No deployment timeline has been announced.",
      },
    ],
  },
  why_taiko: {
    title: "Why Developers Deploy ERC-8004 on Taiko",
    intro:
      "The registries are live on Ethereum mainnet, but reputation feedback is a write-heavy workload, and even one-time operations like registration benefit from lower fees. Here is why Taiko is a natural fit.",
    cost: {
      title: "Cost",
      description:
        "On Ethereum mainnet a single identity update can cost several dollars, which makes frequent agent operations uneconomical at scale.",
      table: {
        headers: ["Operation", "Ethereum L1", "Taiko L2"],
        rows: [
          ["Agent registration (ERC-721 mint)", "$1-5", "~$0.01"],
          ["Identity update (setAgentURI)", "$0.50-3", "<$0.01"],
          ["Reputation feedback submission", "$0.50-3", "<$0.01"],
          ["Reputation summary query", "Free (read)", "Free (read)"],
        ],
      },
      conclusion:
        "On Taiko, an agent can register, update its profile and accumulate hundreds of reputation entries for what a single registration costs on L1.",
    },
    evm: {
      title: "EVM Equivalence",
      description:
        "Taiko is a Type 1 ZK-EVM: fully Ethereum-equivalent at the bytecode level. The canonical ERC-8004 reference implementation deploys identically on Taiko with no forks, patches or compatibility shims required.",
    },
    censorship: {
      title: "Censorship Resistance",
      description:
        "Taiko is a based rollup with preconfirmations, which means no single entity controls which transactions get included. That matters for agents because if identity updates or reputation submissions can be censored, the entire trust system breaks down. Taiko also settles directly to Ethereum L1, so agent identities inherit Ethereum\u2019s security for finality.",
    },
  },
  contracts: {
    title: "ERC-8004 on Taiko: Reference Contracts",
    intro: "ERC-8004 went live on Taiko in early February 2026.",
    items: [
      {
        label: "Identity Registry",
        address: "0x8004A169FB4a3325136EB29fA0ceB6D2e539a432",
      },
      {
        label: "Reputation Registry",
        address: "0x8004BAa17C55a88189AE136b182e5fdA19dE9b63",
      },
      {
        label: "Validation Registry",
        address: "Not yet deployed (spec under active development)",
      },
    ],
  },
  registration: {
    title: "Registering an Agent on Taiko via ERC-8004",
    steps: [
      {
        title: "1. Prepare Your Registration File",
        description: "Create a JSON file describing your agent:",
        code: `{
  "type": "https://eips.ethereum.org/EIPS/eip-8004#registration-v1",
  "name": "yourAgentName",
  "description": "What your agent does, how it works, pricing and interaction methods",
  "image": "https://example.com/agentimage.png",
  "services": [
    { "name": "A2A", "endpoint": "https://your-agent.com/a2a" },
    { "name": "MCP", "endpoint": "https://your-agent.com/mcp" }
  ]
}`,
        note: "Host this file on IPFS, your own HTTPS endpoint or encode it as a base64 data URI for fully on-chain metadata.",
      },
      {
        title: "2. Register on the Identity Registry",
        description:
          "Call register() on the Identity Registry contract to mint your agent\u2019s ERC-721 token and receive an agentId.",
      },
      {
        title: "3. Set Your Agent URI",
        description:
          "Call setAgentURI(agentId, uri) to point your on-chain identity to your registration file.",
      },
      {
        title: "4. (Optional) Set a Verified Wallet",
        description:
          "Call setAgentWallet() with an EIP-712 or ERC-1271 signature to link a verified receiving wallet to your agent identity. This wallet is cleared on ownership transfer as a security measure.",
      },
      {
        title: "5. Accumulate Reputation",
        description:
          "Clients submit feedback via giveFeedback() on the Reputation Registry after interacting with your agent. Feedback requires pre-authorization via cryptographic signatures. Over time, this builds a portable, verifiable track record.",
      },
    ],
  },
  faq: {
    title: "FAQ",
    items: [
      {
        question: "Is ERC-8004 a token?",
        answer:
          "No. ERC-8004 is a protocol standard, not a fungible token. The Identity Registry uses ERC-721 NFTs to represent agent identities, but these represent ownership of a specific agent, not a tradable currency.",
      },
      {
        question: "Does Taiko support ERC-8004?",
        answer:
          "Yes. Taiko deployed ERC-8004 registries in early February 2026, within days of the Ethereum mainnet launch, and because Taiko is a Type 1 ZK-EVM the canonical contracts run without modification at a registration cost of roughly $0.01.",
      },
      {
        question: "Which L2 is best for ERC-8004 agent operations?",
        answer:
          "ERC-8004 deploys on any EVM-compatible chain, but Taiko stands out on three fronts: cost (registration at roughly $0.01 vs $1\u20135 on L1), compatibility (Type 1 ZK-EVM, so zero code changes from mainnet) and censorship resistance (based rollup architecture instead of a single sequencer).",
      },
      {
        question: "How does ERC-8004 relate to A2A and MCP?",
        answer:
          "A2A (Google\u2019s Agent-to-Agent protocol) and MCP (Anthropic\u2019s Model Context Protocol) handle how agents communicate and access tools. ERC-8004 handles who an agent is and whether it can be trusted. Agents advertise their A2A, MCP endpoints, or any other service in their ERC-8004 registration file, connecting all three systems.",
      },
      {
        question:
          "How much does it cost to register an AI Agent with ERC-8004 on Taiko?",
        answer:
          "Agent registration on Taiko costs approximately $0.01. Identity updates and reputation feedback submissions cost under $0.01 each.",
      },
      {
        question: "How does ERC-8004 handle payments?",
        answer:
          "Payments are deliberately out of scope. ERC-8004 handles identity and trust, then composes with payment protocols like x402 (Coinbase and Cloudflare) for stablecoin micropayments between agents. Payment proofs can optionally be referenced in reputation feedback.",
      },
      {
        question: "Is ERC-8004 finalized?",
        answer:
          "Not yet. ERC-8004 is in Draft status on the Ethereum EIP registry as of early 2026, though reference implementations are already live on mainnet and multiple L2s including Taiko. A v2 specification is in development with deeper MCP support and more flexible reputation storage.",
      },
      {
        question: "Can ERC-8004 agents work across multiple chains?",
        answer:
          "Yes. ERC-8004 uses one shared registry deployment per chain, and the same agent can register on multiple networks. Because Taiko settles to Ethereum L1, agent identities registered on Taiko inherit Ethereum\u2019s security guarantees for finality. The registration file format is identical across all chains, so an agent\u2019s identity and reputation are portable.",
      },
      {
        question:
          "Why use ERC-8004 instead of building a custom agent registry?",
        answer:
          "Portability and network effects. A custom registry locks agent reputation into a single platform. ERC-8004 is an open standard backed by MetaMask, the Ethereum Foundation, Google and Coinbase, with shared registries across Ethereum, Taiko, Base and BNB Chain. An agent\u2019s track record on one platform carries to every other platform using the same standard.",
      },
    ],
  },
  resources: {
    title: "Developer Resources",
    links: [
      {
        name: "ERC-8004 Specification",
        url: "https://eips.ethereum.org/EIPS/eip-8004",
      },
      {
        name: "ERC-8004 Reference Contracts",
        url: "https://github.com/erc-8004/erc-8004-contracts",
      },
      {
        name: "ERC-8004 Community and Resources",
        url: "https://8004.org",
      },
      { name: "Taiko Documentation", url: "https://docs.taiko.xyz" },
      { name: "Taiko GitHub", url: "https://github.com/taikoxyz" },
    ],
  },
  updated:
    "Last updated: March 2026. This guide is maintained by the Taiko team and updated as the ecosystem evolves.",
};
