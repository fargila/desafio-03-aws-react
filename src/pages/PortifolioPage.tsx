import { FaMapMarkerAlt, FaCheck } from 'react-icons/fa'
import { useEffect, useState } from 'react';
import { MdEdit } from 'react-icons/md';
import CardExperience from '../components/CardExperience'
import CreateCard from '../components/CreateCardExp';
import AddCardExp from '../components/AddCardExp'
import { edit, socialLink } from '../scripts/toggle';
import EditCardExp from '../components/EditCardExp'
import { CardData } from '../components/CreateCardExp';
import Header from '../components/Header';
import SocialLinks from '../components/SocialLinks'
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
  
  const [extraEmail, setExtraEmail] = useState('')
  const [isEditingExtraEmail, setIsEditingEmail] = useState(false)
  const [history, setHistory] = useState('')
  const [isEditingHistory, setIsEditingHistory] = useState(false)
  
  //const [username, setUsername] = useState('')
  //const [error, setError] = useState('null')

  useEffect(() => {
    const fetchUser = async () => 
    {
      try 
      {
        const response = await axios.get(`https://api.github.com/users/fargila`)
        setUser(response.data)
      } catch (error) { console.error('Erro:', error) }
    }
  
    fetchUser()
  }, [])

  const addNewCard = (newCard: CardData) => { setCards([...cards, newCard])}

  const updateCard = (i: number, update: CardData) => 
  {
    const updatedCards = [...cards]
    updatedCards[i] = update
    setCards(updatedCards)
  }

  const editCard = (index: number) => { setCardIndex(index) }

  const deleteCard = (index: number) => { setCards(cards.filter((_, i) => i !== index)) }
  console.log(cardIndex)

  const handleSaveEmail = (value: string) => 
  {
    setExtraEmail(value)
    setIsEditingEmail(false)
  }

  const handleSaveHistory = (value: string) => 
  {
    setHistory(value)
    setIsEditingHistory(false)
  }
  
  return (
    <>
      <Header />

      <body className='flex justify-center items-center flex-col mt-16 h-auto' id='start'>
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
                hover:bg-primary_color transition duration-300 ease-in-out'>LinkedIn</button>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-card_color text-secondary_text w-11/12 mt-20
        flex flex-col justify-center items-center py-10 rounded-2xl h-auto' id='myHistory'>
          <h2 className='text-5xl font-bold w-11/12 mb-12'>Minha história</h2>
          {isEditingHistory || history.length === 0 ? (
            <textarea
                className="hover:cursor-default bg-card_color text-xl h-full
                placeholder:text-tertiary_text text-left items-start w-11/12 break-words"
                autoFocus
                placeholder="Adicione sua história"
                value={history}
                onChange={(e) => setHistory(e.target.value)}
                onBlur={() => handleSaveHistory(history)}
                onKeyDown={(e) => { if (e.key === "Enter") handleSaveHistory(history) }}/>
            ) : (
                <p className="w-11/12 hover:cursor-pointer text-xl text-left"
                 onClick={() => setIsEditingHistory(true)}>{history}</p>
            )}
        </div>

        <div className='blured'/>
        <CreateCard onAddCard={addNewCard}/>
        {cardIndex !== null && <EditCardExp card={cards[cardIndex]} index={cardIndex} onUpdateCard={updateCard}/>}
        
        <div className='text-secondary_text bg-secondary_color w-full text-center mt-24 pb-20' id='exp'>
          <h1 className=' font-extrabold text-7xl py-10'>Experiências</h1>
          <div className='flex justify-center flex-wrap'>
            {cards.map((card, index) => (
              <CardExperience key={index} projectName={card.projectName} duration={card.duration} skills={card.skills}
              description={card.description} repLink={card.repLink} 
              onDelete={() => deleteCard(index)} onFocus={() => editCard(index)}/>
            ))}
            
            {/* <CardExperience />
            <CardExperience /> */}
            <AddCardExp/>
          </div>
        </div>
      </body>
      
      <footer className="text-primary_text h-auto -z-20">
        <div className="bg-dark_green text-secondary_text py-32 flex flex-col items-center" id='contact'>
          <h3 className="text-4xl font-semibold text-center">Sinta-se livre para me contatar a qualquer momento!</h3>
          <div className='text-5xl mt-10 font-bold border-b-4 border-transparent hover:border-tertiary_text
          text-tertiary_text transition duration-300 ease-in-out'>
          {isEditingExtraEmail || extraEmail.length === 0 ? (
            <input
            className="hover:cursor-default flex items-center bg-dark_green text-center
            placeholder:text-tertiary_text outline-none showEdit" 
            autoFocus placeholder="Adicione um email extra" onBlur={(e) => handleSaveEmail(e.target.value)}
            onKeyDown={(e) => {if (e.key === "Enter") handleSaveEmail(e.currentTarget.value)}}/>
          ) : (
            <h2 className="hover:cursor-pointer h-4"
            onClick={() => setIsEditingEmail(true)}>{extraEmail}</h2>
          )}
      </div>
        </div>
        <div className="flex flex-col items-center text-center">
          <h3 className="text-4xl w-3/4 font-medium my-28">Assim que possível
          , me envie um e-mail para que possamos trabalhar felizes juntos!</h3>
          <div className="flex justify-around text-secondary_text text-center">
            <SocialLinks/>
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
