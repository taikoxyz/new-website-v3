"use client";

import React from "react";
import Link from "next/link";
import { guideErc8004Data } from "@/content/pages/guide-erc8004";
import css from "../hero/hero.module.scss";

export const Erc8004Hero: React.FC = () => {
  return (
    <section className={css.hero} id="hero">
      <div className="container">
        <div className={css.headerRow}>
          <div>
            <p className={css.label}>{guideErc8004Data.hero.label}</p>
            <h1 className={css.title}>{guideErc8004Data.hero.title}</h1>
          </div>
          <Link
            className={css.copyBtn}
            href="/guides/erc-8004-trustless-agent-standard.md"
            target="_blank"
          >
            View markdown
          </Link>
        </div>
        <p className={css.subtitle}>{guideErc8004Data.hero.subtitle}</p>
      </div>
    </section>
  );
};
