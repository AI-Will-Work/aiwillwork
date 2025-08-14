import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { Navigation } from "@/components/navigation"

export const metadata: Metadata = {
  title: "AI Will Work - Sustainable AI Consulting",
  description:
    "Professional AI consulting services focused on sustainable solutions that enhance human potential and drive business growth.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow">{children}</main>
        <footer className="border-t border-gray-200 py-12 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end">
              <div className="mb-4 md:mb-0">
                <h5 className="text-xl font-bold">AI Will Work</h5>
                <p>Sustainable AI solutions for your business</p>
              </div>
              <div className="text-sm">© {new Date().getFullYear()} AI Will Work.</div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
