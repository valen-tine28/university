import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { Navbar } from "./components/Navbar";

export const metadata: Metadata = {
  title: "Web Developer Portfolio",
  description: "Professional web developer portfolio showcasing projects and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-base-100 transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
          
          <main className="min-h-screen pt-20">
            {children}
          </main>
          
          <footer className="footer footer-center p-10 bg-base-200 text-base-content border-t border-base-300">
            <div>
              <p className="font-bold text-lg">
                Web Developer Portfolio
              </p>
              <p className="text-sm">Copyright © {new Date().getFullYear()} - All rights reserved</p>
            </div>
            <div>
              <div className="grid grid-flow-col gap-4">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="link link-hover hover:text-primary transition-colors">
                  Twitter
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="link link-hover hover:text-primary transition-colors">
                  LinkedIn
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="link link-hover hover:text-primary transition-colors">
                  GitHub
                </a>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
