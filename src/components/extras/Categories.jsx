import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "../css/Categories.css";

function Categories() {
  const categories = useSelector((state) => state.categories);

  return (
    <div>
      <div className="css-1urqmlx-navContainer themed-nav-container">
        <div className="themed-wide-wrapper wideWrapper themed">
          <div className="upper-nav themed">
            <ul className="css-navbar themed-navbar d-flex justify-content-between flex-wrap">
              {categories &&
                categories.map((category) => {
                  return (
                    <li
                      key={category.id}
                      className="themed-navbar-item listItem-navbarItem themed-list-item"
                    >
                      <Link
                        className="css-link themed-link"
                        to={`/categorias/${category.id}`}
                      >
                        {category.name}
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
