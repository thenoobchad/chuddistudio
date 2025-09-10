

//components
import {ExperienceCard} from "./components/experience-card"
import { experience } from "./constants"
import { MdLocationOn } from "react-icons/md"
import { IoMail } from "react-icons/io5"
import { Footer } from "./components/footer"
import { Header } from "./components/header"

//icons
import { FaCode, FaDatabase, FaTools } from "react-icons/fa"
import { AiFillDatabase } from "react-icons/ai"
import { SectionHeading } from "./components/section-heading"

//images
import restaurant from "../public/images/restaurant.png"
import zentryclone from "../public/images/zentryclone.png"
import chatgptclone from "../public/images/chatgpt.png"
import { IoLogoWhatsapp } from "react-icons/io"
import { useState } from "react"


//Video file
import video from "../public/files/screen.mp4"


export const tecSkills = [
  
  {
    id: 1,
    title: "Frontend",
    skills: ["HTML/CSS/JS", "ReactJs", "Typescript", "Tailwindcss", "GSAP"],
    color: "yellow",
    icon: <FaCode/>,
  },
  {
    id: 2,
    title: "Backend",
    skills: ["Nextjs", "MongoDB", "MySQL", "Rest APIs", "Nodejs", "Python"],
    color: "red",
    icon:<FaDatabase/>,
  },

  {
    id: 3,
    title: "Database",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Firbase", "Supabase"],
    color: "blue",
    icon:<AiFillDatabase/>,
  }
  ,
  {
    id: 4,
    title: "Software Tools",
    skills: ["Git", "Vercel", "Postman", "AWS", "GitHub","vite"],
    color: "purple",
    icon:<FaTools/>,
  }


]


export default function App() {
  const [active, setActive] = useState(false)

  const [showVideo, setShowVideo] = useState(false)


  const handleVideoEnd = () => {
    setShowVideo(false)
   }
  
  return (
    <>
      {showVideo ? (
        <div className="fixed top-0 left-0 w-[100%] h-[100%]">
          <video autoPlay muted playsInline onEnded={handleVideoEnd} className="w-full h-full object-contain">
            <source src={video} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
      </div>
      ) : (
         <main className="w-full">
      <Header active={active} setActive={setActive}/>
        
    
      {/* HERO STARTS HERE */}

    
        <section id="hero" className=" p-2 py-6 flex flex-col h-screen relative items-center justify-center bg-cover bg-no-repeat bg-center" style={{ backgroundImage: "url('/images/bgcode.jpg')" }}>
          <div className="absolute inset-0 bg-zinc-950/95 z-10"/>
          <div className="relative z-20 max-w-152 md:max-w-202 gap-4 flex flex-col">

            
            
            <h4 className="text-4xl md:text-6xl font-extrabold ">Hi, i'm Henry <br />  Elueme Ositadimma</h4>
            
          <h3 className="font-semibold">Full Stack Web Developer & Software Engineer . . . </h3>
          
            <div className="flex gap-4">

              <a href="/files/henry_cv.pdf" download>
                <Button className="mt-4 text-base font-semibold w-fit text-white bg-gray-950">Download Resume</Button>
              </a>
              

          <Button className="mt-4 text-base font-semibold w-fit text-white bg-purple-950">Let's chat!</Button>
            </div>
            
      </div>
      </section>


      {/* HERO ENDS HERE */}

      {/* ABOUT ME */}
      <section id="about" className="text-white bg-gray-950 p-2 py-6 flex flex-col min-h-screen items-center justify-center">
          <div className="max-w-202 md:max-w-302  mx-auto w-full pb-10">

            <h4 className="text-md underline  font-bold my-8 text-zinc-500">about me</h4>
            <h4 className="text-3xl capitalize font-semibold text-center pb-4">A web developer passionate about <br/>bringing ideas to life</h4>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-1/2 w-full">
                
                <img src="/images/hero.png" className="h-full w-full bg-cover bg-no-repeat animate-pulse"/>
              </div>
              <div className="md:w-1/2 w-full flex justify-center items-center flex-col gap-2">
          
                    <p className="text-justify">I am a Full stack developer specializing in frontend development with a strong understnding of backend architecture, I build dynamic and scalable applications using Vite, Next.js and modern backend solutions like server actions, drizzle and databases utilizing MySQL and Relational Database to create seamless user experience and robust backend systems. </p>
                    <p className="text-justify">My goal is to leverage my understanding of fullstack development to deliver impactful digital products, solve real-world problems, and grow into a technical leadership role where I can contribute to building scalable engineering teams and systems.</p>
              </div>
            
            
          </div>
        </div>
          
      </section>
        {/* ABOUT US ENDS HERE */}
        

  {/* SKILLS & EXPERTIES */}
      <section id="skills" className="p-2 py-6 flex flex-col min-h-screen items-center justify-center">
        <div className="max-w-202 md:max-w-302  mx-auto w-full">

        
        <SectionHeading section="skills & technologies" heading="Software technical experties" subheading="Tools and technologies i frequently work with in actualizing ideas and bringing applications to life."/>
        
      </div>
    <div className="py-6 grid grid-cols-1 sm:grid-cols-2  gap-4 ">
            {tecSkills.map((data) => (
              <div className={`max-w-[400px] sm:w-[300px] gap-2 bg-black  p-3 flex flex-wrap`}>
                <h4 className="w-full flex gap-2 items-center text-md text-white"><span className="bg-purple-500 p-1 rounded-full text-white">{data.icon}</span>{data.title}</h4>
                {data.skills.map((skill) => (
                  <span className="text-purple-400 font-semibold text-xs lg:text-sm  px-1 py-[1px]" key={skill}>
                  {skill}
                  </span>
                )) }

          </div>
      ))}
          
              
    
            </div>
        


    </section>

      
    {/* FEATURED PROJECT SESSION */}
  <section id="skills" className="p-2 py-6 flex flex-col min-h-screen items-center justify-center">
    <div className="max-w-202 md:max-w-302  mx-auto w-full">
            <SectionHeading section="featured projects" heading="Software Projects built" subheading="Some of my recent projects showcasing my skill and experience, as well personal projects"/>
        
          
            <div className="w-full container  mx-auto flex flex-col items-center gap-2">
              

      </div>

      <div className="mx-2 sm:mx-0 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {projects.map((data) => (
        <SkillCard data={data} />
        ))}
            </div>
  
  </div>

  {/* WORK EXPERIENCE */}
  </section>
        
  <section id="skills" className="p-2 py-6 flex flex-col min-h-screen items-center justify-center">
          <div className="max-w-202 md:max-w-302  mx-auto w-full">
            <SectionHeading section="work experience" heading="My Professional Software Journey" subheading="Some of the companies and clients i have ahd the pleasure of working and growing with."/>
            
        
        <div className="w-full container  mx-auto flex flex-col items-center gap-2">

        <p></p>
        </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {experience.map((exp) => (
                <ExperienceCard exp={exp} key={exp.id} />
              ))}

            </div>

      </div>
    </section>

      
    {/* GET IN TOUCH SECTION */}

      <section id="skills" className="p-2 py-6 flex flex-col min-h-screen items-center justify-center">
          <div className="max-w-202 md:max-w-302  mx-auto w-full">
            <SectionHeading section="get in touch" heading="Share Your Ideas, Lets Make it Happen" subheading={`I will very much love to see your project become a real world application. Got an interesting project?  Let's discus how we can work together.`} />
            
          
          </div>
          <div className="w-full container  mx-auto flex flex-col items-center gap-2 justify-center">

            <p className="text-center"></p>
            
            <div>
              <ul>
                <li className="flex gap-4"><MdLocationOn className="w-5 h-6" /> Port Harcourt, Nigeria</li>
                
                <li className="flex gap-4"><IoMail className="w-5 h-6" /> chidielueme@gmail.com</li>             
              </ul>
            </div>

            <div className="max-w-[340px] mt-8 flex flex-col gap-2">
              <h4 className="font-semibold" >Send a message</h4>
              <p className="text-sm italic font-semibold">Fill out the form below i'll get back to you within 24 hours</p>
              <form className="w-full ">
                <div className="flex flex-col gap-2 my-4">
                  <label htmlFor="full name" className="text-sm font-semibold text-gray-300">Full Name</label>
                  <input type="text" placeholder="e.g.John Doe" className="hover:outline-0 outline-0 h-10 text-sm bg-purple-400/20 px-4 border-b border-zinc-400"/>
                </div>

                <div className="flex flex-col gap-2 my-4">
                  <label htmlFor="full name" className="text-sm font-semibold text-gray-300">Email</label>
                  <input type="text" placeholder="e.g.johndoe@mail.com" className="hover:outline-0 outline-0 h-10 text-sm bg-purple-400/20 px-4 border-b border-zinc-400"/>
                </div>

                <div className="flex flex-col gap-2 my-4">
                  <label htmlFor="full name" className="text-sm  font-semibold text-gray-300">Subject</label>
                  <input type="text" placeholder="project collaboration" className="hover:outline-0 outline-0 h-10 text-sm bg-purple-400/20 px-4 border-b border-zinc-400"/>
                </div>

                <div className="flex flex-col gap-2 my-4">
                  <label htmlFor="full name" className="text-sm  font-semibold text-gray-300">Message</label>
                  <textarea cols={1} rows={3} type="text" placeholder="tell me about your project" className="hover:outline-0 outline-0 h-full text-sm bg-purple-400/20 py-2 px-4 border-b border-zinc-400"/>
                </div>
                <Button className="mt-7 text-base font-semibold w-full text-white text-center bg-purple-950 justify-center">Send Message</Button>
              </form>
            </div>
      </div>
        </section>
        
        {active && <a href="https://wa.me/2348068156622" target="_blank">
          <IoLogoWhatsapp className="text-green-500 fixed bottom-6 z-20 animate-pulse right-10 w-10 h-10" />
        </a>}
    
      
        <Footer />
      </main>
      )} 
     
    </>
  )
}




const Button = ({ children, className }) => {
  return(
    <button type="submit" className={`h-12 shadow-[4px_4px_0px_0px] shadow-black cursor-pointer  px-4 text-md tracking-wide flex items-center hover:shadow-[0px_0px_0] transition-all ${className}`}>
  {children}
</button>)
}

const projects = [
  {
    id: 1,
    title: "Tanie Properties",
    image: "",
    desc: "Property listing web application with user authentication, property search and filter, and contact form.",
    skills: ["Nextjs", "Server actions", "MySQL", "Rest APIs", "Nodejs", "Tailwindcss", "Typescript"],
    link:"http://www.github.com"
  },

  {
    id: 2,
    title: "ChatGPT Clone ",
    image: chatgptclone,
    desc: "Landing page for the famous ChatGPT 2022, with About section and blog post section.",
    skills: ["Reactjs", "Styled components", "Tailwindcss", "Typescript"],
    link:"http://www.github.com"
  },

  {
    id: 3,
    title: "Zentry clone",
    image: zentryclone,
    desc: "The Zentry website clone, a gaming website known for its visual effects and stunning graphics that captures the eyes and heart.",
    skills: ["ReactJs", "GSAP", "Tailwindcss", "Typescript"],
    link:"https://zentry-mu-seven.vercel.app"
  }
  ,
  {
    id: 4,
    title: "Gericht Restaurant",
    image: restaurant,
    desc: "Landing Page for a restaurant business. showcasing cusines and their prices.",
    skills: ["HTML", "CSS" ,"ReactJs", "Styled components",  "Tailwindcss"],
    link:"https://mealtosh.netlify.app"
  }

]




const SkillCard = ({data}) => {
  return (
    <div key={data.id} className="h-[2/3] flex flex-col">
      <div className="">
        <img src={data.image} alt={data.title} />
    </div>
    
      <div className="h-full bg-black p-2" >
        
        <h4 className="text-lg font-bold text-white/90">{data.title}</h4>
          <h2 className="text-sm text-gray-400 py-2">{data.title}</h2>
          <p className="text-sm text-justify mb-2">{data.desc}</p>
             <div className="flex flex-wrap gap-2">
             {data.skills.map((skill) => (
             <span className="text-purple-400  text-sm px-1 py-[2px] hover:bg-purple-600 hover:text-white rounded-full" key={skill}>
              {skill}
               </span>
        ))}
       
        </div>
        <a className="text-sm italic pt-4 underline" href={data.link}>View website</a>
      </div>
      
      
   </div>
  )
}

