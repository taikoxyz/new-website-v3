"use client";

import { DefaultLayout } from "@/widgets/layouts/default-layout";
import { Erc8004Hero } from "@/widgets/guide-screens/ui/erc8004-hero";
import { Erc8004Content } from "@/widgets/guide-screens/ui/erc8004-content";
import { GuideSidebar } from "@/widgets/guide-screens/ui/guide-sidebar";
import css from "./guide.module.scss";

export default function Erc8004GuidePage() {
  return (
    <DefaultLayout>
      <div className={css.gap}>
        <Erc8004Hero />
        <div className="container">
          <div className={css.layout}>
            <div className={css.main}>
              <Erc8004Content />
            </div>
            <div className={css.side}>
              <GuideSidebar />
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
