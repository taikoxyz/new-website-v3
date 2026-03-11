import type { Metadata, Viewport } from "next";
import { Providers } from "./providers";
import "swiper/css";
import "./scss/index.scss";

const FONT_PRELOADS = [
  "/fonts/ClashDisplay-Medium.woff2",
  "/fonts/ClashDisplay-Semibold.woff2",
  "/fonts/ClashGrotesk-Medium.woff2",
  "/fonts/ClashGrotesk-Semibold.woff2",
  "/fonts/Gilroy-Medium.woff2",
  "/fonts/HelveticaNeueCyr-Medium.woff2",
  "/fonts/Onest-Medium.woff2",
  "/fonts/PublicSans-Medium.woff2",
  "/fonts/PublicSans-Regular.woff2",
  "/fonts/PublicSans-SemiBold.woff2",
];

export const metadata: Metadata = {
  title: "Taiko",
  description:
    "The most developer-friendly and secure Ethereum scaling solution.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Taiko",
    description:
      "The most developer-friendly and secure Ethereum scaling solution.",
    url: "https://taiko.xyz",
    type: "website",
  },
  twitter: {
    title: "Taiko",
    description:
      "The most developer-friendly and secure Ethereum scaling solution.",
  },
  keywords: [
    "Taiko",
    "Ethereum",
    "L2",
    "rollup",
    "scaling",
    "blockchain",
    "based rollup",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {FONT_PRELOADS.map((href) => (
          <link
            key={href}
            rel="preload"
            href={href}
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
        ))}
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
