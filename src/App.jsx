import {motion} from "framer-motion"
import { FiArrowRight, FiHeart, FiMail, FiMapPin } from "react-icons/fi"
import { SiGithub, SiTiktok, SiYoutube, } from "react-icons/si"
import { TiHeart, TiSocialTwitter, TiSocialDribbble, TiSocialFacebook } from "react-icons/ti"




export default function App() {
  return (
    <div>
      <header className="h-18 border-b-4 flex items-center justify-between bg-white">

        <nav className="w-full flex justify-between pr-4 gap-4">
          <ul className="flex items-center gap-4 text-gray-800 font-semibold pl-4">
          <li className="whitespace-nowrap tracking-tight">About us</li>
            <li className="whitespace-nowrap tracking-tight">Services</li>
            <li className="whitespace-nowrap tracking-tight">Case studies</li>
            </ul>
        </nav>

        <a href="/" className="h-full flex items-center justify-center border-l-2 px-6 text-xl font-bold tracking-tighter ">chudd <span className="text-orange-600">i</span> studio</a>

      </header>
    <div className="p-2 flex flex-col min-h-screen items-center justify-center">
        <div className="max-w-152 md:max-w-202 gap-4 flex flex-col">
          <span className="bg-gray-300 w-fit py-1 px-3 rounded-full uppercase text-xs tracking-widest font-semibold">design meets strategy</span>
          <h4 className="text-4xl md:text-7xl font-extrabold">Empowering your brand in the digital age. </h4>
          <p className="text-md text-gray-600">We are a creative studio helping innovative startups and business stand out in a world of short attention sapn with strategic web designs and branding</p>

          <Button className="text-base font-semibold w-fit bg-orange-400">Let's chat!</Button>

          <p></p>



         
      </div>
      </div>
      <footer className="w-full bg-black px-2 pt-10 text-gray-50 flex flex-col">
        <div className="flex flex-col md:flex-row w-full justify-between">
          <div className="flex flex-col gap-4 w-full md:max-w-md">
            <h4 className="uppercase font-extrabold text-xl tracking-tight">Chidi Elueme</h4>
            <p className="text-[14px]">A Fullstack focused web developer with expertise in building websites and web applications that drive the need market and enhances business and products.</p>
        </div>
          <div className="flex gap-4 justify-center py-4">
           
              <SiGithub className="w-5 h-6" />
            
            <TiSocialTwitter className="w-6 h-6" />
            <TiSocialDribbble className="w-6 h-6" />
            
            <TiSocialFacebook className="w-6 h-6"/>
          </div>
        </div>
        <div className="h-[1px] mb-4 mt-2 w-full bg-gray-900"/>
        <div className="w-full flex justify-center pb-6">

          
          <p className="text-[13px]  tracking-wide">@ Copyright 2025. Made by <span className="font-semibold">Chidi Elueme <span className="text-orange-400 border-b"> clutchdeveloper</span></span></p>
        </div>
</footer>
      </div>
  )
}



const Button = ({ children, className }) => {
  return(
    <button type="submit" className={`h-12 shadow-[4px_4px_0px_0px] cursor-pointer border-2 px-4 text-md tracking-wide flex items-center  rounded-sm hover:shadow-[0px_0px_0] transition-all ${className}`}>
  {children}
</button>)
}