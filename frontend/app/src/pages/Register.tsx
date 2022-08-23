import {NavBar} from '../components/Navbar/NavBar'
import { Link } from 'react-router-dom'
export const Register = () => {
  return (
    <div className='h-screen'>
    <NavBar />
   
    <div className='flex flex-col items-center m-auto max-h-full'>
      
        <h3 className='text-3xl m-5'>AppTask</h3> 
        <form className=' bg-white shadow-xl md:w-3/12 md: w-full rounded px-12 py-5  flex flex-col '>
            <p className='pb-2 text-xl text-center'>Crea tu Cuenta!</p>   
            <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:border focus:outline-none focus:border-indigo-500 focus:ring-1 m-3 p-2.5 rounded' type='text' placeholder='Nombre de Usuario' />
            <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lgborder  focus:border focus:outline-none focus:border-indigo-500 focus:ring-1 m-3 p-2.5 rounded' type='password' placeholder='Contraseña' />
            <input className='bg-gray-50  border-gray-300 text-gray-900 text-sm border focus:border focus:outline-none focus:border-indigo-500 focus:ring-1 m-3 p-2.5 rounded' type='password' placeholder='Repetir Contraseña' />
            <input className="bg-gray-50  border-gray-300 text-gray-900 text-sm border focus:border focus:outline-none focus:border-indigo-500 focus:ring-1 m-3 p-2.5 rounded" type='email' placeholder='Email' />
            <Link to={'/login'} className="text-sky-500 text-center my-2">Ya tengo una cuenta</Link>
            <input className='mx-auto mb-5 w-32 hover:bg-indigo-500 hover:text-white hover:cursor-pointer  p-2 border rounded bold text-indigo-500 border-indigo-500' type='submit' value='Registrarme' />
        </form>
    </div>
    </div>
  )
}
