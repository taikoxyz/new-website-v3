'use client';

import React from 'react';
import clsx from 'clsx';
import { DefaultLayout } from '@/widgets/layouts/default-layout';
import { FooterSubscribe } from '@/features/footer-subscribe';
import { WrapperButton } from '@/components/buttons/button';
import { gwynethAppsPageData } from '@/content/pages/gwyneth-apps';
import type { GwynethAppsItem } from '@/content/types';
import css from './gwyneth-apps.module.scss';

export default function GwynethAppsPage() {
    const data = gwynethAppsPageData;
    return (
        <DefaultLayout>
            <div className={css.gap}>
                {/* Hero */}
                <section className={css.hero}>
                    <div className="container">
                        <h1 className={css.hero_title}>
                            Explore the <span className={css.hero_title_pink}>Taiko Gwyneth</span> Ecosystem
                        </h1>
                    </div>
                </section>

                {/* About + dApps stat */}
                <section>
                    <div className="container">
                        <div className={css.about}>
                            <div className={css.about_info}>
                                <p className={css.about_text}>{data.hero_about_text}</p>
                                {data.hero_about_btn && (
                                    <WrapperButton {...data.hero_about_btn} />
                                )}
                            </div>
                            {data.hero_dapps && (
                                <div className={css.about_stat}>
                                    <div>
                                        <div className={css.about_stat_value}>{data.hero_dapps.value}</div>
                                        <div className={css.about_stat_name}>{data.hero_dapps.name}</div>
                                    </div>
                                    {data.hero_dapps.icons.length > 0 && (
                                        <div className={css.about_stat_icons}>
                                            {data.hero_dapps.icons.map((icon, i) => (
                                                <img key={i} src={icon} alt="" />
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Disclaimer */}
                <section>
                    <div className="container">
                        <div className={css.disclaimer}>
                            <h3 className={css.disclaimer_title}>{data.disclaimer_title}</h3>
                            <p className={css.disclaimer_text}>{data.disclaimer_text}</p>
                        </div>
                    </div>
                </section>

                {/* Apps List */}
                <section>
                    <div className="container">
                        {data.apps_list.length > 0 ? (
                            <ul className={css.apps_list}>
                                {data.apps_list.map((app: GwynethAppsItem) => (
                                    <li className={css.apps_list_item} key={app.id}>
                                        <AppCard app={app} />
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <div className={css.apps_empty}>
                                No apps available yet.
                            </div>
                        )}
                    </div>
                </section>

                <FooterSubscribe />
            </div>
        </DefaultLayout>
    );
}

const AppCard: React.FC<{ app: GwynethAppsItem }> = ({ app }) => {
    const Tag = app.url ? 'a' : 'div';
    const linkProps = app.url
        ? { href: app.url, target: '_blank' as const, rel: 'noopener noreferrer' }
        : {};

    return (
        <Tag
            className={clsx(
                css.app_card,
                !app.active && css.app_card_inactive
            )}
            {...linkProps}
        >
            <div className={css.app_card_content}>
                <div className={css.app_card_header}>
                    {app.icon && (
                        <img
                            className={css.app_card_icon}
                            src={app.icon}
                            alt={app.name}
                        />
                    )}
                    <span className={css.app_card_type}>{app.type}</span>
                </div>
                <h3 className={css.app_card_title}>{app.name}</h3>
                <p className={css.app_card_text}>{app.text}</p>
                {app.categories.length > 0 && (
                    <div className={css.app_card_categories}>
                        {app.categories.map((cat) => (
                            <span className={css.app_card_category} key={cat}>
                                {cat}
                            </span>
                        ))}
                    </div>
                )}
            </div>
            {!app.active && (
                <div className={css.app_card_overlay}>Coming soon</div>
            )}
        </Tag>
    );
};
