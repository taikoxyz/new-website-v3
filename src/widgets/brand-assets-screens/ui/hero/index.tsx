'use client';

import React from 'react';
import { brandAssetsPageData } from '@/content/pages/brand-assets';
import css from './hero.module.scss';

export const Hero: React.FC = () => {
    return (
        <section className={css.hero}>
            <div className="container">
                <div className={css.content}>
                    <h1
                        className={css.title}
                        dangerouslySetInnerHTML={{
                            __html: brandAssetsPageData.hero.title,
                        }}
                    />

                    <p className={css.text}>
                        {brandAssetsPageData.hero.text}
                    </p>
                </div>
            </div>
        </section>
    );
};
