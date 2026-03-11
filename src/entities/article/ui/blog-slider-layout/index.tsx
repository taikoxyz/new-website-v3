'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ArrowButton } from '@/components/buttons/arrow-button';
import { BlogItem } from '../blog-item';
import { MediaQuery } from '@/components/media-query';
import type { BlogPost } from '@/content/types';
import css from './blog-slider-layout.module.scss';
import clsx from 'clsx';

interface SwiperInstance {
    slidePrev: () => void;
    slideNext: () => void;
    isBeginning: boolean;
    isEnd: boolean;
    activeIndex: number;
}

interface Props {
    title: string;
    data: BlogPost[];
    animated?: boolean;
}

export const BlogSliderLayout: React.FC<Props> = ({
    data,
    title,
    animated
}) => {
    const [swiperCore, setSwiperCore] = useState<SwiperInstance>();
    const [, setActiveIndex] = useState(0);

    const options = {
        slidesPerView: 'auto' as const,
        allowTouchMove: false,
        breakpoints: {
            1366: {
                slidesPerView: 4
            }
        }
    };

    const Controls = () => (
        <div className={css.controls}>
            <ArrowButton
                className={css.controls_btn}
                onClick={() => swiperCore?.slidePrev()}
                disabled={swiperCore?.isBeginning}
                variant="prev"
            />
            <ArrowButton
                className={css.controls_btn}
                onClick={() => swiperCore?.slideNext()}
                disabled={swiperCore?.isEnd}
            />
        </div>
    );

    return (
        <div className={clsx(css.root, animated && 'aos')} data-aos-offset="40%">
            <div className="container">
                <div className={css.wrapper}>
                    <div className={css.header}>
                        <h2 className={css.title}>
                            {title}
                        </h2>

                        <MediaQuery query="(min-width: 769px)">
                            <Controls />
                        </MediaQuery>
                    </div>

                    <div className={css.slider}>
                        <Swiper
                            {...options}
                            className={css.swiper}
                            onInit={(s: SwiperInstance) => setSwiperCore(s)}
                            onSlideChange={(s: SwiperInstance) => setActiveIndex(s.activeIndex)}
                        >
                            {data.map((item) => (
                                <SwiperSlide
                                    className={css.swiper_slide}
                                    key={item.id}
                                >
                                    <BlogItem
                                        imageSrc={item.image}
                                        title={item.title}
                                        categoryName={item.category.name}
                                        timeToRead={item.timeToRead}
                                        createdAt={item.date}
                                        url={`/blog/${item.slug}`}
                                        className={css.blog}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <MediaQuery query="(max-width: 768px)">
                        <Controls />
                    </MediaQuery>
                </div>
            </div>
        </div>
    );
};
