import React from 'react';
import { Button } from '@/components/buttons/button';
import { Banner } from '@/components/banner';
import { ecosystemPageData } from '@/content/pages/ecosystem';
import css from './grant.module.scss';

export const Grant: React.FC = () => {
    return (
        <section className={css.grant}>
            <div className="container">
                <div className={css.wrapper}>
                    <div className={css.content}>
                        <div className={css.content_left}>
                            <p className={css.suptitle}>
                                {ecosystemPageData.grant.suptitle}
                            </p>
                        </div>

                        <div className={css.content_right}>
                            <p
                                className={css.text}
                                dangerouslySetInnerHTML={{
                                    __html: ecosystemPageData.grant.text,
                                }}
                            />
                        </div>
                    </div>

                    <div className={css.banner}>
                        <Banner
                            icon="star"
                            text={ecosystemPageData.grant.applyText}
                            button={
                                <Button
                                    text={ecosystemPageData.grant.contactUs}
                                    component="a"
                                    href="/grant-program"
                                />
                            }
                            fullwidth
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
