'use client';

import React from 'react';
import * as BlogScreens from '@/widgets/blog-screens';
import { SideLayout } from '@/widgets/layouts/side-layout';
import type { BlogPost } from '@/content/types';
import css from './blog.module.scss';

interface Props {
    allBlogs: BlogPost[];
}

export const BlogPageClient: React.FC<Props> = ({ allBlogs }) => {
    return (
        <BlogScreens.WithBlogFilter>
            <div className={css.gap}>
                <SideLayout
                    sideElement={<BlogScreens.SideFilters />}
                    classNames={{ main: css.sideLayout }}
                >
                    <BlogScreens.Head />
                    <BlogScreens.Blogs allBlogs={allBlogs} />
                </SideLayout>
            </div>
        </BlogScreens.WithBlogFilter>
    );
};
