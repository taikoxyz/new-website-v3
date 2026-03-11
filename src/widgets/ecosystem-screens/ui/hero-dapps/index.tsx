import React from 'react';
import { ecosystemPageData } from '@/content/pages/ecosystem';
import css from './hero-dapps.module.scss';

export const HeroDapps: React.FC = () => {
    return (
        <div className={css.dapps}>
            <div className={css.logos}>
                {[1, 2, 3, 4].map((id) => (
                    <img
                        className={css.logos_item}
                        src={`/img/home/ec-${id}.png`}
                        alt=""
                        key={id}
                    />
                ))}
            </div>

            <div className={css.content}>
                <p className={css.title}>100+</p>
                <p className={css.text}>{ecosystemPageData.dapps}</p>
            </div>
        </div>
    );
};
