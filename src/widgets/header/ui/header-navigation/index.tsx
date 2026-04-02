'use client';

import React from "react";
import Link from "next/link";
import clsx from "clsx";
import ArrowDownIcon from "@/components/icons/arrow-down";
import ArrowLinkIcon from "@/components/icons/arrow-link";
import { headerNavigation } from "@/content/data/navigation";
import type { NavItem, NavItemLink } from "@/content/types";
import { executeOnReadyPage } from "@/lib/utils/browser";
import { loadImage } from "@/lib/utils/loadImage";
import Accordion from "@/components/accordion";
import Image from "@/components/image";
import css from "./header-navigation.module.scss";

type NavHeader = {
    name: string;
    links: NavItemLink[][];
};

function toNavHeaders(items: NavItem[]): NavHeader[] {
    return items.map((item) => ({
        name: item.name,
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
    const navigation = React.useMemo(() => toNavHeaders(headerNavigation), []);

    const open = (item: NavHeader) => {
        setNavActive(item);
    };

    const close = () => {
        setNavActive(null);
    };

    React.useEffect(
        () =>
            executeOnReadyPage(() => {
                navigation.forEach((item) => {
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
            {navigation.map((item) => {
                const isActive = item.name === navActive?.name;
                return (
                    <div className={css.nav_item_wrapper} key={item.name}>
                        <button
                            className={clsx(css.nav_item, isActive && css._active)}
                            onMouseEnter={() => open(item)}
                        >
                            {item.name}
                            <ArrowDownIcon />
                        </button>
                        {isActive && (
                            <div className={css.menu}>
                                <div className={css.menu_content}>
                                    {item.links.map((column, id) => (
                                        <div className={css.menu_content_column} key={id}>
                                            {column.map((link) => (
                                                <RenderItem {...link} key={link.name + link.href} />
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};
