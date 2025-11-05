
import Ingredient from '../Ingredient/Ingredient';

const IngredientList = ({ availableIngredients, addToBurger }) => {
  return (
    <div className="ingredient-list">
      <h2>Available Ingredients</h2>
      <ul>
        {availableIngredients.map((ingredient) => (
          <Ingredient
            key={ingredient.name}
            ingredient={ingredient}
            onClick={addToBurger}
            type="add"
          />
        ))}
      </ul>
    </div>
  );
};

export default IngredientList;
