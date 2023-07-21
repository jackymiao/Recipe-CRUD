import React, { useState } from "react";

function RecipeCreate() {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create">
      <table>
        <tbody>
          <tr>
            <td><input id="name" name="name" type="text" placeholder="Name" /></td>
            <td><input id="cuisine" name="cuisine" type="text" placeholder="Cuisine" /></td>
            <td><input id="url" name="url" type="text" placeholder="URL" /></td>
            <td><input id="ingredients" name="ingredients" type="text" placeholder="Ingredients" /></td>
            <td><input id="preparation" name="preparation" type="text" placeholder="Preparation" /></td>
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
