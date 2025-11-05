

const Ingredient = ({ ingredient, onClick, type }) => {
  return (
    <li
      style={{
        backgroundColor: ingredient.color,
        padding: '8px',
        marginBottom: '4px',
        borderRadius: '8px',
        fontWeight: 'bold',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      {ingredient.name}
      {type === 'add' && <button onClick={() => onClick(ingredient)}>+</button>}
      {type === 'remove' && <button onClick={() => onClick(ingredient.name)}>-</button>}
    </li>
  );
};

export default Ingredient;
