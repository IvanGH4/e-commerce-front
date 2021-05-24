import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function SearchBox({ setProducts }) {
  const [searchTerm, setSearchTerm] = useState("");

  const history = useHistory();

  const handleChange = async (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    history.push({
      search: `?search=${searchTerm}`,
    });
    const response = await axios.get(
      process.env.REACT_APP_API_URL + `/products/search`,
      {
        params: {
          search: searchTerm,
        },
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setProducts(response.data);
  };

  return (
    <div className="d-flex justify-content-center mt-3">
      <form onSubmit={handleSubmit} className="d-flex align-items-center">
        <div className="mb-3">
          <input
            type="text"
            placeholder="Busca un producto..."
            className="form-control border-dark"
            value={searchTerm}
            onChange={handleChange}
            name="search"
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn search-btn">
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBox;
