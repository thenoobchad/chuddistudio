import React from 'react'
import { FaCalendar } from 'react-icons/fa'
import { GrStatusGoodSmall } from 'react-icons/gr'
import { ImCheckmark } from 'react-icons/im'
import { MdLocationOn } from 'react-icons/md'





export const ExperienceCard = ({exp}) => {
  return (
    <div className='text-sm  p-2 font-semibold'>
      <div className='flex flex-col p-4 bg-purple-950 '>
        <div className='flex justify-between'>{exp.title} <span className='flex gap-1 items-center text-xs whitespace-nowrap' ><FaCalendar/>{exp.date}</span></div>
        <div className='flex justify-between italic text-gray-400'>{exp.company}<span className='flex gap-1 items-center text-white'><MdLocationOn/>{exp.location}</span></div>
      </div>
      <div className='p-4 '>
      <ul className='flex flex-col gap-2'>
        {exp.tasks.map((task, i) => (
          <li key={i} className='flex gap-4 items-center text-justify text-gray-300'><span className='w-1 h-1 text-gray-00'><GrStatusGoodSmall   /></span>{task}</li>
        ))}
        </ul>
      </div>
    </div>
  )
}
