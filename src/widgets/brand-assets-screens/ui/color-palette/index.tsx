'use client';

import React from 'react';
import { brandAssetsPageData } from '@/content/pages/brand-assets';
import css from './color-palette.module.scss';

export const ColorPalette: React.FC = () => {
    const { colors } = brandAssetsPageData.colorPalette;

    return (
        <section className={css.colorPalette}>
            <div className="container">
                <h3 className={css.suptitle}>
                    {brandAssetsPageData.colorPalette.suptitle}
                </h3>

                <ul className={css.list}>
                    {colors.map((color) => (
                        <li
                            className={css.list_item}
                            key={color.title}
                        >
                            <ul className={css.colors}>
                                {color.items.map((item) => (
                                    <li
                                        className={css.colors_item}
                                        style={{ background: item.color }}
                                        key={item.color}
                                    >
                                        {item.name && (
                                            <h4 className={css.colors_title}>
                                                {item.name}
                                            </h4>
                                        )}

                                        <p className={css.colors_rgb}>
                                            {item.color}
                                        </p>
                                    </li>
                                ))}
                            </ul>

                            <div className={css.group}>
                                <p className={css.group_name}>
                                    {color.title}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
