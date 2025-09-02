import { useEffect, useState } from "react"


export const Header = ({active, setActive}) => {
  const [isOpen, setIsOpen] = useState(false)
 

  const scrollYposition = () => {
    window.scrollY > 40 ? setActive(true) : setActive(false);
  }

  useEffect(() => {
    
    window.addEventListener("scroll", scrollYposition)

    return () => window.removeEventListener("scroll", scrollYposition)
  })


  useEffect(() => {
    
    window.addEventListener("click", setIsOpen(false))
  }, [])
 

  return (<>
    
    <header className={`${active ? "fixed w-full   top-0  p-2 transition-all delay-200 !h-18":""} h-14 w-screen absolute flex items-center justify-between z-30`}>

      {!isOpen && <nav className={`${active && "bg-zinc-950"} w-full flex justify-between  gap-4 relative ${isOpen && "absolute bg-transparent"} h-full items-center px-4`}>
        <a href="/" className="font-bold ">HEO</a>
        

        <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </nav>}

    
      <div className={`${!isOpen ? "translate-x-[100%] transition-all duration-300" : "translate-x-[0%] transition-all duration-300"} absolute top-0 right-0 z-50 w-[50%] md:w-[30%] xl:w-[20%] min-h-screen  bg-zinc-950`}>
       <div className="flex justify-between items-center px-4">
        <span className="h-14 flex items-center">navigation</span>
          <span onClick={() => setIsOpen(false)}>
             <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
          </span>
       </div>
        <div className="w-full h-full flex flex-col items-center">
          <ul className="flex flex-col py-4 gap-6 h-full w-full items-center text-sm font-semibold text-gray-300 ">
            <li >
              <a href="#about" className="hover:text-purple-950">
                About
              </a>
            </li>
             <li>
              <a href="#about" className="hover:text-purple-950">
                Projects
              </a>
            </li>
             <li>
              <a href="#skills" className="hover:text-purple-950">
                Skills
              </a>
            </li>
            
             <li>
              <a href="#about" className="hover:text-purple-950">
                Contact
              </a>
            </li>
            
          </ul>
        </div>
        <div>
          <h4></h4>
        </div>
      </div>

    </header>
  
     </>
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


