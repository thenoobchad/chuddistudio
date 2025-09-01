import { useEffect, useState } from "react"


export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState(false)

  const scrollYposition = () => {
    window.scrollY > 40 ? setActive(true) : setActive(false);
  }

  useEffect(() => {
    
    window.addEventListener("scroll", scrollYposition)

    return () => window.removeEventListener("scroll", scrollYposition)
  })


  useEffect(() => {
    
    window.addEventListener("click", setIsOpen(false))
  },[])

 
  
 

  return (
    <header className={`${active ? "fixed w-full   top-0  p-2 transition-all delay-200 !h-18":""} h-14 flex items-center justify-between z-30`}>

      <nav className={`${active && "bg-zinc-950"} w-full flex justify-between  gap-4 relative h-full items-center px-4`}>
        <a>HEO</a>
      <ul className="flex items-center gap-4 text-gray-100 font-semibold pl-4 z-10">
      <a href="#" className="whitespace-nowrap tracking-tight">About us</a>
        <a href="#" className="whitespace-nowrap tracking-tight">Services</a>
        <a href="#" className="whitespace-nowrap tracking-tight">Case studies</a>
        </ul>

        <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>

    
      <div className={`${!isOpen ? "translate-x-[100%] transition-all duration-300" : "translate-x-[0%] transition-all duration-300"} absolute top-0 right-0 z-50 w-[50%] md:w-[30%] xl:w-[20%] min-h-screen bg-gray-950 `}>
        <span className="h-14 flex items-center">navigation</span>
        <div className="w-full h-full flex flex-col items-center">
          <ul className="flex flex-col py-4 gap-4">
            <li>About</li>
            <li>Projects</li>
            <li>Skills</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

  </header>
  )
}


const HamburgerMenu = ({ isOpen, setIsOpen }) => {
  
  return (
    <div className="  flex  flex-col gap-1  justify-center px-2 mt-1 relative z-60" onClick={() => setIsOpen(prev => !prev)}>
      <div className={`${isOpen ? "-rotate-45 translate-y-2 transition-all ease-in-out duration-300": "-rotate-0 transition-all ease-in-out duration-300"} h-1 w-8 bg-white/90 `}/>
    
      <div className={`${isOpen ? "rotate-45 -translate-y transition-all ease-in-out duration-300": "-rotate-0 transition-all ease-in-out duration-300"} h-1 w-8  mb-2 bg-white/90`}/>
    </div>
  )
}


