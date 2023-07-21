import React from 'react';


function Recipe({recipe}){
    console.log(recipe);
    return <tr key={recipe.name}>
            <td>{recipe.name}</td>
            <td>{recipe.cuisine}</td>
            <td>{recipe.photo}</td>
            <td>{recipe.ingredients}</td>
            <td>{recipe.preparation}</td>
            <td><button>Delete</button></td>
          </tr>
}


export default Recipe;