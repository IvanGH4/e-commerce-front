import Footer from "../../extras/Footer";
import Navbar from "../../extras/Navbar";
import Categories from "../Categories";
import Main from "../Main";

function Container() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Categories />
        <div>
          <Main />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Container;
