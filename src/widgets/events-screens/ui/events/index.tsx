'use client';

import React, { useMemo, useState } from 'react';
import dayjs from 'dayjs';
import { Select2 } from '@/components/select-2';
import Sprite from '@/components/sprite';
import { eventsPageData } from '@/content/pages/events';
import { events, eventLocations } from '@/content/data/events';
import { EventItem } from '../event-item';
import css from './events.module.scss';

const ALL = 'ALL';

const locationOptions = [
    { name: 'All', value: ALL },
    ...eventLocations.map(({ name }) => ({ name, value: name })),
];

const monthOptions = [
    { name: 'All', value: ALL },
    ...([
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December',
    ].map((month, i) => ({ name: month, value: String(i + 1) }))),
];

export const Events: React.FC = () => {
    const [locationFilter, setLocationFilter] = useState(locationOptions[0]);
    const [monthFilter, setMonthFilter] = useState(monthOptions[0]);

    const filteredEvents = useMemo(() => {
        let result = events;

        if (locationFilter.value !== ALL) {
            result = result.filter(
                (e) => e.location === locationFilter.value,
            );
        }

        if (monthFilter.value !== ALL) {
            const month = parseInt(monthFilter.value as string, 10);
            result = result.filter(
                (e) => dayjs(e.date).month() + 1 === month,
            );
        }

        return result;
    }, [locationFilter, monthFilter]);

    return (
        <section className={css.events}>
            <div className="container">
                <div className={css.wrapper}>

                    <div className={css.left}>
                        <h2 className={css.title}>
                            <span>{eventsPageData.eventSchedule}</span>
                            <Sprite.Default icon="arrow-right" />
                        </h2>
                    </div>

                    <div className={css.right}>
                        <div className={css.head}>
                            <p className={css.head_event}>
                                {eventsPageData.eventName}
                            </p>
                            <div className={css.head_420}>
                                <div className={css.head_column}>
                                    <Select2
                                        value={locationFilter}
                                        options={locationOptions}
                                        onChange={(data) => data && setLocationFilter(data)}
                                        placeholder={eventsPageData.location}
                                    />
                                </div>
                                <div className={css.head_column}>
                                    <Select2
                                        value={monthFilter}
                                        options={monthOptions}
                                        onChange={(data) => data && setMonthFilter(data)}
                                        placeholder={eventsPageData.month}
                                    />
                                </div>
                            </div>
                            <div className={css.head_controls} />
                        </div>

                        <ul className={css.list}>
                            {filteredEvents.map((item) => (
                                <li
                                    className={css.list_item}
                                    key={item.id}
                                >
                                    <EventItem
                                        image={item.image}
                                        date={item.date}
                                        location={item.location}
                                        title={item.title}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};
