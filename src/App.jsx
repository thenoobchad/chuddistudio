import {motion} from "framer-motion"
import { div } from "motion/react-client"
import { FiArrowRight, FiHeart, FiMail, FiMapPin } from "react-icons/fi"
import { SiGithub, SiTiktok, SiYoutube, } from "react-icons/si"
import { TiHeart, TiSocialTwitter, TiSocialDribbble, TiSocialFacebook } from "react-icons/ti"




export default function App() {
  return (
    
    <main className="w-full">
    <header className="h-18 border-b-4 flex items-center justify-between bg-white">

      <nav className="w-full flex justify-between pr-4 gap-4">
        <ul className="flex items-center gap-4 text-gray-800 font-semibold pl-4">
        <a href="#" className="whitespace-nowrap tracking-tight">About us</a>
          <a href="#" className="whitespace-nowrap tracking-tight">Services</a>
          <a href="#" className="whitespace-nowrap tracking-tight">Case studies</a>
          </ul>
      </nav>

      <a href="/" className=" h-full flex items-center justify-center border-l-2 px-2 text-xl font-bold tracking-tighter ">chud <span className="text-orange-600">i</span> studio</a>
     

    </header>
    {/* HEADER ENDS HERE */}
    
    {/* HERO STARTS HERE */}

  
  <section className=" p-2 py-6 flex flex-col min-h-screen items-center justify-center">
        <div className=" max-w-152 md:max-w-202 gap-4 flex flex-col">

          <div className="flex items-center">

            <div className="h-3 w-3 animate-pulse rounded-full bg-green-600"/>
           <span className="text-green-600 w-fit py-1 px-3 rounded-full text-sm">available for exciting opportunities</span>
          </div>
          
          <h4 className="text-4xl md:text-6xl font-extrabold border-l-4  text-gray-950 pl-4">Hi, i'm Henry <br />  Elueme Ositadimma</h4>
          
        <h3>Full Stack Web Developer & Software Engineer . . . </h3>
        <p className="text-md bg-gray-200 text-gray-900 border-r-4 font-semibold pr-4 p-2">I am a dedicated full stack developer with over 4 years of experience, passionately crafting innovative, scalable, and user-centric web applications that drive impact, leveraging experties in React, Nodejs, Nextjs, Server actions and cutting -edge cloud technologies to deliver seamless digital solutions.</p>

          <div className="flex gap-4">

            <Button className="mt-4   text-base font-semibold w-fit">Download Resume</Button>
            

        <Button className="mt-4 text-base font-semibold w-fit bg-orange-400">Let's chat!</Button>
          </div>
          <div>Socials: Email|LinkedIn|Whatsapp</div>
    </div>
    </section>


    {/* HERO ENDS HERE */}

    {/* ABOUT US BEGINS HERE */}
    <section className="p-2 py-6 flex flex-col min-h-screen items-center justify-center">
        <div className="container mx-auto w-full">
          <h4 className="text-md underline font-mono font-bold">about me</h4>
          <p>I am a Full stack developer specializing in frontend development with a strong understnding of backend architecture, I build dynamic and scalable applications. </p>
          <p>I am a Full stack developer specializing in frontend development with a strong understnding of backend architecture, I build dynamic and scalable applications. </p>
        
      </div>
        
    </section>
    {/* ABOUT US ENDS HERE */}

    
    {/* SERVICES BEGINS HERE */}

    <section className="p-2 py-6 flex flex-col min-h-screen items-center justify-center">

      
{/* PROJECTS BEGINS  */}
<div className="w-full container  mx-auto flex flex-col items-center gap-2">

  <div className="h-1 w-15 bg-black" />
  <p className="max-w-152 md:max-w-202">Some business and startup websites we ahve created over the years with each project containing it's own case study. each tailored to meet our clients needs. Kindly explore our catalog.</p>
</div>

<div className="py-6">

 
</div>

 {/* PROJECTS ENDS  */}
      </section>
      

    <section className="p-2 py-6 flex flex-col min-h-screen items-center justify-center">

      
      {/* PROJECTS BEGINS  */}
      <div className="w-full flex flex-col items-center gap-2">
        <h4 className="text-xl font-extrabold uppercase ">Projects</h4>
        <div className="h-1 w-15 bg-black" />
        <p className="max-w-152 md:max-w-202">Some business and startup websites we ahve created over the years with each project containing it's own case study. each tailored to meet our clients needs. Kindly explore our catalog.</p>
      </div>

      <div className="py-6">

        <div className="border-2 max-w-[400px] sm:w-[300px] h-[350px] shadow-[4px_4px_0px_0px] rounded-sm p-2">
          <span>View site</span>
        </div>
      </div>

       {/* PROJECTS ENDS  */}
    </section>
    {/* SERVICES ENDS HERE */}

    {/*  */}
   
    <footer className="w-full bg-black px-2 pt-10 text-gray-50 flex flex-col">
      <div className="flex flex-col md:flex-row w-full justify-between">
        <div className="flex flex-col gap-4 w-full md:max-w-md">
          <h4 className="uppercase font-bold text-[18px] tracking-tight">Chidi Elueme</h4>
          <p className="text-[14px]">A Fullstack focused web developer with expertise in building websites and web applications that drive the need market and enhances business and products.</p>
      </div>
        <div className="flex gap-4 justify-center py-4">
         <a href="https://github.com/thenoobchad">
            <SiGithub className="w-5 h-6" />
          </a>
          
          
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
    </main>
  )
}




const Button = ({ children, className }) => {
  return(
    <button type="submit" className={`h-12 shadow-[4px_4px_0px_0px] cursor-pointer border-2 px-4 text-md tracking-wide flex items-center  rounded-sm hover:shadow-[0px_0px_0] transition-all ${className}`}>
  {children}
</button>)
}