import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DefaultLayout } from '@/widgets/layouts/default-layout';
import { SideLayout } from '@/widgets/layouts/side-layout';
import * as ArticleScreens from '@/widgets/article-screens';
import { getBlog, getBlogs, getBlogNear } from '@/content/utils';
import css from './article.module.scss';

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
        description: article.content.replace(/[#*`\[\]_>]/g, '').trim().slice(0, 160),
        openGraph: {
            title: `${article.title} — Taiko`,
            images: [article.image],
            url: `https://taiko.xyz/blog/${article.slug}`,
        },
        twitter: {
            title: `${article.title} — Taiko`,
            description: article.content.replace(/[#*`\[\]_>]/g, '').trim().slice(0, 160),
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

    const near = getBlogNear(article.id);
    const latestArticles = getBlogs()
        .filter((b) => b.id !== article.id)
        .slice(0, 8);

    return (
        <DefaultLayout>
            <div className={css.gap}>
                <SideLayout
                    classNames={{ main: css.children }}
                    sideElement={
                        <ArticleScreens.Side
                            content={article.content}
                            articleTitle={article.title}
                            articleSlug={article.slug}
                            hasHowToApply={!!article.howToApply}
                        />
                    }
                >
                    <ArticleScreens.Hero article={article} />
                    <ArticleScreens.Preview image={article.image} />
                    <ArticleScreens.Content content={article.content} />
                    <ArticleScreens.Apply howToApply={article.howToApply} />
                    <ArticleScreens.Links
                        near={near}
                        articleTitle={article.title}
                        articleSlug={article.slug}
                    />
                </SideLayout>
                <ArticleScreens.LatestArticles articles={latestArticles} />
            </div>
        </DefaultLayout>
    );
}
