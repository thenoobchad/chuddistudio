import React from 'react'
import { GrStatusGoodSmall } from 'react-icons/gr'
import { ImCheckmark } from 'react-icons/im'





export const ExperienceCard = ({exp}) => {
  return (
    <div>
      <div className='flex flex-col'>
        <div className='flex justify-between'>{exp.title} <span>{exp.date}</span></div>
        <div className='flex justify-between'>{exp.company}<span>{exp.location}</span></div>
      </div>
      <div>
      <ul className='flex flex-col gap-2'>
        {exp.tasks.map((task, i) => (
          <li key={i} className='flex gap-4 items-center text-xs'><span className='w-1 h-1'><ImCheckmark   /></span>{task}</li>
        ))}
        </ul>
      </div>
    </div>
  )
}
