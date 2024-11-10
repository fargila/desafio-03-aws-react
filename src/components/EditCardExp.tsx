import { editToggle } from "../scripts/toggle"
import { useState } from "react"

const EditCard = () => 
{
  const [projectName, setProjectName] = useState('')
  const [duration, setDuration] = useState('')
  const [skills, setSkills] = useState('')
  const [description, setDescription] = useState('')
  const [repLink, setRepLink] = useState('')

  return (
    <div className="popupEdit z-30">
      <div className="flex flex-col justify-center items-center bg-secondary_text w-2/5 h-full pt-10 pb-6 rounded-2xl">
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
          <button className="w-1/2 py-3 rounded-md font-bold transition duration-300 ease-in-out
          bg-dark_green text-secondary_text hover:bg-primary_color">Salvar</button>
        </div>
      </div>
    </div>
  )
}

export default EditCard
