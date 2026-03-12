import React from 'react';
import { Label } from '@/components/label';
import css from './explore.module.scss';

interface Props {
    suptitle: string;
    title: string;
    text: string;
    background: string;
}

export const Explore: React.FC<Props> = ({ suptitle, title, text, background }) => {
    return (
        <section className={css.explore}>
            <div className="container">
                <div className={css.wrapper}>
                    <img
                        src={background}
                        alt=""
                        className={css.background}
                    />
                    <div className={css.content}>
                        {suptitle && <Label text={suptitle} className={css.suptitle} />}
                        <h2 className={css.title}>
                            {title.split('\n').map((line, i) => (
                                <React.Fragment key={i}>
                                    {i > 0 && <br />}
                                    {line}
                                </React.Fragment>
                            ))}
                        </h2>
                        <p className={css.text}>{text}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
