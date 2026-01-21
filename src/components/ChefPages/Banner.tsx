import React from 'react'

const Banner = () => {
    return (
        <div className='w-full h-full flex  items-center p-8 bg-gray-200 rounded-xl mt-12'>
            <div className='flex flex-col items-start justify-center w-3/4'>
                <h3 className='text-2xl font-bold'> Ready for a recipe?</h3>
                <p>Generate a recipe form your list of ingredents</p>
            </div>
            <div className='flex items-center justify-end w-1/4'>
                <button className='bg-orange-700 text-white p-2 rounded-lg text-sm px-6 py-2'>Get a recipe</button>
            </div>
        </div>
    )
}

export default Banner