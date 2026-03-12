import React from 'react';
import css from './hero.module.scss';

interface Props {
    title: string;
    text: string;
    logo: string;
    background?: string;
    gridLines?: string;
    heroIcon?: string;
}

export const Hero: React.FC<Props> = ({ title, text, logo, background, gridLines, heroIcon }) => {
    return (
        <section className={css.hero}>
            {background && (
                <div
                    className={css.wrapper}
                    style={{ backgroundImage: `url(${background})` }}
                >
                    {gridLines && (
                        <img src={gridLines} alt="" className={css.grid_lines} />
                    )}
                    <div className={css.container_centered}>
                        <div className={css.badge}>
                            <img src={logo} alt="" className={css.badge_logo} />
                        </div>
                        <div className={css.content_centered}>
                            <h1 className={css.title}>{title}</h1>
                            <p className={css.text}>{text}</p>
                        </div>
                        {heroIcon && (
                            <div className={css.hero_icon}>
                                <img src={heroIcon} alt="" />
                            </div>
                        )}
                    </div>
                </div>
            )}
            {!background && (
                <div className="container">
                    <div className={css.badge}>
                        <img src={logo} alt="" className={css.badge_logo} />
                    </div>
                    <h1 className={css.title}>{title}</h1>
                    <p className={css.text}>{text}</p>
                </div>
            )}
        </section>
    );
};
