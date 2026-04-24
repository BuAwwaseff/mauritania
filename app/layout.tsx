import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/TopBar";
import InteractiveBackground from "@/components/InteractiveBackground";
import { marketMetadata } from "@/lib/market";
import { LanguageProvider } from "@/providers/LanguageProvider";

export const metadata: Metadata = marketMetadata;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="h-full antialiased"
    >
      <body className="page-shell min-h-full">
        <LanguageProvider>
          <InteractiveBackground />
          <div className="page-content">
            <TopBar />
            {children}
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
