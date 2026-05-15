'use client';

import Link from 'next/link';
import React from 'react';
import { MediaQuery } from '@/components/media-query';
import Sprite from '@/components/sprite';
import { Share } from '../share';
import { articleLabels } from '@/content/pages/common';
import type { BlogNear } from '@/content/types';
import css from './links.module.scss';

interface Props {
    near: BlogNear;
    articleTitle: string;
    articleSlug: string;
}

export const Links: React.FC<Props> = ({ near, articleTitle, articleSlug }) => {
    return (
        <section className={css.links}>
            <MediaQuery query="(max-width: 768px)">
                <Share title={articleTitle} slug={articleSlug} />
            </MediaQuery>

            {(near.prev || near.next) && (
                <ul className={css.links_list}>
                    {near.prev && (
                        <li className={css.links_item}>
                            <h4 className={css.links_title}>
                                <Sprite.Default
                                    style={{ transform: 'scaleX(-1)' }}
                                    icon="arrow-right-small"
                                />
                                <span>{articleLabels.previous}</span>
                            </h4>
                            <Link className={css.links_name} href={`/blog/${near.prev.slug}`}>
                                {near.prev.title}
                            </Link>
                        </li>
                    )}
                    {near.next && (
                        <li className={`${css.links_item} ${css.links_itemNext}`}>
                            <h4 className={css.links_title}>
                                <span>{articleLabels.next}</span>
                                <Sprite.Default
                                    icon="arrow-right-small"
                                />
                            </h4>
                            <Link className={css.links_name} href={`/blog/${near.next.slug}`}>
                                {near.next.title}
                            </Link>
                        </li>
                    )}
                </ul>
            )}
        </section>
    );
};
