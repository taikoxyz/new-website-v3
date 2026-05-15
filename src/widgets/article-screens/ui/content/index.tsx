'use client';

import React from 'react';
import { MediaQuery } from '@/components/media-query';
import { SideNav } from '../side-nav';
import { ArticleContent } from './article-content';
import css from './content.module.scss';

interface Props {
    content: string;
}

export const Content: React.FC<Props> = ({ content }) => {
    return (
        <section className={css.content}>
            <MediaQuery query="(max-width: 1124px)">
                <div className={css.nav}>
                    <SideNav content={content} />
                </div>
            </MediaQuery>
            <ArticleContent content={content} />
        </section>
    );
};
