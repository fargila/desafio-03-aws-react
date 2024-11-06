

const CardExperience = () => {
  return (
    <div className="items-start border-4 border-dark_green flex flex-col bg-card_color w-1/4 ml-10
     text-secondary_text shadow-left-bottom ring-primary_color rounded-2xl p-5">
      <h1 className="text-3xl font-bold">Projeto X</h1>
      <p className="text-tertiary_text text-lg font-normal py-2">Y semanas</p>
      <div className="flex font-normal text-center w-full">
        <div className="bg-dark_green p-1 w-8 rounded-md mr-2">xx</div>
        <div className="bg-dark_green p-1 w-8 rounded-md mr-2">yy</div>
        <div className="bg-dark_green p-1 w-8 rounded-md">zz</div>
      </div>
      <p className="text-xl text-start font-medium py-4">
      Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
      occaecat cupidatat non proident, sunt in culpa qui officia deserunt
      mollit anim id est laborum.</p>
      <a href="#" className="bg-dark_green text-xl font-medium rounded-md py-3 self-center w-full">Ver repositório</a>
    </div>
  )
}

export default CardExperience
