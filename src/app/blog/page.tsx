import type { Metadata } from 'next';
import { DefaultLayout } from '@/widgets/layouts/default-layout';
import { getBlogs } from '@/content/utils';
import { BlogPageClient } from './blog-page-client';

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Read the latest news, updates, and insights from the Taiko team on Ethereum scaling.',
    openGraph: {
        title: 'Blog — Taiko',
        description: 'Read the latest news, updates, and insights from the Taiko team on Ethereum scaling.',
        url: 'https://taiko.xyz/blog',
    },
    twitter: {
        title: 'Blog — Taiko',
        description: 'Read the latest news, updates, and insights from the Taiko team on Ethereum scaling.',
    },
    alternates: {
        canonical: '/blog',
    },
};

export default function BlogPage() {
    const allBlogs = getBlogs();

    return (
        <DefaultLayout>
            <BlogPageClient allBlogs={allBlogs} />
        </DefaultLayout>
    );
}
