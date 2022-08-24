import {
    Link
} from "react-router-dom";

export const NavBar = () => {
  return (
    <header>
        <nav className="flex  items-center justify-between text-white h-12  bg-blue-500">
            <div className='text-2xl ml-8'>
                <Link to="/">AppTasks</Link>
            </div>
            <ul className=" flex ">
                <li className="pr-4">
                    <Link to="/login">Register</Link>
                </li>
                <li className="pr-8">
                    <Link to="/project">Projects</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}
