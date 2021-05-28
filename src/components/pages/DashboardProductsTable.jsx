import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setProducts, removeProduct } from "../../redux/productsActions";
import DashNewProdForm from "../DashNewProdForm";
import DashUpdateProdForm from "../DashUpdateProdForm";
import { useToasts } from "react-toast-notifications";

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
          <h2 className="heading-section">Productos</h2>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <DashNewProdForm />
        <DashUpdateProdForm />
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
                              className="btn btn-danger"
                            >
                              Eliminar
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DashboardProductsTable;
