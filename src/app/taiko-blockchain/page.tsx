'use client';

import { DefaultLayout } from '@/widgets/layouts/default-layout';
import * as ProductScreens from '@/widgets/product-page-screens';
import { taikoBlockchainPageData } from '@/content/pages/taiko-blockchain';
import css from './taiko-blockchain.module.scss';

export default function TaikoBlockchainPage() {
    const data = taikoBlockchainPageData;

    return (
        <DefaultLayout>
            <div className={css.gap}>
                <ProductScreens.Hero
                    title={data.hero_title}
                    text={data.hero_text}
                    logo={data.hero_logo}
                    background="/img/taiko-blockchain/hero-bg.webp"
                    gridLines="/img/taiko-blockchain/grid-lines.svg"
                    heroIcon="/img/taiko-blockchain/hero-icon.svg"
                />
                <ProductScreens.About
                    title={data.about_title}
                    text={data.about_text}
                    subtext={data.about_subtext}
                    label="About"
                    logo="/img/home-new/taiko.webp"
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
                />
                <ProductScreens.Faq
                    title={data.faq_title}
                    text={data.faq_text}
                    faqData={data.faq_data}
                />
            </div>
        </DefaultLayout>
    );
}
