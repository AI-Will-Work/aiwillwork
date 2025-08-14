"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  const navItems = [
    { href: "/mission", label: "Our Mission" },
    { href: "/process", label: "Process" },
    { href: "/team", label: "Team" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-200 ${
      scrolled 
        ? "bg-white/95 backdrop-blur-sm shadow-sm" 
        : "bg-white border-b border-gray-200"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.png" alt="AI Will Work Logo" width={30} height={30} />
              <span className="text-2xl font-bold mt-1">AI Will Work</span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors ${
                  pathname === item.href ? "text-black font-medium" : "text-gray-600 hover:text-black"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="/contact">
            <Button>Get Started</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
