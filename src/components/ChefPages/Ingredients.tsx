import React from 'react'



const Ingredients = ({ allIngredients }: { allIngredients: string[] }) => {
    return (
        <div className='w-full'>
            <h1 className='text-4xl font-bold'> Ingredients on hand:</h1>
            <ol className='ml-6 mt-4'>
                {allIngredients.map((ingredient, index) => {
                    return <li className='list-disc mb-3 text-sm' key={index}>{ingredient}</li>
                })}
            </ol>
        </div>
    )
}

export default Ingredients