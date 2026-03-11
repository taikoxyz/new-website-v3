'use client';

import React from 'react';
import { Button } from '@/components/buttons/button';
import { MediaQuery } from '@/components/media-query';
import LottiePlayer from '@/components/lottie-player';
import { solutionsPageData } from '@/content/pages/solutions';
import { startFromZero } from '@/lib/utils/formatter';
import css from './infrastructure.module.scss';

export const Infrastructure: React.FC = () => {
    const { infrastructure } = solutionsPageData;

    return (
        <section
            className={css.infrastructure}
            id="infrastructure"
        >
            <h3 className={css.suptitle}>
                {infrastructure.suptitle}
            </h3>

            <ul className={css.list}>
                {infrastructure.items.map((item, id) => (
                    <li
                        className={css.list_item}
                        key={item.title}
                    >
                        <div className={css.list_header}>
                            <MediaQuery query="(max-width: 991px)">
                                <LottiePlayer
                                    className={css.list_icon}
                                    src={item.iconLottie}
                                    loop
                                    autoplay
                                />
                            </MediaQuery>
                            <p className={css.list_index}>
                                {startFromZero(id + 1)}
                            </p>
                        </div>

                        <h3 className={css.list_title}>
                            {item.title}
                        </h3>

                        <MediaQuery query="(min-width: 992px)">
                            <div className={css.list_spacer} />
                            <LottiePlayer
                                className={css.list_icon}
                                src={item.iconLottie}
                                loop
                                autoplay
                            />
                        </MediaQuery>

                        <p className={css.list_text}>
                            {item.text}
                        </p>

                        <div className={css.list_controls}>
                            <Button
                                className={css.list_button}
                                href={item.url}
                                text={infrastructure.learnMore}
                                component="a"
                                target="_blank"
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};
