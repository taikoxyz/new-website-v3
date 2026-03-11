import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Sprite from '@/components/sprite';
import { DefaultLayout } from '@/widgets/layouts/default-layout';
import { SideLayout } from '@/widgets/layouts/side-layout';
import * as ArticleScreens from '@/widgets/article-screens';
import { getCareers, getCareer } from '@/content/utils';
import { positionLabels } from '@/content/pages/common';
import { Button } from '@/components/buttons/button';
import css from './career.module.scss';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const careers = getCareers();
    return careers.map((career) => ({ slug: career.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const career = getCareer(slug);
    if (!career) return { title: 'Careers — Taiko' };

    return {
        title: `${career.title} – Taiko Careers`,
        description: `${career.type} · ${career.location} — Apply now for the ${career.title} position at Taiko.`,
    };
}

export default async function CareerPage({ params }: Props) {
    const { slug } = await params;
    const career = getCareer(slug);

    if (!career) {
        notFound();
    }

    return (
        <DefaultLayout>
            <div className={css.gap}>
                <SideLayout
                    classNames={{ main: css.children }}
                    sideElement={
                        <div className={css.side}>
                            <Link className={css.backButton} href="/careers">
                                <div className={css.backContent}>
                                    <Sprite.Default icon="arrow-right" />
                                    <span>{positionLabels.taikoCareers}</span>
                                </div>
                            </Link>

                            <nav className={css.nav}>
                                <ArticleScreens.SideNav
                                    content={career.content}
                                    showHowToApply={!!career.howToApply}
                                />
                            </nav>
                        </div>
                    }
                >
                    <section className={css.header}>
                        <h1 className={css.title}>{career.title}</h1>
                        <ul className={css.meta}>
                            <li className={css.metaItem}>
                                <Sprite.Default icon="bag" />
                                <span>{career.type}</span>
                            </li>
                            <li className={css.metaItem}>
                                <Sprite.Default icon="square-aim" />
                                <span>{career.location}</span>
                            </li>
                        </ul>
                    </section>

                    <ArticleScreens.Content content={career.content} />
                    <ArticleScreens.Apply howToApply={career.howToApply} />

                    <div className={css.applyCta}>
                        <a href="mailto:careers@taiko.xyz">
                            <Button
                                text={positionLabels.applyNow}
                                variant="pink"
                            />
                        </a>
                    </div>
                </SideLayout>
            </div>
        </DefaultLayout>
    );
}
