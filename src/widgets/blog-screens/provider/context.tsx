'use client';

import React, { createContext, useContext, useState } from 'react';
import type { IBlogFilter, IBlogFilterContext } from './types';
import type { IBlogDate } from '../lib/transform-filters';
import { transformCategory, transformDate } from '../lib/transform-filters';
import { blogPageData } from '@/content/pages/blog';

export const createBlogFilter = (
    dateRange: IBlogDate = {
        title: 'All time',
        value: {},
        key: 'all'
    }
): IBlogFilter => ({
    dateRange,
    topic: transformCategory([])[0],
});

export const BlogFilterContext = createContext<IBlogFilterContext>({
    state: createBlogFilter(),
    setState: () => null,
});

const useBlogFilterInitial = (dateRange?: IBlogDate) => {
    const [state, setStateDefault] = useState<IBlogFilter>(createBlogFilter(dateRange));

    const setState = (values: Partial<IBlogFilter>) => {
        setStateDefault((prev) => ({ ...prev, ...values }));
    };

    return { state, setState };
};

export const useBlogFilter = () => useContext(BlogFilterContext);

export const WithBlogFilter: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const dateOptions = transformDate(blogPageData.date);
    const context = useBlogFilterInitial(dateOptions[0]);

    return (
        <BlogFilterContext.Provider value={context}>
            {children}
        </BlogFilterContext.Provider>
    );
};
