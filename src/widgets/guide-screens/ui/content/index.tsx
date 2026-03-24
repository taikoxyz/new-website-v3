"use client";

import React from "react";
import { guideAiAgentData } from "@/content/pages/guide-ai-agent";
import css from "./content.module.scss";

export const GuideContent: React.FC = () => {
  const d = guideAiAgentData;

  return (
    <section className={css.content} id="content">
      <div className="container">
        <div className={css.wrapper}>
          {/* TL;DR */}
          <div className={css.section}>
            <h2>{d.tldr.title}</h2>
            <ul>
              {d.tldr.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Why Taiko */}
          <div className={css.section}>
            <h2>{d.why.title}</h2>

            <h3>{d.why.cost.title}</h3>
            <p>{d.why.cost.description}</p>
            <table className={css.table}>
              <thead>
                <tr>
                  {d.why.cost.table.headers.map((h) => (
                    <th key={h}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {d.why.cost.table.rows.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <p>{d.why.cost.conclusion}</p>

            <h3>{d.why.sequencing.title}</h3>
            <p>{d.why.sequencing.description}</p>
            <p>{d.why.sequencing.operator}</p>
            <ul>
              {d.why.sequencing.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
            <p>{d.why.sequencing.conclusion}</p>

            <h3>{d.why.evm.title}</h3>
            <p>{d.why.evm.description}</p>
            <ul>
              {d.why.evm.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>

          {/* ERC-8004 */}
          <div className={css.section}>
            <h2>{d.erc8004.title}</h2>
            <p>{d.erc8004.description}</p>

            <h3>{d.erc8004.provides.title}</h3>
            <p>{d.erc8004.provides.intro}</p>
            <ul>
              {d.erc8004.provides.registries.map((r) => (
                <li key={r.name}>
                  <strong>{r.name}</strong> {r.description}
                </li>
              ))}
            </ul>

            <h3>{d.erc8004.why_taiko.title}</h3>
            <p>{d.erc8004.why_taiko.description}</p>

            <h3>{d.erc8004.contracts.title}</h3>
            <div className={css.contracts}>
              <div className={css.contract}>
                <span>{d.erc8004.contracts.identity.label}</span>
                <code>{d.erc8004.contracts.identity.address}</code>
              </div>
              <div className={css.contract}>
                <span>{d.erc8004.contracts.reputation.label}</span>
                <code>{d.erc8004.contracts.reputation.address}</code>
              </div>
            </div>
          </div>

          {/* Getting Started */}
          <div className={css.section}>
            <h2>{d.getting_started.title}</h2>
            {d.getting_started.steps.map((step, i) => (
              <div key={i} className={css.step}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                {step.tools && (
                  <ul>
                    {step.tools.map((t, j) => (
                      <li key={j}>{t}</li>
                    ))}
                    {step.rpc && (
                      <li>
                        RPC: <code>{step.rpc}</code>
                      </li>
                    )}
                    {step.chain_id && (
                      <li>
                        Chain ID: <code>{step.chain_id}</code>
                      </li>
                    )}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Use Cases */}
          <div className={css.section}>
            <h2>{d.use_cases.title}</h2>
            {d.use_cases.cases.map((c) => (
              <div key={c.title}>
                <h3>{c.title}</h3>
                <p>{c.description}</p>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <div className={css.section}>
            <h2>{d.comparison.title}</h2>
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
                      {row.map((cell, j) => (
                        <td key={j}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>{d.comparison.conclusion}</p>
          </div>

          {/* FAQ */}
          <div className={css.section}>
            <h2>{d.faq.title}</h2>
            {d.faq.items.map((item) => (
              <div key={item.question} className={css.faqItem}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>

          {/* Resources */}
          <div className={css.section}>
            <h2>{d.resources.title}</h2>
            <ul>
              {d.resources.links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <p className={css.updated}>{d.updated}</p>
        </div>
      </div>
    </section>
  );
};
