import React from 'react';
import css from './about.module.scss';

interface Props {
    title: string;
    text: string;
    subtext: string;
    label?: string;
    logo?: string;
}

export const About: React.FC<Props> = ({ title, text, subtext, label, logo }) => {
    return (
        <section className={css.about}>
            <div className="container">
                <div className={css.content}>
                    <div className={css.left}>
                        {label && <p className={css.label}>{label}</p>}
                        <h2 className={css.title}>{title}</h2>
                    </div>
                    <div className={css.center}>
                        <div className={css.knot_inner}>
                            <img
                                src={logo || '/img/home-new/taiko.webp'}
                                alt="Taiko"
                                className={css.knot}
                            />
                        </div>
                    </div>
                    <div className={css.right}>
                        <p className={css.text}>{text}</p>
                        <p className={css.subtext}>{subtext}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
