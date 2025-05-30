import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Oghene Emmanuel - Frontend Developer",
  description: "Portfolio Website of Oghene Emmanuel showcasing frontend development skills and projects",
  keywords: "frontend developer, web developer, React, Next.js, portfolio",
  authors: [{ name: "Oghene Emmanuel" }],
  openGraph: {
    title: "Oghene Emmanuel - Frontend Developer",
    description: "Portfolio Website of Oghene Emmanuel showcasing frontend development skills and projects",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
