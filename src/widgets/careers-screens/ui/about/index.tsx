import React from 'react';
import { careersPageData } from '@/content/pages/careers';
import css from './about.module.scss';

export const About: React.FC = () => {
    return (
        <section className={css.about}>
            <div className="container">
                <p className={css.suptitle}>{careersPageData.about.suptitle}</p>
                <h2
                    className={css.title}
                    dangerouslySetInnerHTML={{ __html: careersPageData.about.title }}
                />
                <p className={css.text}>{careersPageData.about.text}</p>
            </div>
        </section>
    );
};
