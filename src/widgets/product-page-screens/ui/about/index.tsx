import React from 'react';
import css from './about.module.scss';

interface Props {
    title: string;
    text: string;
    subtext: string;
}

export const About: React.FC<Props> = ({ title, text, subtext }) => {
    return (
        <section className={css.about}>
            <div className="container">
                <div className={css.content}>
                    <h2 className={css.title}>{title}</h2>
                    <p className={css.text}>{text}</p>
                    <p className={css.subtext}>{subtext}</p>
                </div>
            </div>
        </section>
    );
};
