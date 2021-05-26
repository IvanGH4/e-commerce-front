function About() {
  return (
    <div className="container">
      <div className="row about">
        <section>
          <h2>Introducción</h2>
          <h3>¿Qué es un Coding Bootcamp?</h3>
          <p>
            Es un curso de 3 meses, extremadamente práctico y de dedicación
            full-time (más de 600 horas de práctica). Durante este aprendimos
            herramientas técnicas de front-end y back-end con el objetivo de
            convertirnos en desarrolladores web full stack.
          </p>
          <h3>Sobre este proyecto</h3>
          <p>
            En el marco del curso, como forma de integrar todo lo aprendido
            realizamos un proyecto final que consiste en este sitio de
            e-commerce. Aquí quisimos replicar el funcionamiento de un
            e-commerce real, ofreciendo una experiencia semejante a lo que se
            encontraría un usuario en un escenario cotidiano.
          </p>
        </section>
        <section className="row">
          <h2>Tecnologías utilizadas</h2>
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
        <section className="my-5">
          <h2>¿Cómo utilizar esta página?</h2>
          <p>
            Las funcionalidades como cliente están disponibles al entrar al
            sitio. Es posible registrarse, agregar productos al carrito de
            compras y realizar pedidos (ficticios).
          </p>
          <p>En el caso de las funciones de administrador, siga estos pasos:</p>
        </section>
      </div>
      {/* Intro */}
      {/* Explicación de techs */}
      {/* Instructivo para admin */}
      {/* Quienes somos */}
    </div>
  );
}

export default About;
