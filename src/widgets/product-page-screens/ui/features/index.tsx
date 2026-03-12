import React from 'react';
import clsx from 'clsx';
import type { FeatureItem } from '@/content/types';
import css from './features.module.scss';

interface Props {
    suptitle: string;
    features: FeatureItem[];
}

export const Features: React.FC<Props> = ({ suptitle, features }) => {
    return (
        <section className={css.features}>
            <div className="container">
                <p className={css.suptitle}>{suptitle}</p>
                <ul className={css.list}>
                    {features.map((feature, index) => (
                        <li
                            key={feature.id}
                            className={clsx(
                                css.item,
                                feature.disabled && css.item_disabled
                            )}
                        >
                            <span className={css.item_number}>{index + 1}.0</span>
                            <h3 className={css.item_title}>{feature.title}</h3>
                            <p className={css.item_text}>{feature.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
