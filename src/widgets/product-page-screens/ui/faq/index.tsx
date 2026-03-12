'use client';

import React from 'react';
import { Accordeon } from '@/components/accordeon';
import type { FaqItem } from '@/content/types';
import css from './faq.module.scss';

interface Props {
    title: string;
    text: string;
    faqData: FaqItem[];
}

export const Faq: React.FC<Props> = ({ title, text, faqData }) => {
    return (
        <section className={css.faq}>
            <div className="container">
                <div className={css.content}>
                    <div className={css.content_left}>
                        <h2 className={css.title}>{title}</h2>
                        <p className={css.text}>{text}</p>
                    </div>
                    <div className={css.content_right}>
                        <ul className={css.list}>
                            {faqData.map((faq) => (
                                <li key={faq.id}>
                                    <Accordeon
                                        question={faq.question}
                                        answer={faq.answer}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
