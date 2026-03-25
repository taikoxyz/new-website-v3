"use client";

import React from "react";
import Link from "next/link";
import { guideAiAgentData } from "@/content/pages/guide-ai-agent";
import css from "./hero.module.scss";

export const GuideHero: React.FC = () => {
  return (
    <section className={css.hero} id="hero">
      <div className="container">
        <div className={css.headerRow}>
          <div>
            <p className={css.label}>{guideAiAgentData.hero.label}</p>
            <h1 className={css.title}>{guideAiAgentData.hero.title}</h1>
          </div>
          <Link
            className={css.copyBtn}
            href="/guides/deploy-ai-agent-on-ethereum-l2.md"
            target="_blank"
          >
            View markdown
          </Link>
        </div>
        <p className={css.subtitle}>{guideAiAgentData.hero.subtitle}</p>
      </div>
    </section>
  );
};
