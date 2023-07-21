import React from 'react';


function Recipe({recipe, setRecipes, recipes}){
    const deleteHandler = ()=>setRecipes(()=>recipes.filter(recipeObj=>recipeObj.name !== recipe.name))
    return <tr className="recipeRow">
            <td >{recipe.name}</td>
            <td >{recipe.cuisine}</td>
            <td ><img name="photo" alt={recipe.name} src={recipe.photo}/></td>
            <td className="content_td"><p>{recipe.ingredients}</p></td>
            <td className="content_td"><p>{recipe.preparation}</p></td>
            <td ><button name="delete" onClick={deleteHandler}>Delete</button></td>
          </tr>
}


export default Recipe;