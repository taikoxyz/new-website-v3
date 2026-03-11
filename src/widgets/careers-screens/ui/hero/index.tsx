import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/buttons/button';
import { careersPageData } from '@/content/pages/careers';
import css from './hero.module.scss';

export const Hero: React.FC = () => {
    return (
        <section className={css.hero}>
            <div className="container">
                <h1
                    className={css.title}
                    dangerouslySetInnerHTML={{ __html: careersPageData.hero.title }}
                />
                <Link href="/about">
                    <Button
                        className={css.btn}
                        text={careersPageData.hero.aboutBtn}
                        variant="pink"
                    />
                </Link>
            </div>
        </section>
    );
};
