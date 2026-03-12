'use client';

import React from 'react';
import { Button } from '@/components/buttons/button';
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
                        <h2 className={css.subtitle}>
                            {grantProgramPageData.hero.text}
                        </h2>
                        <p className={css.text}>
                            Today, we are excited to announce the Taiko 2025 Grant Fund, with a total of $25 million in funding!
                        </p>
                        <p className={css.text}>
                            Our objective remains the discovery and support of innovative projects and community members that advance the Taiko ecosystem. Applicants may also be eligible for another ongoing initiative we are running, <a href="https://takeoff.taiko.xyz/" target="_blank" rel="noopener noreferrer" className={css.link}>Taiko Takeoff</a> which is designed to support projects and create opportunities for our community.
                        </p>
                        <p className={css.text}>
                            This grant program is designed to fund developers, researchers, and builders working on groundbreaking ideas in DeFi, AI, RWA, SocialFi, Gaming, and beyond.
                        </p>
                        <div className={css.cta}>
                            <Button
                                text="Apply Now"
                                component="a"
                                href="https://airtable.com/appiHMc0glvIWmuan/shrvmPOFrTleLFQJd"
                                target="_blank"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
