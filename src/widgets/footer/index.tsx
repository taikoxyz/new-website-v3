'use client';

import React from "react";
import { getOneLevelLinks } from "@/content/data/navigation";
import { footerContent } from "@/content/data/navigation";
import { FooterSocials } from "@/widgets/footer-socials";
import ArrowLinkIcon from "@/components/icons/arrow-link";
import { NextLink } from "@/components/next-link";
import css from "./footer.module.scss";

export const Footer: React.FC = () => {
    const navigation = React.useMemo(() => getOneLevelLinks(), []);

    return (
        <footer className={css.footer} id="footer">
            <div className="container">
                <div className={css.footer_wrapper}>
                    <p
                        className={css.footer_title}
                        dangerouslySetInnerHTML={{ __html: footerContent.joinTaiko }}
                    />
                    <FooterSocials />
                    <div className={css.footer_row}>
                        <p className={css.footer_copyright}>
                            &copy; {new Date().getFullYear()} Taiko Labs
                        </p>
                        <div className={css.footer_content}>
                            <p className={css.footer_content_title}>{footerContent.content.title}</p>
                            <p className={css.footer_content_text}>
                                {footerContent.content.text}
                            </p>
                        </div>
                        <div className={css.footer_nav}>
                            <div className={css.footer_nav_inner}>
                                {navigation.map((group) => (
                                    <div className={css.footer_nav_group} key={group.name}>
                                        <p className={css.footer_nav_title}>{group.name}</p>
                                        <div className={css.footer_nav_list}>
                                            {group.links.map((link) => (
                                                <NextLink
                                                    className={css.footer_nav_link}
                                                    href={link.href}
                                                    target={
                                                        link.href?.startsWith("http")
                                                            ? "_blank"
                                                            : undefined
                                                    }
                                                    key={link.name + link.href}
                                                >
                                                    <span className={css.footer_nav_link_left}>
                                                        <span className={css.footer_nav_link_name}>
                                                            {link.name}
                                                            {link.href?.startsWith("http") && (
                                                                <ArrowLinkIcon />
                                                            )}
                                                            {link.disabled && (
                                                                <span
                                                                    className={
                                                                        css.footer_nav_link_dsb
                                                                    }
                                                                >
                                                                    Coming soon
                                                                </span>
                                                            )}
                                                        </span>
                                                        {link.desc && (
                                                            <span
                                                                className={css.footer_nav_link_desc}
                                                            >
                                                                {link.desc}
                                                            </span>
                                                        )}
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
