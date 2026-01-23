import './App.css'
import { useState, useEffect } from 'react'
import ChefNav from './components/ChefPages/ChefNav'
import Form from './components/ChefPages/Form'
import Ingredients from './components/ChefPages/Ingredients'
import Banner from './components/ChefPages/Banner'
import Change from './components/ImageChange/Change'
import NewForm from './components/NewForm'
import Counter from './components/Counter'
import Users from './components/User/Users'
import AnotherForm from './components/AnotherForm'

function App() {

  const startingIngredients: string[] = ['Chicken breasts', 'Most of the main spices', 'Olive oil', 'Heavy Cream', 'Chicken Broth', 'Parmesean Cheese', 'Spinach',]

  const [ingredients, setIngredients] = useState([])
  const [allIngredients, setAllIngredients] = useState(startingIngredients)



  return (

    <>
      {/* <div className="flex h-dvh w-full items-center justify-center bg-gray-100">
        <div className="
    w-full max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw] xl:max-w-[50vw]
    aspect-[4/3] md:aspect-square bg-gray-100 rounded-xl shadow-lg
  ">
          <ChefNav />
          <div className='w-10/12 mx-auto'>
            <Form ingredients={ingredients} setIngredients={setIngredients} allIngredients={allIngredients} setAllIngredients={setAllIngredients} />
            <Ingredients allIngredients={allIngredients} />
            <Banner />
          </div>

        </div>
      </div> */}
      {/* <Change /> */}
      {/* <NewForm /> */}

      {/* <Counter /> */}
      {/* <Users /> */}
      <AnotherForm />

    </>
  )
}

export default App
