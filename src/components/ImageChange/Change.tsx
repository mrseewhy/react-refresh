import React, { useState } from 'react'
import img from '/src/assets/react.svg'
import img2 from '/src/assets/img2.jpg'

const Change = () => {


    const [image, setImage] = useState(img)

    const handleChange = () => {
        image === img ? setImage(img2) : setImage(img)

    }
    return (
        <div className='h-screen w-full'>
            <div className='grid place-items-center h-full w-full'>
                <div className='w-[600px] h-[70vh] bg-red-50 grid place-items-center'>
                    <div className='w-[60%] h-[60%] '>
                        <img src={image} alt='image' className='w-[10/12] h-full' />
                        <button onClick={handleChange} className='mt-4 h-12 w-full bg-red-600 text-white rounded-xl font-bold hover:bg-red-500 transition-all duration-300 hover:scale-105'>Change Image</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Change