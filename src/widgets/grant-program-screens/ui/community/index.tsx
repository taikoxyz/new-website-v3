'use client';

import React from 'react';
import { Button } from '@/components/buttons/button';
import { grantProgramPageData } from '@/content/pages/grant-program';
import css from './community.module.scss';

export const Community: React.FC = () => {
    return (
        <section className={css.community}>
            <div className="container">
                <div className={css.content}>
                    <h3 className={css.suptitle}>
                        {grantProgramPageData.community.suptitle}
                    </h3>

                    <div className={css.content_inner}>
                        <div className={css.content_left}>
                            <h2
                                className={css.title}
                                dangerouslySetInnerHTML={{
                                    __html: grantProgramPageData.community.title,
                                }}
                            />
                        </div>

                        <div className={css.content_right}>
                            <p className={css.text}>
                                {grantProgramPageData.community.text.split('\n').map((item, i) => (
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: item,
                                        }}
                                        key={i}
                                    />
                                ))}
                            </p>

                            <Button
                                className={css.button}
                                text={grantProgramPageData.community.learnMore}
                                variant="pink-outlined"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
