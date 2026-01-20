import React from 'react'

const Card = ({ imgURL, Description, location, title, date }: { imgURL: string, Description: string, location: string, title: string, date: string }) => {
    return (
        <div className='w-full p-4 mt-8 flex flex-row items-center gap-12'>
            <div className='bg-red-200 w-1/4 h-84 rounded-lg'>
                <img className='w-full h-full object-cover rounded-lg object-top' src={imgURL} alt="" />
            </div>
            <div className='w-3/4'>
                <div className='flex flex-row items-center justify-start gap-10 mb-2'>
                    <p className='text-gray-600  font-bold tracking-wider capitalize'>&#x1F4CD; {location}</p>
                    <p className='text-gray-400 text-sm underline font-semibold'>View on Google maps</p>
                </div>
                <div><p className='text-5xl font-bold capitalize'>{title}</p></div>
                <div className='mt-6'>
                    <p className='font-bold text-gray-600 text-sm capitalize'>{date}</p>
                </div>
                <div>
                    <p className='mt-6 text-gray-600 text-sm cap'>{Description}</p>
                </div>
            </div>
        </div>
    )
}

export default Card