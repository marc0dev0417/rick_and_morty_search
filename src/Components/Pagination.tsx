import { observer } from "mobx-react-lite"
import { useEffect, useState } from "react"
import ServiceStore from "../ViewModels/ServiceStore"

const serviceStore = ServiceStore.getServiceStore()

const Pagination = () => {
  

  function nextHandler() {
      serviceStore.incrementCountPage()
      serviceStore.allCharactersByPage(serviceStore.getCountPage)
  }
  function previousHandler() {
    
      serviceStore.decrementCountPage()
      serviceStore.allCharactersByPage(serviceStore.getCountPage)
    
  }

  return (
    <div className="flex justify-center items-center mt-4 ">
      <div id="container_pagination" className="hidden">
        <button className="text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={previousHandler} >Previous</button>
        <button className="text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={nextHandler} >Next</button>
      </div>
    </div>
  )
}
export default observer(Pagination)