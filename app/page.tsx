"use client"

import Image from "next/image"
import Link from "next/link"
import { Search, User, ShoppingBag, Menu, PointerIcon } from "lucide-react"
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
          <img src="https://xcite.a.bigcontent.io/v1/static/742025-XciteSeason-Generic-EN?img404=default&w=750&qlt=75&fmt=auto" alt="Promo TV"  className="w-full h-auto" />

          {/* Promo 2 */}
          <img src="https://xcite.a.bigcontent.io/v1/static/742025-XciteSeason-Generic-EN?img404=default&w=750&qlt=75&fmt=auto" alt="Promo TV"  className="w-full h-auto" />
         

          {/* Promo 3 */}
          <img src="https://xcite.a.bigcontent.io/v1/static/742025-XciteSeason-Generic-EN?img404=default&w=750&qlt=75&fmt=auto" alt="Promo TV"  className="w-full h-auto" />

        </div>

        </div>

        {/* Slider Navigation Dots */}
        <div className="flex justify-center gap-1 mt-2">
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
    </main>
  )
}
