import React from 'react';
import { Button } from '@/components/buttons/button';
import { careersPageData } from '@/content/pages/careers';
import css from './banner.module.scss';

export const ContactBanner: React.FC = () => {
    return (
        <section className={css.banner}>
            <div className="container">
                <div className={css.inner}>
                    <h3 className={css.title}>{careersPageData.banner.title}</h3>
                    <a href="mailto:careers@taiko.xyz">
                        <Button
                            text={careersPageData.banner.contactUs}
                            variant="pink"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
};
