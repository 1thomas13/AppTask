import {NavBar} from '../components/Navbar/NavBar'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import * as yup from 'yup'

export const Register = () => {

  const validationSchema = yup.object().shape({
   
    username: 
          yup.string()
          .required('Campo Obligatorio')
          .min(4, 'El minimo de caracteres es 4'),
    email: 
          yup.string()
          .required('Campo Obligatorio')
          .email('Email Invalido'),
    password: 
          yup.string()
          .required('Campo Obligatorio')
          .min(4, 'El minimo de caracteres es 4')
          .max(20, 'El maximo de caracteres es 20'),
    repeatPassword: 
          yup.string()
          .required('Campo Obligatorio')
          .min(4, 'El minimo de caracteres es 4')
          .max(20, 'El maximo de caracteres es 20')
          .oneOf([yup.ref('password')], 'La contraseña no coincide')
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      repeatPassword: '',
      username: ''
    },
    validationSchema
    ,
    onSubmit: async (values) => {

      console.log('first')
      console.log(JSON.stringify(values, null, 2));

      const response = await fetch('http://localhost:3000/auth/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({values})
      })

      console.log(response)
      // console.log(await JSON.parse( response ))
    }
  })

  const {errors, values, handleChange, handleSubmit, handleBlur, touched} = formik

  return (
    <div className='h-screen'>
    <NavBar />
    
    <div className='flex flex-col items-center m-auto max-h-full'>
    
        <h3 className='text-3xl m-5'>AppTask</h3> 
        <form onSubmit={handleSubmit} className=' bg-white shadow-xl md:w-3/12 md: w-full rounded px-12 py-5  flex flex-col '>
            <p className='pb-2 text-xl text-center'>Crea tu Cuenta!</p>   
            <input 
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:border focus:outline-none focus:border-indigo-500 focus:ring-1 m-3 p-2.5 rounded' 
              type='text' 
              placeholder='Nombre de Usuario' 
              name='username'
              onChange={handleChange} 
              value={values.username}
              onBlur={handleBlur}
            />
            {errors.username && touched.username && <span className='text-sm text-red-600 pl-4'>{errors.username}</span>}

            <input className='
              bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lgborder  focus:border focus:outline-none focus:border-indigo-500 focus:ring-1 m-3 p-2.5 rounded'
              type='password' 
              placeholder='Contraseña'
              name='password' 
              onChange={ handleChange } 
              value={ values.password }
              onBlur={ handleBlur }
            />
            { errors.password && touched.password && <span className='text-sm text-red-600 pl-4'>{errors.password}</span> }

            <input 
              className='bg-gray-50  border-gray-300 text-gray-900 text-sm border focus:border focus:outline-none focus:border-indigo-500 focus:ring-1 m-3 p-2.5 rounded'
              type='password' 
              placeholder='Repetir Contraseña' 
              name='repeatPassword'
              onChange={ handleChange } 
              value={ values.repeatPassword }
              onBlur={ handleBlur }
            />
            { errors.repeatPassword && touched.repeatPassword && <span className='text-sm text-red-600 pl-4'>{ errors.repeatPassword}</span> }

            <input 
              className="bg-gray-50  border-gray-300 text-gray-900 text-sm border focus:border focus:outline-none focus:border-indigo-500 focus:ring-1 m-3 p-2.5 rounded" 
              type='email' 
              placeholder='Email' 
              name='email'
              onChange={ handleChange } 
              value={ values.email }
              onBlur={ handleBlur }
            />
            { errors.email && touched.email && <span className='text-sm text-red-600 pl-4'>{errors.email}</span> }

            <Link to={'/login'} className="text-sky-500 text-center my-2">Ya tengo una cuenta</Link>
            <button 
              className='mx-auto mb-5 w-32 hover:bg-indigo-500 hover:text-white hover:cursor-pointer  p-2 border rounded bold text-indigo-500 border-indigo-500'
             type='submit' 
            >
              Registrarme
            </button>
        </form>
    </div>
    </div>
  )
}
