import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { Footer } from '../components/Footer'

export const Error404 = () => {

  const navigate = useNavigate()

  return (
    <div className='h-screen'>
        <div className='h-full flex items-centerr'>
        <div className='border bg-white rounded-xl shadow-md m-auto p-10 '>
            <h1 className='font-bold text-3xl'>Error <span className='text-red-700'>404</span></h1>
            <button onClick={ () => navigate(-1)} className='text-center text-indigo-800 hover:text-indigo-400'>Regresar</button>
        </div>
      </div>
      <div>
      <Footer/>
      </div>
     
    </div>

    
  )
}
