import type { Metadata } from "next";
import "./scss/index.scss";

export const metadata: Metadata = {
  title: "Taiko",
  description: "Taiko — Ethereum scaling",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
