import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Oghene Emmanuel - Fullstack Developer",
  description: "Portfolio Website of Oghene Emmanuel showcasing fullstack development skills and projects with expertise in frontend and backend technologies",
  keywords: "fullstack developer, web developer, React, Next.js, Node.js, portfolio",
  authors: [{ name: "Oghene Emmanuel" }],
  openGraph: {
    title: "Oghene Emmanuel - Fullstack Developer",
    description: "Portfolio Website of Oghene Emmanuel showcasing fullstack development skills and projects with expertise in frontend and backend technologies",
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