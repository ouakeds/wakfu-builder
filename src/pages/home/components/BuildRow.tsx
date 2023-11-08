import defaultSlots from "../../../constants/slots";
import Build from "../../../types/build";

interface BuildRowProps {
  build: Build
  onFavorite: (id: string) => void;
  onWatch: (id: string) => void;
}

const BuildRow: React.FC<BuildRowProps> = ({build, onFavorite, onWatch}) => {
    return (
        <div className='p-6 bg-gray-800 rounded-lg flex flex-wrap items-center justify-between w-full'>
            <div className='flex items-center'>
                <img className='h-12 w-12 bg-white mr-4 md:mr-6' src={`/classes/${build.job}.webp`} alt="iop"></img>
                <div className='flex flex-wrap justify-start md:flex-col'>
                    <div className="flex items-center space-x-2">
                        <h1 className='text-sm md:text-xl font-semibold text-white md:mr-0'>{build.name}</h1>
                        <h2 className='text-xs md:text-l font-semibold text-gray-400 mr-2 md:mr-0'>Par {build.author}</h2>
                    </div>
                    <div className="flex items-center space-x-2 my-1 w-full">
                        <span className='text-xs bg-blue-500 py-1 px-2 rounded-lg font-semibold text-white md:mr-0'>{`${build.level.start}-${build.level.end}`}</span>
                        <span className='text-xs bg-red-500 py-1 px-2 rounded-lg font-semibold text-white md:mr-0'>{build.cost}</span>
                        <span className='text-xs bg-green-500 py-1 px-2 rounded-lg font-semibold text-white md:mr-0'>{build.pve ? "PVE" : "PVP"}</span>
                    </div>
                    <div className="bg-gray-600 text-white  rounded-lg mt-1 md:mt-2 px-2 flex items-center w-fit space-x-2">
                        <button className="p-1.5 hover:bg-gray-500 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-2.5 h-2.5 md:w-4 md:h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
                            </svg>
                        </button>

                        <p className="font-semibold text-xs">{build.votes.upvotes - build.votes.downvotes}</p>
                        <button className="p-1.5 hover:bg-gray-500 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-2.5 h-2.5 md:w-4 md:h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18" />
                            </svg>
                        </button>
                    </div>
                </div>

            </div>

            <div className="flex flex-wrap my-2">
                <div className='flex flex-wrap justify-start items-center mt-2 md:mt-0 mr-4'>
                    {
                        build.items.length > 0 ? build.items.map((slot: any) => {
                            return <img src={'/item-category/' + slot.icon} className='h-8 md:h-10 w-8 md:w-10 mr-2 md:mt-0 border' alt={slot.label}/>
                        }) :
                        
                        defaultSlots.map((slot) => {
                            return <img src={'/item-category/' + slot.icon} className='h-8 md:h-10 w-8 md:w-10 mr-2 md:mt-0 border' alt={slot.label}/>
                        })
                    }
                </div>

                <div className='flex space-x-6 mt-2 md:mt-0'>
                    <button className='h-6 w-6 md:h-10 md:w-10 flex items-center justify-center text-gray-400 bg-gray-700 hover:bg-gray-600 hover:text-white rounded-lg' onClick={(e) => onWatch(build.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </button>

                    <button className='h-6 w-6 md:h-10 md:w-10 flex items-center justify-center text-gray-400 bg-gray-700 hover:bg-gray-600 hover:text-white rounded-lg'  onClick={(e) => onFavorite(build.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}



export default BuildRow