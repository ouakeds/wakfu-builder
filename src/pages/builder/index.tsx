import { useState } from "react";
import StatisticBar from "../../components/Statistic/StatisticBar";
import EyeIcon from "../../icons/Eye";
import EyeCloseIcon from "../../icons/EyeClosed";
import ClipIcon from "../../icons/Clip";

const BuilderPage = () => {
    const [showBuild, setShowBuild] = useState(false);
    
    const onShowBuild = () => {
      setShowBuild(!showBuild)
    }
  
    const onClipBuild = () => {
      navigator.clipboard.writeText("nope")
    }
  
    const slots = [
      { label: 'hat', item: undefined, icon: 'hat.webp' },
      { label: 'necklace', item: undefined, icon: 'necklace.webp' },
      { label: 'chest', item: undefined, icon: 'chest.webp' },
      { label: 'left_ring', item: undefined, icon: 'left_ring.webp' },
      { label: 'right_ring', item: undefined, icon: 'right_ring.webp' },
      { label: 'boots', item: undefined, icon: 'boots.webp' },
      { label: 'cape', item: undefined, icon: 'cape.webp' },
      { label: 'epaulettes', item: undefined, icon: 'epaulettes.webp' },
      { label: 'belt', item: undefined, icon: 'belt.webp' },
      { label: 'costum', item: undefined, icon: 'costum.webp' },
      { label: 'left_hand', item: undefined, icon: 'left_hand.webp' },
      { label: 'right_hand', item: undefined, icon: 'right_hand.webp' },
      { label: 'emblem', item: undefined, icon: 'emblem.webp' },
      { label: 'pet', item: undefined, icon: 'pet.webp' },
    ]
  
    const items = [1,1,1,1,1,1,1,1,1,11,1,1,1,1,1,1,1,1,]
    
    return <>
        <div className='md:h-32 w-full bg-gray-800 px-2 py-1 flex flex-col md:flex-row justify-between'>
            <div className='flex space-x-6 items-center'>
              <div className='bg-white h-24 w-24'>
                {/* hero icon */}
              </div>
              <div className='flex-col space-y-2'>
                <h2 className='text-xl font-semibold text-white'>Testing</h2>
                <div className='flex space-x-2'>
                  <button className='bg-black bg-opacity-40  hover:bg-opacity-30 text-white h-12 w-12' onClick={onShowBuild}>
                    {
                      showBuild ? <EyeIcon /> : <EyeCloseIcon />
                    }
                    
                  </button>

                  <button className='bg-black bg-opacity-40  hover:bg-opacity-30 text-white h-12 w-12' onClick={onClipBuild}>
                    <ClipIcon />
                  </button>
                </div>
              </div>
            </div>

            <div className='flex flex-wrap justify-start items-center'>
              {
                slots.map((slot) => {
                  return <img src={'/item-category/' + slot.icon} className='h-12 w-12 mr-2 md:mt-0 border' alt={slot.label}/>
                })
              }
            </div>
        </div>

        <div className='mt-2 w-full  flex flex-wrap md:flex-nowrap justify-between space-y-2 md:space-y-0 md:space-x-6'>
          <button className='bg-gray-800 hover:bg-white hover:bg-opacity-20 w-full px-6 py-1.5 text-xl text-white uppercase font-semibold'>recherche</button>
          <button className='bg-gray-800 hover:bg-white hover:bg-opacity-20 w-full px-6 py-1.5 text-xl text-white uppercase font-semibold'>sort</button>
          <button className='bg-gray-800 hover:bg-white hover:bg-opacity-20 w-full px-6 py-1.5 text-xl text-white uppercase font-semibold'>aptitude</button>
          <button className='bg-gray-800 hover:bg-white hover:bg-opacity-20 w-full px-6 py-1.5 text-xl text-white uppercase font-semibold'>enchantement</button>
          <button className='bg-gray-800 hover:bg-white hover:bg-opacity-20 w-full px-6 py-1.5 text-xl text-white uppercase font-semibold'>recapitulatif</button>
        </div>
        
        <div className='flex flex-wrap space-x-0 md:space-x-6 mt-2'>
          <StatisticBar />
          <div className='flex flex-1 flex-wrap justify-between py-1 px-1'>
              {
                items.map((item) => {
                  return (
                    <div className='bg-gray-800 border border-white border-opacity-20 py-2 px-2 w-full md:w-60 flex space-x-6 items-center mt-2'>
                      <img src="/items/test.webp" alt="" className='h-12 w-12 bg-white'></img>
                      <div className='flex-col'>
                          <h1 className='text-lg text-white font-extrabold'>ITEM</h1>
                          <h1 className='text-xs text-white font-semibold'>Niveau 230</h1>
                      </div>
                      <button className='bg-white bg-opacity-20 p-2'>
                        <img className="h-4 w-4" src='/items/equiped.png' alt=""/>
                      </button>
                    </div>
                  )
                })
              }

            
          </div>
          <div className='bg-gray-800 w-96 border border-white border-opacity-20 py-1 px-1'>Filter</div>
        </div>
    </>
}

export default BuilderPage;