import type { Metadata } from "next";
import { Lexend, JetBrains_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono-jb",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thanush Thilipkumar ",
  description: "Portfolio of Thanush Thilipkumar — Software Engineer at Fnality. Experience, projects, skills, and contact.",

  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/icon.png",
    shortcut: "/icon.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thanush Thilipkumar | Portfolio",
    description: "Experience, skills, and ways to contact Thanush.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${lexend.variable} ${jetbrainsMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="page-bg" aria-hidden="true">
            <div className="aurora aurora-1" />
            <div className="aurora aurora-2" />
            <div className="aurora aurora-3" />
          </div>
          {children}
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-M32WSJXLFW" />
    </html>
  );
}
