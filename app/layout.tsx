import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Naresh Babu | Blog",
  description: "Personal blog and portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header className="border-b border-zinc-200 dark:border-zinc-800">
          <nav className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Naresh Babu
            </Link>
            <ul className="flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
              <li>
                <Link
                  href="/"
                  className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-zinc-200 dark:border-zinc-800">
          <div className="max-w-3xl mx-auto px-6 py-6 text-center text-sm text-zinc-500 dark:text-zinc-500">
            &copy; {new Date().getFullYear()} Naresh Babu. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
