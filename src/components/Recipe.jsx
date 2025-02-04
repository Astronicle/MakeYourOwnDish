import './components.css'

function Recipe(props) {

    const ingredientList = props.list
    const setIngredientList = props.listFunc

    const getRecipe = props.toggleRecipe
    const setGetRecipe = props.toggleRecipeFunc

    if(getRecipe)
    return (<h1>RECIPE</h1>)
}

export default Recipe