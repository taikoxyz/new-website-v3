import React from 'react';
import clsx from 'clsx';
import Sprite from '@/components/sprite';
import { ecosystemPageData } from '@/content/pages/ecosystem';
import css from './disclaimer.module.scss';

export const Disclaimer: React.FC = () => {
    const { text, actions } = ecosystemPageData.disclaimer;

    return (
        <section className={css.disclaimer}>
            <div className="container">
                <div className={css.wrapper}>
                    <div className={css.body}>
                        <Sprite.Default icon="info" className={css.icon} />
                        <p className={css.text}>{text}</p>
                    </div>
                    {actions.length > 0 && (
                        <div className={css.actions}>
                            {actions.map(({ label, href, variant }) => (
                                <a
                                    key={href}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={clsx(css.action, css[`action_${variant}`])}
                                >
                                    <Sprite.Default icon="socials:github" className={css.actionIcon} />
                                    <span>{label}</span>
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
