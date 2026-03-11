"use client";

import { DefaultLayout } from "@/widgets/layouts/default-layout";
import * as AboutScreens from "@/widgets/about-screens";
import css from "./about.module.scss";

export default function AboutPage() {
    return (
        <DefaultLayout>
            <div className={css.gap}>
                <AboutScreens.Hero />
                <AboutScreens.Community />
                <AboutScreens.Mission />
                <AboutScreens.Brand />
                <AboutScreens.Careers />
            </div>
        </DefaultLayout>
    );
}
