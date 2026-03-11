"use client";

import React from "react";
import { homePageData } from "@/content/pages/home";
import { Button } from "@/components/buttons/button";
import { Banner } from "@/components/banner";
import { GrantsBanner } from "@/components/grants";
import css from "./ecosystem.module.scss";

export const Ecosystem: React.FC = () => {
    const { ecosystem, trailblazerBanner, grantFactoryBanner } = homePageData;

    return (
        <section className={css.ecosystem}>
            <div className="container">
                <div className={css.ecosystem_header}>
                    <h2
                        className={css.ecosystem_title}
                        dangerouslySetInnerHTML={{
                            __html: ecosystem.title.replace("\n", "<br/>"),
                        }}
                    />
                    <p className={css.ecosystem_text}>{ecosystem.text}</p>
                    <Button
                        component="a"
                        href="/ecosystem"
                        text={ecosystem.exploreButton}
                        variant="pink"
                    />
                </div>
            </div>

            <div className={css.ecosystem_banners}>
                <Banner
                    text={trailblazerBanner.text}
                    icon="trailblazer"
                    button={
                        <Button
                            component="a"
                            href="https://trailblazers.taiko.xyz"
                            target="_blank"
                            text={trailblazerBanner.button}
                            variant="pink"
                        />
                    }
                />

                <GrantsBanner
                    text={grantFactoryBanner.text}
                    icon="/img/grants-banner/grants-icon.png"
                    logo="/img/grants-banner/grants-logo.png"
                    button={
                        <Button
                            component="a"
                            href="/grant-program"
                            text={grantFactoryBanner.button}
                            variant="pink"
                        />
                    }
                />
            </div>
        </section>
    );
};
