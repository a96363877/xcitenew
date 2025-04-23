"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useCart } from "@/context/cart-context"

const offers = [
  {
    id: 1,
    title: "خصم 20% على أجهزة دايسون",
    image: "/1.jpg",
    originalPrice: 199.9,
    discountedPrice: 159.9,
    code: "DYSON20",
    expiryDate: "2023-05-30",
    category: "electronics",
  },
  {
    id: 2,
    title: "اشتر قطعة واحصل على الثانية بنصف السعر",
    image: "/2.jpg",
    originalPrice: 49.9,
    discountedPrice: 49.9,
    code: "BUY1GET50",
    expiryDate: "2023-05-25",
    category: "mobiles",
  },
  {
    id: 3,
    title: "خصم 15% على الأجهزة المنزلية",
    image: "/3.jpg",
    originalPrice: 299.9,
    discountedPrice: 254.9,
    code: "HOME15",
    expiryDate: "2023-06-10",
    category: "appliances",
  },
  {
    id: 4,
    title: "خصم 30% على الإكسسوارات",
    image: "/5.jpg",
    originalPrice: 29.9,
    discountedPrice: 20.9,
    code: "ACC30",
    expiryDate: "2023-05-20",
    category: "accessories",
  },
  {
    id: 5,
    title: "عروض نهاية الأسبوع - خصم حتى 40%",
    image: "/0069289_iphone-16-plus.webp",
    originalPrice: 499.9,
    discountedPrice: 299.9,
    code: "WEEKEND40",
    expiryDate: "2023-05-21",
    category: "electronics",
  },
  {
    id: 6,
    title: "خصم 25% على أجهزة الكمبيوتر",
    image: "/742025-XciteSeason-CBlocks-Laptop.jpg",
    originalPrice: 699.9,
    discountedPrice: 524.9,
    code: "LAPTOP25",
    expiryDate: "2023-06-15",
    category: "computers",
  },
]

export default function OffersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">أحدث العروض والخصومات</h1>
        <p className="text-gray-600">تسوق أفضل العروض والخصومات على منتجاتنا</p>
      </div>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-6">
          <TabsTrigger value="all">الكل</TabsTrigger>
          <TabsTrigger value="electronics">الإلكترونيات</TabsTrigger>
          <TabsTrigger value="mobiles">الهواتف</TabsTrigger>
          <TabsTrigger value="appliances">الأجهزة المنزلية</TabsTrigger>
          <TabsTrigger value="computers">الكمبيوترات</TabsTrigger>
          <TabsTrigger value="accessories">الإكسسوارات</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offers.map((offer) => (
              <OfferCard key={offer.id} offer={offer} />
            ))}
          </div>
        </TabsContent>

        {["electronics", "mobiles", "appliances", "computers", "accessories"].map((category) => (
          <TabsContent key={category} value={category}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {offers
                .filter((offer) => offer.category === category)
                .map((offer) => (
                  <OfferCard key={offer.id} offer={offer} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <div className="bg-blue-900 text-white rounded-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">اشترك في نشرتنا الإخبارية</h2>
            <p>احصل على أحدث العروض والخصومات مباشرة إلى بريدك الإلكتروني</p>
          </div>
          <div className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              className="px-4 py-2 rounded-l-md w-full md:w-64 text-black"
            />
            <Button className="rounded-l-none bg-red-600 hover:bg-red-700">اشترك</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function OfferCard({ offer }:any) {
  const {addItem}=useCart() as any
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative">
        <img
          src={offer.image || "/placeholder.svg"}
          alt={offer.title}
          width={300}
          height={300}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-md text-sm">خصم</div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{offer.title}</h3>
        <div className="flex items-center mb-2">
          <span className="text-gray-500 line-through mr-2">{offer.originalPrice} د.ك</span>
          <span className="text-red-600 font-bold">{offer.discountedPrice} د.ك</span>
        </div>
        <div className="bg-gray-100 p-2 rounded-md mb-3 text-center">
          <p className="text-sm">
            كود الخصم: <span className="font-bold">{offer.code}</span>
          </p>
        </div>
        <p className="text-sm text-gray-500 mb-4">ينتهي في: {offer.expiryDate}</p>
        <Button onClick={()=>{
          addItem(offer)
        }} className="w-full">أضف إلى السلة</Button>
      </div>
    </div>
  )
}
