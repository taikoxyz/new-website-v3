import React from 'react';
import Link from 'next/link';
import Sprite from '@/components/sprite';
import { SideNav } from '../side-nav';
import { Share } from '../share';
import { commonLabels } from '@/content/pages/common';
import css from './side.module.scss';

interface Props {
    content: string;
    articleTitle: string;
    articleSlug: string;
    hasHowToApply: boolean;
}

export const Side: React.FC<Props> = ({ content, articleTitle, articleSlug, hasHowToApply }) => {
    return (
        <div className={css.side}>
            <Link
                className={css.backButton}
                href="/blog"
            >
                {commonLabels.blogTitle}
                <div className={css.backContent}>
                    <Sprite.Default icon="arrow-right" />
                    <span>{commonLabels.blogTitle}</span>
                </div>
            </Link>

            <nav className={css.nav}>
                <SideNav content={content} showHowToApply={hasHowToApply} />
            </nav>

            <div className={css.share}>
                <Share title={articleTitle} slug={articleSlug} />
            </div>
        </div>
    );
};
