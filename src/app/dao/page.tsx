'use client';

import clsx from 'clsx';
import { DefaultLayout } from '@/widgets/layouts/default-layout';
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
                        <div className={css.welcome_wrapper}>
                            <p className={css.welcome_label}>{data.welcome_suptitle}</p>
                            <h1 className={css.welcome_title}>{data.welcome_title}</h1>
                            <p className={css.welcome_text}>{data.welcome_text}</p>
                            {data.welcome_btn && (
                                <div className={css.welcome_btn}>
                                    <WrapperButton {...data.welcome_btn} />
                                </div>
                            )}
                            <video
                                className={css.welcome_video}
                                src="/img/home-new/governance/governance.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                        </div>
                    </div>
                </section>

                {/* About */}
                <section className={css.about}>
                    <div className="container">
                        <p className={css.about_suptitle}>{data.about_suptitle}</p>
                        <div className={css.about_header}>
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
                                    {feature.icon ? (
                                        <img src={feature.icon} alt="" className={css.about_feature_icon} />
                                    ) : (
                                        <span className={css.about_feature_number}>{(index + 1).toFixed(1)}</span>
                                    )}
                                    <h3 className={css.about_feature_title}>{feature.title}</h3>
                                    <p className={css.about_feature_text}>{feature.text}</p>
                                </li>
                            ))}
                            {/* Join card integrated as last feature */}
                            <li className={css.join_item}>
                                <p className={css.join_suptitle}>{data.about_join_suptitle}</p>
                                <p className={css.join_title}>{data.about_join_title}</p>
                                {data.about_join_btn && (
                                    <div className={css.join_btn}>
                                        <WrapperButton {...data.about_join_btn} />
                                    </div>
                                )}
                            </li>
                        </ul>
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
