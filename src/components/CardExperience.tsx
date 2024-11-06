

const CardExperience = () => {
  return (
    <div className="items-start border-4 border-dark_green flex flex-col bg-card_color w-409 mx-3 my-3
     text-secondary_text shadow-left-bottom ring-primary_color rounded-2xl p-5 h-503 justify-between flex-wrap">
      <div className="text-start">
        <h1 className="text-3xl font-bold">Projeto X</h1>
        <p className="text-tertiary_text text-lg font-normal py-2">Y semanas</p>
        <div className="flex font-normal w-full flex-wrap items-baseline">
          <div className="bg-dark_green p-1 w-fit rounded-md mr-2 mb-2">xxxxxxxxxxx</div>
          <div className="bg-dark_green p-1 w-fit rounded-md mr-2 mb-2">yyyyyyyyyyy</div>
          <div className="bg-dark_green p-1 w-fit rounded-md mr-2 mb-2">zzzzzzzzzzz</div>
        </div>
        <p className="text-xl text-start font-medium py-4">
        Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.</p>
      </div>
      
      <div className="flex justify-center w-full">
        <a href="#" className="bg-dark_green text-xl font-medium rounded-md py-3 w-full
        hover:bg-primary_color transition duration-300 ease-in-out">Ver repositório</a>
      </div>
      {/* <a href="#" className="bg-dark_green text-xl font-medium rounded-md py-3 self-center w-full self">Ver repositório</a> */}
    </div>
  )
}

export default CardExperience
