import { FaTrash} from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';
import { editToggle } from '../scripts/toggle';
import React from 'react';

export interface CardExperienceProps 
{
  projectName: string
  duration: string
  skills: string[]
  description: string
  repLink: string
  onDelete: () => void
  onFocus: () => void
}

const CardExperience: React.FC<CardExperienceProps> = 
({projectName, duration, skills, description, repLink, onDelete, onFocus}) => 
{
  return (
      <div className="items-start border-4 border-dark_green flex flex-col bg-card_color w-409 mx-3 my-3 relative
       text-secondary_text shadow-left-bottom ring-primary_color rounded-2xl p-5 h-503 justify-between flex-nowrap 
        overflow-y-auto break-words overflow-x-hidden">
        <div className='cardEdit absolute w-full text-7xl h-auto 
        flex items-center justify-between flex-col top-0 left-0'>
          <button onClick={editToggle} onFocus={onFocus}
          className='bg-unspoken_color w-full h-1/2 flex justify-center items-center rounded-t-xl
          hover:bg-secondary_text hover:text-unspoken_color transition duration-300 ease-in-out'>
            <MdEdit />
          </button>
          <button onClick={onDelete} 
          className='bg-main_red w-full h-1/2 flex justify-center items-center
          hover:text-main_red hover:bg-secondary_text transition duration-300 ease-in-out rounded-b-xl'>
            <FaTrash />
          </button>
        </div>
        <div className="text-start flex flex-col flex-wrap">
          <h1 className="text-3xl font-bold w-fit">{projectName}</h1>
          <p className="text-tertiary_text text-lg font-normal py-2 w-fit">{duration}</p>
          <div className="flex font-normal w-fit flex-wrap items-baseline">
            <div className="flex flex-wrap">
              {skills
              .filter(skill => skill.trim().length > 0)
              .map((skill, index) => (
                <div key={index} className="bg-dark_green p-1 w-fit rounded-md mr-2 mb-2">
                  {skill}
                </div>))}
            </div>
          </div>
          <p className="text-xl text-start font-medium py-4">{description}</p>
        </div>
        
        {repLink ? (
          <div className="flex justify-center w-full">
            <a className="bg-dark_green text-xl font-medium rounded-md py-3 w-full
            hover:bg-primary_color transition duration-300 ease-in-out" href={repLink}>Ver repositório</a>
          </div>
        ) : ( <div className='invisible'></div> )}
      </div>
  )
}

export default CardExperience
