"use client";

import { DefaultLayout } from "@/widgets/layouts/default-layout";
import { GuideHero } from "@/widgets/guide-screens/ui/hero";
import { GuideContent } from "@/widgets/guide-screens/ui/content";
import { GuideSidebar } from "@/widgets/guide-screens/ui/guide-sidebar";
import css from "./guide.module.scss";

export default function DeployAiAgentGuidePage() {
  return (
    <DefaultLayout>
      <div className={css.gap}>
        <GuideHero />
        <div className="container">
          <div className={css.layout}>
            <div className={css.main}>
              <GuideContent />
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
