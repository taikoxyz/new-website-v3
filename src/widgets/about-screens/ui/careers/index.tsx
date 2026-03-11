'use client';

import React from 'react';
import { Button } from '@/components/buttons/button';
import { MediaQuery } from '@/components/media-query';
import { aboutPageData } from '@/content/pages/about';
import css from './careers.module.scss';

export const Careers: React.FC = () => {
    return (
        <section className={css.careers} id="careers">
            <div className="container">
                <div className={css.wrapper}>
                    <MediaQuery query="(min-width: 769px)">
                        <img
                            className={css.image}
                            src="/img/about/careers-background.jpg"
                            alt=""
                        />
                    </MediaQuery>
                    <MediaQuery query="(max-width: 768px)">
                        <img
                            className={css.image}
                            src="/img/about/careers-background-mobile.jpg"
                            alt=""
                        />
                    </MediaQuery>
                    <div className={css.box}>
                        <h3 className={css.content_suptitle}>
                            {aboutPageData.careers.suptitle}
                        </h3>

                        <div className={css.content}>
                            <div className={css.content_left}>
                                <h2
                                    className={css.content_title}
                                    dangerouslySetInnerHTML={{
                                        __html: aboutPageData.careers.title,
                                    }}
                                />
                            </div>

                            <div className={css.content_right}>
                                <div className={css.content_text}>
                                    {aboutPageData.careers.text
                                        .split('\n')
                                        .map((text) => (
                                            <p key={text.slice(0, 20)}>
                                                {text}
                                            </p>
                                        ))}
                                </div>

                                <Button
                                    className={css.content_button}
                                    text={aboutPageData.careers.viewBtn}
                                    component="a"
                                    href="/careers"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
