import React from 'react'
import Ingredient from './Ingredient';
import "../css/recipe-list.css";
import "../css/buttons.css";
import "../css/ingredient-list.css"

export default function IngredientList({ ingredients}) {
  const ingredientElements = ingredients.map(ingredient => {
    return <Ingredient key={ingredient.id} {...ingredient} />
  })
  return (
    <div className='ingredient-grid'>
      {ingredientElements}
    </div>
  )
}