import dayjs from 'dayjs';
import React from 'react';
import Sprite from '@/components/sprite';
import type { BlogPost } from '@/content/types';
import css from './hero.module.scss';

interface Props {
    article: BlogPost;
}

export const Hero: React.FC<Props> = ({ article }) => {
    return (
        <section className={css.hero}>
            <p className={css.tag}>
                {article.category.name}
            </p>

            <h1 className={css.title}>
                {article.title}
            </h1>

            <ul className={css.info}>
                <li className={css.info_item}>
                    <Sprite.Default icon="calendar" />
                    <span>{dayjs(article.createdAt).format('DD MMM YYYY')}</span>
                </li>
                <li className={css.info_item}>
                    <Sprite.Default icon="timer" />
                    <span>{article.timeToRead}</span>
                </li>
            </ul>
        </section>
    );
};
