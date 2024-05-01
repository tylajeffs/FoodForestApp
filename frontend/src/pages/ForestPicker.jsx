import { useState } from 'react'
import BasicInfoPart from "../components/ForestParts/BasicInfoPart"
import CanopyPart from "../components/ForestParts/CanopyPart"
import SubCanopyPart from "../components/ForestParts/SubCanopyPart"
import ShrubPart from "../components/ForestParts/ShrubPart"
import HerbPart from "../components/ForestParts/HerbPart"
import GroundCoverPart from "../components/ForestParts/GroundCoverPart"
import UndergroundPart from "../components/ForestParts/UndergroundPart"
import VinePart from "../components/ForestParts/VinePart"
import FungiPart from "../components/ForestParts/FungiPart"

const ForestPicker = () => {
    const [page, setPage] = useState(0)
    const [data, setData] = useState({
        title: '',
        canopy: '',
        subCanopy: '',
        shrub: '',
        herb: '',
        groundCover: '',
        underground: '',
        vine: '',
        fungi: '',
    })

    const titles = ["Basic Info", "Canopy", "Subcanopy", "Shrub", "Herb", "Ground Cover", "Underground", "Vine", "Fungi"]

    const pageDisplay = () => {
        switch(page) {
            case 0:
                return <BasicInfoPart data={data} setData={setData}/>
            case 1:
                return <CanopyPart data={data} setData={setData}/>
            case 2:
                return <SubCanopyPart data={data} setData={setData}/>
            case 3:
                return <ShrubPart data={data} setData={setData}/>
            case 4:
                return <HerbPart data={data} setData={setData}/>
            case 5:
                return <GroundCoverPart data={data} setData={setData}/>
            case 6:
                return <UndergroundPart data={data} setData={setData}/>
            case 7:
                return <VinePart data={data} setData={setData}/>
            case 8:
            return <FungiPart data={data} setData={setData}/>
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
                                    console.log(data)
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