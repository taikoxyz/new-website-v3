'use client';

import { DefaultLayout } from '@/widgets/layouts/default-layout';
import * as EventsScreens from '@/widgets/events-screens';

export default function EventsPage() {
    return (
        <DefaultLayout>
            <EventsScreens.Hero />
            <EventsScreens.Events />
        </DefaultLayout>
    );
}
