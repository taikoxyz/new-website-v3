'use client';

import React, { useEffect, useMemo, useState } from 'react';
import dayjs from 'dayjs';
import Sprite from '@/components/sprite';
import { Button } from '@/components/buttons/button';
import { ecosystemPageData } from '@/content/pages/ecosystem';
import { projects, PRIORITY_PROJECT_IDS } from '@/content/data/projects';
import { useEcosystemFilters } from '../../provider';
import { ProjectsList } from '../projects-list';
import css from './projects.module.scss';

const ITEMS_PER_PAGE = 12;

export const Projects: React.FC = () => {
    const { filters } = useEcosystemFilters();
    const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

    useEffect(() => {
        setVisibleCount(ITEMS_PER_PAGE);
    }, [filters]);

    const filteredProjects = useMemo(() => {
        let result = projects;

        if (filters.search) {
            const query = filters.search.toLowerCase();
            result = result.filter(
                (p) =>
                    p.name.toLowerCase().includes(query) ||
                    p.description.toLowerCase().includes(query),
            );
        }

        if (filters.type) {
            result = result.filter(
                (p) => p.type.toLowerCase() === filters.type!.toLowerCase(),
            );
        }

        if (filters.category) {
            result = result.filter((p) =>
                p.categories.some(
                    (cat) => cat.toLowerCase() === filters.category!.toLowerCase(),
                ),
            );
        }

        // Sort priority projects first
        const prioritySet = new Set(PRIORITY_PROJECT_IDS);
        result = [...result].sort((a, b) => {
            const aPriority = prioritySet.has(a.id) ? 0 : 1;
            const bPriority = prioritySet.has(b.id) ? 0 : 1;
            return aPriority - bPriority;
        });

        return result;
    }, [filters]);

    const visibleProjects = useMemo(
        () => filteredProjects.slice(0, visibleCount),
        [filteredProjects, visibleCount],
    );

    const hasMore = visibleCount < filteredProjects.length;

    const lastUpdated = useMemo(() => {
        if (projects.length === 0) return null;
        const sorted = [...projects].sort(
            (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
        );
        return sorted[0].updatedAt;
    }, []);

    const onViewMore = () => {
        setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
    };

    return (
        <section className={css.projects}>
            <div className="container">
                <div className={css.wrapper}>
                    <ProjectsList projects={visibleProjects} />

                    {lastUpdated && (
                        <p className={css.lastUpdate}>
                            <Sprite.Default icon="timer" />
                            <span>
                                {ecosystemPageData.lastUpdated}{' '}
                                {dayjs(lastUpdated).format('MMM DD, YYYY')}
                            </span>
                        </p>
                    )}

                    {hasMore && (
                        <Button
                            className={css.viewMore}
                            text={ecosystemPageData.viewMore}
                            onClick={onViewMore}
                            variant="pink-outlined"
                        />
                    )}
                </div>
            </div>
        </section>
    );
};
