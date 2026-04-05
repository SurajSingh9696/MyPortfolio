import "./globals.css";
import Script from "next/script";
import ClientAnalytics from "../components/ClientAnalytics";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata = {
  title: "Suraj Singh | Full-Stack Developer & AI Enthusiast",
  description: "Portfolio of Suraj Singh - Full-Stack Developer specializing in React, Node.js, and AI-driven solutions. Building modern, scalable web applications.",
  keywords: "Suraj Singh, Full Stack Developer, React Developer, Node.js, AI Enthusiast, Web Development, Portfolio",
  authors: [{ name: "Suraj Singh" }],
  openGraph: {
    title: "Suraj Singh | Full-Stack Developer",
    description: "Building modern, scalable web applications with React, Node.js, and AI technologies",
    type: "website",
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
      </head>
      <body className="bg-[#030014] text-white overflow-x-hidden overflow-y-scroll antialiased" suppressHydrationWarning>
        <div id="root">{children}</div>
        <ClientAnalytics />
      </body>
    </html>
  );
}
