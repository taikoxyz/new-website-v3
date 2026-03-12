'use client';

import React from 'react';
import clsx from 'clsx';
import { Button } from '@/components/buttons/button';
import { grantProgramPageData } from '@/content/pages/grant-program';
import css from './tracks.module.scss';

export const Tracks: React.FC = () => {
    return (
        <section className={css.tracks}>
            <div className="container">
                <h2 className={css.title}>
                    {grantProgramPageData.track.title}
                </h2>

                <ul className={css.list}>
                    {grantProgramPageData.track.items.map((item) => (
                        <li
                            className={clsx(
                                css.card,
                                !item.active && css.card_inactive,
                            )}
                            key={item.title}
                        >
                            <div className={css.card_titles}>
                                <h3 className={css.card_title}>
                                    {item.title}
                                </h3>
                                <p className={css.card_track}>
                                    {item.track}
                                </p>
                            </div>

                            <p className={css.card_text}>
                                {item.text}
                            </p>

                            <p className={css.card_timeline}>
                                {item.timeline}
                            </p>
                        </li>
                    ))}
                </ul>

                <div className={css.apply}>
                    <Button
                        text={grantProgramPageData.track.applyNow}
                        component="a"
                        href="https://airtable.com/appiHMc0glvIWmuan/shrvmPOFrTleLFQJd"
                        target="_blank"
                    />
                </div>
            </div>
        </section>
    );
};
