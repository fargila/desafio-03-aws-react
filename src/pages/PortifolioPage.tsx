import { FaMapMarkerAlt, FaCheck } from 'react-icons/fa'
import { useEffect, useState } from 'react';
import { MdEdit } from 'react-icons/md';
import CardExperience from '../components/CardExperience'
import CreateCard from '../components/CreateCardExp';
import AddCardExp from '../components/AddCardExp'
import { edit, socialLink } from '../scripts/toggle';
import AddLink from '../components/AddLink'
import EditCardExp from '../components/EditCardExp'
import { CardData } from '../components/CreateCardExp';
import { Links } from '../components/AddLink';
import axios from 'axios'

interface User {
  avatar_url: string
  login: string
  location: string
  email: string
  name: string
  bio: string
  html_url: string
}

const PortifolioPage = () => 
{
  const [cards, setCards] = useState<CardData[]>([])
  const [cardIndex, setCardIndex] = useState(NaN)
  const [user, setUser] = useState<User>()
  const [savedLinks, setSavedLinks] = useState<Links>({})
  //const [username, setUsername] = useState('')
  //const [error, setError] = useState('null')

  useEffect(() => {
    const fetchUser = async () => 
    {
      try {
        const response = await axios.get(`https://api.github.com/users/fargila`)
        setUser(response.data)
      } catch (error) {
        console.error('Erro:', error)
      }
    }
  
    fetchUser()
  }, [])
  
  const saveLink = (platform: keyof Links, link: string) => 
    { setSavedLinks((prevLinks) => ({ ...prevLinks, [platform]: link })) }

  const addNewCard = (newCard: CardData) => { setCards([...cards, newCard])}

  const updateCard = (i: number, update: CardData) => 
  {
    const updatedCards = [...cards]
    updatedCards[i] = update
    setCards(updatedCards)
  }

  const editCard = (index: number) => {
    setCardIndex(index)
  }

  const deleteCard = (index: number) => { setCards(cards.filter((_, i) => i !== index)) }
  console.log(cardIndex)
  console.log(savedLinks)
  
  return (
    <>
      <header className="flex sticky top-0 justify-end bg-dark_green z-10
      text-secondary_text text-2xl py-4 rounded-b-3xl w-full h-auto">
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
        <button onClick={() => edit()}
        className='fixed top-32 right-16 hover:bg-primary_color text-secondary_text size-20 z-10
        flex justify-center items-center self-end rounded-full bg-card_color transition duration-300 ease-in-out'>
          <MdEdit className = 'iconEdit size-10'/>
          <FaCheck className = 'iconCheck size-10'/>
          {/* <FaCheck/> */}
        </button>
        <div className='flex justify-between items-center w-11/12'>
          <div className='text-center'>
            <div className=" rounded-full size-60">
              <img className='rounded-full w-full border-2 border-r-8 border-e-8 border-primary_text
              h-auto' src={user?.avatar_url} alt="" />
            </div>
            <h2 className='text-5xl font-bold mt-2'>{user?.login}</h2>
            {user?.location ? (<p className='text-xl font-medium mt-2'>{user?.location}</p>) : null}
            {user?.email ? (<p className='text-xl font-medium mt-2'>{user?.email}</p>) : null}
            {/* <p className='text-xl font-medium mt-2'>AqueleCara@email.com</p> */}
          </div>
          <div className='flex flex-col w-2/5'>
            <h2 className='text-5xl font-bold'>Hello,</h2>
            {user?.name ? (<p className='text-5xl font-bold mt-2 flex items-center'>I'm 
            <p className='text-primary_color ml-3  flex flex-nowrap'>
              {user?.name}</p></p>) : null}
            {/* <h2 className='text-5xl font-bold'>I'm Aquele Cara</h2> */}
            {user?.bio ? (<p className='text-xl font-medium py-7'>{user?.bio}</p>) : null}
            <div className='text-secondary_text font-semibold flex w-full'>
              <button 
              className='bg-dark_green text-2xl w-3/4 py-3 mr-10 rounded-2xl shadow-left-bottom ring-primary_color
              hover:bg-primary_color transition duration-300 ease-in-out' 
              onClick={() => window.open(user?.html_url)}>Github</button>
              <div className='relative w-full showEdit'>
                <button className='showLinkIn bg-card_color rounded-full size-5 flex justify-center items-center
                absolute transition duration-300 ease-in-out hover:bg-primary_color' 
                onClick={socialLink}><MdEdit/></button>
                <button 
                className='bg-dark_green text-2xl w-full py-3 rounded-2xl shadow-left-bottom ring-primary_color
                hover:bg-primary_color transition duration-300 ease-in-out'>LinkIn</button>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-card_color text-secondary_text w-11/12 mt-20
        flex flex-col justify-center items-center py-10 rounded-2xl'>
            <h2 className='text-5xl font-bold w-11/12 mb-12'>Minha história</h2>
            <p className='text-xl font-medium w-11/12 text-tertiary_text hover:cursor-default
             transition duration-800 ease-in-out border-transparent border-b-2 
             hover:border-tertiary_text'>adicione sua história</p>
        </div>

        <div className='blured'/>
        <CreateCard onAddCard={addNewCard}/>
        {cardIndex !== null && <EditCardExp card={cards[cardIndex]} index={cardIndex} onUpdateCard={updateCard}/>}
        <AddLink onSaveLink={saveLink} />
        
        <div className='text-secondary_text bg-secondary_color w-full text-center mt-24 pb-20'>
          <h1 className=' font-extrabold text-7xl py-10'>Experiências</h1>
          <div className='flex justify-center flex-wrap'>
            {cards.map((card, index) => (
              <CardExperience key={index} projectName={card.projectName} duration={card.duration} skills={card.skills}
              description={card.description} repLink={card.repLink} onDelete={() => deleteCard(index)} onFocus={() => editCard(index)}/>
            ))}
            
            {/* <CardExperience />
            <CardExperience /> */}
            <AddCardExp/>
          </div>
        </div>
      </body>
      
      <footer className="text-primary_text h-auto">
        <div className="bg-dark_green text-secondary_text py-32 flex flex-col items-center">
          <h3 className="text-4xl font-semibold text-center">Sinta-se livre para me contatar a qualquer momento!</h3>
          <h2 className="border-b-4 border-transparent hover:border-tertiary_text text-tertiary_text
           text-5xl mt-10 font-bold hover:cursor-default transition duration-300 ease-in-out">Adicione um e-mail extra</h2>
        </div>
        <div className="flex flex-col items-center text-center">
          <h3 className="text-4xl w-3/4 font-medium my-28">Assim que possível
          , me envie um e-mail para que possamos trabalhar felizes juntos!</h3>
          <div className="flex justify-around text-secondary_text text-center">
            <div className='relative showEdit'>
              <button className='bg-card_color top-4 right-4 rounded-full size-5  flex justify-center items-center
              absolute transition duration-300 ease-in-out hover:bg-primary_color z-10' 
              onClick={socialLink}>
                <MdEdit/>
              </button>
              <div className='mx-1 relative'>
                <img src="/src/assets/images/Property 1=insta black.png" />
                <img className='absolute transition top-0 left-0 cursor-pointer
                duration-300 opacity-0 hover:opacity-100 ease-in-out hover:scale-110'
                src="/src/assets/images/Property 1=insta color.png" alt="Instagram" />
              </div>
            </div>
            <div className='relative showEdit'>
              <button className='bg-card_color rounded-full size-5 top-4 right-4 flex justify-center items-center
              absolute transition duration-300 ease-in-out hover:bg-primary_color z-10' 
              onClick={socialLink}>
                <MdEdit/>
              </button>
              <div className='relative mx-1'>
                <img src="/src/assets/images/Property 1=facebook black.png" />
                <img className='absolute transition top-0 left-0 cursor-pointer
                duration-300 opacity-0 hover:opacity-100 ease-in-out hover:scale-110'
                src="/src/assets/images/Property 1=facebook color.png" alt="Facebook" />
              </div>
            </div>
            <div className='relative showEdit'>
              <button className=' bg-card_color rounded-full size-5 top-4 right-4 flex justify-center items-center
              absolute transition duration-300 ease-in-out hover:bg-primary_color z-10' 
              onClick={socialLink}>
                <MdEdit/>
              </button>
              <div className='relative mx-1'>
                <img src="/src/assets/images/Property 1=twitter black.png" />
                <img className='absolute transition top-0 left-0 cursor-pointer
                duration-300 opacity-0 hover:opacity-100 ease-in-out hover:scale-110'
                src="/src/assets/images/Property 1=twitter color.png" alt="Twitter" />
              </div>
            </div>
            <div className='relative showEdit'>
              <button className='bg-card_color rounded-full size-5 top-4 right-4 flex justify-center items-center
              absolute transition duration-300 ease-in-out hover:bg-primary_color z-10' 
              onClick={socialLink}>
                <MdEdit/>
              </button>
              { savedLinks.youtube ? (
                <div className='relative mx-1 visible'>
                  <img src="/src/assets/images/Property 1=youtube black.png" />
                  <img className='absolute transition top-0 left-0 cursor-pointer 
                  duration-300 opacity-0 hover:opacity-100 ease-in-out hover:scale-110'
                  src="/src/assets/images/Property 1=youtube color.png" alt="Youtube"
                  onClick={() => window.open(savedLinks.youtube)} />
                </div>) : (
                <div className='relative mx-1'>
                  <img src="/src/assets/images/Property 1=youtube black.png" />
                  <img className='absolute transition top-0 left-0 cursor-pointer
                  duration-300 opacity-0 hover:opacity-100 ease-in-out hover:scale-110'
                  src="/src/assets/images/Property 1=youtube color.png" alt="Youtube" />
              </div>
              )}
            </div>
          </div>
          <div className="flex pt-12 pb-8 text-2xl font-medium w-3/4 justify-center">
            <div className="flex mr-20">
              <FaMapMarkerAlt />
              <p className='ml-3'>Brasil</p>
            </div>
            <p>&copy; 2024, All Rights By Compass Uol</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default PortifolioPage
