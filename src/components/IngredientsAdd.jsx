import './components.css'
import React from "react"

function IngredientsAdd() {

    const [ingredientList, setIngredientList] = React.useState([])

    function handleSubmit(event) {
        event.preventDefault()          //prevents refreshing of page
        const formData = new FormData(event.currentTarget)
        const ingredientInput = formData.get("ingredient")
        setIngredientList(prevIngredientList => [...prevIngredientList, ingredientInput])
    }

    const ingredientListJsx = ingredientList.map(x => <li>{x}</li>)

    function checkAvailability() {
        if (ingredientList.length!=0)
            return <div className='ingredientHeader'>Ingredients added-</div>
            else 
            return <div className='ingredientHeader'>No ingredients to display</div>
    }

    return(
        <>
            <div className='ingredientsAdd'>
                <div>Add Ingredients</div>
                <form onSubmit={handleSubmit} className='ingredientsForm'>
                    <input type='text'
                    placeholder='Add your ingredients here...'
                    name='ingredient'></input>
                    <button>+ Add</button>
                </form>
            </div>
            {checkAvailability()}
            <ul className='listContainer'>
                {ingredientListJsx}
            </ul>
        </>
    )
}

export default IngredientsAdd