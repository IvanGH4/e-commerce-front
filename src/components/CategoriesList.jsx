import React, { useEffect, useState } from "react";
import axios from "axios";
import CategoryCard from "./CategoryCard";
import Loader from "./extras/Loader";

function CategoriesList() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getCategories = async () => {
      const response = await axios.get(
        process.env.REACT_APP_API_URL + "/categories",
        { headers: { "Content-Type": "application/json" } }
      );
      setCategories(response.data);
      setLoading(false);
    };
    getCategories();
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        categories
          .slice(0, 6)
          .map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))
      )}
    </>
  );
}

export default CategoriesList;
