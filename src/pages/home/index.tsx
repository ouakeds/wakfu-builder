import { useEffect, useState } from "react"
import BuildRow from "./components/BuildRow"
import classes from "../../constants/classes"
import useBuild from "./hooks/useBuild"
import Build from "../../types/build"
import { Cost } from "../../types/cost"
import { Level } from "../../types/level"

const HomePage = () => {

    const moduloLevels: Level[] = [20, 35, 50, 65, 80, 95, 110, 125, 140, 155, 170, 185, 200, 215, 230]
    const prices: Cost[] = ['low cost', 'average', 'expensive', 'very expensive']
    const {getAll} = useBuild();

    const [levelRange, setLevelRange] = useState<{start: Level | undefined, end: Level | undefined}>()
    const [builds, setBuilds] = useState<Build[]>([])
    const [rows, setRows] = useState<Build[]>([])


    useEffect(() => {
        getAll().then((response) => {
            setBuilds(response)
            setRows(response)
        })
    }, [])

    const onFilterCost = (cost: string) => {
        if (cost === "none") {
            setRows(builds)
            return
        }
        setRows(builds.filter(build => build.cost === cost))
    }

    const onFilterUsage = (mode: string) => {
        if (mode === "all") {
            setRows(builds)
            return
        }
        const pve = mode === "PVE";
        setRows(builds.filter(build => build.pve === pve))
    }

    const onFilterLevel = (start: Level | undefined, end: Level | undefined) => {
        setLevelRange({start, end})

        if (start === undefined || end === undefined) {
            setRows(builds)
            return;
        }
        setRows(builds.filter(build => build.level.start === start && build.level.end === end))
    }

    return <>
       <body className='px-6 md:px-28 py-6'>

            <div className='w-full flex flex-col md:flex-row justify-between'>
                <h1 className='text-xl font-bold text-white'>Meta Build</h1>
            
                <div className='flex flex-wrap md:space-x-6 justify-start mt-2 md:mt-0'>

                    <div className="m-2">
                        <select onChange={(e) => onFilterCost(e.target.value)} id="underline_select" className="block w-full py-1.5 px-4 text-sm  border rounded-lg bg-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                            <option selected value="none">Tous budget</option>
                            {
                                prices.map((price, key) => {
                                    return (
                                        <option key={key} value={price}>{price}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    
                    <div className="m-2">
                        <select onChange={(e) => onFilterUsage(e.target.value)} id="underline_select" className="block w-full py-1.5 px-4 text-sm  border rounded-lg bg-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                            <option selected value={"all"}>PVE & PVP</option>
                            <option  value={"PVE"}>PVE</option>
                            <option value={"PVP"}>PVP</option>
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
                    <ul className="-mb-px flex-wrap">
                        <button
                            onClick={() => onFilterLevel(undefined, undefined) }
                            className={`text-xs md:text-md inline-block py-2.5 px-2 md:px-3.5 border-b-2 border-transparent font-semibold text-white ${!levelRange?.start ? 'border-blue-300 text-gray-300 bg-gray-500' : 'hover:border-blue-300 hover:text-gray-300 hover:bg-gray-500'}`}
                        >
                            Tous
                        </button>
                        {
                            moduloLevels.map((level, key) => {
                                return (
                                    <li key={key} className="inline-block mr-2">
                                    {
                                        moduloLevels[key + 1] && (
                                            <button
                                                onClick={() => onFilterLevel(moduloLevels[key], moduloLevels[key + 1]) }
                                                className={`text-xs md:text-md inline-block py-2.5 px-2 md:px-3.5 border-b-2 border-transparent font-semibold text-white ${moduloLevels[key] === levelRange?.start ? 'border-blue-300 text-gray-300 bg-gray-500' : 'hover:border-blue-300 hover:text-gray-300 hover:bg-gray-500'}`}
                                            >
                                                { moduloLevels[key] + ' - ' + moduloLevels[key + 1] }
                                            </button>
                                        )
                                    }
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className='w-full space-y-4 mt-2'>
                        {
                            rows.map((build, key) => {
                                return (
                                    <BuildRow
                                        key={key}
                                        build={build}
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