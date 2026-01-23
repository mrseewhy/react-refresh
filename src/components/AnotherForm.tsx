import React, { useState } from 'react'

const AnotherForm = () => {
    const [ingredient, setIngredient] = useState(['Rice', 'Beans'])

    const addIngredient = (formData) => {
        const newIngredient = formData.get('ingredient')
        setIngredient(prev => [...prev, newIngredient])
        console.log(newIngredient)
    }
    return (
        <div>
            <form action={addIngredient} className='flex gap-4'>
                <input type="text" name="ingredient" id="" className='border' />
                <button type="submit" className='bg-black text-white p-4'>Submit</button>
            </form>
            <div>
                {ingredient.map((ingredient, index) => {
                    return (<p key={index + ingredient}> {index + 1}. {ingredient} </p>)
                })}
            </div>
        </div>
    )
}

export default AnotherForm