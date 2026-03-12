import React from 'react';
import clsx from 'clsx';
import Sprite from '@/components/sprite';
import type { CardItem } from '@/content/types';
import css from './cards.module.scss';

interface Props {
    cards: CardItem[];
}

export const Cards: React.FC<Props> = ({ cards }) => {
    return (
        <section className={css.cards}>
            <div className="container">
                <ul className={css.list}>
                    {cards.map((card) => {
                        const Tag = card.disabled ? 'div' : 'a';
                        return (
                            <li key={card.id}>
                                <Tag
                                    className={clsx(
                                        css.card,
                                        card.disabled && css.card_disabled
                                    )}
                                    {...(!card.disabled && {
                                        href: card.href,
                                        target: '_blank',
                                        rel: 'noopener noreferrer',
                                    })}
                                >
                                    <img
                                        src={card.icon}
                                        alt=""
                                        className={css.card_icon}
                                    />
                                    <h3 className={css.card_title}>{card.title}</h3>
                                    <p className={css.card_text}>{card.text}</p>
                                    {!card.disabled && (
                                        <div className={css.card_arrow}>
                                            <Sprite.Default icon="arrow-right" />
                                        </div>
                                    )}
                                </Tag>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};
