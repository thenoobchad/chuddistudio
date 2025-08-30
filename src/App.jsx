

//components
import {ExperienceCard} from "./components/experience-card"
import { experience } from "./constants"
import { MdLocationOn } from "react-icons/md"
import { IoMail } from "react-icons/io5"
import { Footer } from "./components/footer"
import { Header } from "./components/header"

//
import { FaCode, FaDatabase, FaTools } from "react-icons/fa"
import { AiFillDatabase } from "react-icons/ai"
import { SectionHeading } from "./components/section-heading"




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
  return (
           
    <main className="w-full">
  <Header />
      
   
    {/* HERO STARTS HERE */}

  
    <section id="hero" className=" p-2 py-6 flex flex-col h-screen items-center justify-center">
        <div className=" max-w-152 md:max-w-202 gap-4 flex flex-col">

          
          
          <h4 className="text-4xl md:text-6xl font-extrabold ">Hi, i'm Henry <br />  Elueme Ositadimma</h4>
          
        <h3 className="font-semibold">Full Stack Web Developer & Software Engineer . . . </h3>
        {/* <p className="text-md bg-purple-100 text-gray-900 border-r-4 font-semibold text-sm pr-4 p-2 italic">I am a dedicated full stack developer with over 4 years of experience, passionately crafting innovative, scalable, and user-centric web applications.</p> */}

          <div className="flex gap-4">

           <Button className="mt-4 text-base font-semibold w-fit text-white bg-purple-950">Download Resume</Button>
            

        <Button className="mt-4 text-base font-semibold w-fit text-white bg-purple-950">Let's chat!</Button>
          </div>
          
    </div>
    </section>


    {/* HERO ENDS HERE */}

    {/* ABOUT US BEGINS HERE */}
    <section id="about" className="text-white bg-purple-950 p-2 py-6 flex flex-col min-h-screen items-center justify-center">
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

      
      <SectionHeading section="skills & technologies" heading="Software technical experties" subheading="Tools and technologies i frequently work with in actualizing ideas and bringing applications to life."/>
      
    </div>
  <div className="py-6 grid grid-cols-1 sm:grid-cols-2  gap-4 ">
          {tecSkills.map((data) => (
            <div className={`max-w-[400px] sm:w-[300px] gap-2 bg-white rounded-sm p-3 flex flex-wrap`}>
              <h4 className="w-full flex gap-2 items-center text-sm text-black"><span className="bg-purple-500 p-1 rounded-full text-white">{data.icon}</span>{data.title}</h4>
              {data.skills.map((skill) => (
                <span className="text-black text-xs lg:text-sm  px-2 py-[2px] rounded-full bg-purple-100" key={skill}>
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
          <SectionHeading section="featured projects" heading="Software Projects built" subheading="Some of my recent projects showcasing my skill and experience, as well personal projects"/>
      
         
          <div className="w-full container  mx-auto flex flex-col items-center gap-2">
            

    <p></p>
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

      {/*  */}
      

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
            <h4>Send a message</h4>
            <p>Fill out the form below i'll get back to you within 24 hours</p>
            <form className="w-full ">
              <div className="flex flex-col gap-2 my-4">
                <label htmlFor="full name">Full Name</label>
                <input type="text" placeholder="e.g.John Doe" className="hover:outline-0 outline-0 h-10 text-sm bg-zinc-50 px-4 border-b border-zinc-400"/>
              </div>

              <div className="flex flex-col gap-2 my-4">
                <label htmlFor="full name">Email</label>
                <input type="text" placeholder="e.g.johndoe@mail.com" className="hover:outline-0 outline-0 h-10 text-sm bg-zinc-50 px-4 border-b border-zinc-400"/>
              </div>

              <div className="flex flex-col gap-2 my-4">
                <label htmlFor="full name">Subject</label>
                <input type="text" placeholder="project collaboration" className="hover:outline-0 outline-0 h-10 text-sm bg-zinc-50 px-4 border-b border-zinc-400"/>
              </div>

              <div className="flex flex-col gap-2 my-4">
                <label htmlFor="full name">Message</label>
                <textarea cols={1} rows={3} type="text" placeholder="tell me about your project" className="hover:outline-0 outline-0 h-10 text-sm bg-zinc-50 px-4 border-b border-zinc-400"/>
              </div>
              <button className="w-full border h-10">Send message</button>
            </form>
          </div>
    </div>
   </section>
   
    
      <Footer />
    </main>
  )
}




const Button = ({ children, className }) => {
  return(
    <button type="submit" className={`h-12 shadow-[4px_4px_0px_0px] shadow-black cursor-pointer  px-4 text-md tracking-wide flex items-center  rounded-sm hover:shadow-[0px_0px_0] transition-all ${className}`}>
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




const SkillCard = ({data}) => {
  return (
    <div key={data.id}>
    <div></div>
    
    <div>
        <h4 className="text-lg font-bold">{data.title}</h4>
          <h2 className="text-sm text-gray-400 py-2">{data.title}</h2>
          <p className="text-sm text-justify mb-2">{data.desc}</p>
             <div className="flex flex-wrap gap-2">
             {data.skills.map((skill) => (
             <span className="bg-purple-300/30 text-xs lg:text-sm  px-2 py-1 rounded-full" key={skill}>
              {skill}
               </span>
        ))}
       
      </div>
    </div>
   </div>
  )
}

