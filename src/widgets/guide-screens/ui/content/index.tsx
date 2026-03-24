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
          <div className={css.tldr}>
            <h2 className={css.tldrTitle}>{d.tldr.title}</h2>
            <ul className={css.tldrList}>
              {d.tldr.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Why Taiko for AI Agents */}
          <div className={css.section}>
            <h2 className={css.sectionTitle}>{d.why.title}</h2>

            <h3 className={css.heading}>{d.why.cost.title}</h3>
            <p className={css.text}>{d.why.cost.description}</p>
            <div className={css.tableWrapper}>
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
                      <td>{row[0]}</td>
                      <td>{row[1]}</td>
                      <td className={css.highlight}>{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className={css.text}>{d.why.cost.conclusion}</p>

            <h3 className={css.heading}>{d.why.sequencing.title}</h3>
            <p className={css.text}>{d.why.sequencing.description}</p>
            <p className={css.text}>{d.why.sequencing.operator}</p>
            <ul className={css.list}>
              {d.why.sequencing.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
            <p className={css.text}>{d.why.sequencing.conclusion}</p>

            <h3 className={css.heading}>{d.why.evm.title}</h3>
            <p className={css.text}>{d.why.evm.description}</p>
            <ul className={css.list}>
              {d.why.evm.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>

          {/* ERC-8004 */}
          <div className={css.section}>
            <h2 className={css.sectionTitle}>{d.erc8004.title}</h2>
            <p className={css.text}>{d.erc8004.description}</p>

            <h3 className={css.heading}>{d.erc8004.provides.title}</h3>
            <p className={css.text}>{d.erc8004.provides.intro}</p>
            <ul className={css.list}>
              {d.erc8004.provides.registries.map((r) => (
                <li key={r.name}>
                  <strong>{r.name}</strong> {r.description}
                </li>
              ))}
            </ul>

            <h3 className={css.heading}>{d.erc8004.why_taiko.title}</h3>
            <p className={css.text}>{d.erc8004.why_taiko.description}</p>

            <h3 className={css.heading}>{d.erc8004.contracts.title}</h3>
            <div className={css.contracts}>
              <div className={css.contract}>
                <span className={css.contractLabel}>
                  {d.erc8004.contracts.identity.label}
                </span>
                <code className={css.contractAddress}>
                  {d.erc8004.contracts.identity.address}
                </code>
              </div>
              <div className={css.contract}>
                <span className={css.contractLabel}>
                  {d.erc8004.contracts.reputation.label}
                </span>
                <code className={css.contractAddress}>
                  {d.erc8004.contracts.reputation.address}
                </code>
              </div>
            </div>
          </div>

          {/* Getting Started */}
          <div className={css.section}>
            <h2 className={css.sectionTitle}>{d.getting_started.title}</h2>
            {d.getting_started.steps.map((step, i) => (
              <div key={i} className={css.step}>
                <h3 className={css.stepTitle}>{step.title}</h3>
                <p className={css.text}>{step.description}</p>
                {step.tools && (
                  <ul className={css.list}>
                    {step.tools.slice(0, 2).map((t, j) => (
                      <li key={j}>{t}</li>
                    ))}
                    {step.rpc && (
                      <li>
                        {step.tools[2]}{" "}
                        <code className={css.inlineCode}>{step.rpc}</code>
                      </li>
                    )}
                    {step.chain_id && (
                      <li>
                        {step.tools[3]}{" "}
                        <code className={css.inlineCode}>{step.chain_id}</code>
                      </li>
                    )}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Developer Resources */}
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

          {/* Use Cases */}
          <div className={css.section}>
            <h2 className={css.sectionTitle}>{d.use_cases.title}</h2>
            <div className={css.useCaseGrid}>
              {d.use_cases.cases.map((c) => (
                <div key={c.title} className={css.useCaseCard}>
                  <h3 className={css.useCaseTitle}>{c.title}</h3>
                  <p className={css.useCaseText}>{c.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison Table */}
          <div className={css.section}>
            <h2 className={css.sectionTitle}>{d.comparison.title}</h2>
            <div className={css.tableWrapper}>
              <table className={css.table}>
                <thead>
                  <tr>
                    <th>{d.comparison.headers[0]}</th>
                    <th className={css.highlightCol}>
                      {d.comparison.headers[1]}
                    </th>
                    <th>{d.comparison.headers[2]}</th>
                    <th>{d.comparison.headers[3]}</th>
                    <th>{d.comparison.headers[4]}</th>
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

          {/* Footer note */}
          <p className={css.updated}>{d.updated}</p>
        </div>
      </div>
    </section>
  );
};
