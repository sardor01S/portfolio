import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/providers/language-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const themeScript = `
(function(){
  try {
    const storedTheme = localStorage.getItem('portfolio-theme');
    const theme = storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : 'dark';
    if (storedTheme !== theme) localStorage.setItem('portfolio-theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.style.colorScheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
  } catch (error) {
    console.warn('Theme bootstrap failed', error);
  }
})();
`;

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-opal-nine-k40mahwsvw.vercel.app/"),
  title: "Sardorbek Ismatov | Junior Frontend Developer",
  description:
    "Junior Frontend Developer with a strong foundation in React, Next.js, JavaScript, and TypeScript. Explore personal projects and get in touch.",
  keywords: ["junior frontend developer", "React", "Next.js", "TypeScript", "portfolio"],
  alternates: { canonical: "https://portfolio-opal-nine-k40mahwsvw.vercel.app/" },
  openGraph: {
    title: "Sardorbek Ismatov | Junior Frontend Developer",
    description:
      "Junior Frontend Developer with a strong foundation in React, Next.js, JavaScript, and TypeScript.",
    type: "website",
    url: "https://portfolio-opal-nine-k40mahwsvw.vercel.app/",
  },
};

export const viewport: Viewport = {
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#050816" }, { media: "(prefers-color-scheme: light)", color: "#f8fafc" }],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uz" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full text-slate-900 transition-colors duration-300 dark:text-slate-100">
        <ThemeProvider>
          <LanguageProvider>
            <div id="top" className="relative min-h-screen overflow-x-hidden">
              <Navbar />
              {children}
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
