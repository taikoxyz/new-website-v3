import React from 'react';
import { Banner } from '@/components/banner';
import { Button } from '@/components/buttons/button';
import { grantProgramPageData } from '@/content/pages/grant-program';
import css from './process.module.scss';

export const Process: React.FC = () => {
    return (
        <section className={css.process}>
            <Banner
                text={grantProgramPageData.banner.title}
                button={
                    <Button text={grantProgramPageData.banner.learnMore} />
                }
                icon="star"
            />
        </section>
    );
};
