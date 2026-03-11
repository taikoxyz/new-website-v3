'use client';

import React from "react";
import Link from "next/link";
import clsx from "clsx";
import ArrowDownIcon from "@/components/icons/arrow-down";
import ArrowLinkIcon from "@/components/icons/arrow-link";
import Accordion from "@/components/accordion";
import Image from "@/components/image";
import type { NavItemLink } from "@/content/types";
import css from "./menu-link-group.module.scss";

interface Props {
    name: string;
    links: NavItemLink[];
    closeModal: () => void;
}

export const MenuLinkGroup: React.FC<Props> = ({ links, name, closeModal }) => {
    const [active, setActive] = React.useState(false);

    const toggleActive = () => setActive(!active);

    return (
        <div className={css.group}>
            <button
                className={clsx(css.group_btn, active && css._active)}
                onClick={toggleActive}
            >
                {name}
            </button>
            {active && (
                <div className={css.group_content}>
                    {links.map((link) => {
                        const external = link.href?.startsWith("http");
                        const key = link.name + link.href;

                        const content = (
                            <>
                                <Image.Default src={link.icon} alt="" />
                                {link.name}
                                {external && <ArrowLinkIcon />}
                            </>
                        );

                        if (link.href) {
                            return (
                                <Link
                                    className={css.group_link}
                                    href={link.href}
                                    target={external ? "_blank" : undefined}
                                    onClick={closeModal}
                                    prefetch={false}
                                    key={key}
                                >
                                    {content}
                                </Link>
                            );
                        }

                        if (link.children && link.children.length > 0) {
                            return (
                                <Accordion className={css.accordion_root} key={key}>
                                    {({ active }) => (
                                        <>
                                            <Accordion.Button>
                                                <button className={css.accordion}>
                                                    {content}
                                                    <ArrowDownIcon
                                                        style={{
                                                            transform: active
                                                                ? "scaleY(-1)"
                                                                : undefined,
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
                                                            onClick={closeModal}
                                                            prefetch={false}
                                                        >
                                                            <span
                                                                className={
                                                                    css.accordion_sublink_inner
                                                                }
                                                            >
                                                                {sub.name}
                                                                {sub.href.startsWith("http") && (
                                                                    <ArrowLinkIcon />
                                                                )}
                                                            </span>
                                                            <span
                                                                className={
                                                                    css.accordion_sublink_desc
                                                                }
                                                            >
                                                                {sub.desc}
                                                            </span>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </Accordion.Content>
                                        </>
                                    )}
                                </Accordion>
                            );
                        }

                        return (
                            <p className={css.group_link} key={key}>
                                {content}
                            </p>
                        );
                    })}
                </div>
            )}
        </div>
    );
};
