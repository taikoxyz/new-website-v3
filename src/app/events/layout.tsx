import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Find upcoming Taiko events, meetups, and conferences. Connect with the Taiko community worldwide.",
  openGraph: {
    title: "Events — Taiko",
    description:
      "Find upcoming Taiko events, meetups, and conferences. Connect with the Taiko community worldwide.",
    url: "https://taiko.xyz/events",
  },
  twitter: {
    title: "Events — Taiko",
    description:
      "Find upcoming Taiko events, meetups, and conferences. Connect with the Taiko community worldwide.",
  },
  alternates: {
    canonical: "/events",
  },
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
