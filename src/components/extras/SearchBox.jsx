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
  };

  return (
    <div className="mt-5">
      <form onSubmit={handleSubmit} className="d-flex align-items-center">
        <div class="input-group mb-3 ">
          <input
            type="text"
            class="form-control"
            placeholder="Busca entre las categorías..."
            aria-label="Busca en todas las categorías..."
            aria-describedby="button-addon2"
            value={searchTerm}
            onChange={handleChange}
            name="search"
          />
          <button class="btn search-btn" type="submit" id="button-addon2">
            Buscar
          </button>
        </div>
        {/* <div className="mb-3">
          <input
            type="text"
            placeholder="Busca en todas las categorías..."
            className="form-control border-dark"
            value={searchTerm}
            onChange={handleChange}
            name="search"
          />
        </div> */}
        {/* <div className="mb-3">
          <button type="submit" className="btn search-btn">
            Buscar
          </button>
        </div> */}
      </form>
    </div>
  );
}

export default SearchBox;
