"use client"

import Image from "next/image"
import Link from "next/link"
import { Search, User, ShoppingBag, Menu, PointerIcon, ChevronRight } from "lucide-react"
import { useRef } from "react"

export default function Home() {
  const sliderRef = useRef<HTMLDivElement>(null)

  // Function to scroll to a specific slide
  const scrollToSlide = (index: number) => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.scrollWidth / 4
      sliderRef.current.scrollTo({
        left: slideWidth * index,
        behavior: "smooth",
      })
    }
  }

  return (
    <main className="min-h-screen bg-gray-100">
    
      {/* iPhone Section - Slider */}
      <section className="bg-[#0a3c7b] text-white relative">
        <div
          ref={sliderRef}
          className="overflow-x-auto scrollbar-hide flex gap-4 snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
            <div
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          id="promoBannerSlider"
        >
          {/* Promo 1 */}
          <img src="https://xcite.a.bigcontent.io/v1/static/742025-XciteSeason-Generic-EN?img404=default&w=750&qlt=75&fmt=auto" alt="Promo TV"  className="w-full h-24" />

          {/* Promo 2 */}
          <img src="https://cdn.media.amplience.net/i/xcite/2242025-Edge60-Fusion-DP-EN?img404=default&w=640&qlt=75&fmt=auto" alt="Promo TV"  className="w-full h-24" />
         

          {/* Promo 3 */}
          <img src="https://cdn.media.amplience.net/i/xcite/HONGQI_APRIL_DP_EN?img404=default&w=640&qlt=75&fmt=auto" alt="Promo TV"  className="w-full h-24" />

        </div>

        </div>

        {/* Slider Navigation Dots */}
        <div className="absolute bottom-1 left-0 right-0 flex justify-center gap-1 mt-2">
          <button
            className="w-2 h-2 rounded-full bg-white opacity-70 hover:opacity-100"
            onClick={() => scrollToSlide(0)}
            aria-label="Slide 1"
          />
          <button
            className="w-2 h-2 rounded-full bg-white opacity-70 hover:opacity-100"
            onClick={() => scrollToSlide(1)}
            aria-label="Slide 2"
          />
          <button
            className="w-2 h-2 rounded-full bg-white opacity-70 hover:opacity-100"
            onClick={() => scrollToSlide(2)}
            aria-label="Slide 3"
          />
          <button
            className="w-2 h-2 rounded-full bg-white opacity-70 hover:opacity-100"
            onClick={() => scrollToSlide(3)}
            aria-label="Slide 4"
          />
        </div>
      </section>

      {/* Categories Grid */}
      <section className="grid grid-cols-2 gap-[2px] bg-gray-200">
        {/* Phones & Accessories */}
        <Link href="/offers"  className="relative h-40  bg-white">
          <img src="https://cdn.media.amplience.net/i/xcite/742025-XciteSeason-CBlocks-Phones?img404=default&w=1080&qlt=75&fmt=auto" alt="Phones & Accessories"   className="w-full h-40" />
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-1 text-sm font-medium">
            Phones & Accessories
          </div>
        </Link>

        {/* TVs & Accessories */}
        <Link href="/offers"  className="relative h-40  bg-white">
          <img src="https://cdn.media.amplience.net/i/xcite/742025-XciteSeason-CBlocks-TV?img404=default&w=1080&qlt=75&fmt=auto" alt="TVs & Accessories"  className="w-full h-40"  />
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-1 text-sm font-medium">
            TVs & Accessories
          </div>
        </Link>

        {/* Computers & Tablets */}
        <Link href="/offers"  className="relative h-40 bg-white">
          <img src="https://cdn.media.amplience.net/i/xcite/742025-XciteSeason-CBlocks-Laptop?img404=default&w=1080&qlt=75&fmt=auto" alt="Computers & Tablets"  className="w-full h-40" />
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-1 text-sm font-medium">
            Computers & Tablets
          </div>
        </Link>

        {/* Air Conditioning */}
        <Link href="/offers"  className="relative h-40 bg-white">
          <img src="https://cdn.media.amplience.net/i/xcite/742025-XciteSeason-CBlocks-AC?img404=default&w=1080&qlt=75&fmt=auto" alt="Air Conditioning"   className="w-full h-40" />
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-1 text-sm font-medium">
            Air Conditioning
          </div>
        </Link>
      </section>

      {/* Promo Banner Slider */}
      <section className="relative h-32 bg-[#0a3c7b] text-white">
        <div
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          id="promoBannerSlider"
        >
          {/* Promo 1 */}
              <Image src="/1642025-LenovoLOQ-Generic-DP-EN.jpg" alt="Promo TV" fill className="object-contain" />

          {/* Promo 2 */}
          <Image src="/1342025-WWETV-Generic-DP-EN.jpg" alt="Promo TV" fill className="object-contain" />
         

          {/* Promo 3 */}
          <Image src="/1642025-LenovoLOQ-Generic-DP-EN.jpg" alt="Promo TV" fill className="" />

        </div>

        {/* Slider Navigation Thumbnails */}
        <div className="absolute bottom-1 left-0 right-0 flex justify-center gap-2 px-3">
          <button
            className="w-5 h-5 border-2 border-transparent hover:border-white overflow-hidden rounded transition-all"
            onClick={() => {
              document.getElementById("promoBannerSlider")?.scrollTo({
                left: 0,
                behavior: "smooth",
              })
            }}
            aria-label="Promo 1"
          >
            <div className="relative w-full h-full">
<h1 style={{fontSize:14,fontWeight:900}}>.</h1>
            </div>
          </button>
          <button
            className="w-5 h-5 border-2 border-transparent hover:border-white overflow-hidden rounded transition-all"
            onClick={() => {
              const slider = document.getElementById("promoBannerSlider")
              if (slider) {
                slider.scrollTo({
                  left: slider.clientWidth,
                  behavior: "smooth",
                })
              }
            }}
            aria-label="Promo 2"
          >
            <div className="relative w-full h-full">
            <h1 style={{fontSize:14,fontWeight:900}}>.</h1>
            </div>
          </button>
          <button
            className="w-5 h-5 border-2 border-transparent hover:border-white overflow-hidden rounded transition-all"
            onClick={() => {
              const slider = document.getElementById("promoBannerSlider")
              if (slider) {
                slider.scrollTo({
                  left: slider.clientWidth * 2,
                  behavior: "smooth",
                })
              }
            }}
            aria-label="Promo 3"
          >
            <div className="relative w-full h-full">
            <h1 style={{fontSize:14,fontWeight:900}}>.</h1>
            </div>
          </button>
        </div>
      </section>

      {/* More Categories */}
      <section className="grid grid-cols-2 gap-[2px] bg-gray-200">
        {/* Large Home Appliances */}
        <Link href="/offers" className="relative h-40 bg-white">
        <img src="https://cdn.media.amplience.net/i/xcite/742025-XciteSeason-CBlocks-LA?img404=default&w=1080&qlt=75&fmt=auto" alt="Small Home Appliances" className="w-full  h-40" />
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-1 text-sm font-medium">
            Large Home Appliances
          </div>
        </Link>

        {/* Small Home Appliances */}
        <Link href="/offers" className="relative h-40 bg-white">
          <img src="https://cdn.media.amplience.net/i/xcite/742025-XciteSeason-CBlocks-SA?img404=default&w=1080&qlt=75&fmt=auto" alt="Small Home Appliances" className="w-full  h-40" />
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-1 text-sm font-medium">
            Small Home Appliances
          </div>
        </Link>

        {/* Gaming */}
        <Link href="/offers" className="relative h-40 bg-white">
        <img src="https://cdn.media.amplience.net/i/xcite/742025-XciteSeason-CBlocks-Gaming?img404=default&w=1080&qlt=75&fmt=auto" alt="Small Home Appliances" className="w-full h-40" />
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-1 text-sm font-medium">Gaming</div>
        </Link>

        {/* Digital Cards */}
        <Link href="/offers" className="relative h-40 bg-white">
        <img src="https://cdn.media.amplience.net/i/xcite/742025-XciteSeason-CBlocks-dCards_1?img404=default&w=1080&qlt=75&fmt=auto" alt="Small Home Appliances" className="w-full  h-40" />
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-1 text-sm font-medium">
            Digital Cards
          </div>
        </Link>
      </section>
      <section className="flex flex-col">
        {/* Deal Category 1 */}
        <div className="bg-gradient-to-r from-[#003366] to-[#0099cc] text-white py-3 px-4 text-center font-bold text-xl border-b border-white">
          DEALS BELOW 9.9 KD!
        </div>

        {/* Deal Category 2 */}
        <div className="bg-gradient-to-r from-[#003366] to-[#0099cc] text-white py-3 px-4 text-center font-bold text-xl border-b border-white">
          DEALS BELOW 49.9 KD!
        </div>

        {/* Deal Category 3 */}
        <div className="bg-gradient-to-r from-[#003366] to-[#0099cc] text-white py-3 px-4 text-center font-bold text-xl">
          DEALS BELOW 99.9 KD!
        </div>
      </section>

      {/* Hero Picks Section */}
      <section className="bg-white p-3">
        <div className="flex items-center justify-between mb-2">
          <h2 className="font-bold text-lg">Hero Picks</h2>
          <Link href="#" className="text-[#0a3c7b] text-sm flex items-center">
            View all <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {/* Product 1 */}
          <Link href="#" className="flex flex-col items-center">
            <div className="relative w-full aspect-square mb-1">
              <img src="https://cdn.media.amplience.net/s/xcite/551133-SET?img404=default&w=640&qlt=75&fmt=auto" alt="Smart TV"  className="object-contain" />
            </div>
            <div className="text-center w-full">
              <div className="text-xs line-clamp-2 h-8">Smart 4K UHD TV 55"</div>
              <div className="text-sm font-bold text-[#0a3c7b]">199.900 KD</div>
              <div className="text-xs line-through text-gray-500">229.900 KD</div>
              <div className="bg-red-600 text-white text-xs rounded w-full mt-1">SAVE</div>
            </div>
          </Link>

          {/* Product 2 */}
          <Link href="#" className="flex flex-col items-center">
            <div className="relative w-full aspect-square mb-1">
              <img src="https://cdn.media.amplience.net/s/xcite/546461-SET?img404=default&w=640&qlt=75&fmt=auto" alt="Massage Chair" className="object-contain" />
            </div>
            <div className="text-center w-full">
              <div className="text-xs line-clamp-2 h-8">Rest Massage Chair 3D</div>
              <div className="text-sm font-bold text-[#0a3c7b]">369.000 KD</div>
              <div className="text-xs line-through text-gray-500">399.000 KD</div>
              <div className="bg-red-600 text-white text-xs rounded w-full mt-1">SAVE</div>
            </div>
          </Link>

          {/* Product 3 */}
          <Link href="#" className="flex flex-col items-center">
            <div className="relative w-full aspect-square mb-1">
              <img src="https://cdn.media.amplience.net/s/xcite/551227-SET?img404=default&w=640&qlt=75&fmt=auto" alt="Tablet"  className="object-contain" />
            </div>
            <div className="text-center w-full">
              <div className="text-xs line-clamp-2 h-8">Galaxy Tab S9 Ultra</div>
              <div className="text-sm font-bold text-[#0a3c7b]">249.900 KD</div>
              <div className="text-xs line-through text-gray-500">279.900 KD</div>
              <div className="bg-red-600 text-white text-xs rounded w-full mt-1">SAVE</div>
            </div>
          </Link>
        </div>
      </section>

    </main>
  )
}
