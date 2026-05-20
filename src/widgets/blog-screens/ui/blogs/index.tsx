'use client';

import React, { useEffect, useMemo, useState } from 'react';
import dayjs from 'dayjs';
import { useBlogFilter } from '../../provider';
import { BlogItem } from '@/entities/article';
import { Button } from '@/components/buttons/button';
import { commonLabels } from '@/content/pages/common';
import type { BlogPost } from '@/content/types';
import css from './blogs.module.scss';

const POSTS_PER_PAGE = 9;

interface Props {
    allBlogs: BlogPost[];
}

export const Blogs: React.FC<Props> = ({ allBlogs }) => {
    const { state } = useBlogFilter();
    const [page, setPage] = useState(1);

    const filteredBlogs = useMemo(() => {
        let blogs = [...allBlogs];

        // Category filter
        if (state.topic.value !== 'all') {
            blogs = blogs.filter(
                (b) => b.category.id.toString() === state.topic.value
            );
        }

        // Date filter
        if (state.dateRange.key !== 'all') {
            const { from, to } = state.dateRange.value;
            if (from) {
                blogs = blogs.filter(
                    (b) => dayjs(b.date).isAfter(dayjs(from))
                );
            }
            if (to) {
                blogs = blogs.filter(
                    (b) => dayjs(b.date).isBefore(dayjs(to))
                );
            }
        }

        return blogs;
    }, [allBlogs, state.topic, state.dateRange]);

    // Reset page when filters change
    const topicValue = state.topic.value;
    const dateKey = state.dateRange.key;
    useEffect(() => {
        setPage(1);
    }, [topicValue, dateKey]);

    const paginatedBlogs = useMemo(
        () => filteredBlogs.slice(0, page * POSTS_PER_PAGE),
        [filteredBlogs, page]
    );

    const hasMore = paginatedBlogs.length < filteredBlogs.length;

    return (
        <div className={css.blogs}>
            <ul className={css.list}>
                {paginatedBlogs.map((item) => (
                    <li className={css.list_item} key={item.id}>
                        <BlogItem
                            className={css.blog}
                            url={`/blog/${item.slug}`}
                            title={item.title}
                            timeToRead={item.timeToRead}
                            categoryName={item.category.name}
                            imageSrc={item.image}
                            createdAt={item.date}
                        />
                    </li>
                ))}
            </ul>

            <p className={css.countShow}>
                Show {paginatedBlogs.length} of {filteredBlogs.length} articles
            </p>

            {hasMore && (
                <Button
                    onClick={() => setPage((p) => p + 1)}
                    className={css.viewMore}
                    text={commonLabels.viewMore}
                    variant="pink-outlined"
                />
            )}
        </div>
    );
};
