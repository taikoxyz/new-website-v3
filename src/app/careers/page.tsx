import type { Metadata } from 'next';
import { DefaultLayout } from '@/widgets/layouts/default-layout';
import { getCareers } from '@/content/utils';
import * as CareersScreens from '@/widgets/careers-screens';

export const metadata: Metadata = {
    title: 'Careers',
    description: 'Join the Taiko team and help scale Ethereum. Explore open positions and career opportunities.',
    openGraph: {
        title: 'Careers — Taiko',
        description: 'Join the Taiko team and help scale Ethereum. Explore open positions and career opportunities.',
        url: 'https://taiko.xyz/careers',
    },
    twitter: {
        title: 'Careers — Taiko',
        description: 'Join the Taiko team and help scale Ethereum. Explore open positions and career opportunities.',
    },
    alternates: {
        canonical: '/careers',
    },
};

export default function CareersPage() {
    const careers = getCareers();

    return (
        <DefaultLayout>
            <CareersScreens.Hero />
            <CareersScreens.Positions careers={careers} />
            <CareersScreens.ContactBanner />
        </DefaultLayout>
    );
}
