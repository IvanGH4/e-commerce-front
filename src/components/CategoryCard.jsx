import React from "react";

function CategoryCard({ category }) {
  return (
    <div className="col-md-4">
      <div className="card border-0 ">
        <img
          src="https://http2.mlstatic.com/D_NQ_NP_802890-MLU45859870093_052021-O.webp"
          className="card-img-top"
          alt="..."
        />
        <h5 className="card-title">Consolas</h5>
      </div>
    </div>
  );
}

export default CategoryCard;
