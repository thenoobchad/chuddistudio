import {motion} from "framer-motion"
import {twMerge} from "tailwind-merge"

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-900 px-4 py-12 text-zinc-50">
      <div className="mx-auto max-w-4xl grid grid-cols-12 gap-4 grid-flow-dense">
        <Block>
         
        </Block>
        <Block />
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
  return <Block className="col-span-12 row-span-"></Block>
}