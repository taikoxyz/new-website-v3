'use client';

import { DefaultLayout } from '@/widgets/layouts/default-layout';
import * as SolutionScreens from '@/widgets/solutions-screens';

export default function SolutionsPage() {
    return (
        <DefaultLayout>
            <SolutionScreens.SolutionsLayout>
                <SolutionScreens.Hero />
                <SolutionScreens.Platform />
                <SolutionScreens.Infrastructure />
            </SolutionScreens.SolutionsLayout>
        </DefaultLayout>
    );
}
