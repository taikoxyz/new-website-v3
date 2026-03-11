import type { DaoPageData } from "@/content/types";

export const daoPageData: DaoPageData = {
  id: 1,
  welcome_suptitle: "Taiko DAO",
  welcome_title: "Decentralized governance for Taiko",
  welcome_text:
    "The Taiko DAO empowers the community to govern the protocol through on-chain voting and proposal mechanisms.",
  welcome_btn: {
    id: 1,
    name: "Go to DAO",
    link: "https://dao.taiko.xyz/",
    variant: "primary",
    newTab: true,
    disabledArrow: false,
  },
  about_suptitle: "About Taiko DAO",
  about_title: "Community-driven protocol governance",
  about_text:
    "The Taiko DAO enables TAIKO token holders to participate in protocol governance, propose changes, and vote on key decisions that shape the future of Taiko.",
  about_features: [
    {
      id: 1,
      title: "On-chain Voting",
      text: "All governance proposals are executed transparently on-chain via Aragon.",
      disabled: false,
    },
    {
      id: 2,
      title: "Community Proposals",
      text: "Any TAIKO token holder can submit proposals for protocol changes.",
      disabled: false,
    },
    {
      id: 3,
      title: "Transparent Treasury",
      text: "DAO treasury allocation is governed by community votes.",
      disabled: false,
    },
  ],
  about_join_suptitle: "Join the DAO",
  about_join_title: "Participate in Taiko governance",
  about_join_btn: {
    id: 2,
    name: "Join Taiko DAO on Aragon",
    link: "https://dao.taiko.xyz/",
    variant: "primary",
    newTab: true,
    disabledArrow: false,
  },
  faq_title: "Frequently Asked Questions",
  faq_text: "Common questions about Taiko DAO",
  faq_data: [
    {
      id: 1,
      question: "How do I participate in Taiko DAO governance?",
      answer:
        "You need TAIKO tokens to participate. Visit dao.taiko.xyz to view active proposals and cast your vote.",
    },
    {
      id: 2,
      question: "What can the DAO govern?",
      answer:
        "The DAO can govern protocol parameters, treasury allocation, grant programs, and other key protocol decisions.",
    },
    {
      id: 3,
      question: "Where does DAO governance happen?",
      answer:
        "Governance is conducted on-chain through Aragon, accessible at dao.taiko.xyz. Discussions happen on the Taiko community forum.",
    },
  ],
};
