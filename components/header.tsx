"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Search, User, Menu, X, Heart, Phone, ChevronDown, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import CartIndicator from "@/components/cart-indicator"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import Image from "next/image"

const categories = [
  { name: "الإلكترونيات", href: "/categories/electronics" },
  { name: "الهواتف والأجهزة اللوحية", href: "/categories/mobiles" },
  { name: "أجهزة الكمبيوتر", href: "/categories/computers" },
  { name: "الأجهزة المنزلية", href: "/categories/appliances" },
  { name: "الألعاب", href: "/categories/gaming" },
  { name: "العروض", href: "/offers" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality
    console.log("Searching for:", searchQuery)
  }

  return (
    <>
       {/* Header */}
       <header className="bg-[#0a3c7b] text-white p-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Menu className="w-6 h-6" />
          <Image src="/vercel.svg" alt="Xcite" width={80} height={24} className="h-6 w-auto" />
        </div>
        <div className="flex-1 max-w-md mx-4">
          <div className="relative">
            <input type="text" placeholder="Search Xcite..." className="w-full py-1 px-3 text-sm rounded text-black" />
            <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <User className="w-5 h-5" />
          <div className="relative">
          <CartIndicator/>
          </div>
        </div>
      </header>

    </>
  )
}
