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
          <Link href="/offers" className="relative group overflow-hidden rounded-lg">
            <Image
              src="/742025-XciteSeason-CBlocks-dCards_1.jpg"
              alt="Digital Cards"
              width={300}
              height={300}
              className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 w-full bg-blue-900 bg-opacity-80 text-white p-2 text-center">
              <h3 className="text-sm md:text-base">البطاقات الرقمية</h3>
            </div>
          </Link>
          <Link href="/offers" className="relative group overflow-hidden rounded-lg">
            <Image
              src="/742025-XciteSeason-CBlocks-Gaming.jpg"
              alt="Gaming"
              width={300}
              height={300}
              className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 w-full bg-blue-900 bg-opacity-80 text-white p-2 text-center">
              <h3 className="text-sm md:text-base">الألعاب</h3>
            </div>
          </Link>
          <Link href="/offers" className="relative group overflow-hidden rounded-lg">
            <Image
              src="/742025-XciteSeason-CBlocks-AC.webp"
              alt="Small Appliances"
              width={300}
              height={300}
              className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 w-full bg-blue-900 bg-opacity-80 text-white p-2 text-center">
              <h3 className="text-sm md:text-base">الأجهزة المنزلية الصغيرة</h3>
            </div>
          </Link>
          <Link href="/offers" className="relative group overflow-hidden rounded-lg">
            <Image
              src="/742025-XciteSeason-CBlocks-TV.jpg"
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
