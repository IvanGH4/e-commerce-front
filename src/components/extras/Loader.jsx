import "../css/Loader.css";

function Loader() {
  return (
    <div className="row justify-content-center">
      {/* <div className="cell">
        <div className="pl pl-fade"></div>
      </div> */}
      <svg className="loader" viewBox="0 0 24 24">
        <circle className="loader__value" cx="12" cy="12" r="10" />
        <circle className="loader__value" cx="12" cy="12" r="10" />
        <circle className="loader__value" cx="12" cy="12" r="10" />
        <circle className="loader__value" cx="12" cy="12" r="10" />
        <circle className="loader__value" cx="12" cy="12" r="10" />
        <circle className="loader__value" cx="12" cy="12" r="10" />
      </svg>
    </div>
  );
}

export default Loader;
