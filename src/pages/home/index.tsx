import { useEffect, useState } from "react"
import BuildRow from "./components/BuildRow"
import classes from "../../constants/classes"
import useBuild from "./hooks/useBuild"
import Build from "../../types/build"
import { Cost } from "../../types/cost"
import { Level } from "../../types/level"

const moduloLevels: Level[] = [20, 35, 50, 65, 80, 95, 110, 125, 140, 155, 170, 185, 200, 215, 230]
const prices: Cost[] = ['low cost', 'average', 'expensive', 'very expensive']

const HomePage = () => {

    const {getAll} = useBuild();
    const [levelRange, setLevelRange] = useState<{start: Level | undefined, end: Level | undefined}>()
    const [builds, setBuilds] = useState<Build[]>([])
    const [rows, setRows] = useState<Build[]>([])

    const [filter, setFilter] = useState<any>({
        job: undefined,
        cost: undefined,
        pve: undefined,
        level: {
            start: undefined,
            end: undefined
        }
    })

    useEffect(() => {
        getAll().then((response) => {
            setBuilds(response)
            setRows(response)
        })
    }, [])

    const onFilterCost = (cost: string) => {
        const costValue = cost === "all" ? undefined : cost

        if (costValue)
            setRows(builds.filter((build) => build.cost === costValue))
        else
            setRows(builds)
    }

    const onFilterUsage = (mode: string) => {
        const modeValue = mode === "all" ? undefined : mode === "PVE"

        if (modeValue)
            setRows(builds.filter((build) => build.pve === modeValue))
        else    
            setRows(builds)
    }

    const onFilterLevel = (start: Level | undefined, end: Level | undefined) => {
        setLevelRange({start, end})
        if (start && end) {
            setRows(builds.filter((build) => build.level.start >= start && build.level.end <= end))
        } else    
            setRows(builds)
    }

    const onBuildNameSearch = (query: string) => {
        setRows(rows.find((build) => build.name.toLowerCase().includes(query.toLowerCase())) ? builds.filter((build) => build.name.toLowerCase().includes(query.toLowerCase())) : [])
    }

    const onFilterJob = (job: string) => {
        setRows(builds.filter((build) => build.job === job))
        setFilter({...filter, job})
    }

    return <>
       <div className='px-6 md:px-28 py-6'>

            <div className='w-full flex flex-col md:flex-row justify-between'>
                <h1 className='text-xl font-bold text-white'>Explorer</h1>
            
                <div className='flex flex-wrap md:space-x-6 justify-start mt-2 md:mt-0'>

                    <div className="m-2">
                        <select defaultValue={"all"} onChange={(e) => onFilterCost(e.target.value)} id="underline_select" className="block w-full py-1.5 px-4 text-sm  border rounded-lg bg-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                            <option value="all">Tous budget</option>
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
                        <select defaultValue="all" onChange={(e) => onFilterUsage(e.target.value)} id="underline_select" className="block w-full py-1.5 px-4 text-sm  border rounded-lg bg-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                            <option  value={"all"}>PVE & PVP</option>
                            <option  value={"PVE"}>PVE</option>
                            <option value={"PVP"}>PVP</option>
                        </select>
                    </div>

                    <form className='w-full md:w-96 m-2'>  
                        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4 text-white dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input onChange={(e) => onBuildNameSearch(e.target.value)} type="search" id="default-search" className="block w-full py-1.5 px-4 pl-10 text-sm  border border-gray-300 rounded-lg bg-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Rechercher un build..." required/>
                        </div>
                    </form>
                </div>
            </div>

            <div className='mt-6 md:mt-12 flex flex-col md:flex-row'>
                <div className='w-96 flex flex-wrap'>
                    {
                        classes.map((classe, key) => {
                            return <button onClick={() => onFilterJob(classe.label)} key={key} className={`w-16 h-16  m-2 items-center px-auto bg-white  ${filter.job === classe.label ? 'bg-opacity-20' : 'bg-opacity-5 hover:bg-opacity-20' }`}>
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

    </div>
    </>
}

export default HomePage;