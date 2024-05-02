import React from 'react';

const Tile = () => {
 return (
        <div className="mb-5 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 hover:shadow-xl cursor-pointer">
                <h1 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>THIS IS THE TITLE</h1>
                
                <div>This is the inner info</div>
                <div className="flex flex-row gap-3 pt-8">
                    <button 
                        onClick={()=> {
                            console.log("Button Clicked")
                        }}
                        className="flex cursor-pointer w-full justify-center rounded-md border border-transparent bg-[#BF202F] py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        Select
                    </button>
                </div>
            </div>
        </div>
 )
}

export default Tile



