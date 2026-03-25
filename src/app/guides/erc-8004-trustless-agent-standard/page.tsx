"use client";

import { DefaultLayout } from "@/widgets/layouts/default-layout";
import { Erc8004Hero } from "@/widgets/guide-screens/ui/erc8004-hero";
import { Erc8004Content } from "@/widgets/guide-screens/ui/erc8004-content";
import css from "./guide.module.scss";

export default function Erc8004GuidePage() {
  return (
    <DefaultLayout>
      <div className={css.gap}>
        <Erc8004Hero />
        <Erc8004Content />
      </div>
    </DefaultLayout>
  );
}
