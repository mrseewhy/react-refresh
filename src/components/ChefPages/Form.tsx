import { useEffect, useState } from "react";

const Form = ({ ingredients, setIngredients, allIngredients, setAllIngredients }) => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inputValue.trim() === '') return;

        const newItems = inputValue
            .split(',')
            .map(item => item.trim())
            .filter(item => item !== '');

        // 1. Add ONLY the new items to the state
        setIngredients([...ingredients, ...newItems]);
        setAllIngredients([...allIngredients, ...newItems]);

        // 2. Clear the input
        setInputValue('');
    };

    const [inputValue, setInputValue] = useState('')
    return (
        <>
            <div className="  flex flex-col items-center justify-center  w-full mt-16 mb-12">
                <div className="flex flex-row items-center justify-center gap-2 w-full">
                    <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="e.g oregano" type="text" className="p-2 border border-gray-300 rounded-lg w-2/3 outline-0 focus:border-red-500 text-sm" />
                    <button onClick={handleSubmit} className="p-2 border border-gray-300 rounded-lg w-1/3 text-sm text-white bg-black hover:bg-gray-800 transition-all duration-300">+ Ingredients</button>
                </div>
            </div>
        </>
    )
}

export default Form