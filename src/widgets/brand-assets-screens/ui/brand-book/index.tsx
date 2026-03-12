'use client';

import React from 'react';
import { Button } from '@/components/buttons/button';
import { Banner } from '@/components/banner';
import { brandAssetsPageData } from '@/content/pages/brand-assets';
import css from './brand-book.module.scss';

export const BrandBook: React.FC = () => {
    return (
        <section className={css.brandBook}>
            <Banner
                icon="book"
                text={brandAssetsPageData.brandBook.title}
                button={
                    <Button
                        component="a"
                        target="_blank"
                        href="https://www.figma.com/file/qVALIk5srW9nvOJwl6NF6F/Taiko-Brand-Guidelines-(External)"
                        text={brandAssetsPageData.brandBook.button}
                    />
                }
            />
        </section>
    );
};
