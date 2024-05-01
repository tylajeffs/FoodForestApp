import { useState } from 'react'
import BasicInfoPart from "../components/BasicInfoPart"
import CanopyPart from "../components/CanopyPart"
import SubCanopyPart from "../components/SubCanopyPart"

const ForestPicker = () => {
    const [page, setPage] = useState(0)
    const [data, setData] = useState({
        title: '',
        canopy: '',
        subCanopy: '',
    })

    const titles = ["Basic Info", "Canopy", "Subcanopy"]

    const pageDisplay = () => {
        if(page === 0) {
            return <BasicInfoPart data={data} setData={setData}/>
        } else if(page === 1) {
            return <CanopyPart data={data} setData={setData}/>
        } else {
            return <SubCanopyPart data={data} setData={setData}/>
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