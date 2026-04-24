'use client';

import React from 'react';
import LottiePlayer from '@/components/lottie-player';
import { MediaQuery } from '@/components/media-query';
import { Button } from '@/components/buttons/button';
import { ecosystemPageData } from '@/content/pages/ecosystem';
import { HeroDapps } from '../hero-dapps';
import css from './hero.module.scss';

export const Hero: React.FC = () => {
    return (
        <section className={css.hero}>
            <div className="container">
                <div className={css.wrapper}>
                    <MediaQuery query="(min-width: 769px)">
                        <LottiePlayer
                            className={css.image}
                            src="/img/home/ecosystem.json"
                            rendererSettings={{
                                preserveAspectRatio: 'xMidYMid slice',
                            }}
                            autoplay
                            loop
                        />
                    </MediaQuery>

                    <MediaQuery query="(max-width: 768px)">
                        <LottiePlayer
                            className={css.image}
                            src="/img/home/ecosystem.mob.v2.json"
                            rendererSettings={{
                                preserveAspectRatio: 'xMidYMid slice',
                            }}
                            autoplay
                            loop
                        />
                    </MediaQuery>

                    <div className={css.content}>
                        <div className={css.content_left}>
                            <h1
                                className={css.title}
                                dangerouslySetInnerHTML={{
                                    __html: ecosystemPageData.title,
                                }}
                            />

                            <MediaQuery query="(min-width: 769px)">
                                <div className={css.dapps}>
                                    <HeroDapps />
                                </div>
                            </MediaQuery>
                        </div>

                        <div className={css.content_right}>
                            <div className={css.card}>
                                <p className={css.card_text}>
                                    {ecosystemPageData.text}
                                </p>

                                <Button
                                    className={css.card_button}
                                    text={ecosystemPageData.joinOurEcosystem}
                                    component="a"
                                    target="_blank"
                                    href="https://github.com/taikoxyz/new-website-v3/issues/new?assignees=&labels=category.enhancement%2Cstatus.needs-triage&projects=&template=add_project.yml"
                                />

                                <MediaQuery query="(max-width: 768px)">
                                    <div className={css.card_dapps}>
                                        <HeroDapps />
                                    </div>
                                </MediaQuery>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
