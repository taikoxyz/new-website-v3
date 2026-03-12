'use client';

import React from 'react';
import { grantProgramPageData } from '@/content/pages/grant-program';
import css from './mission.module.scss';

export const Mission: React.FC = () => {
    return (
        <section className={css.mission}>
            <div className="container">
                <h2
                    className={css.title}
                    dangerouslySetInnerHTML={{
                        __html: grantProgramPageData.mission.title,
                    }}
                />

                <ul className={css.list}>
                    {grantProgramPageData.mission.items.map((item) => (
                        <li
                            className={css.list_item}
                            key={item.title}
                        >
                            <img
                                className={css.list_icon}
                                src={item.icon}
                                alt=""
                            />

                            <h3 className={css.list_title}>
                                {item.title}
                            </h3>

                            <p className={css.list_text}>
                                {item.text}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
