import {motion} from "framer-motion"
import { FiArrowRight } from "react-icons/fi"
import { SiGithub, SiTiktok, SiYoutube, } from "react-icons/si"
import { TiSocialTwitter } from "react-icons/ti"

import {twMerge} from "tailwind-merge"

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-900 px-4 py-12 text-zinc-50">
      <div className="mx-auto max-w-4xl grid grid-cols-12 gap-4 grid-flow-dense">
        <HeaderBlock />
        <SocialBlock/>
        <Block />
        <Block />
        <Block />
        <Block />
      </div>
      </div>
  )
}



const Block = ({ className, ...rest }) => {
  return <motion.div
   
    className={twMerge("col-span-4 rounded-sm border border-zinc-700 bg-zinc-800 p-6", className)}
    {...rest}
  />
}

const HeaderBlock = () => {
  return <Block className="col-span-12 row-span-2 md:col-span-6">
    <img src="https://pbs.twimg.com/profile_images/1932146465129844736/TAEJBusb_400x400.jpg" className="mb-4 size-18 rounded-full justify-self-center-safe" />
    <h1 className="mb-12 text-4xl font-medium leading-tight ">Hi, I'm Henry.{" "} <span className="text-zinc-400">I build cool websites.</span></h1>
    <a href="#" className="flex items-center gap-1  text-red-300 hover:underline ">
      Contact me <FiArrowRight />
    </a>
  </Block>
}

const SocialBlock = () => {
  return <>
    <Block className="col-span-6 bg-red-500 md:col-span-3">
      <a href="#" className="grid h-full place-content-center text-3xl text-white">
        <SiYoutube />
      </a>
    </Block>
    <Block className="col-span-6 bg-black md:col-span-3">
      <a href="#" className="grid h-full place-content-center text-3xl text-white">
        <SiGithub />
      </a>
    </Block>
    <Block className="col-span-6 bg-zinc-50 md:col-span-3">
      <a href="#" className="grid h-full place-content-center text-3xl text-black">
        <SiTiktok />
      </a>
    </Block>
    <Block className="col-span-6 bg-blue-500 md:col-span-3">
      <a href="#" className="grid h-full place-content-center text-3xl text-white">
        <TiSocialTwitter />
      </a>
</Block>
</>
}