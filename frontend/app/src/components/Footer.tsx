import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'

export const Footer = () => {
  return (
    <div className='self-end h-16 w-full bg-slate-300 flex items-center justify-center'>
       <h5 className='font-bold text-center'>Creado por Thomas Barreto</h5> 
       <a target='__blank' className='mx-4' href='https://github.com/1thomas13'> 
        <AiFillGithub/>
        </a> 
       <a target='__blank' href='https://www.linkedin.com/in/thomas-barreto-50ab71204/'>
        <AiFillLinkedin/>
       </a>
    </div>
  )
}
