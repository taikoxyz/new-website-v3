'use client';

import { DefaultLayout } from '@/widgets/layouts/default-layout';
import * as ProductScreens from '@/widgets/product-page-screens';
import { FooterSubscribe } from '@/features/footer-subscribe';
import { gwynethPageData } from '@/content/pages/gwyneth';
import css from './gwyneth.module.scss';

export default function GwynethPage() {
    const data = gwynethPageData;

    return (
        <DefaultLayout>
            <div className={css.gap}>
                <ProductScreens.Hero
                    title={data.hero_title}
                    text={data.hero_text}
                    logo={data.hero_logo}
                    background="/img/alethia/hero-bg.webp"
                    gridLines="/img/alethia/grid-lines.svg"
                    heroIcon="/img/alethia/hero-icon.svg"
                />
                <ProductScreens.About
                    title={data.about_title}
                    text={data.about_text}
                    subtext={data.about_subtext}
                    label="About"
                />
                <ProductScreens.Features
                    suptitle={data.features_suptitle}
                    features={data.features_list}
                />
                <ProductScreens.Explore
                    suptitle={data.explore_suptitle}
                    title={data.explore_title}
                    text={data.explore_text}
                    background={data.explore_background}
                />
                <ProductScreens.Cards
                    cards={data.cards_list}
                    cols={4}
                />
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
