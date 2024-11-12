import { editToggle } from "../scripts/toggle"
import React, { useState } from "react"
import { CardData } from "./CreateCardExp"
interface UpdateCardProps 
{
  card: CardData
  index: number
  onUpdateCard: (index: number, updatedCard: CardData) => void
}

const EditCard: React.FC<UpdateCardProps> = ({ card, index, onUpdateCard }) => 
{
  const [projectName, setProjectName] = useState(card?.projectName)
  const [duration, setDuration] = useState(card?.duration)
  const [skills, setSkills] = useState(card?.skills.join(', ')); 
  const [description, setDescription] = useState(card?.description)
  const [repLink, setRepLink] = useState(card?.repLink)

  const handleSubmit = (e: React.FormEvent) => 
  {
    e.preventDefault()

    const skillsArray = skills.split(',').map(skill => skill.trim())
    if(projectName.length!=0 && duration.length!=0 && skills.length!=0 && description.length!=0)
    {
        const updatedCard: CardData = { projectName, duration, skills: skillsArray, description, repLink }
        onUpdateCard(index, updatedCard)
    }
    else { return }
    
  }

  const validateInputs = () => 
  {return !(projectName && duration && skills && description)}

  return (
    <div className="popupEdit z-30">
      <form onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center bg-secondary_text w-2/5 h-full pt-10 pb-6 rounded-2xl">
        <h1 className="w-3/4 font-extrabold flex items-start text-dark_green text-4xl mb-7">Edição de card</h1>
        <input className="w-3/4 py-3 m-3 rounded-md border-dark_green pl-2 border" 
        type="text" placeholder="Título" onChange={(e) => setProjectName(e.target.value)} value={projectName}/>
        <input className="w-3/4 py-3 m-3 rounded-md border-dark_green pl-2 border"
        type="text" placeholder="Período de atuação" onChange={(e) => setDuration(e.target.value)} value={duration}/>
        <textarea className="w-3/4 py-3 m-3 rounded-md border-dark_green pl-2 border"
        placeholder="Habilidades (Separe-as por vírugla)" onChange={(e) => setSkills(e.target.value)} value={skills}/>
        <textarea className="w-3/4 py-3 m-3 rounded-md border-dark_green pl-2 border"
        placeholder="Descreva a sua experiência"  onChange={(e) => setDescription(e.target.value)} value={description}/>
        <input className="w-3/4 py-3 m-3 rounded-md border-dark_green pl-2 border"
        type="text" placeholder="Link do repositório (Opcional)" onChange={(e) => setRepLink(e.target.value)} value={repLink}/>
        <div className="flex justify-between w-3/4 py-3 mt-3">
          <button className="w-1/2 border py-3 rounded-md font-bold transition duration-300 ease-in-out
          border-dark_green mr-4 hover:bg-main_red hover:text-secondary_text" onClick={editToggle}>Cancelar</button>
          <button disabled={validateInputs()} 
          className={`${validateInputs()  ? 'cursor-default bg-tertiary_text text-secondary_text' : 
          'transition duration-300 ease-in-outbg-dark_green text-secondary_text hover:bg-primary_color'}
          w-1/2 py-3 rounded-md font-bold bg-dark_green`} type="submit">Salvar</button>
        </div>
      </form>
    </div>
  )
}

export default EditCard
