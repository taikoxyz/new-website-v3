"use client";

import { DefaultLayout } from "@/widgets/layouts/default-layout";
import { GuideHero } from "@/widgets/guide-screens/ui/hero";
import { GuideContent } from "@/widgets/guide-screens/ui/content";
import css from "./guide.module.scss";

export default function DeployAiAgentGuidePage() {
  return (
    <DefaultLayout>
      <div className={css.gap}>
        <GuideHero />
        <GuideContent />
      </div>
    </DefaultLayout>
  );
}
