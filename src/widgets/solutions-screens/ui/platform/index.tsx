'use client';

import React from 'react';
import { Button } from '@/components/buttons/button';
import { solutionsPageData } from '@/content/pages/solutions';
import css from './platform.module.scss';

export const Platform: React.FC = () => {
    const { platform } = solutionsPageData;

    return (
        <section className={css.platform}>
            <div className={css.row}>
                <p className={css.suptitle}>
                    {platform.suptitle}
                </p>

                <Button
                    className={css.button}
                    text={platform.learnMore}
                    component="a"
                    href="/about"
                    variant="pink-outlined"
                />
            </div>

            <ul className={css.list}>
                {platform.items.map((item) => (
                    <li
                        className={css.list_item}
                        key={item.title}
                    >
                        <div className={css.list_content}>
                            <img
                                className={css.list_icon}
                                src={item.icon}
                                alt=""
                            />

                            <h3 className={css.list_title}>
                                {item.title}
                            </h3>

                            <p className={css.list_text}>
                                {item.text}
                            </p>

                            <Button
                                className={css.list_button}
                                text={`${platform.goTo} ${item.title}`}
                                variant="pink-outlined"
                                component="a"
                                href={item.url}
                                target="_blank"
                            />
                        </div>

                        <div className={css.list_image}>
                            <picture>
                                <source srcSet={item.image.webp} type="image/webp" />
                                <img src={item.image.default} alt="" />
                            </picture>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};
