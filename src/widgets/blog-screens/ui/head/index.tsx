'use client';

import React, { useState } from 'react';
import { MediaQuery } from '@/components/media-query';
import Sprite from '@/components/sprite';
import { SideFilters } from '../side-filters';
import { commonLabels } from '@/content/pages/common';
import css from './head.module.scss';

export const Head: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState(false);

    return (
        <div className={css.root}>
            <header className={css.header}>
                <h2 className={css.title}>
                    {commonLabels.blogTitle}
                </h2>

                <MediaQuery query="(max-width: 1124px)">
                    <button
                        className={css.filterBtn}
                        onClick={() => setActiveFilter(!activeFilter)}
                    >
                        <span>Filters</span>
                        <Sprite.Default
                            style={{ transform: activeFilter ? 'rotate(-90deg)' : '' }}
                            icon="arrow-right"
                        />
                    </button>
                </MediaQuery>
            </header>

            {activeFilter && (
                <MediaQuery query="(max-width: 1124px)">
                    <SideFilters />
                </MediaQuery>
            )}
        </div>
    );
};
