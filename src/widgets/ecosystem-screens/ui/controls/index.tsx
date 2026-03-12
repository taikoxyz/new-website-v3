'use client';

import React, { useCallback } from 'react';
import { Select2 } from '@/components/select-2';
import Sprite from '@/components/sprite';
import { ecosystemPageData } from '@/content/pages/ecosystem';
import { projectCategories } from '@/content/data/project-categories';
import { useEcosystemFilters } from '../../provider';
import css from './controls.module.scss';

const ALL = 'ALL';

const typeOptions = [
    { name: 'All Types', value: ALL },
    { name: 'Mainnet', value: 'Mainnet' },
    { name: 'Testnet', value: 'Testnet' },
    { name: 'Coming Soon', value: 'Coming Soon' },
];

const categoryOptions = [
    { name: 'All Categories', value: ALL },
    ...projectCategories.map(({ name }) => ({ name, value: name })),
];

export const Controls: React.FC = () => {
    const { filters, setFilter } = useEcosystemFilters();

    const onSearch = useCallback(
        (ev: React.ChangeEvent<HTMLInputElement>) => {
            setFilter('search', ev.currentTarget.value);
        },
        [setFilter],
    );

    const onKeyDown = useCallback(
        (ev: React.KeyboardEvent<HTMLInputElement>) => {
            if (ev.key === 'Enter') {
                setFilter('search', ev.currentTarget.value);
            }
        },
        [setFilter],
    );

    return (
        <section className={css.controls}>
            <div className="container">
                <div className={css.wrapper}>
                    <div className={css.search}>
                        <div className={css.search_field}>
                            <input
                                className={css.search_input}
                                defaultValue={filters.search}
                                onChange={onSearch}
                                onKeyDown={onKeyDown}
                                placeholder={ecosystemPageData.searchProjects}
                            />
                            <Sprite.Default
                                className={css.search_icon}
                                icon="magnifier"
                            />
                        </div>
                    </div>

                    <div className={css.selects}>
                        <Select2
                            value={
                                filters.type
                                    ? { name: filters.type, value: filters.type }
                                    : typeOptions[0]
                            }
                            onChange={(data) =>
                                setFilter(
                                    'type',
                                    data?.value === ALL
                                        ? null
                                        : (data?.name as string) || null,
                                )
                            }
                            options={typeOptions}
                        />
                        <Select2
                            value={
                                filters.category
                                    ? { name: filters.category, value: filters.category }
                                    : categoryOptions[0]
                            }
                            onChange={(data) =>
                                setFilter(
                                    'category',
                                    data?.value === ALL
                                        ? null
                                        : (data?.name as string) || null,
                                )
                            }
                            options={categoryOptions}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
