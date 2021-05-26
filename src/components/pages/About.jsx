import logo from "../../logo.svg";
const { Link } = require("react-router-dom");
function About() {
  return (
    <div className="container">
      <div className="row about">
        <section className="my-4">
          <h2 className="css-h2 mb-2">Sobre este proyecto</h2>
          <p>
            En el marco del curso, como forma de integrar todo lo aprendido
            realizamos un proyecto final que consiste en este sitio de
            e-commerce. Aquí quisimos replicar el funcionamiento de un
            e-commerce real, ofreciendo una experiencia semejante a lo que se
            encontraría un usuario en un escenario cotidiano.
          </p>
          <h3 className="css-h2 fs-3 mb-2">¿Qué es un Coding Bootcamp?</h3>
          <p>
            Es un curso de 3 meses, extremadamente práctico y de dedicación
            full-time (más de 600 horas de práctica). Durante este aprendimos
            herramientas técnicas de front-end y back-end con el objetivo de
            convertirnos en desarrolladores web full stack.
          </p>
        </section>
        <section className="row my-4">
          <h2 className="css-h2 fs-3 mb-2">Tecnologías utilizadas</h2>
          <div className="col-md-6">
            <h3>Front-end</h3>
            <ul className="list-unstyled">
              <li>
                React
                <ul>
                  <li>Redux</li>
                  <li>React-router-dom</li>
                  <li>Redux</li>
                </ul>
              </li>
              <li>Bootstrap</li>
              <li>Github</li>
              <li>Font Awesome</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h3>Back-end</h3>
            <ul className="list-unstyled">
              <li>Sequelize / Postgres</li>
              <li>Express</li>
              <li>JWT</li>
              <li>Formidable</li>
              <li>Bcryptjs</li>
              <li>Amazon AWS S3</li>
              <li>Gmail API</li>
            </ul>
          </div>
          <div className="d-flex justify-content-between align-items-center flex-wrap fs-4 mt-3">
            <i className="fab fa-react"></i>
            <i class="fab fa-node"></i>
            <i class="fas fa-database"></i>
            <i class="fab fa-aws"></i>
            <i class="fab fa-google"></i>
            <i className="fab fa-github"></i>
            <i className="fab fa-bootstrap"></i>
            <i className="fab fa-font-awesome"></i>
          </div>
        </section>
        <section className="my-4">
          <h2 className="css-h2 fs-3 mb-2">¿Cómo utilizar esta página?</h2>
          <p>
            Las funcionalidades como cliente están disponibles al entrar al
            sitio. Es posible registrarse, agregar productos al carrito de
            compras y realizar pedidos (ficticios).
          </p>
          <p>En el caso de las funciones de administrador, siga estos pasos:</p>
          <ol className="list-group list-group-numbered">
            <li className="list-group-item">
              Dirígete a la página de{" "}
              <Link to="iniciarSesion">Iniciar sesión</Link>
            </li>
            <li className="list-group-item">
              En el campo <i>email</i> escribe: <strong>admin@admin.com</strong>
            </li>
            <li className="list-group-item">
              En el campo <i>contraseña</i> escribe: <strong>admin123</strong>
            </li>
          </ol>
          <p>
            Una vez ingresado en el rol de administrador, se podrá hacer CRUD
            (crear, listar, actualizar, eliminar) de administradores, productos
            y categorías.
          </p>
        </section>
        <section className="row my-4">
          <div className="col-md-4">
            <div className="bg-light">
              <img src={logo} className="img-fluid" alt="Nela Sandes" />
            </div>
            <p className="fs-4">Nela Sandes</p>
            <small>Full Stack Developer</small>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <a
                  href="https://www.linkedin.com/in/nelasandes/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none"
                >
                  Linkedin
                </a>
                <i className="fab fa-linkedin"></i>
              </div>
              <div>
                <a
                  href="https://github.com/NelaSan"
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none"
                >
                  Github
                </a>
                <i className="fab fa-github"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="bg-light">
              <img
                src={logo}
                className="img-fluid"
                alt="José Ignacio Carricart"
              />
            </div>
            <p className="fs-4">José Ignacio Carricart</p>
            <small>Full Stack Developer</small>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <a
                  href="https://www.linkedin.com/in/nacho-carricart-595956a6/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none"
                >
                  Linkedin
                </a>
                <i className="fab fa-linkedin"></i>
              </div>
              <div>
                <a
                  href="https://github.com/Nacho1593"
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none"
                >
                  Github
                </a>
                <i className="fab fa-github"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="bg-light">
              <img src={logo} className="img-fluid" alt="Ivan Garcia" />
            </div>
            <p className="fs-4">Iván García</p>
            <small>Full Stack Developer</small>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <a
                  href="https://www.linkedin.com/in/ivan-garcia-harriague/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none"
                >
                  Linkedin
                </a>
                <i className="fab fa-linkedin"></i>
              </div>
              <div>
                <a
                  href="https://github.com/IvanGH4"
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none"
                >
                  Github
                </a>
                <i className="fab fa-github"></i>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
