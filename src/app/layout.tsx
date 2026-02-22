import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { themeConfig } from "@/config/theme";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: `${siteConfig.name} - ${siteConfig.role}`,
  description: siteConfig.bio,
};

/**
 * Theme colors from theme.ts are injected here as CSS custom properties.
 * This makes them available to globals.css and all components via var(--theme-*).
 */
const themeStyles = {
  "--theme-primary": themeConfig.primaryColor,
  "--theme-accent": themeConfig.accentColor,
  "--theme-background": themeConfig.backgroundColor,
  "--theme-card": themeConfig.cardBackground,
  "--theme-gradient-from": themeConfig.accentGradientFrom,
  "--theme-gradient-to": themeConfig.accentGradientTo,
} as React.CSSProperties;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <head />

      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-[var(--theme-background)] text-white selection:bg-white/10`}
        style={themeStyles}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
