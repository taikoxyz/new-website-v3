import React from 'react';
import Link from 'next/link';
import Sprite from '@/components/sprite';
import { careersPageData } from '@/content/pages/careers';
import type { Career } from '@/content/types';
import css from './positions.module.scss';

interface Props {
    careers: Career[];
}

export const Positions: React.FC<Props> = ({ careers }) => {
    return (
        <section className={css.positions}>
            <div className="container">
                <h2 className={css.title}>{careersPageData.positions.title}</h2>

                <div className={css.table}>
                    <div className={css.tableHead}>
                        <span>{careersPageData.positions.position}</span>
                        <span>{careersPageData.positions.location}</span>
                        <span>{careersPageData.positions.type}</span>
                    </div>

                    <ul className={css.tableBody}>
                        {careers.map((career) => (
                            <li key={career.id} className={css.tableRow}>
                                <Link href={`/careers/${career.slug}`} className={css.rowLink}>
                                    <span className={css.rowPosition}>
                                        {career.title}
                                        <Sprite.Default icon="arrow-right" />
                                    </span>
                                    <span className={css.rowLocation}>{career.location}</span>
                                    <span className={css.rowType}>{career.type}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};
