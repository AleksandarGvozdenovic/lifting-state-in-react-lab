
import Ingredient from '../Ingredient/Ingredient';

const BurgerStack = ({ stack, removeFromBurger }) => {
  return (
    <div className="burger-stack">
      <h2>Your Burger</h2>
      {stack.length === 0 ? (
        <p>No Ingredients</p>
      ) : (
        <ul>
          {stack.map((ingredient, index) => (
            <Ingredient
              key={index}
              ingredient={ingredient}
              onClick={removeFromBurger}
              type="remove"
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default BurgerStack;
