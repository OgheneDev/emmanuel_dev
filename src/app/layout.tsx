import type React from "react";
import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oghene Emmanuel – Backend-Focused Fullstack Engineer",
  description:
    "Portfolio of Oghene Emmanuel, a backend-focused fullstack engineer building SaaS systems, scalable APIs, and well-structured web applications.",
  keywords:
    "backend engineer, fullstack engineer, SaaS backend, system design, Node.js, TypeScript, PostgreSQL, APIs, React, Next.js",
  authors: [{ name: "Oghene Emmanuel" }],
  openGraph: {
    title: "Oghene Emmanuel – Backend-Focused Fullstack Engineer",
    description:
      "Backend-focused fullstack engineer building SaaS systems, scalable APIs, and production-ready web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={ubuntu.className}>{children}</body>
    </html>
  );
}
