import Footer from "../../extras/Footer";
import Categories from "../Categories";
import Main from "../Main";

function Container() {
  return (
    <div>
      <div className="container">
        <Categories />
        <Main />
      </div>
      <Footer />
    </div>
  );
}
export default Container;
