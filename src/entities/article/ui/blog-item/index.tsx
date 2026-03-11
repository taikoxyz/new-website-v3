'use client';

import clsx from 'clsx';
import dayjs from 'dayjs';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Sprite from '@/components/sprite';
import css from './blog-item.module.scss';

interface Props {
    imageSrc: string;
    title: string;
    categoryName: string;
    timeToRead: string;
    createdAt: string;
    url?: string;
    className?: string;
}

export const BlogItem: React.FC<Props> = ({
    categoryName,
    title,
    imageSrc,
    createdAt,
    timeToRead,
    className,
    url
}) => {
    const content = (
        <>
            <div className={css.image}>
                <Image
                    src={imageSrc}
                    width={640}
                    height={460}
                    alt=""
                />
                <p className={css.tag}>{categoryName}</p>
            </div>

            <div className={css.content}>
                <h3 className={css.title} data-class="blog-title">
                    {title}
                </h3>

                <ul className={css.info}>
                    <li className={css.info_item}>
                        <Sprite.Default
                            className={css.info_icon}
                            icon="calendar"
                        />
                        <p className={css.info_value}>
                            {dayjs(createdAt).format('DD MMM YYYY')}
                        </p>
                    </li>
                    <li className={css.info_item}>
                        <Sprite.Default
                            className={css.info_icon}
                            icon="timer"
                        />
                        <p className={css.info_value}>
                            {timeToRead}
                        </p>
                    </li>
                </ul>
            </div>
        </>
    );

    if (url) {
        return (
            <Link href={url} className={clsx(css.root, className)} data-class="blog">
                {content}
            </Link>
        );
    }

    return (
        <div className={clsx(css.root, className)} data-class="blog">
            {content}
        </div>
    );
};
