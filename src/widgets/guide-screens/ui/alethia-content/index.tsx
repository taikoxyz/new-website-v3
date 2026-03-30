"use client";

import React from "react";
import { guideTaikoAlethiaData } from "@/content/pages/guide-taiko-alethia";
import css from "../content/content.module.scss";

export const AlethiaContent: React.FC = () => {
  const d = guideTaikoAlethiaData;

  return (
    <section className={css.content} id="content">
      <div className={css.wrapper}>
        {/* TL;DR */}
        <div className={css.tldr}>
          <h2 className={css.tldrTitle}>{d.tldr.title}</h2>
          <ul className={css.tldrList}>
            {d.tldr.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* What is Taiko Alethia */}
        <div className={css.section}>
          <h2 className={css.sectionTitle}>{d.what.title}</h2>
          {d.what.paragraphs.map((p, i) => (
            <p key={i} className={css.text}>{p}</p>
          ))}
          <div className={css.tableWrapper}>
            <table className={css.table}>
              <thead>
                <tr>
                  {d.what.quickRef.headers.map((h) => (
                    <th key={h}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {d.what.quickRef.rows.map((row, i) => (
                  <tr key={i}>
                    <td><strong>{row[0]}</strong></td>
                    <td>{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Cost */}
        <div className={css.section}>
          <h2 className={css.sectionTitle}>{d.cost.title}</h2>
          <p className={css.text}>{d.cost.intro}</p>
          <div className={css.tableWrapper}>
            <table className={css.table}>
              <thead>
                <tr>
                  {d.cost.table.headers.map((h) => (
                    <th key={h}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {d.cost.table.rows.map((row, i) => (
                  <tr key={i}>
                    <td>{row[0]}</td>
                    <td>{row[1]}</td>
                    <td className={css.highlight}>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={css.text}>{d.cost.conclusion}</p>
        </div>

        {/* Type 1 ZK-EVM */}
        <div className={css.section}>
          <h2 className={css.sectionTitle}>{d.zkevm.title}</h2>
          <p className={css.text}>{d.zkevm.intro}</p>
          <p className={css.text}>{d.zkevm.preamble}</p>
          <ul className={css.list}>
            {d.zkevm.points.map((p, i) => (
              <li key={i}><strong>{p.bold}</strong> {p.text}</li>
            ))}
          </ul>
          <p className={css.text}>{d.zkevm.conclusion}</p>
        </div>

        {/* Based Rollup */}
        <div className={css.section}>
          <h2 className={css.sectionTitle}>{d.based.title}</h2>
          <p className={css.text}>{d.based.intro}</p>
          <p className={css.text}>{d.based.preamble}</p>
          <ul className={css.list}>
            {d.based.points.map((p, i) => (
              <li key={i}><strong>{p.bold}</strong> {p.text}</li>
            ))}
          </ul>
          <p className={css.text}>{d.based.current}</p>
          <p className={css.text}>{d.based.conclusion}</p>
        </div>

        {/* Multi-proof */}
        <div className={css.section}>
          <h2 className={css.sectionTitle}>{d.multiproof.title}</h2>
          <p className={css.text}>{d.multiproof.intro}</p>
          <p className={css.text}>{d.multiproof.preamble}</p>
          <ul className={css.list}>
            {d.multiproof.verifiers.map((v, i) => (
              <li key={i}><strong>{v.bold}</strong> {v.text}</li>
            ))}
          </ul>
          {d.multiproof.details.map((p, i) => (
            <p key={i} className={css.text}>{p}</p>
          ))}
        </div>

        {/* Preconfirmations */}
        <div className={css.section}>
          <h2 className={css.sectionTitle}>{d.preconfirmations.title}</h2>
          {d.preconfirmations.paragraphs.map((p, i) => (
            <p key={i} className={css.text}>{p}</p>
          ))}
        </div>

        {/* AI Agents */}
        <div className={css.section}>
          <h2 className={css.sectionTitle}>{d.agents.title}</h2>
          <p className={css.text}>{d.agents.intro}</p>

          <h3 className={css.heading}>{d.agents.erc8004.title}</h3>
          <p className={css.text}>{d.agents.erc8004.description}</p>
          <ul className={css.list}>
            {d.agents.erc8004.registries.map((r, i) => (
              <li key={i}><strong>{r.bold}</strong> {r.text}</li>
            ))}
          </ul>
          <h4 className={css.heading}>Reference Contracts</h4>
          <div className={css.contracts}>
            {d.agents.erc8004.contracts.map((c) => (
              <div key={c.label} className={css.contract}>
                <span className={css.contractLabel}>{c.label}</span>
                <code className={css.contractAddress}>{c.address}</code>
              </div>
            ))}
          </div>

          <h3 className={css.heading}>{d.agents.useCases.title}</h3>
          <ul className={css.list}>
            {d.agents.useCases.items.map((item, i) => (
              <li key={i}><strong>{item.bold}</strong> {item.text}</li>
            ))}
          </ul>

          <h3 className={css.heading}>{d.agents.tools.title}</h3>
          <p className={css.text}>{d.agents.tools.description}</p>
          <a href={d.agents.tools.link.url} target="_blank" rel="noopener noreferrer" className={css.resourceCard}>
            <span className={css.resourceName}>{d.agents.tools.link.name}</span>
            <span className={css.resourceUrl}>{d.agents.tools.link.url}</span>
          </a>
        </div>

        {/* Comparison */}
        <div className={css.section}>
          <h2 className={css.sectionTitle}>{d.comparison.title}</h2>
          <p className={css.text}>{d.comparison.intro}</p>
          <div className={css.tableWrapper}>
            <table className={css.table}>
              <thead>
                <tr>
                  {d.comparison.headers.map((h) => (
                    <th key={h}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {d.comparison.rows.map((row, i) => (
                  <tr key={i}>
                    <td>{row[0]}</td>
                    <td className={css.highlightCol}>{row[1]}</td>
                    <td>{row[2]}</td>
                    <td>{row[3]}</td>
                    <td>{row[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={css.text}>{d.comparison.conclusion}</p>
        </div>

        {/* Audience */}
        <div className={css.section}>
          <h2 className={css.sectionTitle}>{d.audience.title}</h2>
          <div className={css.useCaseGrid}>
            {d.audience.items.map((item) => (
              <div key={item.title} className={css.useCaseCard}>
                <h3 className={css.useCaseTitle}>{item.title}</h3>
                <p className={css.useCaseText}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Getting Started */}
        <div className={css.section}>
          <h2 className={css.sectionTitle}>{d.getting_started.title}</h2>
          {d.getting_started.steps.map((step, i) => (
            <div key={i} className={css.step}>
              <h3 className={css.stepTitle}>{step.title}</h3>
              <p className={css.text}>{step.description}</p>
            </div>
          ))}
        </div>

        {/* Resources */}
        <div className={css.section}>
          <h2 className={css.sectionTitle}>{d.resources.title}</h2>
          <div className={css.resourceGrid}>
            {d.resources.links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={css.resourceCard}
              >
                <span className={css.resourceName}>{link.name}</span>
                <span className={css.resourceUrl}>{link.url}</span>
              </a>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className={css.section}>
          <h2 className={css.sectionTitle}>{d.faq.title}</h2>
          <div className={css.faqList}>
            {d.faq.items.map((item) => (
              <div key={item.question} className={css.faqItem}>
                <h3 className={css.faqQuestion}>{item.question}</h3>
                <p className={css.faqAnswer}>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <p className={css.updated}>{d.updated}</p>
      </div>
    </section>
  );
};
