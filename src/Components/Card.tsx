import { Human } from "../Types/Human"
import activeIcon from "../Utils/active.png"
import deadIcon from "../Utils/dead.png"

const Card = (prop: Human) => {
    function renderStatus(){
        if(prop.status === 'Alive'){
            return  <p className="text-white"><img alt="" src={activeIcon} className="w-3 h-3 inline"></img> {prop.status} - {prop.species}</p>
        }else{
            return  <p className="text-white"><img alt="" src={deadIcon} className="w-3 h-3 inline"></img> {prop.status} - {prop.species}</p>
        }
    }
    return (
        <div className='flex justify-center items-center flex-wrap w-auto border-2 border-black bg-black'>
            <div className="flex flex-wrap justify-center items-center gap-9 p-5">
                <div>
                    <img alt='' src={prop.image} className='w-max h-auto'></img>
                </div>
                <div className="flex-col flex flex-wrap">
                    <p className="text-white">{prop.name}</p>
                    {renderStatus()}
                    <p className="mt-3 text-white">Gender:</p>
                    <p className="text-white">{prop.gender}</p>
                    <p className="mt-3 text-white">Known Position:</p>
                    <p className="text-white">{prop.location?.name}</p>
                </div>
            </div>
        </div>
    )
}
export default Card