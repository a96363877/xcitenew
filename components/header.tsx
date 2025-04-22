import Link from "next/link"
import { Search, ShoppingCart, User, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2 border-b">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-blue-900">Xcite</span>
            </Link>
          </div>

          <div className="hidden md:flex flex-1 max-w-xl mx-4">
            <div className="relative w-full">
              <Input
                type="search"
                placeholder="ابحث عن المنتجات"
                className="w-full pl-10 pr-4 rounded-md border-gray-300"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              English
            </Button>
            <Link href="/account">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/cart">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>

        <nav className="py-2">
          <ul className="flex space-x-6 text-sm">
            <li>
              <Link href="/" className="text-gray-700 hover:text-blue-900">
                الرئيسية
              </Link>
            </li>
            <li>
              <Link href="/categories" className="text-gray-700 hover:text-blue-900">
                الأقسام
              </Link>
            </li>
            <li>
              <Link href="/offers" className="text-gray-700 hover:text-blue-900">
                العروض
              </Link>
            </li>
            <li>
              <Link href="/checkout" className="text-gray-700 hover:text-blue-900">
                الدفع
              </Link>
            </li>
            <li>
              <Link href="/shipping" className="text-gray-700 hover:text-blue-900">
                الشحن
              </Link>
            </li>
            <li>
              <Link href="/payment" className="text-gray-700 hover:text-blue-900">
                طرق الدفع
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
