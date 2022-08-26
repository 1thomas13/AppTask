import { NavBar } from '../components/Navbar/NavBar'
import {BsFillPersonFill} from 'react-icons/bs'
import { BiTask } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Modal } from '../components/Modal'
import { useState } from 'react';
import { FormAddProject } from '../components/FormAddProject';

export const Home = () => {

const [modalIsOpen, setIsOpen] = useState(false);

  function openCloseModal() {
    setIsOpen(!modalIsOpen);
  }

  return (
    <div className='h-screen '>
        <NavBar/>
      
            

        <main className='h-full bg-gradient-to-t text-white from-cyan-100 to-blue-500  flex flex-col  items-center'>
            <h1 className='text-3xl flex items-center mt-8 mb-2'>AppTasks <BiTask className='ml-2'/></h1>
            <h2 className='text-2xl'>Te ayudamos a Organizarte para que cumplas tus <span className='font-bold'>objetivos</span>!</h2>
            <h5 className='text-3xl text-white font-bold my-8 '>
                Tus Proyectos
            </h5>
            <div className='flex'>
                <Link to='/project/123451'>
                <div className='shadow-2xl m-3 p-8 text-black bg-white rounded-xl text-center hover:cursor-pointer flex flex-col items-center'>
                    <h5 className='font-semibold mb-4 text-xl'>sprint 1</h5>
                    <p className='text-sm bg-green-400 text-white p-2 rounded'> 3/3 tareas completadas</p>
                    <div className='text-sm flex items-center mt-2'> 
                        <span className='font-bold'>3</span> <BsFillPersonFill/>
                    </div>
                </div>
                </Link>
                <Modal openCloseModal={openCloseModal} modalIsOpen={modalIsOpen}> 
                    <>
                        <FormAddProject/>
                    </>
                </Modal>
            </div>
        </main>
        
        <Footer/>
    </div>
  )
}
