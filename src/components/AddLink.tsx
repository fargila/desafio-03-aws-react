
const AddLink = () => {

  return (
    <div className="flex flex-col justify-center items-center bg-slate-400 w-2/4 h-full pt-10 pb-6 rounded-2xl" id="popup">
      <h1 className="w-3/4 font-extrabold flex items-start text-dark_green text-4xl mb-7">Adicionar link</h1>
      <input className="w-3/4 py-3 m-3 rounded-md border-dark_green pl-2 border" 
      type="text" placeholder="Digite a url"/>
      <div className="flex justify-between w-3/4 py-3 mt-3">
        <button className="w-1/2 border py-3 rounded-md font-bold transition duration-300 ease-in-out
        border-dark_green mr-4 hover:bg-main_red hover:text-secondary_text">Cancelar</button>
        <button className="w-1/2 py-3 rounded-md font-bold transition duration-300 ease-in-out
        bg-dark_green text-secondary_text hover:bg-primary_color">Salvar</button>
      </div>
    </div>
  )
}

export default AddLink
