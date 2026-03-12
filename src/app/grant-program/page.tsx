'use client';

import { DefaultLayout } from '@/widgets/layouts/default-layout';
import * as GrantScreens from '@/widgets/grant-program-screens';
import css from './grant-program.module.scss';

export default function GrantProgramPage() {
    return (
        <DefaultLayout>
            <div className={css.gap}>
                <GrantScreens.Hero />
                <GrantScreens.KeyDates />
                <GrantScreens.Mission />
                <GrantScreens.Community />
                <GrantScreens.Tracks />
                <GrantScreens.Support />
                <GrantScreens.Process />
            </div>
        </DefaultLayout>
    );
}
