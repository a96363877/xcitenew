import Image from "next/image"
import Link from "next/link"

const categories = [
  {
    id: 1,
    name: "المكيفات",
    image: "/placeholder.svg?height=300&width=300",
    link: "/categories/air-conditioners",
  },
  {
    id: 2,
    name: "التلفزيونات والشاشات",
    image: "/placeholder.svg?height=300&width=300",
    link: "/categories/tvs",
  },
  {
    id: 3,
    name: "الهواتف والاكسسوارات",
    image: "/placeholder.svg?height=300&width=300",
    link: "/categories/mobiles",
  },
  {
    id: 4,
    name: "الكمبيوترات والتابلت",
    image: "/placeholder.svg?height=300&width=300",
    link: "/categories/computers",
  },
]

export default function CategorySection() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {categories.map((category) => (
        <Link key={category.id} href={category.link} className="relative group overflow-hidden rounded-lg">
          <Image
            src={category.image || "/placeholder.svg"}
            alt={category.name}
            width={300}
            height={300}
            className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute bottom-0 w-full bg-blue-900 bg-opacity-80 text-white p-2 text-center">
            <h3 className="text-sm md:text-base">{category.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  )
}
