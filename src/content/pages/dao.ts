import type { DaoPageData } from "@/content/types";

export const daoPageData: DaoPageData = {
  id: 1,
  welcome_suptitle: "Welcome to the Taiko DAO",
  welcome_title:
    "Taiko is built for the community and governed by the community",
  welcome_text:
    "Taiko DAO, created in collaboration with Aragon, plays a critical role in governing Taiko in a decentralized way.",
  welcome_btn: {
    id: 1,
    name: "Explore Taiko DAO",
    link: "https://dao.taiko.xyz/",
    variant: "primary",
    newTab: true,
    disabledArrow: false,
  },
  about_suptitle: "About",
  about_title: "How Does  Taiko DAO Work?",
  about_text:
    "As a Based Rollup, Taiko is founded on the principles  of decentralization. Achieving this requires an engaged community actively participating in network governance.",
  about_features: [
    {
      id: 1,
      title: "Security  Council",
      text: "The Security Council oversees and takes action on matters requiring immediate attention. Council information is public and accessible to the community.",
      disabled: false,
      icon: "/img/dao/icon-security.svg",
    },
    {
      id: 2,
      title: "Delegation",
      text: "TAIKO token holders can vote on proposals directly or delegate their tokens to others who will vote on their behalf.",
      disabled: false,
      icon: "/img/dao/icon-delegation.svg",
    },
    {
      id: 3,
      title: "Propose",
      text: "To submit a proposal to the DAO, it must first gain support from at least one Security Council member. Once a proposal passes Security Council approval, community vote begins.",
      disabled: false,
      icon: "/img/dao/icon-propose.svg",
    },
    {
      id: 4,
      title: "Voting",
      text: "All DAO members can vote on proposals. You can either vote directly or participate through delegated tokens.",
      disabled: false,
      icon: "/img/dao/icon-voting.svg",
    },
    {
      id: 5,
      title: "Approval",
      text: "Proposals can be vetoed if %30 of the votes are against it. Otherwise, they get approved.",
      disabled: false,
      icon: "/img/dao/icon-approval.svg",
    },
  ],
  about_join_suptitle: "Join taiko",
  about_join_title:
    "Taiko and Taiko DAO grow stronger with each unique mind and perspective. Join us!",
  about_join_btn: {
    id: 2,
    name: "Join Us",
    link: "https://dao.taiko.xyz/",
    variant: "primary",
    newTab: true,
    disabledArrow: false,
  },
  faq_title: "Frequently Asked Questions",
  faq_text: "Read answers to the most common questions about Taiko DAO.",
  faq_data: [
    {
      id: 1,
      question: "What is the goal of Taiko DAO?",
      answer:
        "Taiko DAO aims to empower the community by giving them governance rights.",
    },
    {
      id: 2,
      question: "How can I vote?",
      answer:
        "Follow our DAO forum to keep up with proposals, then use your tokens as voting power. Explore our DAO app: https://dao.taiko.xyz/",
    },
    {
      id: 3,
      question: "What is the Security Council, and who are its members?",
      answer:
        "The Security Council oversees and takes action on matters requiring immediate attention. Council information is public and accessible to the community on the DAO app.",
    },
    {
      id: 4,
      question:
        "Proposals are created by the Security Council. But you can pitch your proposal and gain the Security Council\u2019s interest.",
      answer:
        "Proposals are created by the Security Council. But you can pitch your proposal and gain the Security Council\u2019s interest.",
    },
    {
      id: 5,
      question: "How can I delegate my tokens for voting?",
      answer:
        'In order to vote, a user must delegate one\u2019s voting power to a delegation profile. The user may also create a delegation profile for oneself. See "Delegates" tab on our DAO app.',
    },
  ],
};
