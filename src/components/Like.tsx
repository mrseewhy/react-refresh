import React from 'react'
const likes = [
    'React is easy to learn',
    'React is fun to use',
    'React is powerful'
]
const Like = () => {
    return (
        < div className='flex justify-center items-center h-screen'>
            <div className=' h-[40vh] w-96 bg-purple-100 flex flex-col items-center justify-center shadow-md p-4 rounded-lg hover:shadow-xl hover:bg-purple-200 transition-all duration-300'>
                <h1 className='text-center text-2xl font-bold text-purple-800 pt-4'>Why I like React</h1>
                <div className='mt-2 w-44 flex  flex-col justify-center mx-auto '>
                    {likes.map((like, index) => (
                        <p className='text-purple-950' key={index}>{index + 1}. {like}</p>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default Like