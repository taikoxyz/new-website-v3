'use client';

import React, { useState } from 'react';
import clsx from 'clsx';
import { Button } from '@/components/buttons/button';
import { brandAssetsPageData } from '@/content/pages/brand-assets';
import css from './logo.module.scss';

export const Logo: React.FC = () => {
    const { logos } = brandAssetsPageData.logo;
    const [activeLogo, setActiveLogo] = useState(logos[0]);

    const getBackground = (background: string) => {
        const key = background.includes('url') ? 'backgroundImage' : 'backgroundColor';

        return {
            [key]: background,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        };
    };

    return (
        <section className={css.logo}>
            <div className="container">
                <div className={css.wrapper}>
                    <div className={css.header}>
                        <h2 className={css.suptitle}>
                            {brandAssetsPageData.logo.suptitle}
                        </h2>

                        <div className={css.desktopButton}>
                            <Button
                                className={css.button}
                                text={brandAssetsPageData.logo.button}
                                variant="pink-outlined"
                                href="/img/brand/taiko.zip"
                                component="a"
                                download
                            />
                        </div>
                    </div>

                    <div className={css.content}>
                        <div className={css.content_left}>
                            <ul className={css.list}>
                                {logos.map((item) => (
                                    <li
                                        className={clsx(
                                            css.list_item,
                                            item.id === activeLogo.id && css.list_itemActive
                                        )}
                                        style={getBackground(item.background)}
                                        onClick={() => setActiveLogo(item)}
                                        key={item.id}
                                    >
                                        <img
                                            className={css.list_logo}
                                            src={item.img}
                                            alt=""
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div
                            className={css.content_right}
                            style={getBackground(activeLogo.backgroundImage || activeLogo.background)}
                        >
                            <img
                                className={css.logoActive}
                                src={activeLogo.img}
                                alt=""
                            />
                        </div>
                    </div>

                    <div className={css.mobileButton}>
                        <Button
                            className={css.button}
                            text={brandAssetsPageData.logo.button}
                            variant="pink-outlined"
                            href="/img/brand/taiko.zip"
                            component="a"
                            download
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
