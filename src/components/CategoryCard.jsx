import React from "react";

function CategoryCard({ category }) {
  return (
    <div className="col-md-4 my-3 cardglobal">
      <div className="card border-0 ">
        <div className="categorycard-img img-fluid">
          <img
            src={category.img}
            className="card-img-top"
            alt={category.name}
          />
        </div>
        <h5 className="card-title fs-5">{category.name.toUpperCase()}</h5>
      </div>
    </div>
  );
}

export default CategoryCard;
