import { useEffect, useState } from "react"


export const Header = () => {
  const [active, setActive] = useState(false)

  const scrollYposition = () => {
    window.scrollY > 40 ? setActive(true) : setActive(false);
    console.log(active)
  }

  useEffect(() => {
    
    window.addEventListener("scroll", scrollYposition)

    return () => window.removeEventListener("scroll", scrollYposition)
  })

  return (
    <header className={`${active ? "fixed w-full   top-0  p-2 transition-all delay-200 !h-18":""} h-14 flex items-center justify-between `}>

      <nav className={`${active && "bg-zinc-950"} w-full flex justify-between  gap-4 relative h-full`}>
        <a>HEO</a>
      <ul className="flex items-center gap-4 text-gray-100 font-semibold pl-4 z-10">
      <a href="#" className="whitespace-nowrap tracking-tight">About us</a>
        <a href="#" className="whitespace-nowrap tracking-tight">Services</a>
        <a href="#" className="whitespace-nowrap tracking-tight">Case studies</a>
        </ul>

        menu
    </nav>

    
   

  </header>
  )
}



