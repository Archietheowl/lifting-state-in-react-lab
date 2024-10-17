// src/components/IngredientList.jsx

//!---Imports
import { useState } from "react";
import availableIngredients from '..App.jsx/'


const IngredientList = (props) => {
    //!---Construct States
    const [ingredients, setIngredients] = useState(availableIngredients);


    //!---Construct Handlers



    //!--- Any other functions



    //!--- Render content

    return(
        <ul>
            {availableIngredients.map((ingredient) => {
                return <li key={ingredient.name} style={ingredient.color}>{ingredient.name}</li>;
            })}
        </ul>
    )
};

export default IngredientList;
