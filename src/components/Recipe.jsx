import './components.css'
import { getRecipeFromMistral } from '../ai'
import Markdown from 'react-markdown'
import { useState } from "react"

function Recipe(props) {

    const ingredientList = props.list
    const setIngredientList = props.listFunc

    const getRecipe = props.toggleRecipe
    const setGetRecipe = props.toggleRecipeFunc

    const [generatedRecipe, setGeneratedRecipe] = useState("")

    async function generateRecipe() {
        const recipe = await getRecipeFromMistral(ingredientList)
        setGeneratedRecipe(prev => recipe)
       
    }

    if(getRecipe) {
        generateRecipe()
        return (generatedRecipe && <div>{generatedRecipe}</div>)
    }
}

export default Recipe