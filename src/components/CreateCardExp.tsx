import { toggle } from "../scripts/toggle"
import React, { useState } from "react"

export interface CardData 
{
  projectName: string
  duration: string
  skills: string[]
  description: string
  repLink: string
}

interface CreateCardProps  {
  onAddCard: (card: CardData) => void
}

const CreateCard: React.FC<CreateCardProps> = ({onAddCard}) => 
{
  const [projectName, setProjectName] = useState('')
  const [duration, setDuration] = useState('')
  const [skills, setSkills] = useState('')
  const [description, setDescription] = useState('')
  const [repLink, setRepLink] = useState('')

  const handleSubmit = (e: React.FormEvent) => 
  {
    e.preventDefault()
    const skillsArray = skills.split(',').map(skill => skill.trim())
    
    if(projectName.length!=0 && duration.length!=0 && skills.length!=0 && description.length!=0)
    {
      const newCard: CardData = {projectName, duration, skills: skillsArray, description, repLink}
      onAddCard(newCard)
    }
    else { return }
    
    setProjectName('')
    setDuration('')
    setSkills('')
    setDescription('')
    setRepLink('')
  }
  
  const validateInputs = () => 
  {return !(projectName && duration && skills && description)}

  return (
    <div className="popup z-30">
      <form onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center
      bg-secondary_text h-full w-2/5 pt-8 pb-6 rounded-2xl">
        <h1 className="w-3/4 font-extrabold flex items-start text-dark_green text-4xl mb-7">Criação de card</h1>
        <input className="w-3/4 py-3 m-3 rounded-md border-dark_green pl-2 border font-medium"
        type="text" placeholder="Título" onChange={(e) => setProjectName(e.target.value)} value={projectName}/>
        <input className="w-3/4 py-3 m-3 rounded-md border-dark_green pl-2 border font-medium"
        type="text" placeholder="Período de atuação" onChange={(e) => setDuration(e.target.value)} value={duration}/>
        <input type="text" className="w-3/4 py-3 m-3 rounded-md border-dark_green pl-2 border font-medium"
        placeholder="Habilidades (Separe-as por vírugla)" onChange={(e) => setSkills(e.target.value)} value={skills}/>
        <textarea className="w-3/4 py-3 m-3 rounded-md border-dark_green pl-2 border font-medium"
        placeholder="Descreva a sua experiência" onChange={(e) => setDescription(e.target.value)} value={description}/>
        <input className="w-3/4 py-3 m-3 rounded-md border-dark_green pl-2 border font-medium"
        type="text" placeholder="Link do repositório (Opcional)" onChange={(e) => setRepLink(e.target.value)} value={repLink}/>
        <div className="flex justify-between w-3/4 py-3 mt-3">
          <button className="w-1/2 border py-3 rounded-md font-bold transition duration-300 ease-in-out
          border-dark_green mr-4 hover:bg-main_red hover:text-secondary_text" onClick={toggle}>Cancelar</button>
          <button disabled={validateInputs()} 
          className={`${validateInputs()  ? 'cursor-default bg-tertiary_text text-secondary_text' : 
          'transition duration-300 ease-in-outbg-dark_green text-secondary_text hover:bg-primary_color'}
          w-1/2 py-3 rounded-md font-bold bg-dark_green`} type="submit">Salvar</button>
        </div>
      </form>
    </div>
  )
}

export default CreateCard
