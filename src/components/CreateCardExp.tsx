import { toggle } from "../scripts/toggle"

const CreateCard = () => {
  return (
    <div className="popup z-10">
      <div className="flex flex-col justify-center items-center bg-secondary_text h-full w-2/5 pt-8 pb-6 rounded-2xl">
        <h1 className="w-3/4 font-extrabold flex items-start text-dark_green text-4xl mb-7">Criação de card</h1>
        <input className="w-3/4 py-3 m-3 rounded-md border-dark_green pl-2 border font-medium" 
        type="text" placeholder="Título"/>
        <input className="w-3/4 py-3 m-3 rounded-md border-dark_green pl-2 border font-medium" 
        type="text" placeholder="Período de atuação"/>
        <input className="w-3/4 py-3 m-3 rounded-md border-dark_green pl-2 border font-medium" 
        type="text" placeholder="Habilidades (Separe-as por vírugla)"/>
        <textarea className="w-3/4 py-3 m-3 rounded-md border-dark_green pl-2 border font-medium" 
        placeholder="Descreva a sua experiência"></textarea>
        <input className="w-3/4 py-3 m-3 rounded-md border-dark_green pl-2 border font-medium" 
        type="text" placeholder="Link do repositório (Opcional)"/>
        <div className="flex justify-between w-3/4 py-3 mt-3">
          <button className="w-1/2 border py-3 rounded-md font-bold transition duration-300 ease-in-out
          border-dark_green mr-4 hover:bg-main_red hover:text-secondary_text" onClick={() => toggle()}>Cancelar</button>
          <button className="w-1/2 py-3 rounded-md font-bold transition duration-300 ease-in-out
          bg-dark_green text-secondary_text hover:bg-primary_color">Salvar</button>
        </div>
      </div>
    </div>
  )
}

export default CreateCard
