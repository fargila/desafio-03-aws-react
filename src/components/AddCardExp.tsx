import { toggle } from '../scripts/toggle.ts'
import { BiPlus } from 'react-icons/bi';

const AddCardExp = () => 
{   
    return (
        <div className="items-center border-4 border-dark_green flex flex-col bg-card_color mx-3 my-3 w-409 h-503
        text-secondary_text shadow-left-bottom ring-primary_color rounded-2xl p-5 justify-center flex-wrap showEdit">
            <button onClick={toggle} 
            className="size-24 text-center w-full transition duration-300 ease-in-out text-3x ">
                <button className="border-8 border-secondary_text rounded-full size-24 text-center hover:border-primary_color
                transition duration-300 ease-in-out">
                    <BiPlus className='flex justify-center items-center w-full h-auto hover:text-primary_color
                transition duration-300 ease-in-out text-secondary_text'/>
                </button>
                <h2 className='mt-2 text-3xl cor w-full font-semibold hover:text-primary_color'>Adicionar um card</h2>
            </button>
        </div>
    )
}

export default AddCardExp
