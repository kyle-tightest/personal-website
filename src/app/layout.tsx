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
  title: "Organic Code Farm",
  description: "OCF.",
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
