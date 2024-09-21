function MyRecipesComponent({label, calories, image, ingredients, dishType, mealType}) {
    return(<div className="section">
        <div className='container'>
            <h2>{label}</h2>
        </div>

        <div className='container'>
            <h4>{dishType}</h4>
        </div>

        <div className='container'>
            <img src={image} width="300px" alt="food" className="food"/>
        </div>

        <ul className="container list">
            {ingredients.map((ingredient, index) =>(
                <li key={index}>
                    <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-check-multimedia-kiranshastry-gradient-kiranshastry.png" className="icon" alt="icon"/>
                    {ingredient}</li>
            ))}
        </ul>

        <div className='container'>
            <p>{calories.toFixed()} calories</p>
        </div>

        <div className='container'>
            <p className="type">for {mealType}</p>
        </div>
    </div>)
}

export default MyRecipesComponent;