'use client';

import React from 'react';
import { Button } from '@/components/buttons/button';
import { eventsPageData } from '@/content/pages/events';
import css from './hero.module.scss';

export const Hero: React.FC = () => {
    return (
        <section className={css.hero}>
            <div className="container">
                <div className={css.wrapper}>
                    <img
                        className={css.image}
                        src="/img/events-hero.jpg"
                        alt=""
                    />

                    <div className={css.content}>
                        <div className={css.content_left}>
                            <h3 className={css.suptitle}>
                                {eventsPageData.suptitle}
                            </h3>

                            <h1 className={css.title}>
                                {eventsPageData.title}
                            </h1>
                        </div>

                        <div className={css.content_right}>
                            <div className={css.card}>
                                <p className={css.card_text}>
                                    {eventsPageData.text}
                                </p>

                                <Button
                                    className={css.card_button}
                                    text={eventsPageData.learnMore}
                                    component="a"
                                    href="/about"
                                    variant="pink-outlined"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
