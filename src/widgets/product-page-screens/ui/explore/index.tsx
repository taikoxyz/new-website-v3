import React from 'react';
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
                        {suptitle && (
                            <>
                                <p
                                    className={css.suptitle}
                                    dangerouslySetInnerHTML={{ __html: suptitle }}
                                />
                                <br />
                            </>
                        )}
                        <h2 className={css.title}>
                            {title.split('\n').map((line, i) => (
                                <React.Fragment key={i}>
                                    {i > 0 && <br />}
                                    {line}
                                </React.Fragment>
                            ))}
                        </h2>
                        <br />
                        <p className={css.text}>{text}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
