"use client";

import { DefaultLayout } from "@/widgets/layouts/default-layout";
import { AlethiaHero } from "@/widgets/guide-screens/ui/alethia-hero";
import { AlethiaContent } from "@/widgets/guide-screens/ui/alethia-content";
import { GuideSidebar } from "@/widgets/guide-screens/ui/guide-sidebar";
import css from "./guide.module.scss";

export default function TaikoAlethiaGuidePage() {
  return (
    <DefaultLayout>
      <div className={css.gap}>
        <AlethiaHero />
        <div className="container">
          <div className={css.layout}>
            <div className={css.main}>
              <AlethiaContent />
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
