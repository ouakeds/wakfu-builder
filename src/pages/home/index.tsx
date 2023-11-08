import { useState } from "react"
import BuildRow from "./components/BuildRow"
import classes from "../../constants/classes"

const HomePage = () => {

    const moduloLevels = ["20", "35", "50", "65", "80", "95", "110", "125", "140", "155", "170", "185", "200", "215", "230"]
    const prices = ['low cost', 'average', 'expensive', 'very expensive']
    
    const [builds, setBuilds] = useState([
      {
        name: "Build n1 Xelor",
        job: "xelor",
        author: "John Doe",
        items: [],
        favorite: false,
        upvotes: 0,
        downvotes: 0
      },
      {
        name: "Build n2 IOP",
        job: "iop",
        author: "John Doe",
        items: [],
        favorite: false,
        upvotes: 0,
        downvotes: 0
      },
      {
        name: "Cra Toz",
        job: "cra",
        author: "John Doe",
        items: [],
        favorite: false,
        upvotes: 0,
        downvotes: 0
      },
      {
        name: "Ougi Niak",
        job: "ouginak",
        author: "John Doe",
        items: [],
        favorite: false,
        upvotes: 0,
        downvotes: 0,
      }
    ])

    return <>
       <body className='px-6 md:px-28 py-6'>

            <div className='w-full flex flex-col md:flex-row justify-between'>
                <h1 className='text-xl font-bold text-white'>Wakfu Meta Build</h1>
            
                <div className='flex flex-wrap md:space-x-6 justify-start mt-2 md:mt-0'>

                    <div className="m-2">
                        <select id="underline_select" className="block w-full py-1.5 px-4 text-sm  border rounded-lg bg-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                            <option selected>Budget</option>
                            {
                                prices.map((price, key) => {
                                    return (
                                        <option value={price}>{price}</option>
                                    )
                                })
                            }
                            
                        </select>
                    </div>

                    <div className="m-2">
                        <select id="underline_select" className="block w-full py-1.5 px-4 text-sm  border rounded-lg bg-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                            <option selected>PVE</option>
                            <option>PVP</option>
                        </select>
                    </div>

                    <form className='w-full md:w-96 m-2'>  
                        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input type="search" id="default-search" className="block w-full py-1.5 px-4 pl-10 text-sm  border border-gray-300 rounded-lg bg-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Rechercher un build..." required/>
                        </div>
                    </form>
                </div>
            </div>

            <div className='mt-6 md:mt-12 flex flex-col md:flex-row'>
                <div className='w-96 flex flex-wrap'>
                    {
                        classes.map((classe, key) => {
                            return <button key={key} className='w-16 h-16 bg-white bg-opacity-5  hover:bg-opacity-20 m-2 items-center px-auto'>
                                <img className='h-12 w-12 mx-auto' alt={classe.label} src={'/classes/' + classe.picture} ></img>
                            </button>
                        })
                    }
                </div>

                <div className="flex-col w-full">
                    <ul className="-mb-px">
                            <li className="mr-2 flex-wrap">
                                {
                                    moduloLevels.map((levelRange, key) => {
                                        return (
                                            <div key={key} className="inline-block">
                                            {
                                                moduloLevels[key + 1] && (
                                                    <a href="/" className="text-xs md:text-md inline-block py-2.5 px-2 md:px-3.5 border-b-2 border-transparent font-semibold text-white  hover:border-blue-300 hover:text-gray-300 hover:bg-gray-500">
                                                        {moduloLevels[key] + ' - ' + moduloLevels[key + 1]}
                                                    </a>
                                                )
                                            }
                                            </div>
                                        )
                                    })
                                }
                            </li>
                    </ul>
                    <div className='w-full space-y-4 mt-2'>
                        {
                            builds.map((build, key) => {
                                return (
                                    <BuildRow
                                        id={"1"}
                                        key={key}
                                        name={build.name}
                                        job={build.job}
                                        author={build.author}
                                        items={build.items}
                                        favorite={build.favorite}
                                        onFavorite={() => {}}
                                        onWatch={() => {}}
                                    />
                                    )
                                })
                        }
                    </div>

                </div>
           
            </div>

    </body>
    </>
}

export default HomePage;