import React, { useState, useEffect } from 'react';
import axios from 'axios'

const CanopyPart = ({data, setData}) => {

    //connect to the plant database
    const [plants, setPlants] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`https://perenual.com/api/species-list?key=sk-8Blf663575a9a8b4e5338`);
                setPlants(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        
        fetchData();
    }, []);

    console.log(plants)






    return (
        <div className="space-y-6">
            {/* Canopy Section */}
            <div className="mt-1">
                <label className="block text-sm font-medium text-gray-700 pb-2">Canopy</label>
                <input 
                    onChange={(e) => setData({...data, canopy: e.target.value})}
                    value = {data.canopy}
                    type="text" 
                    id="canopy"
                    className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
            </div>
        </div>
    )
}

export default CanopyPart