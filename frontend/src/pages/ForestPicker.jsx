import { useState } from 'react'
import { useEffect } from "react";
import { useForestsContext } from '../hooks/useForestsContext'
import { useAuthContext } from "../hooks/useAuthContext"

//form pieces
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
    const {dispatch} = useForestsContext()
    const { user } = useAuthContext()

    const [page, setPage] = useState(0)
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])
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

    useEffect(() => {
        const fetchForests = async () => {
            const response = await fetch('/api/forests', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if(response.ok) {
                dispatch({type: 'SET_FORESTS', payload: json})
            }
        }

        if(user) {
            fetchForests()
        }
    }, [dispatch, user])


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

    const handleSubmit = async (e) => {
        //e.preventDefault()

        if(!user) {
            setError('You must be logged in')
            return
        }

        const {title, ecoregion, canopy, subCanopy, shrub, herb, groundCover, underground, vine, fungi} = data
        const forest = {title, ecoregion, canopy, subCanopy, shrub, herb, groundCover, underground, vine, fungi}

        const response = await fetch('/api/forests', {
            method: 'POST',
            body: JSON.stringify(forest),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })

        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if(response.ok) {
            setData({title: '',
            canopy: '',
            subCanopy: '',
            shrub: '',
            herb: '',
            groundCover: '',
            underground: '',
            vine: '',
            fungi: ''})
            setEmptyFields([])
            setError(null)
            console.log("new forest created", json)
            dispatch({type: 'CREATE_FOREST', payload: json})
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
                                    handleSubmit()
                                } else {
                                    setPage((currentPage) => currentPage+1)
                                }
                            }}
                            className="flex cursor-pointer w-full justify-center rounded-md border border-transparent bg-[#BF202F] py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            { page === titles.length-1 ? "Submit" : "Next"}</button>
                    </div>
                    {error && <div className="error">{error}</div>}
                </div>
            
            </div>
        </div>
        
    )
}

export default ForestPicker