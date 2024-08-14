import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola a todos, soy<span className="purple"> Nicolás Spera </span>
            de <span className="purple"> Buenos Aires, Argentina.</span>
            <br />
            Actualmente, trabajo en Easy, pero estoy enfocado en profesionalizarme y conseguir mi primer empleo como desarrollador web.
            <br />
            He estudiado desarrollo web a través de Udemy, donde me especialicé en HTML, CSS y JavaScript.
            También he completado cursos avanzados de React y TypeScript con Fernando Herrera, lo que ha ampliado mis habilidades y conocimientos en estas tecnologías.
            <br />
            <br />
            Además de mi pasión por la programación, disfruto de otras actividades como:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jugar videojuegos
            </li>
            <li className="about-activity">
              <ImPointRight /> La mecanica
            </li>
            <li className="about-activity">
              <ImPointRight /> Tocar Instrumentos como: Piano y Guitarra
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "El único modo de hacer un gran trabajo es amar lo que haces"{" "}
          </p>
          <footer className="blockquote-footer">Nicolas</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
