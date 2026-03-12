import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import { getBlog, getBlogs } from '@/content/utils';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const blogs = getBlogs();
    return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const article = getBlog(slug);
    if (!article) return { title: 'Blog' };

    return {
        title: article.title,
        openGraph: {
            title: `${article.title} — Taiko`,
            images: article.image ? [article.image] : [],
            url: `https://taiko.xyz/blog/${article.slug}`,
        },
        alternates: {
            canonical: `/blog/${article.slug}`,
        },
    };
}

export default async function ArticlePage({ params }: Props) {
    const { slug } = await params;
    const article = getBlog(slug);

    if (!article) {
        notFound();
    }

    // Blog articles link to external sources (mirror.xyz, paragraph.xyz)
    if (article.link) {
        redirect(article.link);
    }

    notFound();
}
