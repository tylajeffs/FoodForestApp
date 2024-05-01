import React from "react";

const BasicInfoPart = () => {
    return (
        <div className="space-y-6">
            {/* Forest Title Section */}
            <div className="mt-1">
                <label className="block text-sm font-medium text-gray-700 pb-2">Forest Title</label>
                <input 
                    type="text" 
                    id="title"
                    className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
            </div>
            {/* Ecoregion Section */}
            <div className="mt-1">
                <label className="block text-sm font-medium text-gray-700 pb-2">Ecoregion</label>
                <input 
                    type="text" 
                    id="ecoregion"
                    className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
            </div>
        </div>
    )
}

export default BasicInfoPart