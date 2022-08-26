import React from "react";
import { NavBar } from "../components/Navbar/NavBar";
import {FaCommentAlt} from 'react-icons/fa'

export const Project = () => {
  return (
    <>
      <NavBar/>
      <div className="h-screen bg-gradient-to-b from-blue-500 via-purple-500 to-pink-300">
      <div className="flex h-full">
        <section className="w-1/5 bg-black opacity-30 shadow-xl">
          proyectos
          <div>sprin1 </div>
          <div>sprin1 </div>
          <div>sprin1 </div>
          miembros
          <div>sprin1 </div>
          <div>sprin1 </div>
          <div>sprin1 </div>
        </section>
        <main className="w-full text-gray-800">
          <div className="w-full">
          ordenar por fecha
          </div>
          <div className="flex">
            <div className="p-2 bg-slate-200 rounded-md m-10 shadow-2xl">
              <h3 className="text-md font-semibold uppercase px-2 ">Por Hacer</h3>
              <div className='my-4 w-72 border-b-2 shadow-innerl py-2 hover:bg-slate-100 bg-white rounded-md text-center hover:cursor-pointer flex flex-col items-center'>
                <h5 className='font-semibold w-full text-xl'>sprint 1</h5>
                creado: 8 de sept
                <div className="flex items-center">
                  <span className="mr-2 font-semibold">5</span> 
                  <FaCommentAlt />
                  
                </div>
              </div>
              
                <button>
                  <div className='text-xl text-gray-600 font-bold hover:bg-slate-100 hover:text-black   w-72 border-b-2 shadow-innerl py-2  rounded-md text-center flex flex-col items-center'>
                    +
                  </div>
                </button>
              
            </div>

            <div className="p-2 bg-slate-200 rounded-md m-10 shadow-2xl">
              <h3 className="text-md font-semibold uppercase px-2 ">Por Hacer</h3>
              <div className='my-4 w-72 border-b-2 shadow-innerl py-2 hover:bg-slate-100 bg-white rounded-md text-center hover:cursor-pointer flex flex-col items-center'>
                <h5 className='font-semibold w-full text-xl'>sprint 1</h5>
                creado: 8 de sept
                <div className="flex items-center">
                  <span className="mr-2 font-semibold">5</span> 
                  <FaCommentAlt />
                  
                </div>
              </div>
              
                <button>
                  <div className='text-xl text-gray-600 font-bold hover:bg-slate-100 hover:text-black   w-72 border-b-2 shadow-innerl py-2  rounded-md text-center flex flex-col items-center'>
                    +
                  </div>
                </button>
              
            </div>

            <div className="p-2 bg-slate-200 rounded-md m-10 shadow-2xl">
              <h3 className="text-md font-semibold uppercase px-2 ">Por Hacer</h3>
              <div className='my-4 w-72 border-b-2 shadow-innerl py-2 hover:bg-slate-100 bg-white rounded-md text-center hover:cursor-pointer flex flex-col items-center'>
                <h5 className='font-semibold w-full text-xl'>sprint 1</h5>
                creado: 8 de sept
                <div className="flex items-center">
                  <span className="mr-2 font-semibold">5</span> 
                  <FaCommentAlt />
                  
                </div>
              </div>
              
                <button>
                  <div className='text-xl text-gray-600 font-bold hover:bg-slate-100 hover:text-black   w-72 border-b-2 shadow-innerl py-2  rounded-md text-center flex flex-col items-center'>
                    +
                  </div>
                </button>
              
            </div>
          </div>
          
          
        </main>
        
      </div>
      </div>
    </>
  );
};
