import Image from "next/image"
import Link from "next/link"

export default function Header({ name, pages }) {
  return (
    <header className="flex flex-col relative bg-gradient-to-r from-blue to-blueLight w-full h-48">
      <div className="flex flex-col justify-around h-full px-6 z-10">
        <nav className="text-right flex flex-row gap-6 self-end">
          {pages?.map((page) => {
            return (
              <Link
                aria-label={page.label}
                key={page.id}
                href={page.link}
                className="px-6 py-2 min-w-100  hover:bg-blueLight hover:text-blue font-display uppercase tracking-wide"
              >
                {page.label}
              </Link>
            )
          })}
        </nav>
        <h1>{name}</h1>
      </div>
      <Image
        src={"/assets/img-1.jpg"}
        width={400}
        height={2000}
        className="w-full h-48 object-cover object-center absolute mb-6 opacity-[30%]"
        alt={name}
        priority
        aria-label=""
      />
    </header>
  )
}
