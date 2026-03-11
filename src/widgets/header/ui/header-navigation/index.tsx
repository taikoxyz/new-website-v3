'use client';

import React from "react";
import { CSSTransition } from "react-transition-group";
import Link from "next/link";
import clsx from "clsx";
import ArrowDownIcon from "@/components/icons/arrow-down";
import ArrowLinkIcon from "@/components/icons/arrow-link";
import { headerNavigation } from "@/content/data/navigation";
import type { NavItem, NavItemLink } from "@/content/types";
import { executeOnReadyPage } from "@/lib/utils/browser";
import { loadImage } from "@/lib/utils/loadImage";
import { loadVideo } from "@/lib/utils/loadVideo";
import Accordion from "@/components/accordion";
import Image from "@/components/image";
import css from "./header-navigation.module.scss";

type NavHeader = {
    name: string;
    media: string;
    links: NavItemLink[][];
};

function toNavHeaders(items: NavItem[]): NavHeader[] {
    return items.map((item) => ({
        name: item.name,
        media: item.img,
        links: item.children,
    }));
}

function RenderItem(link: NavItemLink) {
    const external = link.href?.startsWith("http");

    const content = (
        <>
            <Image.Default src={link.icon} alt="" />
            {link.name}
            {external && <ArrowLinkIcon />}
            {link.disabled && <span className={css.menu_content_comingSoon}>Coming soon</span>}
        </>
    );

    return (
        <React.Fragment key={link.name + link.href}>
            {(!link.children || link.children.length === 0) && (
                <Link
                    className={css.menu_content_link}
                    href={link.href || "#"}
                    target={external ? "_blank" : undefined}
                    prefetch={false}
                >
                    {content}
                </Link>
            )}
            {link.children && link.children.length > 0 && (
                <Accordion className={css.accordion_root}>
                    {({ active }) => (
                        <>
                            <Accordion.Button>
                                <button className={css.accordion}>
                                    {content}
                                    <ArrowDownIcon
                                        style={{
                                            transform: active ? "scaleY(-1)" : undefined,
                                        }}
                                    />
                                </button>
                            </Accordion.Button>
                            <Accordion.Content>
                                <div className={css.accordion_content}>
                                    {link.children!.map((sub) => (
                                        <Link
                                            className={css.accordion_sublink}
                                            href={sub.href}
                                            key={sub.name + sub.href}
                                            prefetch={false}
                                        >
                                            <span className={css.accordion_sublink_inner}>
                                                {sub.name}
                                                {sub.href.startsWith("http") && <ArrowLinkIcon />}
                                            </span>
                                            <span className={css.accordion_sublink_desc}>
                                                {sub.desc}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </Accordion.Content>
                        </>
                    )}
                </Accordion>
            )}
        </React.Fragment>
    );
}

interface Props {
    className?: string;
}

export const HeaderNavigation: React.FC<Props> = ({ className }) => {
    const [navActive, setNavActive] = React.useState<NavHeader | null>(null);
    const [active, setActive] = React.useState(false);
    const navigation = React.useMemo(() => toNavHeaders(headerNavigation), []);
    const menuRef = React.useRef<HTMLDivElement>(null);

    const open = (item: NavHeader) => {
        setActive(true);
        setNavActive(item);
    };

    const close = () => {
        setActive(false);
    };

    React.useEffect(
        () =>
            executeOnReadyPage(() => {
                navigation.forEach((item) => {
                    if (item.media) {
                        if (/(mp4)|(avi)|(webm)$/.test(item.media)) {
                            loadVideo(item.media);
                        } else {
                            loadImage(item.media);
                        }
                    }
                    item.links.forEach((column) => {
                        column.forEach((link) => {
                            if (link.icon) {
                                loadImage(link.icon);
                            }
                        });
                    });
                });
            }),
        []
    );

    return (
        <div className={clsx(css.nav, navActive && css._active, className)} onMouseLeave={close}>
            {navigation.map((item) => (
                <button
                    className={clsx(css.nav_item, item.name === navActive?.name && css._active)}
                    onMouseEnter={() => open(item)}
                    key={item.name}
                >
                    {item.name}
                    <ArrowDownIcon />
                </button>
            ))}

            <CSSTransition classNames={css} timeout={300} in={active} mountOnEnter unmountOnExit nodeRef={menuRef}>
                <div className={css.menu} ref={menuRef}>
                    <div className={css.menu_content}>
                        {(navActive?.links || []).map((column, id) => (
                            <div className={css.menu_content_column} key={id}>
                                {column.map((link) => (
                                    <RenderItem {...link} key={link.name + link.href} />
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className={css.menu_image}>
                        {/(mp4)|(avif)|(webm)$/.test(navActive?.media || "") ? (
                            <video
                                src={navActive?.media as string}
                                autoPlay
                                loop
                                playsInline
                                muted
                            />
                        ) : (
                            <Image.Default
                                src={navActive?.media as string}
                                alt=""
                            />
                        )}
                    </div>
                </div>
            </CSSTransition>
        </div>
    );
};
