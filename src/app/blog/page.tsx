import type { Metadata } from 'next';
import { DefaultLayout } from '@/widgets/layouts/default-layout';
import { getBlogs } from '@/content/utils';
import { BlogPageClient } from './blog-page-client';

export const metadata: Metadata = {
    title: 'Blog — Taiko',
    description: 'Our blog',
};

export default function BlogPage() {
    const allBlogs = getBlogs();

    return (
        <DefaultLayout>
            <BlogPageClient allBlogs={allBlogs} />
        </DefaultLayout>
    );
}
