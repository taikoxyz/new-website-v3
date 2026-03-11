'use client';

import React from 'react';
import { MediaQuery } from '@/components/media-query';
import Sprite from '@/components/sprite';
import { aboutPageData } from '@/content/pages/about';
import css from './mission.module.scss';

export const Mission: React.FC = () => {
    return (
        <section className={css.mission} id="mission">
            <div className="container">
                <div className={css.wrapper}>
                    <div className={css.image}>
                        <picture>
                            <source
                                srcSet="/img/about/mission-card.webp"
                                type="image/webp"
                            />
                            <img src="/img/about/mission-card.jpg" alt="" />
                        </picture>
                    </div>

                    <div className={css.content}>
                        <div className={css.card}>
                            <p className={css.card_suptitle}>
                                {aboutPageData.mission.suptitle}
                            </p>

                            <h2 className={css.card_title}>
                                {aboutPageData.mission.title}
                            </h2>
                        </div>

                        <div className={css.info}>
                            <div className={css.info_icon}>
                                <div className={css.info_icon_circle}>
                                    <Sprite.Default icon="shape:clock" />
                                </div>
                            </div>

                            <h3 className={css.info_suptitle}>
                                {aboutPageData.mission.fact.title}
                            </h3>

                            <div className={css.info_row}>
                                <MediaQuery query="(min-width: 1124px)">
                                    <p className={css.info_percent}>96%</p>
                                </MediaQuery>

                                <ul className={css.info_list}>
                                    <li className={css.info_list_item}>
                                        {aboutPageData.mission.fact.text_1}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
