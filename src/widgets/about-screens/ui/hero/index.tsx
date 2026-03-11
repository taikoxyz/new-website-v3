'use client';

import React from 'react';
import { aboutPageData } from '@/content/pages/about';
import css from './hero.module.scss';

export const Hero: React.FC = () => {
    return (
        <section className={css.hero} id="hero">
            <div className="container">
                <h1
                    className={css.title}
                    dangerouslySetInnerHTML={{
                        __html: aboutPageData.hero.title,
                    }}
                />
            </div>
        </section>
    );
};
