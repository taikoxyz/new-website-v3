'use client';

import clsx from 'clsx';
import React, { useEffect, useMemo, useState } from 'react';
import Sprite from '@/components/sprite';
import css from './share-button.module.scss';

interface Props {
    type: "facebook" | "twitter" | "linkedin";
    href: string;
    origin?: boolean;
    className?: string;
}

export const ShareButton: React.FC<Props> = ({
    type,
    href,
    origin,
    className,
}) => {
    const [rendered, setRendered] = useState(false);

    const url = useMemo(
        () => {
            let shareUrl = decodeURIComponent(href);
            const basepath = (origin && rendered)
                ? window.location.origin
                : '';

            shareUrl = [basepath, shareUrl.replace(/^\//, '')].join('/');

            if (type === 'facebook') {
                return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
            }

            if (type === 'twitter') {
                return `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`;
            }

            if (type === 'linkedin') {
                return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
            }

            return "";
        },
        [href, type, rendered, origin]
    );

    useEffect(() => setRendered(true), []);

    return (
        <a
            className={clsx(css.share, className)}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
        >
            {type}
            <Sprite.Default icon={`share:${type}`} />
        </a>
    );
};
