import Navbar from "../../extras/Navbar";
import Home from "../Home";

function Container() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Home />
      </div>
    </div>
  );
}
export default Container;
