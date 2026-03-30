'use client';

import React from "react";
import { FooterSocials } from "@/widgets/footer-socials";
import ArrowLinkIcon from "@/components/icons/arrow-link";
import { NextLink } from "@/components/next-link";
import css from "./footer.module.scss";

const footerNavigation = [
    {
        name: "Build",
        links: [
            { name: "Docs", href: "https://docs.taiko.xyz/start-here/getting-started" },
            { name: "Bridge", href: "https://bridge.taiko.xyz/" },
            { name: "Swap", href: "https://swap.taiko.xyz/" },
            { name: "AI Agents Guide", href: "https://taiko.xyz/guides/deploy-ai-agent-on-ethereum-l2" },
        ],
    },
    {
        name: "Explore",
        links: [
            { name: "Ecosystem", href: "/ecosystem" },
            { name: "Proving Ground", href: "https://provinggroundxyz.substack.com/" },
            { name: "Blog", href: "/blog" },
        ],
    },
    {
        name: "Governance",
        links: [
            { name: "DAO", href: "https://dao.taiko.xyz/" },
            { name: "Docs", href: "https://dao-docs.taiko.xyz/start-here/getting-started" },
        ],
    },
    {
        name: "Company",
        links: [
            { name: "About", href: "/about" },
            { name: "Careers", href: "/careers" },
            { name: "Grants", href: "/grant-program" },
            { name: "Brand Kit", href: "/brand-assets" },
        ],
    },
];

export const Footer: React.FC = () => {
    return (
        <footer className={css.footer} id="footer">
            <div className="container">
                <div className={css.footer_wrapper}>
                    <p className={css.footer_title}>
                        Join the taiko <b>community</b>
                    </p>
                    <FooterSocials />
                    <div className={css.footer_row}>
                        <p className={css.footer_copyright}>
                            &copy; {new Date().getFullYear()} Taiko Labs
                        </p>
                        <div className={css.footer_content}>
                            <p className={css.footer_content_title}>Taiko</p>
                            <p className={css.footer_content_text}>
                                Deploy AI Agents on Ethereum with sub-cent fees and no centralized sequencer
                            </p>
                        </div>
                        <div className={css.footer_nav}>
                            <div className={css.footer_nav_inner}>
                                {footerNavigation.map((group) => (
                                    <div className={css.footer_nav_group} key={group.name}>
                                        <p className={css.footer_nav_title}>{group.name}</p>
                                        <div className={css.footer_nav_list}>
                                            {group.links.map((link) => (
                                                <NextLink
                                                    className={css.footer_nav_link}
                                                    href={link.href}
                                                    target={
                                                        link.href.startsWith("http")
                                                            ? "_blank"
                                                            : undefined
                                                    }
                                                    key={link.name + link.href}
                                                >
                                                    <span className={css.footer_nav_link_left}>
                                                        <span className={css.footer_nav_link_name}>
                                                            {link.name}
                                                            {link.href.startsWith("http") && (
                                                                <ArrowLinkIcon />
                                                            )}
                                                        </span>
                                                    </span>
                                                </NextLink>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
