'use client';

import React from 'react';
import Sprite from '@/components/sprite';
import { MediaQuery } from '@/components/media-query';
import { grantProgramPageData } from '@/content/pages/grant-program';
import css from './key-dates.module.scss';

export const KeyDates: React.FC = () => {
    return (
        <section className={css.dates}>
            <div className="container">
                <div className={css.content}>
                    <div className={css.content_left}>
                        <h2 className={css.title}>
                            <span>{grantProgramPageData.keyDates.title}</span>
                            <Sprite.Default icon="arrow-right" />
                        </h2>
                    </div>

                    <div className={css.content_right}>
                        <MediaQuery
                            query="(min-width: 769px)"
                        >
                            <div className={css.titles}>
                                <p className={css.titles_date}>
                                    {grantProgramPageData.keyDates.dateTitle}
                                </p>
                                <p className={css.titles_description}>
                                    {grantProgramPageData.keyDates.descriptionTitle}
                                </p>
                            </div>
                        </MediaQuery>

                        <ul className={css.list}>
                            {grantProgramPageData.keyDates.items.map((item) => (
                                <li
                                    className={css.list_item}
                                    key={item.date}
                                >
                                    <h3 className={css.list_title}>
                                        {item.date}
                                    </h3>
                                    <p className={css.list_description}>
                                        {item.description}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
