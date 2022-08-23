import { NavBar } from '../components/Navbar/NavBar'
import {BsFillPersonFill} from 'react-icons/bs'
import { BiTask } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';

export const Home = () => {
  return (
    <>
        <NavBar/>
      
            
        <main className='w-screen flex flex-col  items-center'>
            <h1 className='text-3xl flex items-center mt-8 mb-2'>AppTasks <BiTask className='ml-2'/></h1>
            <h2 className='text-2xl'>Te ayudamos a Organizarte para que cumplas tus <span className='font-bold'>objetivos</span>!</h2>
            <h5 className='text-3xl text-blue-700 my-8 '>
                Tus Proyectos
            </h5>
            <div className='flex'>
                <Link to='/project/123451'>
                <div className='m-3 p-8 bg-white rounded-xl text-center hover:cursor-pointer flex flex-col items-center'>
                    <h5 className='font-semibold mb-4 text-xl'>sprint 1</h5>
                    <p className='text-sm bg-green-400 text-white p-2 rounded'> 3/3 tareas completadas</p>
                    <div className='text-sm flex items-center mt-2'> 
                        <span className='font-bold'>3</span> <BsFillPersonFill/>
                    </div>
                </div>
                </Link>
                <div className='m-3 p-8 text-sm justify-center bg-white rounded-xl text-center hover:cursor-pointer hover:text-black flex flex-col items-center'>
                   <button className='text-3xl text-gray-500'>+</button>
                </div>
            </div>
        </main>
        
        <Footer/>
    </>
  )
}
