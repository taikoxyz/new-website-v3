import type { Metadata } from 'next';
import { DefaultLayout } from '@/widgets/layouts/default-layout';
import { getCareers } from '@/content/utils';
import * as CareersScreens from '@/widgets/careers-screens';

export const metadata: Metadata = {
    title: 'Careers — Taiko',
    description: 'Join the Taiko team and help scale Ethereum.',
};

export default function CareersPage() {
    const careers = getCareers();

    return (
        <DefaultLayout>
            <CareersScreens.Hero />
            <CareersScreens.About />
            <CareersScreens.Positions careers={careers} />
            <CareersScreens.ContactBanner />
        </DefaultLayout>
    );
}
