import {motion} from "framer-motion"
import { div, span } from "motion/react-client"
import { FiArrowRight, FiHeart, FiMail, FiMapPin } from "react-icons/fi"
import { SiGithub, SiTiktok, SiYoutube, } from "react-icons/si"
import { TiHeart, TiSocialTwitter, TiSocialDribbble, TiSocialFacebook } from "react-icons/ti"
import { FaCode, FaDatabase, FaTools } from "react-icons/fa"
import { AiFillDatabase } from "react-icons/ai"

//components
import {ExperienceCard} from "./components/experience-card"
import { experience } from "./constants"




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

  
    <section id="hero" className=" p-2 py-6 flex flex-col min-h-screen items-center justify-center">
        <div className=" max-w-152 md:max-w-202 gap-4 flex flex-col">

          <div className="flex items-center">

            <div className="h-3 w-3 animate-pulse rounded-full bg-green-600"/>
           <span className="text-green-600 w-fit py-1 px-3 rounded-full text-sm">available for exciting opportunities</span>
          </div>
          
          <h4 className="text-4xl md:text-6xl font-extrabold border-l-4  text-gray-950 pl-4">Hi, i'm Henry <br />  Elueme Ositadimma</h4>
          
        <h3>Full Stack Web Developer & Software Engineer . . . </h3>
        <p className="text-md bg-gray-200 text-gray-900 border-r-4 font-semibold pr-4 p-2">I am a dedicated full stack developer with over 4 years of experience, passionately crafting innovative, scalable, and user-centric web applications that drive impact, leveraging experties in React, Nodejs, Nextjs, Server actions and cutting-edge cloud technologies to deliver seamless digital solutions.</p>

          <div className="flex gap-4">

            <Button className="mt-4   text-base font-semibold w-fit">Download Resume</Button>
            

        <Button className="mt-4 text-base font-semibold w-fit bg-amber-800">Let's chat!</Button>
          </div>
          <div>Socials: Email|LinkedIn|Whatsapp</div>
    </div>
    </section>


    {/* HERO ENDS HERE */}

    {/* ABOUT US BEGINS HERE */}
    <section id="about" className="p-2 py-6 flex flex-col min-h-screen items-center justify-center">
        <div className="max-w-152 md:max-w-202  mx-auto w-full">
          
          <h4 className="text-md underline  font-bold my-8">about me</h4>
          <h4 className="text-3xl capitalize font-semibold text-center pb-4">A web developer passionate about <br/>bringing ideas to life</h4>
          <p>I am a Full stack developer specializing in frontend development with a strong understnding of backend architecture, I build dynamic and scalable applications. </p>
          <p>I am a Full stack developer specializing in frontend development with a strong understnding of backend architecture, I build dynamic and scalable applications. </p>
        
      </div>
        
    </section>
      {/* ABOUT US ENDS HERE */}
      


    <section id="skills" className="p-2 py-6 flex flex-col min-h-screen items-center justify-center">
      <div className="max-w-202 md:max-w-302  mx-auto w-full">

      

      <h4 className="text-md underline  font-bold my-8">skills & technologies</h4>
      <h4 className="text-3xl capitalize font-semibold text-center pb-4">Software technical experties</h4>
      <p className="text-center">Tools and technologies i frequently work with in actualizing ideas and bringing applications to life.</p>
      </div>

  <div className="py-6 grid grid-cols-1 sm:grid-cols-2  gap-4">
          {tecSkills.map((data) => (
            <div className={`max-w-[400px] sm:w-[300px] gap-2 shadow-[4px_4px_0px_0px] shadow-${data.color}-500 border border-zinc-200 rounded-sm p-3 flex flex-wrap`}>
              <h4 className="w-full flex gap-2 items-center text-sm animate-bounce"><span className="bg-amber-50 p-1 rounded-full text">{data.icon}</span>{data.title}</h4>
              {data.skills.map((skill) => (
                <span className="bg-gray-100 text-xs lg:text-sm  px-2 py-[2px] rounded-full" key={skill}>
                {skill}
                 </span>
              ))
                
              }
           
        </div>
    ))}
         
            
   
          </div>
       

 {/* PROJECTS ENDS  */}
  </section>

    
    {/* PROJECTS BEGINS HERE */}

 <section id="skills" className="p-2 py-6 flex flex-col min-h-screen items-center justify-center">
  <div className="max-w-202 md:max-w-302  mx-auto w-full">
          
          <h4 className="text-md underline  font-bold my-8">featured projects</h4>
          <h4 className="text-3xl capitalize font-semibold text-center pb-4">Software Projects built</h4>
       
  <div className="w-full container  mx-auto flex flex-col items-center gap-2">

  <p>Some of my recent projects showcasing my skill and experience, as well personal projects</p>
</div>

     <div className="mx-2 sm:mx-0 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {projects.map((data) => (
      <SkillCard data={data} />
      ))}
          </div>
 
</div>

 {/* PROJECTS ENDS  */}
</section>
      
<section id="skills" className="p-2 py-6 flex flex-col min-h-screen items-center justify-center">
  <div className="max-w-202 md:max-w-302  mx-auto w-full">
          
          <h4 className="text-md underline  font-bold my-8">work experience</h4>
          <h4 className="text-3xl capitalize font-semibold text-center pb-4">My Professional Software Journey</h4>
       
      <div className="w-full container  mx-auto flex flex-col items-center gap-2">

      <p>Some of the companies and clients i have ahd the pleasure of working and growing with.</p>
      </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {experience.map((exp) => (
              <ExperienceCard exp={exp} key={exp.id} />
            ))}

          </div>

     </div>
  </section>

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
    <button type="submit" className={`h-12 shadow-[4px_4px_0px_0px] shadow-black cursor-pointer border-2 px-4 text-md tracking-wide flex items-center  rounded-sm hover:shadow-[0px_0px_0] transition-all ${className}`}>
  {children}
</button>)
}

const projects = [
  {
    id: 1,
    title: "Health Tracker",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic accusantium inventore minus. Dolor impedit aspernatur odit sit voluptas itaque illo",
    skills: ["Nextjs", "Server actions", "MySQL", "Rest APIs", "Nodejs", "Tailwindcss", "Typescript"],
    link:"http://www.github.com"
  },

  {
    id: 2,
    title: "JB Properties and Housing",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic accusantium inventore minus. Dolor impedit aspernatur odit sit voluptas itaque illo",
    skills: ["Nextjs", "MongoDB", "MySQL", "Rest APIs", "Nodejs", "Tailwindcss", "Typescript"],
    link:"http://www.github.com"
  },

  {
    id: 3,
    title: "Herbspro Technology",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic accusantium inventore minus. Dolor impedit aspernatur odit sit voluptas itaque illo",
    skills: ["Nextjs", "MySQL", "Rest APIs", "Nodejs", "Tailwindcss", "Typescript"],
    link:"http://www.github.com"
  }
  ,
  {
    id: 4,
    title: "Herbspro Technology",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic accusantium inventore minus. Dolor impedit aspernatur odit sit voluptas itaque illo",
    skills: ["Nextjs", "MySQL", "Rest APIs", "Nodejs", "Tailwindcss", "Typescript"],
    link:"http://www.github.com"
  }


]

const tecSkills = [
  {
    id: 1,
    title: "Frontend",
    skills: ["HTML/CSS/JS", "ReactJs", "Typescript", "Tailwindcss", "GSAP"],
    color: "green",
    icon:<FaCode />
  },

  {
    id: 2,
    title: "Backend",
    skills: ["Nextjs", "MongoDB", "MySQL", "Rest APIs", "Nodejs", "Python"],
    color: "red",
    icon:<FaDatabase />
  },

  {
    id: 3,
    title: "Database",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Firbase", "Supabase"],
    color: "blue",
    icon:<AiFillDatabase />
  }
  ,
  {
    id: 4,
    title: "Software Tools",
    skills: ["Git", "Vercel", "Postman", "AWS", "GitHub","vite"],
    color: "purple",
    icon:<FaTools/>
  }


]


const SkillCard = ({data}) => {
  return (
    <div key={data.id}>
    <div></div>
    
    <div>
        <h4>{data.title}</h4>
          <h2>{data.title}</h2>
          <p>{data.desc}</p>
             <div className="flex flex-wrap gap-2">
             {data.skills.map((skill) => (
             <span className="bg-gray-100 text-xs lg:text-sm  px-2 py-1 rounded-full" key={skill}>
              {skill}
               </span>
        ))}
       
      </div>
    </div>
   </div>
  )
}

