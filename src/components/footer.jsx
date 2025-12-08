import { SiGithub } from "react-icons/si"
import { TiSocialDribbble, TiSocialFacebook, TiSocialTwitter } from "react-icons/ti"


export const Footer = () => {
  return (
    <footer className="w-full mt-10 bg-zinc-950 px-2 pt-10 text-gray-50 flex flex-col">
     
    
      <div className="w-full flex-col flex justify-center pb-6">

        
          <p className="text-[13px]  tracking-wide text-center font-mono">&copy;Copyright 2025. <span >Chidi Ositadimma Elueme. All rights reserved.

          </span>
          </p>
          <div className="flex gap-4 justify-center py-4">
         
          <a href="https://github.com/thenoobchad">
            <SiGithub className="w-5 h-6" />
          </a>
          
          
          <TiSocialTwitter className="w-6 h-6" />
          <TiSocialDribbble className="w-6 h-6" />
          
          <TiSocialFacebook className="w-6 h-6"/>
        </div>
      </div>
      </footer>
  )
}
