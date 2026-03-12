import React from 'react';
import css from './hero.module.scss';

interface Props {
    title: string;
    text: string;
    logo: string;
}

export const Hero: React.FC<Props> = ({ title, text, logo }) => {
    return (
        <section className={css.hero}>
            <div className="container">
                <div className={css.badge}>
                    <img
                        src={logo}
                        alt=""
                        className={css.badge_logo}
                    />
                </div>
                <h1 className={css.title}>{title}</h1>
                <p className={css.text}>{text}</p>
            </div>
        </section>
    );
};
