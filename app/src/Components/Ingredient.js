import React from 'react';
import "../css/recipe-list.css";
import "../css/buttons.css"

export default function Ingredient({ name, amount }) {
  return (
    <>
      <span>{name}</span>
      <span>{amount}</span>
    </>
  )
}