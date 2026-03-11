'use client';

import React from 'react';
import { Button } from '@/components/buttons/button';
import { Banner } from '@/components/banner';
import { aboutPageData } from '@/content/pages/about';

export const Brand: React.FC = () => {
    return (
        <section id="brand">
            <div className="container">
                <Banner
                    text={aboutPageData.ourBrand}
                    icon="book"
                    button={
                        <Button
                            text={aboutPageData.viewBrand}
                            href="/brand-assets"
                            component="a"
                        />
                    }
                    fullwidth
                />
            </div>
        </section>
    );
};
