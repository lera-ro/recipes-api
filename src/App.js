import { useEffect, useState } from 'react';
import './App.css';
import video from './food.mp4';
import MyRecipesComponent from './MyRecipesComponent.js';

function App() {
  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState("");
  const MY_ID = "ed90f172";
  const MY_KEY = "3da345fdb83ed32bb2bd28b7a60b514e";

  useEffect(() => {
    const getRecipe = async () =>{
      const response = await fetch(`https://api.edamam.com/search?q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      setMyRecipes(data.hits);
    }
    getRecipe()
  }, [wordSubmitted])

  const myRecipeSearch = (e) =>{
    setMySearch(e.target.value)
  }

  const finalSearch = (e)=>{
    e.preventDefault();
    setWordSubmitted(mySearch)
  }

  return(
    <div className="App">
    <div className='container'>
      <video autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
      <h1>Find a Recipe</h1>
    </div>

    <div className='container'>
      <form onSubmit={finalSearch}>
         <input className='search'onChange={myRecipeSearch} value={mySearch}/>
      </form>
    </div>

    <div className='container'>
     <button onClick={finalSearch}>
         <img src="https://img.icons8.com/fluency/48/000000/fry.png" alt="icon"/>
      </button>
    </div>

    {myRecipes.map((element, index) =>(
      <MyRecipesComponent key={index} 
      label={element.recipe.label} 
      calories={element.recipe.calories} 
      dishType={element.recipe.dishType}
      image={element.recipe.image} 
      ingredients={element.recipe.ingredientLines}
      mealType={element.recipe.mealType}/>
    ))}    
    </div>
  ) 
}

export default App;
