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
    </div>
  );
}
export default Container;
