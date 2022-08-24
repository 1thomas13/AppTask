import React from "react";
import { NavBar } from "../components/Navbar/NavBar";

export const Project = () => {
  return (
    <div className="h-screen">
      <NavBar/>
      <div className="flex h-full">
        <section className="w-1/5 ">
          proyectos
          <div>sprin1 </div>
          <div>sprin1 </div>
          <div>sprin1 </div>
          miembros
          <div>sprin1 </div>
          <div>sprin1 </div>
          <div>sprin1 </div>
        </section>
        <main className="w-full flex justify-evenly bg-gradient-to-t text-black from-cyan-300 to-blue-500">
          <div className="bg-slate-100 w-1/5 rounded-xl m-10 shadow-md">
            <h3 className="text-center text-xl font-bold">Por Hacer</h3>
            <div className='shadow-xl m-3 p-8 text-black bg-white rounded-xl text-center hover:cursor-pointer flex flex-col items-center'>
              <h5 className='font-semibold mb-4 w-full text-xl'>sprint 1</h5>
               
            </div>
          </div>
          <div className="bg-gray-100 w-1/5">
            <h3>Realizando</h3>
          </div>
          <div className="bg-red-200 w-1/5">
            <h3>hecho</h3>
          </div>
        </main>
        
      </div>
      
    </div>
  );
};
