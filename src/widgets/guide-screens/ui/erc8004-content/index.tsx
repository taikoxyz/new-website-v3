"use client";

import React from "react";
import { guideErc8004Data } from "@/content/pages/guide-erc8004";
import css from "../content/content.module.scss";

export const Erc8004Content: React.FC = () => {
  const d = guideErc8004Data;

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

          {/* What is ERC-8004? */}
          <div className={css.section}>
            <h2 className={css.sectionTitle}>{d.what.title}</h2>
            <p className={css.text}>{d.what.intro}</p>
            <p className={css.text}>{d.what.description}</p>
          </div>

          {/* The Three Registries */}
          <div className={css.section}>
            <h2 className={css.sectionTitle}>{d.registries.title}</h2>
            {d.registries.items.map((reg) => (
              <div key={reg.title} className={css.step}>
                <h3 className={css.stepTitle}>{reg.title}</h3>
                {reg.status && (
                  <p className={css.text}>
                    <strong>Status:</strong> {reg.status}
                  </p>
                )}
                <p className={css.text}>{reg.description}</p>
                {reg.note && (
                  <p className={css.text}>
                    <em>{reg.note}</em>
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Why Taiko */}
          <div className={css.section}>
            <h2 className={css.sectionTitle}>{d.why_taiko.title}</h2>
            <p className={css.text}>{d.why_taiko.intro}</p>

            <h3 className={css.heading}>{d.why_taiko.cost.title}</h3>
            <p className={css.text}>{d.why_taiko.cost.description}</p>
            <div className={css.tableWrapper}>
              <table className={css.table}>
                <thead>
                  <tr>
                    {d.why_taiko.cost.table.headers.map((h) => (
                      <th key={h}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {d.why_taiko.cost.table.rows.map((row, i) => (
                    <tr key={i}>
                      <td>{row[0]}</td>
                      <td>{row[1]}</td>
                      <td className={css.highlight}>{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className={css.text}>{d.why_taiko.cost.conclusion}</p>

            <h3 className={css.heading}>{d.why_taiko.evm.title}</h3>
            <p className={css.text}>{d.why_taiko.evm.description}</p>

            <h3 className={css.heading}>{d.why_taiko.censorship.title}</h3>
            <p className={css.text}>{d.why_taiko.censorship.description}</p>
          </div>

          {/* Reference Contracts */}
          <div className={css.section}>
            <h2 className={css.sectionTitle}>{d.contracts.title}</h2>
            <p className={css.text}>{d.contracts.intro}</p>
            <div className={css.contracts}>
              {d.contracts.items.map((c) => (
                <div key={c.label} className={css.contract}>
                  <span className={css.contractLabel}>{c.label}</span>
                  <code className={css.contractAddress}>{c.address}</code>
                </div>
              ))}
            </div>
          </div>

          {/* Registration Steps */}
          <div className={css.section}>
            <h2 className={css.sectionTitle}>{d.registration.title}</h2>
            {d.registration.steps.map((step) => (
              <div key={step.title} className={css.step}>
                <h3 className={css.stepTitle}>{step.title}</h3>
                <p className={css.text}>{step.description}</p>
                {step.code && (
                  <pre
                    style={{
                      background: "#f5f5f5",
                      padding: "16px 20px",
                      borderRadius: "12px",
                      fontSize: "13px",
                      lineHeight: 1.6,
                      overflowX: "auto",
                      margin: "12px 0",
                    }}
                  >
                    <code>{step.code}</code>
                  </pre>
                )}
                {step.note && <p className={css.text}>{step.note}</p>}
              </div>
            ))}
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

          <p className={css.updated}>{d.updated}</p>
        </div>
      </div>
    </section>
  );
};
