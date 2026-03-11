import React from 'react';
import { articleLabels } from '@/content/pages/common';
import { ArticleScreensEnum } from '../../lib/types';
import css from './apply.module.scss';

interface Props {
    howToApply?: string;
}

export const Apply: React.FC<Props> = ({ howToApply }) => {
    if (!howToApply) return null;

    return (
        <section
            className={css.apply}
            id={ArticleScreensEnum.HOW_TO_APPLY}
        >
            <h3 className={css.title}>
                {articleLabels.howToApply}
            </h3>
            <div
                className={css.text}
                dangerouslySetInnerHTML={{ __html: howToApply }}
            />
        </section>
    );
};
