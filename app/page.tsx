import Image from "next/image"
import Link from "next/link"
import CategorySection from "@/components/category-section"
import MainSlider from "@/components/main-slider"
import DeliveryBanner from "@/components/delivery-banner"
import PriceOffers from "@/components/price-offers"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainSlider />

      <div className="container mx-auto px-4 py-6">
        <CategorySection />
      </div>

      <DeliveryBanner />

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Link href="/categories/digital-cards" className="relative group overflow-hidden rounded-lg">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Digital Cards"
              width={300}
              height={300}
              className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 w-full bg-blue-900 bg-opacity-80 text-white p-2 text-center">
              <h3 className="text-sm md:text-base">البطاقات الرقمية</h3>
            </div>
          </Link>
          <Link href="/categories/gaming" className="relative group overflow-hidden rounded-lg">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Gaming"
              width={300}
              height={300}
              className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 w-full bg-blue-900 bg-opacity-80 text-white p-2 text-center">
              <h3 className="text-sm md:text-base">الألعاب</h3>
            </div>
          </Link>
          <Link href="/categories/small-appliances" className="relative group overflow-hidden rounded-lg">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Small Appliances"
              width={300}
              height={300}
              className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 w-full bg-blue-900 bg-opacity-80 text-white p-2 text-center">
              <h3 className="text-sm md:text-base">الأجهزة المنزلية الصغيرة</h3>
            </div>
          </Link>
          <Link href="/categories/large-appliances" className="relative group overflow-hidden rounded-lg">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Large Appliances"
              width={300}
              height={300}
              className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 w-full bg-blue-900 bg-opacity-80 text-white p-2 text-center">
              <h3 className="text-sm md:text-base">الأجهزة المنزلية الكبيرة</h3>
            </div>
          </Link>
        </div>

        <PriceOffers />
      </div>
    </div>
  )
}
