import type { Metadata } from 'next';
import { DefaultLayout } from '@/widgets/layouts/default-layout';
import { EcosystemProvider } from '@/widgets/ecosystem-screens/provider';
import * as EcosystemScreens from '@/widgets/ecosystem-screens';

export const metadata: Metadata = {
    title: 'Ecosystem',
    openGraph: {
        title: 'Ecosystem — Taiko',
        url: 'https://taiko.xyz/ecosystem',
    },
    alternates: {
        canonical: '/ecosystem',
    },
};

export default function EcosystemPage() {
    return (
        <DefaultLayout>
            <EcosystemProvider>
                <EcosystemScreens.Hero />
                <EcosystemScreens.Controls />
                <EcosystemScreens.Disclaimer />
                <EcosystemScreens.Projects />
            </EcosystemProvider>
        </DefaultLayout>
    );
}
