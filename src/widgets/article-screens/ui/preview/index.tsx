import React from 'react';
import css from './preview.module.scss';

interface Props {
    image: string;
}

export const Preview: React.FC<Props> = ({ image }) => {
    return (
        <section className={css.preview}>
            <div className={css.image}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={image}
                    alt=""
                />
            </div>
        </section>
    );
};
