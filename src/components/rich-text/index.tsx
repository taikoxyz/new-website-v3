import React from 'react';
import clsx from 'clsx';
import css from './rich-text.module.scss';

interface Props {
    content: string;
    className?: string;
}

export const RichText: React.FC<Props> = ({
    content,
    className
}) => {
    return (
        <div
            className={clsx(css.text, className)}
            dangerouslySetInnerHTML={{ __html: content }}
        />
    );
};
