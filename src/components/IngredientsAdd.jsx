import './components.css'

function IngredientsAdd() {
    return(
        <>
            <div className='ingredientsAdd'>
                <div>Add Ingredients</div>
                <input type='text' placeholder='Enter Ingredient'></input>
                <button>+ Add</button>
            </div>
        </>
    )
}

export default IngredientsAdd