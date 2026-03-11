'use client';

import React from 'react';
import Image from '@/components/image';
import Sprite from '@/components/sprite';
import { footerSocials } from '@/content/data/navigation';
import css from './footer-socials.module.scss';

export const FooterSocials: React.FC = () => {
    return (
        <div className={css.socials}>
            {footerSocials.map((social) => (
                <a
                    className={css.socials_link}
                    href={social.url}
                    key={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {social.name}
                    <div className={css.socials_wrapper}>
                        {social.name === "paragraph" ? (
                            <div className={css.mirror_logo}>
                                <Image.Default src="/img/paragraph-logo.png" alt="" />
                            </div>
                        ) : (
                            <Sprite.Default icon={social.icon} />
                        )}
                        <span>{social.name}</span>
                    </div>
                </a>
            ))}
        </div>
    );
};
