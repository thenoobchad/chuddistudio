import React from 'react'

export const SectionHeading = ({section, heading, subheading}) => {
  return (
      <>
      <h4 className="text-md underline  font-bold my-8 tracking-tighter text-zinc-500">{section}</h4>
      <h4 className="text-3xl capitalize font-semibold text-center pb-4 ">{heading}</h4>
      <p className="text-zinc-300 text-center" >{subheading}</p>
     </>
  )
}
