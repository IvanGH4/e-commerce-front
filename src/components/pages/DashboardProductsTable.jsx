import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setProducts, removeProduct } from "../../redux/productsActions";
import DashNewProdForm from "../DashNewProdForm";
import DashUpdateProdForm from "../DashUpdateProdForm";
import { useToasts } from "react-toast-notifications";
import { Link } from "react-router-dom";

function DashboardProductsTable() {
  const products = useSelector((state) => state.products);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const { addToast } = useToasts();

  const handleClick = async (id) => {
    dispatch(removeProduct(id));
    addToast(
      "Este producto ha sido eliminado y ya no se encuentra disponible",
      { appearance: "success", autoDismiss: true }
    );
    await axios.delete(
      process.env.REACT_APP_API_URL + "/products",

      {
        data: {
          id,
        },
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json",
        },
      }
    );
  };

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get(
        process.env.REACT_APP_API_URL + "/products",
        { headers: { "Content-Type": "application/json" } }
      );
      dispatch(setProducts(response.data));
    };
    getProducts();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <h2 className="heading-section css-h2">Productos</h2>
        </div>
      </div>

      <div className="row justify-content-center mt-5">
        <div className="fs-3 justify-content-start">
          <button
            className="btn "
            data-bs-toggle="modal"
            data-bs-target="#createModal"
          >
            <i className="fas fa-plus-square"></i> Crear un producto
          </button>
        </div>
      </div>

      <section className="ftco-section mt-5">
        <div className="row">
          <div className="col-md-12">
            <div className="table-wrap">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Marca</th>
                    <th>Precio</th>
                    <th>Stock</th>
                    <th>Destacado</th>
                    <th>Acciones</th>
                  </tr>
                </thead>

                <tbody>
                  {products &&
                    products.map((product) => {
                      return (
                        <tr key={product.id}>
                          <th scope="row">{product.id}</th>
                          <td>{product.name}</td>
                          <td>{product.brand}</td>
                          <td>{product.price}</td>
                          <td>{product.stock}</td>
                          <td>{product.featured ? "Si" : "No"}</td>
                          <td>
                            <button
                              onClick={() => handleClick(product.id)}
                              className="btn "
                            >
                              <i className="fas fa-trash-alt"></i>
                            </button>
                          </td>
                          <td>
                            <Link
                              to={`/admin/productos/${product.slug}`}
                              className="btn"
                            >
                              <i className="fas fa-edit"></i>
                            </Link>
                          </td>
                          <td></td>
                        </tr>
                      );
                    })}
                </tbody>
                <div
                  class="modal fade"
                  id="createModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-lg">
                    <div class="modal-content bg-white">
                      <div class="modal-header">
                        <h5
                          class="modal-title css-h2 fs-2"
                          id="exampleModalLabel"
                        >
                          HackGaming
                        </h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <DashNewProdForm />
                      </div>
                    </div>
                  </div>
                </div>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DashboardProductsTable;
