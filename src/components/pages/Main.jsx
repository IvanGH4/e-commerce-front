import { Link } from "react-router-dom";
import CategoriesList from "../CategoriesList";

import "../css/Main.css";

function Main() {
  return (
    <div>
      <section>
        <h2 className="primerTitulo my-4">Bienvenidos a HackGaming</h2>
        <p className="fs-4">
          Todo lo que necesitás para mejorar tu experiencia mientras jugás a tus
          juegos favoritos.
        </p>
        <div className="row row-cols-1 row-cols-md-2 g-4 pt-4 my-3 ">
          <CategoriesList />
        </div>
      </section>
      <hr />
      <section>
        <p className="pt-3">Best sellers</p>
        <h2 className="css-h2">Productos más vendidos</h2>
        <div className="row row-cols-1 row-cols-md-2 g-4 pt-4">
          <div className="col-md-4">
            <div className="card ">
              <img
                src="https://http2.mlstatic.com/D_NQ_NP_802890-MLU45859870093_052021-O.webp"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Producto</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img
                src="https://http2.mlstatic.com/D_NQ_NP_802890-MLU45859870093_052021-O.webp"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Producto</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card ">
              <img
                src="https://http2.mlstatic.com/D_NQ_NP_802890-MLU45859870093_052021-O.webp"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Producto</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
    </div>
  );
}

export default Main;
