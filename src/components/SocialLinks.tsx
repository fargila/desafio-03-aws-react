import { socialLink } from "../scripts/toggle"
import { MdEdit } from "react-icons/md"
import { useState } from "react"
import { Links } from '../components/AddLink';
import AddLink from "../components/AddLink";

const EditLinks = () => 
{
  const [savedLinks, setSavedLinks] = useState<Links>({})

  const saveLink = (platform: keyof Links, link: string) => 
    { setSavedLinks((prevLinks) => ({ ...prevLinks, [platform]: link })) }

  return (
    <div>
      <AddLink onSaveLink={saveLink} />
      <div className="flex justify-around text-secondary_text text-center">
      {!savedLinks.insta ? (
        <div className='relative showEdit'>
          <button className=' bg-card_color rounded-full size-5 top-4 right-4 flex justify-center items-center
          absolute transition duration-300 ease-in-out hover:bg-primary_color smEditIcon' 
          onClick={socialLink}>
            <MdEdit aria-label='editLink'/>
          </button>
          <div className='relative mx-1'>
            <img src="/src/assets/images/Property 1=insta black.png" />
            <img className='absolute transition top-0 left-0 cursor-pointer
            duration-300 opacity-0 hover:opacity-100 ease-in-out hover:scale-110'
            src="/src/assets/images/Property 1=insta color.png" alt="Instagram"/>
          </div>
        </div>
      ) : (
        <div className='relative mx-1'>
          <img src="/src/assets/images/Property 1=insta black.png" />
          <img className='absolute transition top-0 left-0 cursor-pointer
          duration-300 opacity-0 hover:opacity-100 ease-in-out hover:scale-110'
          src="/src/assets/images/Property 1=insta color.png" alt="Twitter"
          onClick={() => window.open(savedLinks.insta)}/>
        </div>
      )}

      {!savedLinks.face ? (
        <div className='relative showEdit'>
          <button className=' bg-card_color rounded-full size-5 top-4 right-4 flex justify-center items-center
          absolute transition duration-300 ease-in-out hover:bg-primary_color smEditIcon' 
          onClick={socialLink}>
            <MdEdit aria-label='editLink'/>
          </button>
          <div className='relative mx-1'>
            <img src="/src/assets/images/Property 1=facebook black.png" />
            <img className='absolute transition top-0 left-0 cursor-pointer
            duration-300 opacity-0 hover:opacity-100 ease-in-out hover:scale-110'
            src="/src/assets/images/Property 1=facebook color.png" alt="Facebook"/>
          </div>
        </div>
      ) : (
        <div className='relative mx-1'>
          <img src="/src/assets/images/Property 1=facebook black.png" />
          <img className='absolute transition top-0 left-0 cursor-pointer
          duration-300 opacity-0 hover:opacity-100 ease-in-out hover:scale-110'
          src="/src/assets/images/Property 1=facebook color.png" alt="Facebook"
          onClick={() => window.open(savedLinks.twitter)}/>
        </div>
      )}
        
      {!savedLinks.twitter ? (
        <div className='relative showEdit'>
          <button className=' bg-card_color rounded-full size-5 top-4 right-4 flex justify-center items-center
          absolute transition duration-300 ease-in-out hover:bg-primary_color smEditIcon' 
          onClick={socialLink}>
            <MdEdit aria-label='editLink'/>
          </button>
          <div className='relative mx-1'>
            <img src="/src/assets/images/Property 1=twitter black.png" />
            <img className='absolute transition top-0 left-0 cursor-pointer
            duration-300 opacity-0 hover:opacity-100 ease-in-out hover:scale-110'
            src="/src/assets/images/Property 1=twitter color.png" alt="Twitter"/>
          </div>
        </div>
      ) : (
        <div className='relative mx-1'>
          <img src="/src/assets/images/Property 1=twitter black.png" />
          <img className='absolute transition top-0 left-0 cursor-pointer
          duration-300 opacity-0 hover:opacity-100 ease-in-out hover:scale-110'
          src="/src/assets/images/Property 1=twitter color.png" alt="Twitter"
          onClick={() => window.open(savedLinks.twitter)}/>
        </div>
      )}

      {!savedLinks.youtube ? (
        <div className='relative showEdit'>
        <button className='bg-card_color rounded-full size-5 top-4 right-4 flex justify-center items-center
        absolute transition duration-300 ease-in-out hover:bg-primary_color smEditIcon4' 
        onClick={socialLink}>
          <MdEdit aria-label='editLink'/>
        </button>
        <div className='relative mx-1'>
          <img src="/src/assets/images/Property 1=youtube black.png" />
          <img className='absolute transition top-0 left-0 cursor-pointer
          duration-300 opacity-0 hover:opacity-100 ease-in-out hover:scale-110'
          src="/src/assets/images/Property 1=youtube color.png" alt="Youtube"/>
        </div>
      </div>
      ) : (
        <div className='relative mx-1'>
          <img src="/src/assets/images/Property 1=youtube black.png" />
          <img className='absolute transition top-0 left-0 cursor-pointer
          duration-300 opacity-0 hover:opacity-100 ease-in-out hover:scale-110'
          src="/src/assets/images/Property 1=youtube color.png" alt="Youtube"
          onClick={() => window.open(savedLinks.youtube)}/>
        </div>
      )}        
      </div>
    </div>
    
  )
}

export default EditLinks
