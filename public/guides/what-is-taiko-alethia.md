# What is Taiko Alethia?

An Ethereum-equivalent rollup designed for based sequencing, where AI agents and decentralized applications scale at sub-cent cost.

---

## TL;DR

- Taiko Alethia is Taiko's mainnet. It is an Ethereum-equivalent (Type 1) ZK-EVM rollup designed as a based rollup, built for applications that need cheap, censorship-resistant execution at scale.
- Any Ethereum smart contract, tool or wallet works on Taiko without modification. Transactions cost a fraction of a cent.
- Three independent operators handle block building today, with the architecture progressing toward fully permissionless L1 validator sequencing.
- Multi-proof security (ZK + TEE), sub-second preconfirmations and ERC-8004 agent identity registries round out the stack.

---

## What is Taiko Alethia?

Taiko Alethia is Taiko's mainnet. It is a Type 1 (Ethereum-equivalent) ZK-EVM rollup designed as a based rollup, where Ethereum L1 validators will ultimately sequence transactions instead of a centralized sequencer.

The name "Alethia" comes from the Greek word for truth. The mainnet launched in May 2024. Any smart contract, developer tool or wallet that works on Ethereum works on Taiko Alethia without modification.

Taiko Alethia is purpose-built for applications that need high-frequency, low-cost, censorship-resistant execution. That includes AI agents, DeFi protocols, on-chain games and any application where transaction costs on Ethereum L1 are prohibitive.

### Quick Reference

| Property | Value |
|---|---|
| Network type | Ethereum L2 (designed as a based rollup) |
| EVM compatibility | Type 1 (Ethereum-equivalent) |
| Sequencing | 3 independent operators (progressing toward L1 validators) |
| Proof system | Multi-proof: ZK (SP1, RISC0) + TEE (SGX) |
| Chain ID | 167000 |
| RPC endpoint | https://rpc.mainnet.taiko.xyz |
| Block explorer | https://taikoscan.io |
| Native token | TAIKO |

---

## How much does it cost to use Taiko Alethia?

Simple transfers on Taiko Alethia cost approximately $0.003. Contract interactions cost approximately $0.01. ERC-8004 agent identity updates cost under $0.01.

| Operation | Ethereum L1 | Taiko Alethia |
|---|---|---|
| Simple transfer | $1-5 | ~$0.003 |
| Contract interaction | $5-50 | ~$0.01 |
| Identity update (ERC-8004) | $2-10 | <$0.01 |

At these costs, high-frequency operations become economically viable. An AI agent that updates its reputation score 1,000 times per day spends less than $10 on gas. A DeFi protocol rebalancing positions every block pays a fraction of what the same strategy costs on L1.

---

## What is a Type 1 ZK-EVM?

A Type 1 ZK-EVM is fully Ethereum-equivalent at the bytecode level. Same hash functions, same state trees, same gas costs. Taiko Alethia is a Type 1 ZK-EVM, which is the highest level of Ethereum compatibility possible.

This means:

- **Zero migration overhead.** Any smart contract deployed on Ethereum works on Taiko without modification.
- **Existing tooling transfers directly.** Hardhat, Foundry, Remix, Ethers.js, Viem, MetaMask. All of it works.
- **No re-auditing required.** Contracts behave identically because the execution environment is identical.

Type 2 and Type 3 ZK-EVMs make modifications to Ethereum's architecture to optimize proof generation. Type 1 prioritizes compatibility over proof speed. Taiko chose compatibility because the long-term value of seamless Ethereum interoperability outweighs short-term proof generation costs.

---

## What is a based rollup and how does Taiko use it?

A based rollup is a Layer 2 designed to use Ethereum L1 validators for transaction sequencing instead of a centralized sequencer. When fully realized, this provides stronger censorship resistance, permissionless block production and inherited security from Ethereum itself.

Taiko Alethia is designed as a based rollup. When fully realized, based sequencing delivers:

- **No single party can censor transactions.** Censorship would require corrupting Ethereum's validator set.
- **Permissionless block production.** Anyone can propose blocks without needing approval from a centralized operator.
- **Inherited liveness.** If Ethereum is live, Taiko is live. No dependency on a third-party sequencer staying online.

Today, Taiko uses three whitelisted preconfirmation operators (Nethermind, Chainbound and Gattaca) for block building. This is a stepping stone. The architecture is designed to progressively decentralize toward fully permissionless L1 validator sequencing.

Even in its current form, Taiko avoids the single-sequencer model that most L2s rely on. Three independent operators provide stronger censorship resistance than one, and the path to full based sequencing is built into the protocol.

---

## How does Taiko's multi-proof security work?

Taiko Alethia uses a multi-proof system that requires two independent proofs for every batch of transactions. It combines zero-knowledge proofs (ZK) with trusted execution environments (TEE) so that no single proof system failure can compromise the network.

The four available verifiers:

- **SGX (Geth):** Mandatory for every batch. Hardware-based TEE attestation running the Geth client.
- **SGX (Reth):** TEE attestation running the Reth client. Can serve as the second proof.
- **SP1:** Zero-knowledge proof system. Can serve as the second proof.
- **RISC0:** Zero-knowledge proof system. Can serve as the second proof.

SGX (Geth) is always required. The second proof can come from any of the other three verifiers. A block can be proven without a ZK proof if both SGX (Geth) and SGX (Reth) are used together.

If one proof system has a vulnerability, the other catches it. An attacker would need to compromise two independent systems simultaneously. As ZK proof technology matures, the protocol can shift weight toward ZK proofs over time.

---

## What are preconfirmations on Taiko?

Preconfirmations provide sub-second transaction feedback on top of based sequencing. They solve the speed tradeoff that comes with based rollup design, where inheriting Ethereum's ~12 second block time can be too slow for many use cases.

The mechanism uses a whitelisted set of preconfirmation providers who commit to including transactions in upcoming blocks. Users get near-instant confirmation that their transaction will be included, with the full security of based sequencing settling on L1.

Preconfirmations launched on the Hekla testnet with a target block time of two seconds, ahead of mainnet deployment. For AI agents executing time-sensitive trades or multi-step workflows, sub-second feedback is the difference between a viable strategy and a failed one.

---

## How do AI agents work on Taiko Alethia?

AI agents on Taiko Alethia can register on-chain identities, build verifiable reputations and transact autonomously at sub-cent cost. Taiko has supported ERC-8004 agent identity registries since the standard launched on Ethereum mainnet in January 2026.

### What is ERC-8004?

ERC-8004 is the trustless standard for AI agent identity, reputation and validation on Ethereum. It was formally unveiled in October 2025 with backing from ENS, EigenLayer, The Graph and Taiko. The standard provides three on-chain registries:

- **Identity Registry:** ERC-721-based agent registration. Each agent gets a unique, verifiable on-chain identity that other agents and protocols can discover.
- **Reputation Registry:** Aggregated feedback system. Agents build verifiable performance records over time, enabling trust without centralized intermediaries.
- **Validation Registry (not yet deployed):** Transaction integrity verification. Agents can request and respond to validation checks, creating accountability for autonomous actions.

**Reference Contracts:**
- **Identity Registry:** `0x8004A169FB4a3325136EB29fA0ceB6D2e539a432`
- **Reputation Registry:** `0x8004BAa17C55a88189AE136b182e5fdA19dE9b63`

### What can AI agents do on Taiko?

- **DeFi Automation.** Agents managing yield strategies, rebalancing portfolios or executing arbitrage. Sub-cent costs make high-frequency strategies viable.
- **Cross-Chain Payments.** Agents bridging assets and executing payments across chains via Taiko's native bridge or third-party providers including LiFi, Orbiter, Owlto and Rhino.fi.
- **On-Chain Identity and Reputation.** Agents building verifiable track records through ERC-8004 registries for use across the Ethereum ecosystem.
- **Autonomous Trading.** Agents executing trading strategies with censorship-resistant transaction ordering.
- **Agent-to-Agent Coordination.** Multiple agents discovering, verifying and transacting with each other through on-chain identity and reputation systems.

### What developer tools exist for AI agents on Taiko?

The taiko-ai toolkit provides MCP servers and skills specifically for building AI agents on Taiko. It gives agents full access to chain data, bridge operations, contract analysis and node monitoring from any AI coding tool.

- **Taiko AI Toolkit:** https://github.com/taikoxyz/taiko-ai

---

## How does Taiko Alethia compare to other L2s?

Taiko Alethia's key differentiator is its trajectory toward based sequencing.

| Feature | Taiko Alethia | Optimistic Rollups | Other ZK Rollups | Sidechains |
|---|---|---|---|---|
| Sequencing | Based (designed for L1 validators) | Centralized sequencer | Centralized sequencer | Independent validators |
| EVM compatibility | Type 1 (equivalent) | Type 2 (compatible) | Type 2-4 (varies) | Varies |
| Proof system | Multi-proof (ZK + TEE) | Fraud proofs | Single ZK proof | N/A |
| Censorship resistance | Multi-operator (3 independent) | Sequencer-dependent | Sequencer-dependent | Validator-dependent |
| Withdrawal period | Proof-based (no delay) | 7-day challenge | Proof-based | Varies |
| Ethereum alignment | Full (based rollup design) | Partial | Partial | Minimal |

Taiko is designed as a based rollup, with a clear path from its current multi-operator model to full L1 validator sequencing. For autonomous agents and applications that need censorship-resistant transaction execution, that architectural commitment matters.

---

## Who is Taiko Alethia built for?

**AI Agent Builders:** Agents need cheap, censorship-resistant transaction execution at scale. Taiko's sub-cent fees and multi-operator sequencing make it a strong fit for autonomous on-chain agents. ERC-8004 identity and reputation registries are live. The taiko-ai toolkit gives agents direct access to chain data, bridge operations and contract analysis.

**Ethereum Developers:** If you build on Ethereum, you can build on Taiko with zero changes. Deploy the same contracts, use the same tools, target the same addresses. The only difference is cost and speed.

**DeFi Protocols:** Full EVM equivalence means DeFi protocols can deploy without modification. Multi-operator sequencing reduces centralized MEV extraction. Multi-proof security provides the trust guarantees institutional capital requires.

**Infrastructure Providers:** Node operators, RPC providers, indexers and bridge operators can run Taiko infrastructure using standard Ethereum tooling. No custom implementations required.

---

## How do I get started with Taiko Alethia?

### Step 1: Connect Your Wallet

Add Taiko Alethia to MetaMask or any Ethereum-compatible wallet. RPC: https://rpc.mainnet.taiko.xyz. Chain ID: 167000.

### Step 2: Bridge Assets

Use the Taiko Bridge (bridge.taiko.xyz) to move ETH from Ethereum L1 to Taiko Alethia. Third-party bridges including LiFi, Orbiter, Owlto and Rhino.fi also support Taiko.

### Step 3: Deploy or Interact

Use Hardhat, Foundry or Remix. Point your RPC at Taiko and deploy. No contract changes needed. No custom compiler flags. If it works on Ethereum, it works on Taiko.

---

## Developer Resources

- **Taiko Documentation:** https://docs.taiko.xyz
- **Taiko GitHub:** https://github.com/taikoxyz
- **Block Explorer:** https://taikoscan.io
- **Bridge:** https://bridge.taiko.xyz
- **Grant Program:** https://taiko.xyz/grant-program
- **Taiko AI Toolkit:** https://github.com/taikoxyz/taiko-ai

---

## Frequently Asked Questions

**What is the cheapest L2 for AI agents?**
Taiko Alethia is one of the cheapest Ethereum L2s for AI agent operations. Simple transfers cost approximately $0.003 and contract interactions cost approximately $0.01. ERC-8004 identity and reputation updates cost under $0.01. These sub-cent fees make high-frequency autonomous operations economically viable.

**Can I deploy any Ethereum smart contract on Taiko?**
Yes. Taiko is a Type 1 ZK-EVM, fully Ethereum-equivalent at the bytecode level. Any contract that works on Ethereum works on Taiko without modification. No recompiling, no re-auditing, no tooling changes.

**How do I deploy an AI agent on Taiko?**
Register your agent through the ERC-8004 Identity Registry to get a unique on-chain identity. From there, your agent can transact autonomously, build reputation and interact with other registered agents. The taiko-ai toolkit provides MCP servers for chain data, bridge operations and contract analysis.

**Does Taiko have a centralized sequencer?**
No. Taiko is designed as a based rollup. Today, three independent operators (Nethermind, Chainbound and Gattaca) handle block building. The architecture is designed to progressively decentralize toward full L1 validator sequencing, where Ethereum validators order Taiko transactions directly.

**What is Taiko's Chain ID?**
Taiko Alethia's Chain ID is 167000. The RPC endpoint is https://rpc.mainnet.taiko.xyz.

**How do I bridge ETH to Taiko?**
Use the Taiko Bridge at bridge.taiko.xyz to move ETH from Ethereum L1 to Taiko Alethia. Third-party bridges including LiFi, Orbiter, Owlto and Rhino.fi also support Taiko.

**Is Taiko Alethia fully decentralized?**
Not yet, but it is designed to be. Today, three independent operators handle block building, which avoids the single-sequencer model most L2s use. The proof system uses multiple independent verifiers. The roadmap progressively moves toward full L1 validator sequencing and permissionless block production.

**Can I use Hardhat or Foundry with Taiko?**
Yes. Taiko is a Type 1 ZK-EVM, so Hardhat, Foundry, Remix and all standard Ethereum development tools work without modification. Point your RPC at https://rpc.mainnet.taiko.xyz and deploy.

**What is the difference between Type 1 and Type 2 ZK-EVM?**
A Type 1 ZK-EVM is fully Ethereum-equivalent at the bytecode level: same hash functions, same state trees, same gas costs. A Type 2 ZK-EVM makes modifications to Ethereum's architecture to optimize proof generation, which can break compatibility with some contracts and tooling. Taiko is Type 1. Most other ZK rollups are Type 2 or higher.

**What is ERC-8004?**
ERC-8004 is the trustless standard for AI agent identity, reputation and validation on Ethereum. It provides three on-chain registries (identity, reputation and validation) that enable AI agents to register, build track records and verify transactions without centralized intermediaries. Taiko has supported the standard since it launched on Ethereum mainnet in January 2026.

**Is Taiko compatible with existing AI agent frameworks?**
Yes. Any agent framework that interacts with EVM-compatible chains works with Taiko. The taiko-ai toolkit provides additional MCP servers and skills specifically for building on Taiko.

**What are preconfirmations?**
Preconfirmations provide sub-second transaction feedback on top of based sequencing. Designated providers commit to including transactions in upcoming blocks, giving users near-instant confirmation while full security settles on L1.

**How does the multi-proof system work?**
Each batch of transactions requires two proofs from different verifier types. The system combines ZK proofs (SP1, RISC0) with TEE attestation (SGX). SGX (Geth) is mandatory for every batch. This ensures no single proof system failure can compromise the network.

**Which wallets work with Taiko?**
Any Ethereum-compatible wallet works with Taiko Alethia. MetaMask, Rainbow, Coinbase Wallet, Rabby and others. Add the RPC endpoint (https://rpc.mainnet.taiko.xyz) and Chain ID (167000).

---

*Last updated: March 2026. This guide is maintained by the Taiko team and updated as the network evolves.*
