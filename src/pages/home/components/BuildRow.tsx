import defaultSlots from "../../../constants/slots";

interface BuildRowProps {
  id: string;
  job: string;
  name: string;
  author: string;
  items: any[];
  favorite: boolean;
  onFavorite: (id: string) => void;
  onWatch: (id: string) => void;
}

const BuildRow: React.FC<BuildRowProps> = ({id, name, job, author, items, favorite, onFavorite, onWatch}) => {
    return (
        <div className='p-6 bg-gray-800 rounded-lg flex flex-wrap items-center justify-between w-full'>
            <div className='flex items-center'>
                <img className='h-12 w-12 bg-white mr-2 md:mr-6' src={`/classes/${job}.webp`} alt="iop"></img>
                <div className='flex flex-wrap justify-start items-center md:flex-col'>
                    <h1 className='text-sm md:text-xl font-semibold text-white mr-2 md:mr-0'>{name}</h1>
                    <h2 className='text-xs md:text-l font-semibold text-gray-400 mr-2 md:mr-0'>{author}</h2>
                    <div className="bg-gray-600 text-white  rounded-lg md:mt-2 px-2 flex items-center w-fit space-x-2">
                        <button className="p-1.5 hover:bg-gray-500 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-2.5 h-2.5 md:w-4 md:h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
                            </svg>
                        </button>

                        <p className="font-semibold text-xs">377</p>
                        <button className="p-1.5 hover:bg-gray-500 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-2.5 h-2.5 md:w-4 md:h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18" />
                            </svg>
                        </button>
                    </div>
                </div>

            </div>

            <div className="flex flex-wrap">
                <div className='flex flex-wrap justify-start items-center mt-2 md:mt-0 mr-4'>
                    {
                        items.length > 0 ? items.map((slot: any) => {
                            return <img src={'/item-category/' + slot.icon} className='h-8 md:h-10 w-8 md:w-10 mr-2 md:mt-0 border' alt={slot.label}/>
                        }) :
                        
                        defaultSlots.map((slot) => {
                            return <img src={'/item-category/' + slot.icon} className='h-8 md:h-10 w-8 md:w-10 mr-2 md:mt-0 border' alt={slot.label}/>
                        })
                    }
                </div>

                <div className='flex space-x-6 mt-2 md:mt-0'>
                    <button className='p-2 text-gray-400 bg-gray-700 hover:bg-gray-600 hover:text-white rounded-lg' onClick={(e) => onWatch(id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </button>

                    <button className='p-2 text-gray-400 bg-gray-700 hover:bg-gray-600 hover:text-white rounded-lg'  onClick={(e) => onFavorite(id)}>
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