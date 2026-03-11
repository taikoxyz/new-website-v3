'use client';

import React, { useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { useApp } from "@/app/providers/app-context";
import { headerNavigation, footerSocials } from "@/content/data/navigation";
import { footerContent } from "@/content/data/navigation";
import Image from "@/components/image";
import { MediaQuery } from "@/components/media-query";
import Sprite from "@/components/sprite";
import { MenuLinkGroup } from "./ui/menu-link-group";
import { AlertMenuItem } from "./ui/menu-link-group/alert-menu";
import css from "./menu.module.scss";

// Flatten nav items for mobile menu (each group as flat list of links)
function flattenNavForMobile() {
    return headerNavigation.map((item) => ({
        name: item.name,
        links: item.children.flat(),
    }));
}

export const Menu: React.FC = () => {
    const [{ menuActive }, , { setStateValue }] = useApp();
    const navigation = React.useMemo(() => flattenNavForMobile(), []);
    const menuRef = React.useRef<HTMLElement>(null);

    useEffect(() => {
        document.body.style.overflow = menuActive ? "hidden" : "";
    }, [menuActive]);

    return (
        <MediaQuery query="(max-width: 768px)">
            <CSSTransition
                classNames={css}
                timeout={400}
                in={menuActive}
                unmountOnExit
                mountOnEnter
                nodeRef={menuRef}
            >
                <menu className={css.menu} ref={menuRef}>
                    <div className={css.menu_wrapper}>
                        <h3 className={css.menu_title}>Menu</h3>
                        <nav className={css.menu_nav}>
                            {navigation.map((group) => (
                                <MenuLinkGroup
                                    name={group.name}
                                    links={group.links}
                                    closeModal={() => setStateValue("menuActive", false)}
                                    key={group.name}
                                />
                            ))}
                            <div className={css.menu_alert}>
                                <AlertMenuItem />
                            </div>
                        </nav>

                        <h3
                            className={css.menu_join}
                            dangerouslySetInnerHTML={{
                                __html: footerContent.joinTaiko,
                            }}
                        />

                        <nav className={css.menu_socials}>
                            {footerSocials.map((social) => (
                                <a
                                    className={css.menu_link}
                                    href={social.url}
                                    key={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {social.name}
                                    {social.name === "paragraph" ? (
                                        <Image.Default src="/img/paragraph-logo.png" alt="" />
                                    ) : (
                                        <Sprite.Default icon={social.icon} />
                                    )}
                                </a>
                            ))}
                        </nav>
                    </div>
                </menu>
            </CSSTransition>
        </MediaQuery>
    );
};
