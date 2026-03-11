'use client';

import React, { useMemo, useState } from 'react';
import { BlogFilter } from '../blog-filter';
import { useBlogFilter } from '../../provider';
import { transformDate } from '../../lib/transform-filters';
import type { IBlogDate } from '../../lib/transform-filters';
import { RangeCalendar } from '@/components/range-calendar';
import { blogPageData } from '@/content/pages/blog';
import { commonLabels } from '@/content/pages/common';
import clsx from 'clsx';
import dayjs from 'dayjs';
import css from './filter-date.module.scss';

export const FilterDate: React.FC = () => {
    const [active, setActive] = useState(false);
    const { state, setState } = useBlogFilter();

    const data = useMemo(() => transformDate(blogPageData.date), []);

    const onChange = (item: IBlogDate) => {
        setState({ dateRange: item });

        if (item.key !== 'period') {
            setActive(false);
        }
    };

    const onCancel = () => {
        setActive(false);
        setState({ dateRange: data[0] });
    };

    const onApply = (date: [string, string]) => {
        setState({
            dateRange: {
                ...state.dateRange,
                value: {
                    from: date[0],
                    to: date[1],
                },
            },
        });
        setActive(false);
    };

    const formatDate = useMemo(() => {
        if (state.dateRange.key !== 'period') {
            return state.dateRange.title;
        }
        const { from, to } = state.dateRange.value;

        if (!to || !from) {
            return `From – To, ${dayjs().format('YYYY')}`;
        }

        const years = new Set([
            dayjs(from).get('year').toString(),
            dayjs(to).get('year').toString(),
        ]);

        const fromString = dayjs(from).format('MMM DD');
        const toString = dayjs(to).format('MMM DD');
        const yearString = [...years].join(' – ');

        return `${fromString} – ${toString}, ${yearString}`;
    }, [state.dateRange]);

    return (
        <div className={css.root}>
            <BlogFilter
                active={active}
                setActive={setActive}
                title={commonLabels.time}
                placeholder={formatDate}
            >
                <div className={css.content}>
                    {data.map((item) => (
                        <div
                            className={clsx(
                                css.item,
                                state.dateRange.key === item.key && css.itemActive
                            )}
                            onClick={() => onChange(item)}
                            key={item.key}
                        >
                            <span>{item.title}</span>
                        </div>
                    ))}

                    {state.dateRange.key === 'period' && (
                        <div className={css.calendar}>
                            <RangeCalendar
                                value={[state.dateRange.value.from, state.dateRange.value.to]}
                                onApply={onApply}
                                onCancel={onCancel}
                            />
                        </div>
                    )}
                </div>
            </BlogFilter>
        </div>
    );
};
