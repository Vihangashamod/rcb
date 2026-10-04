import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./site.css";
import "./craft.css";
import { Footer } from "@/components/footer";

const googleSans = localFont({
  src: "./fonts/google-sans-flex.woff2",
  variable: "--font-google",
  display: "swap",
  weight: "400 800",
});
export const metadata: Metadata = {
  title: "RCB Holdings | Interlock Paving & Construction Machinery Sri Lanka",
  description:
    "Explore interlock paving, cement blocks and construction machinery from RCB Holdings, Sri Lanka. Plan your paving with our brick calculator and talk to our team.",
  metadataBase: new URL("https://rcb.lk"),
  openGraph: {
    title: "RCB Holdings — Build something that lasts.",
    description:
      "Interlock paving and construction machinery for your next project.",
    type: "website",
    locale: "en_LK",
    images: [{ url: "/ip.jpg", width: 590, height: 340 }],
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={googleSans.variable} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
        <Footer />
      </body>
    </html>
  );
}
