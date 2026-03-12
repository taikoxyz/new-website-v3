import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grant Program",
  description:
    "Apply for Taiko grants to build on the Taiko ecosystem. Funding for developers, researchers, and community builders.",
  openGraph: {
    title: "Grant Program — Taiko",
    description:
      "Apply for Taiko grants to build on the Taiko ecosystem. Funding for developers, researchers, and community builders.",
    url: "https://taiko.xyz/grant-program",
  },
  twitter: {
    title: "Grant Program — Taiko",
    description:
      "Apply for Taiko grants to build on the Taiko ecosystem. Funding for developers, researchers, and community builders.",
  },
  alternates: {
    canonical: "/grant-program",
  },
};

export default function GrantProgramLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
