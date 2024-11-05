import { FaGithub, FaArrowRight, FaExclamationTriangle } from 'react-icons/fa';

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <div>
        <h3 className="font-bold text-4xl mb-3">Digite o nome do usuário que deseja buscar</h3>
        <div>
          <div className='flex justify-between'>
            <input className="border rounded-xl border-dark_green pl-3 py-3 w-11/12" 
            type="text" placeholder="Digite o @ do usuário" />
            <button className='flex items-center justify-center  w-1/12 hover:bg-primary_color transition duration-300 ease-in-out
            bg-secondary_color text-secondary_text ml-3 rounded-xl border-dark_green p-3 border'>
              <FaArrowRight className='text-xl'/>
            </button>
          </div>
          <div className='flex self-start mt-2'>
            <FaExclamationTriangle className='text-main_red'/>
            <small className='text-main_red font-bold text-sm ml-2 text-center'>
              O nome que você digitou não existe ou não está cadastrado!</small>
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <hr className='border border-secondary_color w-2/4 border-t-2'></hr>
          <p className='flex font-bold h-16 px-4 items-center text-lg'>ou</p>
          <hr className='border border-secondary_color w-2/4 border-t-2'></hr>
      </div>
      </div>
      <div className="flex items-center">
        <p className='mr-3 font-bold text-lg'>Acesse sua conta com</p>
        <div className="flex justify-between hover:cursor-pointer transition duration-300 ease-in-out
        bg-dark_green text-secondary_text px-4 py-2 rounded-full hover:bg-primary_color">
          <FaGithub className='flex max-w-max'/>
          <p className='ml-2'>Github</p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
