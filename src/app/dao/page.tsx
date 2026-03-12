'use client';

import clsx from 'clsx';
import { DefaultLayout } from '@/widgets/layouts/default-layout';
import { Label } from '@/components/label';
import { WrapperButton } from '@/components/buttons/button';
import { FooterSubscribe } from '@/features/footer-subscribe';
import * as ProductScreens from '@/widgets/product-page-screens';
import { daoPageData } from '@/content/pages/dao';
import css from './dao.module.scss';

export default function DaoPage() {
    const data = daoPageData;

    return (
        <DefaultLayout>
            <div className={css.gap}>
                {/* Welcome */}
                <section className={css.welcome}>
                    <div className="container">
                        <Label text={data.welcome_suptitle} className={css.welcome_suptitle} />
                        <h1 className={css.welcome_title}>{data.welcome_title}</h1>
                        <p className={css.welcome_text}>{data.welcome_text}</p>
                        {data.welcome_btn && (
                            <div className={css.welcome_btn}>
                                <WrapperButton {...data.welcome_btn} />
                            </div>
                        )}
                    </div>
                </section>

                {/* About */}
                <section className={css.about}>
                    <div className="container">
                        <div className={css.about_header}>
                            <Label text={data.about_suptitle} className={css.about_suptitle} />
                            <h2 className={css.about_title}>{data.about_title}</h2>
                            <p className={css.about_text}>{data.about_text}</p>
                        </div>
                        <ul className={css.about_features}>
                            {data.about_features.map((feature, index) => (
                                <li
                                    key={feature.id}
                                    className={clsx(
                                        css.about_feature,
                                        feature.disabled && css.about_feature_disabled
                                    )}
                                >
                                    <span className={css.about_feature_number}>{index + 1}.0</span>
                                    <h3 className={css.about_feature_title}>{feature.title}</h3>
                                    <p className={css.about_feature_text}>{feature.text}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Join */}
                <section className={css.join}>
                    <div className="container">
                        <div className={css.join_content}>
                            <div className={css.join_left}>
                                <Label text={data.about_join_suptitle} className={css.join_suptitle} />
                                <p className={css.join_title}>{data.about_join_title}</p>
                                {data.about_join_btn && (
                                    <div className={css.join_btn}>
                                        <WrapperButton {...data.about_join_btn} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <ProductScreens.Faq
                    title={data.faq_title}
                    text={data.faq_text}
                    faqData={data.faq_data}
                />

                <FooterSubscribe />
            </div>
        </DefaultLayout>
    );
}
