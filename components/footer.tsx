import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">تسوق</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/categories" className="hover:underline">
                  الأقسام
                </Link>
              </li>
              <li>
                <Link href="/offers" className="hover:underline">
                  العروض
                </Link>
              </li>
              <li>
                <Link href="/new-arrivals" className="hover:underline">
                  وصل حديثاً
                </Link>
              </li>
              <li>
                <Link href="/best-sellers" className="hover:underline">
                  الأكثر مبيعاً
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">خدمة العملاء</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="hover:underline">
                  اتصل بنا
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:underline">
                  الأسئلة المتكررة
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:underline">
                  الشحن والتوصيل
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:underline">
                  الإرجاع والاستبدال
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">حسابي</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/account" className="hover:underline">
                  حسابي
                </Link>
              </li>
              <li>
                <Link href="/orders" className="hover:underline">
                  طلباتي
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="hover:underline">
                  قائمة الرغبات
                </Link>
              </li>
              <li>
                <Link href="/payment" className="hover:underline">
                  طرق الدفع
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">تواصل معنا</h3>
            <div className="flex space-x-4 mb-4">
              <Link href="#" className="hover:text-gray-300">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
            <p className="text-sm">اشترك في نشرتنا الإخبارية للحصول على أحدث العروض والخصومات</p>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-6 text-center text-sm">
          <p>© {new Date().getFullYear()} Xcite. جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  )
}
