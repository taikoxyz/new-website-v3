"use client";

import { DefaultLayout } from "@/widgets/layouts/default-layout";
import { SubscribeSection } from "@/components/subscribe-section";
import { FooterSubscribe } from "@/features/footer-subscribe";

export default function Home() {
  return (
    <DefaultLayout>
      <main>
        <div className="container" style={{ paddingTop: 120 }}>
          <h1>Taiko</h1>
        </div>
        <SubscribeSection>
          <FooterSubscribe />
        </SubscribeSection>
      </main>
    </DefaultLayout>
  );
}
