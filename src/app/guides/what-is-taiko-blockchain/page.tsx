"use client";

import { DefaultLayout } from "@/widgets/layouts/default-layout";
import { TaikoBlockchainHero } from "@/widgets/guide-screens/ui/taiko-blockchain-hero";
import { TaikoBlockchainContent } from "@/widgets/guide-screens/ui/taiko-blockchain-content";
import { GuideSidebar } from "@/widgets/guide-screens/ui/guide-sidebar";
import css from "./guide.module.scss";

export default function TaikoBlockchainGuidePage() {
  return (
    <DefaultLayout>
      <div className={css.gap}>
        <TaikoBlockchainHero />
        <div className="container">
          <div className={css.layout}>
            <div className={css.side}>
              <GuideSidebar />
            </div>
            <div className={css.main}>
              <TaikoBlockchainContent />
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
