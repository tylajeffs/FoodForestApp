import { useState } from 'react'
import BasicInfoPart from "../components/BasicInfoPart"
import CanopyPart from "../components/CanopyPart"
import UnderstoryPart from "../components/UnderstoryPart"

const ForestPicker = () => {
    const [page, setPage] = useState(0)

    const titles = ["Basic Info", "Canopy", "Subcanopy"]

    const pageDisplay = () => {
        if(page === 0) {
            return <BasicInfoPart />
        } else if(page === 1) {
            return <CanopyPart />
        } else {
            return <UnderstoryPart />
        }
    }

    return (
        <div>
            <h1 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>{titles[page]}</h1>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <div>{pageDisplay()}</div>
                    <div className="flex flex-row gap-3 pt-8">
                        <button 
                            disabled={page===0}
                            onClick={()=> {
                                setPage((currentPage) => currentPage-1)
                            }}
                            className="flex cursor-pointer w-full justify-center rounded-md border border-transparent bg-[#BF202F] py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            Prev</button>
                        <button 
                            onClick={(e) => {
                                if(page === titles.length-1){
                                    alert("form submitted")
                                } else {
                                    setPage((currentPage) => currentPage+1)
                                }
                            }}
                            className="flex cursor-pointer w-full justify-center rounded-md border border-transparent bg-[#BF202F] py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            { page === titles.length-1 ? "Submit" : "Next"}</button>
                    </div>
                </div>
            
            </div>
        </div>
        
    )
}

export default ForestPicker