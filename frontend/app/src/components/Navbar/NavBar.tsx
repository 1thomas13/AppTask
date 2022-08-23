import {
    Link
} from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="shadow-md ">
        <nav>
            <ul className="h-12 flex justify-end items-center text-white bg-blue-500">
                <li className="pr-4">
                    <Link to="/">Home</Link>
                </li>
                <li className="pr-4">
                    <Link to="/login">Register</Link>
                </li>
                <li className="pr-4">
                    <Link to="/users">Projects</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}
