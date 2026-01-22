import React, { useState } from 'react'

const Counter = () => {
    const [number, setNumber] = useState(0)
    const handleAdd = () => {
        setNumber(prev => prev + 1)
    }
    const handleSub = () => {
        setNumber(prev => prev - 1)
    }
    return (
        <div className='grid place-items-center h-full w-full'>
            <div className='my-12 flex gap-6'>
                <button onClick={handleAdd} className='h-8 w-24 text-center font-bold text-sm bg-green-700 text-white  rounded-xl'>Add +</button>
                <p className='mx-8 text-2xl font-bold'>{number}</p>
                <button onClick={handleSub} className='h-8 w-24 text-center font-bold text-sm bg-red-500 text-white  rounded-xl'>Sub -</button>

            </div>
            <button onClick={() => { setNumber(0) }} className='h-8 w-24 text-center font-bold text-sm bg-red-500 text-white  rounded-xl'>Reset</button>
        </div>
    )
}

export default Counter