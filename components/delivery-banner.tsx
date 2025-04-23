import Image from "next/image"

export default function DeliveryBanner() {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto ">
        <div className="relative overflow-hidden rounded-lg">
          <div className="flex items-center justify-between bg-blue-900  ">
            <div className=" w-full w-full text-center">
                <Image
                  src="/1342025-WWETV-Generic-DP-EN.jpg"
                  alt="24/7 Delivery"
                  width={350}
                  height={350}
                  className="w-full h-auto"
                />
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
