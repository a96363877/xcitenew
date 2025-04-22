import Image from "next/image"

export default function DeliveryBanner() {
  return (
    <div className="bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-lg">
          <div className="flex items-center justify-between bg-blue-900 p-4 md:p-6">
            <div className="w-1/2 md:w-2/3">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Xcite Delivery"
                width={400}
                height={200}
                className="w-full h-auto"
              />
            </div>
            <div className="w-1/2 md:w-1/3 text-center">
              <div className="relative inline-block">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="24/7 Delivery"
                  width={150}
                  height={150}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <p className="text-lg md:text-2xl font-bold">طلبك</p>
                  <p className="text-lg md:text-2xl font-bold">يوصلك</p>
                  <p className="text-lg md:text-2xl font-bold">خلال</p>
                  <p className="text-xl md:text-3xl font-bold text-yellow-400">24 ساعة</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 text-center text-xs p-1">
            <p>المنتجات المختارة فقط</p>
          </div>
        </div>
      </div>
    </div>
  )
}
