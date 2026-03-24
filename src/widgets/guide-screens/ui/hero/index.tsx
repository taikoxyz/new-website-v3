"use client";

import React from "react";
import { guideAiAgentData } from "@/content/pages/guide-ai-agent";
import css from "./hero.module.scss";

export const GuideHero: React.FC = () => {
  const [copied, setCopied] = React.useState(false);

  const handleCopyMarkdown = async () => {
    try {
      const res = await fetch("/guides/deploy-ai-agent-on-ethereum-l2.md");
      const text = await res.text();
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.open("/guides/deploy-ai-agent-on-ethereum-l2.md", "_blank");
    }
  };

  return (
    <section className={css.hero} id="hero">
      <div className="container">
        <div className={css.headerRow}>
          <div>
            <p className={css.label}>{guideAiAgentData.hero.label}</p>
            <h1 className={css.title}>{guideAiAgentData.hero.title}</h1>
          </div>
          <button className={css.copyBtn} onClick={handleCopyMarkdown}>
            {copied ? "Copied!" : "Copy markdown"}
          </button>
        </div>
        <p className={css.subtitle}>{guideAiAgentData.hero.subtitle}</p>
      </div>
    </section>
  );
};
