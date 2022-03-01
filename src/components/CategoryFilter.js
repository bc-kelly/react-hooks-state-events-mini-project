import React from "react";

function CategoryFilter({categories, selectedCategory, onSelectedCategory}) {

  // function handleCategoryClick(event) {
  //   const clickedButtonElement = event.target;
  //   const clickedCategory = clickedButtonElement.textContent;
  //   setSelectedCategory(clickedCategory);

  //   onSelectedCategory(clickedCategory);
  // }
  const categoryList = categories.map((category) => {
    const className = category === selectedCategory ? "selected" : " ";
    return (
      <button
        key={category}
        className={className}
        onClick={()=> onSelectedCategory(category)}>
        {category}
      </button>
    )
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryList}
      
    </div>
  );
}

export default CategoryFilter;
