import Link from "next/link"

const priceOffers = [
  {
    id: 1,
    title: "عروض تحت الـ 9.9 د.ك!",
    bgColor: "bg-blue-900",
    link: "/offers/under-10",
  },
  {
    id: 2,
    title: "عروض تحت الـ 49.9 د.ك!",
    bgColor: "bg-blue-800",
    link: "/offers/under-50",
  },
  {
    id: 3,
    title: "عروض تحت الـ 99.9 د.ك!",
    bgColor: "bg-blue-700",
    link: "/offers/under-100",
  },
]

export default function PriceOffers() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {priceOffers.map((offer) => (
        <Link
          key={offer.id}
          href={offer.link}
          className={`${offer.bgColor} text-white p-6 rounded-lg text-center hover:opacity-90 transition-opacity`}
        >
          <h3 className="text-xl md:text-2xl font-bold">{offer.title}</h3>
        </Link>
      ))}
    </div>
  )
}
