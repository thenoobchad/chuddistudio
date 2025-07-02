import {motion} from "framer-motion"
import { FiArrowRight, FiHeart, FiMail, FiMapPin } from "react-icons/fi"
import { SiGithub, SiTiktok, SiYoutube, } from "react-icons/si"
import { TiHeart, TiSocialTwitter } from "react-icons/ti"




export default function App() {
  return (
    <div>
      <header className="h-18 border-b-4 flex items-center justify-between shadow-">

        <nav className="w-full flex justify-between pr-4 gap-4">
          <ul className="flex items-center gap-4 text-gray-800 font-semibold pl-8">
          <li>About us</li>
            <li>Services</li>
            <li>Case studies</li>
            </ul>
        </nav>

        <a href="/" className="h-full flex items-center justify-center border-l-2 px-8 text-xl font-bold tracking-tighter ">chudd <span className="text-orange-600">i</span> studio</a>

        {/* <nav className="w-full flex justify-end pr-4 gap-4">
          <Button><SiGithub size={25} /></Button>
          
          <Button><TiSocialTwitter size={25} /></Button>
          
          <Button><SiTiktok  size={25}/></Button>
        </nav> */}
      </header>
    <div className="p-2 flex flex-col min-h-screen items-center justify-center">
        <div className="max-w-152 md:max-w-202 gap-4 flex flex-col">
          <span className="bg-gray-300 w-fit py-1 px-3 rounded-full uppercase text-xs tracking-widest font-semibold">design meets strategy</span>
          <h4 className="text-4xl md:text-7xl font-extrabold">Empowering your brand in the digital age. </h4>
          <p className="text-md text-gray-600">We are a creative studio helping innovative startups and business stand out in a world of short attention sapn with strategic web designs and branding</p>

          <Button className="text-base font-semibold w-fit bg-orange-400">Let's chat!</Button>
</div>

   
      </div>
      </div>
  )
}



const Button = ({ children, className }) => {
  return(
    <button type="submit" className={`h-12 shadow-[4px_4px_0px_0px] cursor-pointer border-2 px-4 text-md tracking-wide flex items-center  rounded-sm hover:shadow-[0px_0px_0] transition-all ${className}`}>
  {children}
</button>)
}