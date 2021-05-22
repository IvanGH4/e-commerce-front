import { Link } from "react-router-dom";
import CategoriesList from "../CategoriesList";
import "../css/Main.css";
import FeaturedProductList from "../FeaturedProductList";
import { Bounce } from "react-reveal";

function Main() {
  return (
    <div>
      <section>
        {/* <h2 className="primerTitulo my-4">Bienvenidos a HackGaming</h2> */}
        <Bounce left>
          <p className="fs-4 my-5">
            Todo lo que necesitás para mejorar tu experiencia mientras jugás a
            tus juegos favoritos.
          </p>
        </Bounce>
        <Bounce right>
          <div className="row row-cols-1 row-cols-md-2 g-4 pt-4 my-3 ">
            <CategoriesList />
          </div>
        </Bounce>
      </section>
      <hr />
      <Bounce left>
        <section className="my-4">
          <p className="pt-3">Best sellers</p>
          <h2 className="css-h2">Productos más vendidos</h2>
          <div className="row row-cols-1 row-cols-md-2 g-4 pt-4">
            <FeaturedProductList />
          </div>
        </section>
      </Bounce>
    </div>
  );
}

export default Main;
