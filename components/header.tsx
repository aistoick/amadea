"use client"

import { useState } from "react"
import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Menu, X, Globe, Heart, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  const { language, setLanguage, t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: t("home"), href: "/" },
    { name: t("about"), href: "/about" },
    { name: t("products"), href: "/products" },
    { name: t("contact"), href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-[70px] h-[60px]">
              <Image
                src="/images/logo.svg" // static/public papkada joylashgan bo‘lishi kerak
                alt="PharmaCare Logo"
                fill
                className="w-full h-full object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <Select value={language} onValueChange={(value: "uzb" | "rus" | "eng") => setLanguage(value)}>
              <SelectTrigger className="w-20 h-9 border-gray-300">
                <Globe className="w-4 h-4" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="eng">EN</SelectItem>
                <SelectItem value="rus">RU</SelectItem>
                <SelectItem value="uzb">UZ</SelectItem>
              </SelectContent>
            </Select>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="text-gray-700 hover:text-blue-600">
                <Heart className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-700 hover:text-blue-600">
                <User className="w-4 h-4" />
              </Button>
            </div>

            {/* Mobile Menu */}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="flex items-center justify-around mt-4 pt-4 border-t border-gray-200">
              <Button variant="ghost" size="sm" className="flex-col h-auto py-3">
                <Heart className="w-5 h-5 mb-1" />
                <span className="text-xs">Wishlist</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex-col h-auto py-3">
                <User className="w-5 h-5 mb-1" />
                <span className="text-xs">Account</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
