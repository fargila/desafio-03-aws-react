import { FaMapMarkerAlt} from 'react-icons/fa'
// FaCheck 
import { MdEdit } from 'react-icons/md';
import CardExperience from '../components/CardExperience'

const PortifolioPage = () => {
  return (
    <>
      <header className="flex sticky top-0 justify-end bg-dark_green
      text-secondary_text text-2xl py-4 rounded-b-3xl w-full">
        <div className="flex justify-evenly w-3/5 font-medium">
          <button className='hover:text-primary_color transition duration-300 ease-in-out'>Início</button>
          <button className='hover:text-primary_color transition duration-300 ease-in-out'>Minha história</button>
          <button className='hover:text-primary_color transition duration-300 ease-in-out'>Experiências</button>
          <button className='hover:text-primary_color transition duration-300 ease-in-out'>Contato</button>
          <div className="flex ml-10 ">
            <button className='hover:text-primary_color transition duration-300 ease-in-out'>Sair</button>
            <div className="bg-primary_color rounded-full p-8 ml-5"></div>
          </div>
        </div>
      </header>

      <body className='flex justify-center items-center flex-col mt-16 h-auto'>
        <button className='fixed top-32 right-16 hover:bg-primary_color text-secondary_text size-20
        flex justify-center items-center self-end rounded-full bg-card_color transition duration-300 ease-in-out'>
          <MdEdit className='size-12'/>
          {/* <FaCheck/> */}
        </button>
        <div className='flex justify-between items-center w-11/12'>
          <div className='text-center'>
            <div className="bg-primary_color rounded-full size-60"></div>
            <h2 className='text-5xl font-bold mt-2'>_fargila</h2>
            <p className='text-xl font-medium mt-2'>Paraíba, PB</p>
            <p className='text-xl font-medium mt-2'>AqueleCara@email.com</p>
          </div>
          <div className='flex flex-col w-2/5'>
            <h2 className='text-5xl font-bold'>Hello,</h2>
            <h2 className='text-5xl font-bold'>I'm Aquele Cara</h2>
            <p className='text-xl font-medium py-7'>
              Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
              occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.</p>
            <div className='text-secondary_text font-semibold flex just'>
              <button 
              className='bg-dark_green text-2xl w-1/4 py-3 mr-10 rounded-2xl shadow-left-bottom ring-primary_color
              hover:bg-primary_color transition duration-300 ease-in-out'>Github</button>
              <button 
              className='bg-dark_green text-2xl w-2/5 py-3 rounded-2xl shadow-left-bottom ring-primary_color
              hover:bg-primary_color transition duration-300 ease-in-out'>LinkIn</button>
            </div>
          </div>
        </div>
        <div className='bg-card_color text-secondary_text w-11/12 mt-20
        flex flex-col justify-center items-center py-10 rounded-2xl'>
            <h2 className='text-5xl font-bold w-11/12 mb-12'>Minha história</h2>
            <p className='text-xl font-medium w-11/12 text-tertiary_text hover:cursor-default
             transition duration-800 ease-in-out border-transparent border-b-2 hover:border-tertiary_text'>adicione sua história</p>
        </div>
        <div className='text-secondary_text bg-secondary_color w-full text-center mt-24' id="blur">
          <h1 className=' font-extrabold text-5xl py-10'>Experiências</h1>
          <CardExperience />
          <CardExperience/>
        </div>
      </body>
      
      <footer className="text-primary_text">
        <div className="bg-dark_green text-secondary_text py-32 flex flex-col items-center">
          <h3 className="text-4xl font-semibold text-center">Sinta-se livre para me contatar a qualquer momento!</h3>
          <h2 className="border-b-4 border-transparent hover:border-tertiary_text text-tertiary_text
           text-5xl mt-10 font-bold hover:cursor-default transition duration-300 ease-in-out">Adicione um e-mail extra</h2>
        </div>
        <div className="flex flex-col items-center text-center ">
          <h3 className="text-4xl w-3/4 font-medium my-28">Assim que possível, me envie um e-mail para que possamos trabalhar felizes juntos!</h3>
          <div className="flex justify-around">
            <img className="mx-1"
            src="/src/assets/images/Property 1=insta black.png" alt="Instagram" />
            <img className="mx-1"
            src="/src/assets/images/Property 1=facebook black.png" alt="Facebook" />
            <img className="mx-1"
            src="/src/assets/images/Property 1=twitter black.png" alt="Twitter" />
            <img className="mx-1"
            src="/src/assets/images/Property 1=youtube black.png" alt="Youtube" />
          </div>
          <div className="flex pt-12 pb-8 text-2xl font-medium w-3/4 justify-center">
            <div className="flex mr-20">
              <FaMapMarkerAlt />
              <p className='ml-3'>Brasil</p>
            </div>
            <p className=''>&copy; 2024, All Rights By Compass Uol</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default PortifolioPage
