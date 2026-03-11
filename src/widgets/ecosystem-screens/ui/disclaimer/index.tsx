import React from 'react';
import { ecosystemPageData } from '@/content/pages/ecosystem';
import css from './disclaimer.module.scss';

export const Disclaimer: React.FC = () => {
    return (
        <section className={css.disclaimer}>
            <div className={css.wrapper}>
                <p className={css.content}>
                    {ecosystemPageData.disclaimer.subtitle}
                    <a
                        href="https://github.com/taikoxyz/website-v3"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={css.link}
                    >
                        https://github.com/taikoxyz/website-v3
                    </a>
                    .
                </p>
            </div>
        </section>
    );
};
