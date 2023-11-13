import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <header className="w-screen sticky">

                <div className=" bg-black px-6 md:px-28 py-2 flex justify-between items-center ">
                    <h1 className='text-xl text-white font-bold'>Wakfu Builder</h1>
                    <div className='space-x-6'>
                        <NavLink to="/login">
                            <button className='  text-blue-400 text-xs  px-2 md:px-6 py-1.5 font-semibold'>
                                Connexion
                            </button>
                        </NavLink>
              
                    </div>
                </div>
                <div className=" bg-gray-800 px-6 md:px-28  flex justify-center items-center">
                    <ul className="flex flex-wrap -mb-px">
                        <NavLink to="/">
                            <li className="text-sm md:text-md inline-block py-2.5 px-2 md:px-6 border-b-2 border-transparent font-semibold text-white  hover:border-blue-300 hover:text-gray-300 hover:bg-gray-500">
                                Explorer
                            </li>
                        </NavLink>

                        <NavLink to="/my-builds">
                            <li className="text-sm md:text-mdinline-block py-2.5 px-2 md:px-6 border-b-2 border-transparent font-semibold text-white  hover:border-blue-300 hover:text-gray-300 hover:bg-gray-500">
                                Mes Builds
                            </li>
                        </NavLink>

                        <NavLink to="/conceptor">
                            <li className="text-sm md:text-mdinline-block py-2.5 px-2 md:px-6 border-b-2 border-transparent font-semibold text-white  hover:border-blue-300 hover:text-gray-300 hover:bg-gray-500">
                                Concepteur
                            </li>
                        </NavLink>
                    </ul>

                </div>
            </header>
        </>
    )
}

export default NavBar;