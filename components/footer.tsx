"use client"

import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin, Heart } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const { t } = useLanguage()

  const quickLinks = [
    { name: t("home"), href: "/" },
    { name: t("about"), href: "/about" },
    { name: t("products"), href: "/products" },
    { name: t("contact"), href: "/contact" },
  ]

  const categories = [
    { name: "ELISA Kits", href: "/products" },
    { name: "Rapid Tests", href: "/products" },
    { name: "Consumables", href: "/products" },
    { name: "Human Reagents", href: "/products" },
    { name: "Reagents", href: "/products" },
  ]

  const socialLinks = [
    { name: "Facebook", icon: <Facebook className="w-5 h-5" />, href: "#" },
    { name: "Twitter", icon: <Twitter className="w-5 h-5" />, href: "#" },
    { name: "Instagram", icon: <Instagram className="w-5 h-5" />, href: "#" },
    { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, href: "#" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">+</span>
              </div>
              <div>
                <span className="text-2xl font-bold">Amedea</span>
           
              </div>
            </Link>
            <p className="text-gray-300 leading-relaxed">
              Your trusted healthcare partner providing quality medicines and professional consultation services.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Categories</h3>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link
                    href={category.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Mir Said Baraka ko'chasi, 34-uy</p>
                  <p>Samarkand, Uzbekistan</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">+998 95 500 15 22</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">hulkaroya@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Mon - Fri: 8:00 AM - 10:00 PM</p>
                  <p>Sat - Sun: 9:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          {/* Newsletter */}
          <div className="text-center space-y-4 mb-8">
            <h3 className="text-xl font-semibold">Stay Updated</h3>
            <p className="text-gray-300 max-w-md mx-auto">
              Subscribe to our newsletter for health tips and special offers.
            </p>
            <div className="flex max-w-md mx-auto gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button className="bg-blue-600 hover:bg-blue-700">Subscribe</Button>
            </div>
          </div>

          {/* Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 border-t border-gray-700 pt-8">
            <div className="text-gray-400 text-sm">© 2025 Amedea. All rights reserved.</div>
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>for better health</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
