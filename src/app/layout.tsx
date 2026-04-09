import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import TerminalWindow from "@/components/TerminalWindow";
import Navigation from "@/components/Navigation";
import StatusBar from "@/components/StatusBar";

const firaCode = Fira_Code({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Organic Code | Backend & Infrastructure",
  description: "Personal website offering artisanal, hand-written code by a seasoned backend software developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={firaCode.variable}>
      <body>
        <main className="app-main">
          <div style={{ position: 'relative' }}>
            <TerminalWindow>
              <Navigation />
              {children}
            </TerminalWindow>
            <StatusBar />
          </div>
        </main>
      </body>
    </html>
  );
}
