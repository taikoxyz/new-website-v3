'use client';

import { DefaultLayout } from '@/widgets/layouts/default-layout';
import { EcosystemProvider } from '@/widgets/ecosystem-screens/provider';
import * as EcosystemScreens from '@/widgets/ecosystem-screens';

export default function EcosystemPage() {
    return (
        <DefaultLayout>
            <EcosystemProvider>
                <EcosystemScreens.Hero />
                <EcosystemScreens.Controls />
                <EcosystemScreens.Projects />
                <EcosystemScreens.Grant />
                <EcosystemScreens.Disclaimer />
            </EcosystemProvider>
        </DefaultLayout>
    );
}
