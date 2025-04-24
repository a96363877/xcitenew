import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      {/* Newsletter Section */}
      <div className="container mx-auto px-4 py-10">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 text-center md:text-right">
              <h3 className="text-2xl font-bold mb-2">اشترك في نشرتنا الإخبارية</h3>
              <p className="text-white/80">احصل على أحدث العروض والخصومات مباشرة إلى بريدك الإلكتروني</p>
            </div>
            <div className="w-full md:w-auto">
              <div className="flex">
                <Input
                  type="email"
                  placeholder="البريد الإلكتروني"
                  className="w-full md:w-64 bg-white/20 border-white/30 text-white placeholder:text-white/60 rounded-l-none rounded-r-md"
                />
                <Button className="rounded-r-none bg-red-600 hover:bg-red-700">
                  اشترك
                  <ArrowRight className="mr-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="mb-6">
              <Link href="/" className="inline-block">
                <div className="relative h-10 w-24">
                  <div className="absolute inset-0 bg-white rounded-md flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-900">Xcite</span>
                  </div>
                </div>
              </Link>
            </div>
            <p className="text-white/80 mb-6">
              شركة اكسايت للإلكترونيات هي الشركة الرائدة في مجال بيع الإلكترونيات والأجهزة المنزلية في الكويت والشرق
              الأوسط.
            </p>
            <div className="flex space-x-4 space-x-reverse mb-6">
              <Link href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
            <div className="flex items-center mb-3">
              <Phone className="h-5 w-5 ml-2 text-white/70" />
              <span>1800-555-123</span>
            </div>
            <div className="flex items-center mb-3">
              <Mail className="h-5 w-5 ml-2 text-white/70" />
              <span>info@xcite.com</span>
            </div>
            <div className="flex items-start">
              <MapPin className="h-5 w-5 ml-2 text-white/70 mt-1" />
              <span>الكويت، شارع الغزالي، مجمع الأفنيوز</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 relative">
              <span className="relative z-10">تسوق</span>
              <span className="absolute bottom-0 right-0 h-1 w-10 bg-red-600"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/categories" className="hover:text-white text-white/80 transition-colors inline-block">
                  الأقسام
                </Link>
              </li>
              <li>
                <Link href="/offers" className="hover:text-white text-white/80 transition-colors inline-block">
                  العروض
                </Link>
              </li>
              <li>
                <Link href="/new-arrivals" className="hover:text-white text-white/80 transition-colors inline-block">
                  وصل حديثاً
                </Link>
              </li>
              <li>
                <Link href="/best-sellers" className="hover:text-white text-white/80 transition-colors inline-block">
                  الأكثر مبيعاً
                </Link>
              </li>
              <li>
                <Link href="/brands" className="hover:text-white text-white/80 transition-colors inline-block">
                  الماركات
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 relative">
              <span className="relative z-10">خدمة العملاء</span>
              <span className="absolute bottom-0 right-0 h-1 w-10 bg-red-600"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="hover:text-white text-white/80 transition-colors inline-block">
                  اتصل بنا
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white text-white/80 transition-colors inline-block">
                  الأسئلة المتكررة
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-white text-white/80 transition-colors inline-block">
                  الشحن والتوصيل
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-white text-white/80 transition-colors inline-block">
                  الإرجاع والاستبدال
                </Link>
              </li>
              <li>
                <Link href="/warranty" className="hover:text-white text-white/80 transition-colors inline-block">
                  الضمان
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 relative">
              <span className="relative z-10">حسابي</span>
              <span className="absolute bottom-0 right-0 h-1 w-10 bg-red-600"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/account" className="hover:text-white text-white/80 transition-colors inline-block">
                  حسابي
                </Link>
              </li>
              <li>
                <Link href="/orders" className="hover:text-white text-white/80 transition-colors inline-block">
                  طلباتي
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="hover:text-white text-white/80 transition-colors inline-block">
                  قائمة الرغبات
                </Link>
              </li>
              <li>
                <Link href="/payment" className="hover:text-white text-white/80 transition-colors inline-block">
                  طرق الدفع
                </Link>
              </li>
            </ul>

            <h3 className="text-lg font-bold mt-8 mb-4 relative">
              <span className="relative z-10">وسائل الدفع</span>
              <span className="absolute bottom-0 right-0 h-1 w-10 bg-red-600"></span>
            </h3>
            <div className="flex flex-wrap gap-2">
            <Image
                          src="/applepay.svg"
                          alt="Apple Pay"
                          width={36}
                          height={24}
                          className="h-6 w-auto ml-2"
                        /> <img
                        src="/knet.png"
                        alt="Apple Pay"
                        width={36}
                        height={24}
                        className="h-6 w-auto ml-2"
                      />
                       <Image
                      src="/master.svg"
                      alt="Apple Pay"
                      width={36}
                      height={24}
                      className="h-6 w-auto ml-2"
                    /> <Image
                    src="/visa.svg"
                    alt="Apple Pay"
                    width={36}
                    height={24}
                    className="h-6 w-auto ml-2"
                  />
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-6 text-center text-sm">
          <p>© {currentYear} Xcite. جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  )
}
