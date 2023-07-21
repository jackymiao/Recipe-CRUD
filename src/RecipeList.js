import React from "react";
import Recipe from './Recipe.js'
import './RecipeList.css';


function RecipeList({recipes, setRecipes}) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr className="headerrow">
            <th >Name</th>
            <th >Cuisine</th>
            <th >Photo</th>
            <th className="longCell">Ingredients</th>
            <th className="longCell">Preparation</th>
            <th >Actions</th>
            </tr>
        </thead>
        <tbody>
          {recipes.map(recipe=><Recipe recipe={recipe} setRecipes={setRecipes} recipes={recipes} key={recipe.name} />)}
          
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
