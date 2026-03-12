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
                            <div className={css.card_header}>
                                <img
                                    className={css.card_icon}
                                    src={item.icon}
                                    alt=""
                                />
                                <div className={css.card_titles}>
                                    <h3 className={css.card_title}>
                                        {item.title}
                                    </h3>
                                    <p className={css.card_track}>
                                        {item.track}
                                    </p>
                                </div>
                            </div>

                            <p
                                className={css.card_text}
                                dangerouslySetInnerHTML={{
                                    __html: item.text,
                                }}
                            />

                            <div className={css.card_footer}>
                                <p
                                    className={css.card_timeline}
                                    dangerouslySetInnerHTML={{
                                        __html: item.timeline,
                                    }}
                                />

                                <Button
                                    className={css.card_button}
                                    text={grantProgramPageData.track.applyNow}
                                    component="a"
                                    href={item.link}
                                    target="_blank"
                                    disabled={!item.active}
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
