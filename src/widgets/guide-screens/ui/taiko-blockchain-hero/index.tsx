"use client";

import React from "react";
import Link from "next/link";
import { guideTaikoBlockchainData } from "@/content/pages/guide-taiko-blockchain";
import css from "../hero/hero.module.scss";

export const TaikoBlockchainHero: React.FC = () => {
  return (
    <section className={css.hero} id="hero">
      <div className="container">
        <div className={css.headerRow}>
          <div>
            <p className={css.label}>{guideTaikoBlockchainData.hero.label}</p>
            <h1 className={css.title}>{guideTaikoBlockchainData.hero.title}</h1>
          </div>
          <Link
            className={css.copyBtn}
            href="/guides/what-is-taiko-blockchain.md"
            target="_blank"
          >
            View markdown
          </Link>
        </div>
        <p className={css.subtitle}>{guideTaikoBlockchainData.hero.subtitle}</p>
      </div>
    </section>
  );
};
