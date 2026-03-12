'use client';

import { DefaultLayout } from '@/widgets/layouts/default-layout';
import * as BrandScreens from '@/widgets/brand-assets-screens';
import css from './brand-assets.module.scss';

export default function BrandAssetsPage() {
    return (
        <DefaultLayout>
            <div className={css.gap}>
                <BrandScreens.Hero />
                <BrandScreens.Logo />
                <BrandScreens.ColorPalette />
                <BrandScreens.Topography />
                <BrandScreens.BrandBook />
            </div>
        </DefaultLayout>
    );
}
