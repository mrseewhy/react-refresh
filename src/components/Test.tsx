import React from 'react'

const Test = () => {
    return (
        <>
            <div className='flex justify-center items-center h-screen overflow-hidden'>
                <div className='w-1/3 mx-auto h-[65vh] bg-[url("./src/assets/react.svg")] bg-no-repeat bg-[position:200%_center] bg-[length:70%_auto] bg-blend-overlay bg-gray-900 rounded-2xl shadow-md text-white text-3xl '>
                    <div className='w-full h-1/6 bg-gray-950 rounded-t-2xl p-6'>
                        <div className='flex flex-row justify-between items-center'>
                            <div> <img src="./src/assets/react.svg" alt="" /></div>
                            <div>
                                <nav>
                                    <ul className='text-sm flex flex-row gap-4'>
                                        <li>Home</li>
                                        <li>Products</li>
                                        <li>Services</li>
                                        <li>About</li>
                                        <li>Contact</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-5/6  p-8 mt-4'>
                        <p className='text-3xl font-bold'>Fun Facts About React!</p>
                        <ul className='text-sm mt-6 ml-4'>
                            <li className='mb-2 list-disc marker:text-blue-500 marker:text-xl'>React is a JavaScript library for building user interfaces.</li>
                            <li className='mb-2 list-disc marker:text-blue-500 marker:text-xl'>React is a JavaScript library for building user interfaces.</li>
                            <li className='mb-2 list-disc marker:text-blue-500 marker:text-xl'>React is a JavaScript library for building user interfaces.</li>
                            <li className='mb-2 list-disc marker:text-blue-500 marker:text-xl'>React is a JavaScript library for building user interfaces.</li>
                            <li className='mb-2 list-disc marker:text-blue-500 marker:text-xl'>React is a JavaScript library for building user interfaces.</li>
                        </ul>
                    </div>



                </div>
            </div>

        </>

    )
}

export default Test;