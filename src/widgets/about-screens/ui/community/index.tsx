'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import clsx from 'clsx';
import { useAos } from '@/lib/hooks/use-aos';
import { MediaQuery } from '@/components/media-query';
import { aboutPageData } from '@/content/pages/about';
import css from './community.module.scss';

export const Community: React.FC = () => {
    const { ref, inView } = useAos();
    const spanRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (spanRef.current && inView) {
            const current = { var: +(spanRef.current.textContent || 0) };

            gsap.to(current, {
                duration: 2,
                var: 90,
                onUpdate: function () {
                    spanRef.current!.innerHTML = `${Math.ceil(current.var)}`;
                },
            });
        }
    }, [inView]);

    return (
        <section
            className={clsx(css.community, inView && css.communityInView)}
            id="community"
        >
            <div className="container">
                <div className={css.wrapper}>
                    <div className={css.content}>
                        <div className={css.content_inner}>
                            <p className={css.suptitle}>
                                {aboutPageData.community.suptitle}
                            </p>

                            <h2 className={css.title}>
                                {aboutPageData.community.title}
                            </h2>

                            <p className={css.text}>
                                {aboutPageData.community.text}
                            </p>
                        </div>
                    </div>

                    <div className={css.image}>
                        <MediaQuery
                            query="(max-width: 656px)"
                        >
                            <img
                                src="/img/about/community-circle-mobile.svg"
                                alt=""
                            />
                        </MediaQuery>
                        <MediaQuery
                            query="(min-width: 657px)"
                        >
                            <img
                                src="/img/about/community-circle.svg"
                                alt=""
                            />
                        </MediaQuery>
                        <div className={css.image_content} ref={ref}>
                            <p className={css.image_counter}>
                                <span ref={spanRef}>35</span>+
                            </p>
                            <p className={css.image_dapps}>Dapps</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
