'use client';

import React from "react";
import clsx from "clsx";
import Link from "next/link";
import { useApp } from "@/app/providers/app-context";
import { Socials } from "@/components/socials";
import { MediaQuery } from "@/components/media-query";
import Sprite from "@/components/sprite";
import { HeaderNavigation } from "./ui/header-navigation";
import { AlertCard } from "@/components/alert-card";
import css from "./header.module.scss";

export const Header: React.FC = () => {
    const [{ menuActive }, , { setStateValue }] = useApp();

    const toggleMenu = () => setStateValue("menuActive", !menuActive);

    return (
        <header className={css.header}>
            <div className="container">
                <div className={css.header_wrapper}>
                    <Link className={css.header_logo} prefetch={false} href="/">
                        Taiko
                        <Sprite.Default icon="logo" />
                    </Link>

                    <MediaQuery query="(min-width: 1024px)">
                        <HeaderNavigation />
                    </MediaQuery>

                    <div className={css.header_right_actions}>
                        <div className={css.header_alert}>
                            <AlertCard />
                        </div>
                        <div className={css.header_socials}>
                            <Socials />
                        </div>
                    </div>

                    <button
                        className={clsx(css.header_burger, menuActive && css._active)}
                        onClick={toggleMenu}
                        aria-label="Open menu"
                    >
                        <strong>
                            <span></span>
                            <span></span>
                            <span></span>
                        </strong>
                    </button>
                </div>
            </div>
        </header>
    );
};
