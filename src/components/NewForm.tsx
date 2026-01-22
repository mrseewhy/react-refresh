import React, { FormEvent, useState } from 'react'

const NewForm = () => {
    const [input, setInput] = useState<string>('')
    const [error, setError] = useState<string>('')
    const [ingredients, setIngredients] = useState<string[]>([]);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const trimmedInput = input.trim();
        if (trimmedInput.length < 1) {
            setError('Please enter an ingredient name')
            setTimeout(() => setError(''), 3000)
            return
        }
        if (trimmedInput.length < 3) {
            setError('Please enter a longer name')
            setTimeout(() => setError(''), 3000)
            return
        } if (ingredients.includes(trimmedInput)) {
            setError('Ingredient already exists')
            setTimeout(() => setError(''), 3000)
            return
        }
        setIngredients((prev) => [...prev, trimmedInput]);
        setInput('');
        setError(''); // clear any previous error on success


    }
    return (
        <div className=' grid place-items-center'>

            <div className='w-[60vw] h-[70vh] bg-gray-100 grid place-items-center'>
                <form onSubmit={handleSubmit} className='w-full p-12'>
                    <div className='w-full mb-4 flex flex-col gap-2'>
                        <label htmlFor="ingredient" className=''>Enter Name of Ingredient:</label>
                        <input placeholder='enter name of ingredient' id="name" type='text' value={input} onChange={(e) => { setInput(e.target.value); if (error) setError(''); }} className={`w-full rounded-lg border px-4 py-2 text-sm outline-none transition
                ${error ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-red-500 focus:ring-red-200'}
                focus:ring-2`}
                            aria-invalid={!!error}
                            aria-describedby={error ? 'error-message' : undefined} />
                        <p className='text-red-500 text-xs'>{error}</p>
                    </div>
                    <div>
                        <button type='submit' className='text-white font-bold text-sm w-full bg-red-600 h-10 rounded-md'> Submit</button>
                    </div>
                </form>

            </div>
            <div className=' mt-4'>

                {ingredients.length !== 0 &&
                    <div>
                        <h2 className='text-xl font-bold'>Ingredients</h2>
                        {ingredients.map((ingredient, index) => {
                            return <span key={index + ingredient}> {ingredient}, </span>
                        })}
                    </div>}
            </div>

        </div>
    )
}

export default NewForm