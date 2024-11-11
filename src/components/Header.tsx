import { toSection } from "../scripts/toggle"
import { Link } from 'react-router-dom';

const Header = () => 
{
    return (
        <header className="flex sticky top-0 justify-end bg-dark_green z-10
            text-secondary_text text-2xl py-4 rounded-b-3xl w-full h-auto">
            <nav className="flex justify-evenly w-3/5 font-medium">
                <button className='hover:text-primary_color transition duration-300 ease-in-out' 
                onClick={() => toSection('start')}>Início</button>
                <button className='hover:text-primary_color transition duration-300 ease-in-out'
                onClick={() => toSection('myHistory')}>Minha história</button>
                <button className='hover:text-primary_color transition duration-300 ease-in-out'
                onClick={() => toSection('exp')}>Experiências</button>
                <button className='hover:text-primary_color transition duration-300 ease-in-out'
                onClick={() => toSection('contact')}>Contato</button>
                <div className="flex ml-10 ">
                <Link to='/login' className='hover:text-primary_color transition
                duration-300 ease-in-out flex items-center'>Sair</Link>
                <div className="bg-primary_color rounded-full p-8 ml-5"></div>
                </div>
            </nav>
        </header>
  )
}

export default Header
