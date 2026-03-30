"use client";

import React from "react";
import Link from "next/link";
import { guideTaikoAlethiaData } from "@/content/pages/guide-taiko-alethia";
import css from "../hero/hero.module.scss";

export const AlethiaHero: React.FC = () => {
  return (
    <section className={css.hero} id="hero">
      <div className="container">
        <div className={css.headerRow}>
          <div>
            <p className={css.label}>{guideTaikoAlethiaData.hero.label}</p>
            <h1 className={css.title}>{guideTaikoAlethiaData.hero.title}</h1>
          </div>
          <Link
            className={css.copyBtn}
            href="/guides/what-is-taiko-alethia.md"
            target="_blank"
          >
            View markdown
          </Link>
        </div>
        <p className={css.subtitle}>{guideTaikoAlethiaData.hero.subtitle}</p>
      </div>
    </section>
  );
};
