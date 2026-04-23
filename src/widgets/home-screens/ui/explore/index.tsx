"use client";

import React from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { HOME_PAG } from "@/widgets/home-screens/lib";
import { WrapperButton } from "@/components/buttons/button";
import Image from "@/components/image";
import { homePageData } from "@/content/pages/home";
import css from "./explore.module.scss";

export const Explore: React.FC = () => {
    const [alethia] = homePageData.explore_screens;
    const exploreRef = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            let end = "top+=250% bottom";

            const mm = gsap.matchMedia();

            mm.add("(min-width: 1025px)", () => {
                end = "top+=135% bottom";
            });

            ScrollTrigger.create({
                trigger: exploreRef.current,
                start: "top top",
                end,
                scrub: true,
                pin: true,
                pinSpacing: true,
                invalidateOnRefresh: true,
            });
        },
        { scope: exploreRef }
    );

    if (!alethia) {
        return null;
    }

    return (
        <section className={css.explore} ref={exploreRef} id={HOME_PAG.EXPLORE}>
            <div className={css.explore_wrapper}>
                <div className={css.explore_center}>
                    <div className={css.explore_taiko_image}>
                        <div className={css.explore_taiko_image_wrapper}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                className={css.explore_taiko_svg}
                                src="/img/home-new/exp-taiko-stroked.svg"
                                alt=""
                            />
                            <Image.Default
                                src="/img/home-new/exp-taiko-fill.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className={css.explore_taiko_alethia}>
                        <p className={css.explore_taiko_text}>
                            <span>[</span> {alethia.suptitle} <span>]</span>
                        </p>
                    </div>
                </div>
                <div className={css.explore_container}>
                    <div className={css.explore_item}>
                        <h2 className={css.explore_title}>{alethia.title}</h2>
                        <p className={css.explore_text}>{alethia.text}</p>
                        <WrapperButton
                            {...alethia.link}
                            className={css.explore_btn}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
