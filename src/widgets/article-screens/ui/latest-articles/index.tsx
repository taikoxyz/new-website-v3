'use client';

import React from 'react';
import { BlogSliderLayout } from '@/entities/article';
import { articleLabels } from '@/content/pages/common';
import type { BlogPost } from '@/content/types';

interface Props {
    articles: BlogPost[];
}

export const LatestArticles: React.FC<Props> = ({ articles }) => {
    if (articles.length === 0) return null;

    return (
        <BlogSliderLayout
            title={articleLabels.latestArticles}
            data={articles}
            animated
        />
    );
};
