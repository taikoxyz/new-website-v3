import React from 'react';
import clsx from 'clsx';
import { Label } from '@/components/label';
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
                <Label text={suptitle} className={css.suptitle} />
                <ul className={css.list}>
                    {features.map((feature) => (
                        <li
                            key={feature.id}
                            className={clsx(
                                css.item,
                                feature.disabled && css.item_disabled
                            )}
                        >
                            <h3 className={css.item_title}>{feature.title}</h3>
                            <p className={css.item_text}>{feature.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
