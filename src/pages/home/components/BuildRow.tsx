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
            <div className='flex'>
                <img className='h-12 w-12 bg-white mr-2 md:mr-6' src={`/classes/${job}.webp`} alt="iop"></img>
                <div className='flex space-x-2 md:space-x-0 md:flex-col'>
                    <h1 className='text-xl font-semibold text-white'>{name}</h1>
                    <h2 className='text-l font-semibold text-gray-400'>{author}</h2>
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