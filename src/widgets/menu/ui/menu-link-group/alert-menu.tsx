'use client';

import React from "react";
import clsx from "clsx";
import { CardContent } from "@/components/alert-card/card-content";
import css from "./menu-link-group.module.scss";

export const AlertMenuItem = () => {
    const [active, setActive] = React.useState(false);

    const toggleActive = () => setActive(!active);

    return (
        <div className={clsx(css.group, active && css._active)}>
            <button
                className={clsx(css.group_btn, active && css._active)}
                onClick={toggleActive}
                aria-expanded={active}
            >
                <span>Alerts</span>
            </button>

            {active && <CardContent menuContent={true} />}
        </div>
    );
};
