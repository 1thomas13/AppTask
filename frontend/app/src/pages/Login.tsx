import {NavBar} from '../components/Navbar/NavBar'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import * as yup from 'yup'

export const Login = () => {

  const validationSchema = yup.object().shape({
    password: 
          yup.string()
          .required('Campo Obligatorio'),
    email: 
          yup.string()
          .required('Campo Obligatorio')
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema
    ,
    onSubmit: values => {

      console.log('first')
      alert(JSON.stringify(values, null, 2));
    },
  });

  const {errors, values, handleChange, handleSubmit, handleBlur, touched} = formik

  return (
    <div className='h-screen bg-slate-100'>
    <NavBar />
   
    <div className='flex flex-col items-center m-auto max-h-full'>
      
        <h3 className='text-3xl m-5'>AppTask</h3> 
        <form onSubmit={handleSubmit} className='bg-white shadow-xl md:w-3/12 md: w-full rounded px-12 py-5  flex flex-col '>
            <p className='pb-2 text-xl text-center'> Inicia Sesion! </p>   
            <input 
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:border focus:outline-none focus:border-indigo-500 focus:ring-1 m-3 p-2.5 rounded'
              type='email'
              placeholder='Email'
              name='email'
              onChange={ handleChange } 
              value={ values.email }
              onBlur={ handleBlur }
            />
            { errors.email && touched.email && <span className='text-sm text-red-600 pl-4'>{errors.email}</span> }

            <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lgborder  focus:border focus:outline-none focus:border-indigo-500 focus:ring-1 m-3 p-2.5 rounded' 
              type='password'
              placeholder='Contraseña' 
              name='password'
              onChange={ handleChange } 
              value={ values.password }
              onBlur={ handleBlur }
            />
            { errors.password && touched.password && <span className='text-sm text-red-600 pl-4'>{errors.password}</span> }

            <Link to={'/register'} className="text-sky-500 text-center my-2">No tengo Cuenta</Link>
            <button 
              className='mx-auto mb-5 w-32 hover:bg-indigo-500 hover:text-white hover:cursor-pointer  p-2 border rounded bold text-indigo-500 border-indigo-500'
              type='submit' 
            >
              Iniciar Sesion
            </button>
        </form>
    </div>
    </div>
  )
}
