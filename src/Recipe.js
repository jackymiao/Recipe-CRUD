import React from 'react';


function Recipe({recipe, setRecipes, recipes}){
    const deleteHandler = ()=>setRecipes(()=>recipes.filter(recipeObj=>recipeObj.name !== recipe.name))

    console.log(recipe);
    return <tr key={recipe.name}>
            <td>{recipe.name}</td>
            <td>{recipe.cuisine}</td>
            <td>{recipe.photo}</td>
            <td>{recipe.ingredients}</td>
            <td>{recipe.preparation}</td>
            <td><button onClick={deleteHandler}>Delete</button></td>
          </tr>
}


export default Recipe;