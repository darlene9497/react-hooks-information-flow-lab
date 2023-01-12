function Filter({ onCategoryChange }) {
  const [category, setCategory] = useState("All");

  function handleCategoryChange(event) {
    setCategory(event.target.value);
    onCategoryChange(event.target.value);
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
    </div>
    );
}
