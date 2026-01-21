import React from 'react'

const Nav = () => {
    return (
        <div className='w-full h-16 bg-pink-600 flex items-center justify-center top-0 fixed z-50'>
            <div className='flex flex-row items-center justify-center gap-3'>
                <img className='invert brightness-0' src="./src/assets/react.svg" alt="" />
                <p className='text-2xl font-bold text-white'>My Travel journal</p>
            </div>
        </div>
    )
}

export default Nav