import './App.css'
import Navbar from './components/Navbar.jsx'
import IngredientsAdd from './components/IngredientsAdd.jsx'
import Recipe from './components/Recipe.jsx'
import { useState } from "react"

function App() {

  const [ingredientList, setIngredientList] = useState([])
  const [getRecipe, setGetRecipe] = useState(false)
 
  return (
    <>
      <Navbar />
      <IngredientsAdd list={ingredientList} listFunc={setIngredientList} toggleRecipe={getRecipe} toggleRecipeFunc={setGetRecipe}/>
      <Recipe list={ingredientList} listFunc={setIngredientList} toggleRecipe={getRecipe} toggleRecipeFunc={setGetRecipe}/>
    </>
  )
}

export default App
