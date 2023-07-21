import React, {useState} from "react";
import './RecipeCreate.css'

function RecipeCreate({setRecipes, recipes}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  const initialRecipe = {
    name:"",
    cuisine:"",
    photo:"",
    ingredients:"",
    preparation:""
  }

  const [recipeForm, setRecipeForm] = useState(initialRecipe);

  const changeHandler = (event)=>{
    setRecipeForm({
      ...recipeForm,
      [event.target.name]:event.target.value
    })
  } 
  
  const submitHandler = (event)=>{
    event.preventDefault();
    setRecipes([
      ...recipes,
      recipeForm
    ])
    setRecipeForm(initialRecipe);
    
  }

  return (
    <form name="create" onSubmit={submitHandler}>
      <table>
      <thead>
          <tr>
            <th className="tableheader1"></th>
            <th className="tableheader1"></th>
            <th className="tableheader1"></th>
            <th className="tableheader2"></th>
            <th className="tableheader2"></th>
            <th className="tableheader1"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input id="name" name="name" type="text" placeholder="Name" onChange={changeHandler} value={recipeForm.name} /></td>
            <td><input id="cuisine" name="cuisine" type="text" placeholder="Cuisine" onChange={changeHandler} value={recipeForm.cuisine} /></td>
            <td><input id="url" name="url" type="text" placeholder="URL" onChange={changeHandler} value={recipeForm.photo}/></td>
            <td><textarea id="ingredients" name="ingredients" type="text" placeholder="Ingredients" onChange={changeHandler} value={recipeForm.ingredients} /></td>
            <td><textarea id="preparation" name="preparation" type="text" placeholder="Preparation" onChange={changeHandler} value={recipeForm.preparation} /></td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
