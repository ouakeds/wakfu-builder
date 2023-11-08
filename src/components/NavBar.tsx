const NavBar = () => {
    return (
        <>
            <header className="w-screen sticky">

                <div className=" bg-black px-6 md:px-28 py-2 flex justify-between items-center ">
                    <h1 className='text-xl text-white font-bold'>Wakfu Builder</h1>
                    <div className='space-x-6'>
                        <button className='  text-blue-400 text-xs  px-2 md:px-6 py-1.5 font-semibold'>
                            Connexion
                        </button>
                    </div>
                </div>
                <div className=" bg-gray-800 px-6 md:px-28  flex justify-center items-center">
                    <ul className="flex flex-wrap -mb-px">
                        <li className="mr-2">
                            <a href="/explore" className="text-sm md:text-md inline-block py-2.5 px-2 md:px-6 border-b-2 border-transparent font-semibold text-white  hover:border-blue-300 hover:text-gray-300 hover:bg-gray-500">
                                Explorer
                            </a>
                            <a href="/my-builds" className="text-sm md:text-mdinline-block py-2.5 px-2 md:px-6 border-b-2 border-transparent font-semibold text-white  hover:border-blue-300 hover:text-gray-300 hover:bg-gray-500">
                                Mes Builds
                            </a>
                            <a href="/conceptor" className="text-sm md:text-mdinline-block py-2.5 px-2 md:px-6 border-b-2 border-transparent font-semibold text-white  hover:border-blue-300 hover:text-gray-300 hover:bg-gray-500">
                                Concepteur
                            </a>
                        </li>
                    </ul>

                </div>
            </header>
        </>
    )
}

export default NavBar;