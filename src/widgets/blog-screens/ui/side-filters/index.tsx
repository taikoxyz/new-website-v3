'use client';

import React from 'react';
import { FilterDate } from '../filter-date';
import { FilterCategory } from '../filter-category';
import { createBlogFilter, useBlogFilter } from '../../provider';
import { commonLabels } from '@/content/pages/common';
import css from './side-filters.module.scss';

export const SideFilters: React.FC = () => {
    const { state, setState } = useBlogFilter();

    const onReset = () => {
        const fresh = createBlogFilter();
        setState({ dateRange: fresh.dateRange, topic: fresh.topic });
    };

    return (
        <div className={css.side}>
            <div className={css.headers}>
                <h4 className={css.title}>
                    {commonLabels.filtersTitle}
                </h4>
                {(state.dateRange.key !== 'all' || state.topic.value !== 'all') && (
                    <button
                        className={css.resetBtn}
                        onClick={onReset}
                    >
                        Reset
                    </button>
                )}
            </div>
            <div className={css.filters}>
                <FilterDate />
                <FilterCategory />
            </div>
        </div>
    );
};
