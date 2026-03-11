import React from 'react';
import { getArticleLinks } from '../../lib/content';
import { ArticleScreensEnum } from '../../lib/types';
import { commonLabels, articleLabels } from '@/content/pages/common';
import css from './side-nav.module.scss';

interface Props {
    content: string;
    showHowToApply?: boolean;
}

export const SideNav: React.FC<Props> = ({ content, showHowToApply = true }) => {
    return (
        <div className={css.nav}>
            <p className={css.nav_title}>
                {commonLabels.contentTitle}
            </p>

            <nav className={css.nav_container}>
                {getArticleLinks(content).map((link) => (
                    <a
                        className={css.nav_item}
                        href={`#${link.hash}`}
                        key={link.name + link.hash}
                    >
                        <span>{link.name}</span>
                    </a>
                ))}
                {showHowToApply && (
                    <a
                        className={css.nav_item}
                        href={`#${ArticleScreensEnum.HOW_TO_APPLY}`}
                    >
                        <span>{articleLabels.howToApply}</span>
                    </a>
                )}
            </nav>
        </div>
    );
};
