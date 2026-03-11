'use client';

import React from 'react';
import Sprite from '@/components/sprite';
import { solutionsPageData } from '@/content/pages/solutions';
import css from './hero.module.scss';

export const Hero: React.FC = () => {
    const onClick = (ev: React.MouseEvent<HTMLAnchorElement>) => {
        ev.preventDefault();

        const element = document.getElementById('infrastructure');

        if (element) {
            element.scrollIntoView({
                block: 'start',
                behavior: 'smooth',
            });
        }
    };

    return (
        <section className={css.hero}>
            <div className={css.content}>
                <p className={css.suptitle}>
                    {solutionsPageData.hero.ourSolutions}
                </p>

                <h1
                    className={css.title}
                    dangerouslySetInnerHTML={{
                        __html: solutionsPageData.hero.title,
                    }}
                />
            </div>

            <div className={css.image}>
                <picture>
                    <source srcSet="/img/solutions/hero-gradient-mobile.jpg" media="(max-width: 768px)" />
                    <source srcSet="/img/solutions/hero-gradient.v2.webp" type="image/webp" />
                    <img src="/img/solutions/hero-gradient.v2.jpg" alt="" />
                </picture>
                <a
                    className={css.scrollDown}
                    onClick={onClick}
                    href="#infrastructure"
                >
                    to bottom
                    <Sprite.Default icon="arrow-down" />
                </a>
            </div>
        </section>
    );
};
