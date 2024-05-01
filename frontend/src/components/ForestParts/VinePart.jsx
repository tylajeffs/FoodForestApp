import React from "react";

const VinePart = ({data, setData}) => {
    return (
        <div className="space-y-6">
            {/* Vine Section */}
            <div className="mt-1">
                <label className="block text-sm font-medium text-gray-700 pb-2">Vine</label>
                <input 
                    onChange={(e) => setData({...data, vine: e.target.value})}
                    value = {data.vine}
                    type="text" 
                    id="vine"
                    className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
            </div>
        </div>
    )
}

export default VinePart