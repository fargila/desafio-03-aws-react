import { FaTrash} from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';
import { editToggle } from '../scripts/toggle';

const CardExperience = () => 
{
  return (
      <div className="items-start border-4 border-dark_green flex flex-col bg-card_color w-409 mx-3 my-3 relative
     text-secondary_text shadow-left-bottom ring-primary_color rounded-2xl p-5 h-503 justify-between flex-wrap">
        <div className='cardEdit absolute w-full text-7xl h-auto
        flex items-center justify-between flex-col top-0 left-0'>
          <button onClick={editToggle}
          className='bg-unspoken_color w-full h-1/2 flex justify-center items-center rounded-t-xl
          hover:bg-secondary_text hover:text-unspoken_color transition duration-300 ease-in-out'>
            <MdEdit />
          </button>
          <button className='bg-main_red w-full h-1/2 flex justify-center items-center
          hover:text-main_red hover:bg-secondary_text transition duration-300 ease-in-out rounded-b-xl'>
            <FaTrash />
          </button>
        </div>
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
          <button className="bg-dark_green text-xl font-medium rounded-md py-3 w-full
          hover:bg-primary_color transition duration-300 ease-in-out">Ver repositório</button>
        </div>
      </div>
  )
}

export default CardExperience
