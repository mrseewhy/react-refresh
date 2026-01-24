import React, { useState } from 'react'

const AnotherForm = () => {
    const [ingredient, setIngredient] = useState(['Rice', 'Beans'])

    const addIngredient = (formData) => {
        const newIngredient = formData.get('ingredient')
        const role = formData.get('role');
        const gender = formData.getAll('gender')
        const color = formData.getAll('colors')
        setIngredient(prev => [...prev, newIngredient])
        console.log(color)
    }
    return (
        <div>
            <form action={addIngredient} className='flex gap-4'>
                <input type="text" name="ingredient" id="" className='border' />
                <fieldset>
                    <legend> Role:</legend>
                    <label htmlFor='role'> <input type='radio' name='role' value={'Admin'} /> Admin</label>
                    <label htmlFor='role'> <input type='radio' name='role' value={'Manager'} /> Manager</label>
                    <label htmlFor='role'> <input type='radio' name='role' value={'User'} /> User</label>
                </fieldset>
                <fieldset>
                    <legend> Gender:</legend>
                    <label htmlFor='male'> Male</label><input type='checkbox' name='gender' value={'Male'} />
                    <label htmlFor='female'>  Female</label><input type='checkbox' name='gender' value={'Female'} />
                    <label htmlFor='do-not-know'>  Do Not Know</label><input type='checkbox' name='gender' value={'Do Not Know'} />
                </fieldset>
                <label htmlFor='colors'>Select the main primary color </label>
                <select name='colors' className='border outline h-12 ' multiple>
                    <option value='red'>Red</option>
                    <option value={'green'}>Green</option>
                    <option value={'yellow'}>Yellow</option>
                </select>
                <button type="submit" className='bg-black text-white p-4'>Submit</button>
            </form>
            <div>
                {ingredient.map((ingredient, index) => {
                    return (<p key={index + ingredient}> {index + 1}. {ingredient} </p>)
                })}
            </div>

            <div>
                <fieldset>
                    <legend> Role:</legend>
                    <label htmlFor='admin'> Admin</label><input type='radio' name='admin' value={'Admin'} />
                    <label htmlFor='manager'>  Manager</label><input type='radio' name='manager' value={'Manager'} />
                    <label htmlFor='user'>  User</label><input type='radio' name='user' value={'User'} />
                </fieldset>
                <fieldset>
                    <legend> Gender:</legend>
                    <label htmlFor='male'> Male</label><input type='checkbox' name='male' value={'Male'} />
                    <label htmlFor='female'>  Female</label><input type='checkbox' name='female' value={'Female'} />
                    <label htmlFor='do-not-know'>  Do Not Know</label><input type='checkbox' name='do-not-know' value={'Do Not Know'} />
                </fieldset>
            </div>
            <div>
                <label htmlFor='mt'>Select the main primary color </label>
                <select name='colors'>
                    <option value={'red'}>Red</option>
                    <option value={'green'}>Green</option>
                    <option value={'yellow'}>Yellow</option>
                </select>
            </div>
        </div >
    )
}

export default AnotherForm