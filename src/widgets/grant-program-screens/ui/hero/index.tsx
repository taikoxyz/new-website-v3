'use client';

import React from 'react';
import { grantProgramPageData } from '@/content/pages/grant-program';
import css from './hero.module.scss';

export const Hero: React.FC = () => {
    return (
        <section className={css.hero}>
            <div className="container">
                <img
                    src="/img/grant/hero-banner.jpg"
                    className={css.banner}
                    alt=""
                />

                <div className={css.content}>
                    <div className={css.content_left}>
                        <h1
                            className={css.title}
                            dangerouslySetInnerHTML={{
                                __html: grantProgramPageData.hero.title,
                            }}
                        />
                    </div>

                    <div className={css.content_right}>
                        <p className={css.text}>
                            {grantProgramPageData.hero.text}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
