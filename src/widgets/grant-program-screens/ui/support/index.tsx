'use client';

import React from 'react';
import Sprite from '@/components/sprite';
import { Button } from '@/components/buttons/button';
import { Accordeon } from '@/components/accordeon';
import { grantProgramPageData } from '@/content/pages/grant-program';
import css from './support.module.scss';

export const Support: React.FC = () => {
    return (
        <section className={css.support}>
            <div className="container">
                <div className={css.content}>
                    <div className={css.content_left}>
                        <h2 className={css.title}>
                            <span className={css.title_text}>
                                {grantProgramPageData.support.title}
                            </span>
                            <Sprite.Default icon="arrow-right" />
                        </h2>

                        <p className={css.text}>
                            {grantProgramPageData.support.text}
                        </p>

                        <div className={css.apply_btn}>
                            <Button
                                text="Apply Now"
                                component="a"
                                href="https://airtable.com/appiHMc0glvIWmuan/shrvmPOFrTleLFQJd"
                                target="_blank"
                            />
                        </div>
                    </div>

                    <div className={css.content_right}>
                        <ul className={css.list}>
                            {grantProgramPageData.support.faqs.map((faq) => (
                                <li
                                    className={css.list_item}
                                    key={faq.q}
                                >
                                    <Accordeon
                                        question={faq.q}
                                        answer={faq.a}
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
