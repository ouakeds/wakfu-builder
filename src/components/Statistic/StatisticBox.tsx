import StatisticCard, { Statistic } from "./StatisticCard"

interface StatisticsBoxProps {
    statistics: Statistic[]
}
  
const StatisticBox: React.FC<StatisticsBoxProps> = ({statistics}) => {
    return (
        <div className='flex flex-wrap justify-start w-96 border items-center border-white border-opacity-20 py-1 px-1'>
        {
            statistics.map((statistic, index) => {
                return (
                    <StatisticCard key={index} name={statistic.name} value={statistic.value} picture={statistic.picture} suffixe={statistic.suffixe} />
                )
            })
        }
        </div>
    )
}

export default StatisticBox;