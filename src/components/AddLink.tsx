import { FormEvent, useState } from 'react';
import { socialLink } from '../scripts/toggle';
export interface Links {
  linkin?: string
  insta?: string
  face?: string
  twitter?: string
  youtube?: string
}
interface AddLinkProps 
{ onSaveLink: (platform: 'linkin' | 'insta' | 'face' | 'twitter' | 'youtube', link: string) => void }

const AddLink: React.FC<AddLinkProps> = ({ onSaveLink }) => 
{
  const [link, setLink] = useState('')

  const urlLinkin = 'linkedin'
  const urlInsta = 'instagram.com'
  const urlFace = 'facebook.com'
  const urlTwitter = 'x.com'
  const urlYoutube = 'youtube.com'

  const saveLink = (e: FormEvent) => 
  {
    e.preventDefault()

    if (link.includes(urlLinkin)) { onSaveLink('linkin', link) } 
    else if (link.includes(urlInsta)) { onSaveLink('insta', link) }
    else if (link.includes(urlFace)) { onSaveLink('face', link) }
    else if (link.includes(urlTwitter)) { onSaveLink('twitter', link) }
    else if (link.includes(urlYoutube)) { onSaveLink('youtube', link) } 
    else { console.log('O link que você provenciou na está de acordo com nenhuma url correspondente.') }

    setLink('')
  }

  return (
    <div className="popupSocial z-30">
      <form className="flex flex-col justify-center items-center 
      bg-secondary_text w-2/5 h-full pt-10 pb-6 rounded-2xl" onSubmit={saveLink}>
        <h1 className="w-3/4 font-extrabold flex items-start text-dark_green text-4xl mb-7">Adicionar link</h1>
        <input className="w-3/4 py-3 m-3 rounded-md border-dark_green pl-2 border text-primary_text" 
        type="text" placeholder="Digite a URL" onChange={(e) => setLink(e.target.value)} value={link}/>
        <div className="flex justify-between w-3/4 py-3 mt-3">
          <button className="w-1/2 border py-3 rounded-md font-bold transition duration-300 ease-in-out
          border-dark_green mr-4 hover:bg-main_red hover:text-secondary_text text-dark_green" 
          onClick={socialLink}>Cancelar</button>
          <button type='submit' disabled={!link.trim()} className={`w-1/2 py-3 rounded-md font-bold
          ${!link.trim() ? 'bg-tertiary_text text-secondary_text cursor-default' : 
          'transition duration-300 ease-in-out bg-dark_green text-secondary_text hover:bg-primary_color'
          }`}>Salvar</button>
        </div>
      </form>
    </div>
  )
}

export default AddLink
