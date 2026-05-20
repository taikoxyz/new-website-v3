'use client';

import React from 'react';
import { ShareButton } from '@/components/share-button';
import { commonLabels } from '@/content/pages/common';
import css from './share.module.scss';

interface Props {
    title: string;
    slug: string;
}

export const Share: React.FC<Props> = ({ title, slug }) => {
    return (
        <div className={css.share}>
            <h3 className={css.share_title}>
                {commonLabels.shareTitle}
            </h3>

            <div className={css.share_list}>
                <ShareButton
                    type="twitter"
                    href={`/blog/${slug}&text=${title} — Taiko`}
                    origin
                />

                <ShareButton
                    type="linkedin"
                    href={`/blog/${slug}`}
                    origin
                />
            </div>
        </div>
    );
};
