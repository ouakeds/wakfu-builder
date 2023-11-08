export interface Statistic  {
    picture?: string;
    name: string;
    value: number;
    suffixe?: string;
}
  
const StatisticCard: React.FC<Statistic> = ({name, value, picture, suffixe}) => {

    return (
        <div className='bg-gray-800 h-8 w-auto md:w-44 flex items-center justify-between px-2 mt-1 mr-1'>
            <div className='flex space-x-4 items-center'>
                <img src={'/stats/' + picture} className='h-4 w-4' alt={name}/>
                <h3 className=' text-white text-xs'>{name}</h3>
            </div>
            <h3 className='ml-6 md:ml-0 text-xs font-semibold text-white'>{value} {suffixe}</h3>
        </div>
    )
}

export default StatisticCard