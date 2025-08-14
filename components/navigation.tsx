"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { href: "/mission", label: "Our Mission" },
    { href: "/process", label: "Process" },
    { href: "/team", label: "Team" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">
              AI Will Work
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
