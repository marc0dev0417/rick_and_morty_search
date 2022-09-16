import 'tailwindcss/tailwind.css'
import Card from '../Components/Card'
import ServiceStore from '../ViewModels/ServiceStore'
import {observer} from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import { Human } from '../Types/Human'

const serviceStore = ServiceStore.getServiceStore()

const Search = () => {

    const [name, setName] = useState('')

    return (
        <>
            <div className='flex justify-center items-center flex-wrap p-8 gap-10'>
                <div className='flex-col justify-center flex-wrap gap-96'>
                    <h1 className="text-center sm:text-8xl font-bold m-3 font-['Tanker']">Rick y Morty</h1>
                    <h1 className='text-center mt-56 font-bold'>Search your favorite character</h1>
                    <div className='flex justify-center items-center'>
                        <input type="text" className="bg-gray-50 border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-72 p-2.5  dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center" placeholder="Morty..." required onChange={(e) => {setName(e.target.value)}}/>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button onClick={() => {serviceStore.requestCharacter(name)}} className="text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </div> 
                
            </div>
            <div className='flex justify-center items-center flex-wrap gap-4 w-auto'>
            {serviceStore.getCharacter.map((e, i) => <Card key={e.id} image={e.image} name={e.name} species={e.species} gender={e.gender} status={e.status} location={e.location}/>)}
            </div>
           
        </>
    )
}
export default observer(Search)