import { use } from 'react'
import './components.css'
import {useState} from "react"

function IngredientsAdd() {

    const [ingredientList, setIngredientList] = useState([])
    const [recipeShown, setRecipeShown] = useState(false)

    function addIngredient(formData) {
        const ingredientInput = formData.get("ingredient")
        if (!(ingredientInput == ""))
            setIngredientList(prevIngredientList => [...prevIngredientList, ingredientInput])
    }

    const ingredientListJsx = ingredientList.map((x, _) => <li key={_}>{x}</li>)

    function checkAvailability() {
        if (ingredientList.length!=0)
            return <div className='ingredientHeader1'>Ingredients added-</div>
            else 
            return <div className='ingredientHeader2'>Add ingredients to start generating recipes!</div>
    }

    function checkRecipeCount() {
        if (ingredientList.length>2)
            return <div className='recipeContainer1'>
                        <div className='getRecipeDescriptionContainer'>
                            <h3>Ready for a recipe?</h3>
                            <p>Generate a recipe from the entered list of ingredients.</p>
                        </div>
                        <button>Get Recipe</button>
                    </div>
        else if(ingredientList.length>0)
            return <div className='recipeContainer2'>
                        <p>3 items required to generate, add them in!</p>
                   </div>
    }

    return(
        <>
            <div className='ingredientsAdd'>
                <div>Add Ingredients</div>
                <form action={addIngredient} className='ingredientsForm'>
                    <input type='text'
                    placeholder='Add your ingredients here...'
                    name='ingredient'></input>
                    <button>+ Add</button>
                </form>
            </div>
            {checkAvailability()}
            <div className='contentContainer'>
                <ul className='listContainer'>
                    {ingredientListJsx}
                </ul>
                {checkRecipeCount()}
            </div>
        </>
    )
}

export default IngredientsAdd