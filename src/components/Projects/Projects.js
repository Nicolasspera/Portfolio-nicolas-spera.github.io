import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
 import WebSorteos from "../../Assets/Projects/WebSorteos.png";
 import Buenclima from "../../Assets/Projects/Buenclima.png";
import GifApp from "../../Assets/Projects/GifApp.png";
import Proyectoclima from "../../Assets/Projects/Proyectoclima.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis <strong className="purple">Trabajos </strong>Recientes
        </h1>
        <p style={{ color: "white" }}>         
          Aquí hay algunos proyectos en los que he trabajado recientemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Proyectoclima}
              isBlog={false}
              title="Proyecto Clima"
              description="Este proyecto es una página web realizada para un cliente en el sector de climatización. Mi responsabilidad fue diseñar y desarrollar todo el sitio desde cero, asegurando una experiencia de usuario intuitiva y visualmente atractiva. Utilicé tecnologías web estándar como HTML para la estructura, CSS para el diseño y la animación, y JavaScript para añadir interactividad. Además, me encargué de la compra del dominio y del hosting, garantizando la presencia online del sitio durante un año. El resultado es un sitio funcional que cumple con los objetivos del cliente y destaca por su rendimiento en diferentes dispositivos. Este trabajo fue completado de manera independiente como parte de mis proyectos de freelancing, demostrando mi capacidad para gestionar y entregar proyectos de manera efectiva."
              ghLink="https://github.com/Nicolasspera/proyectoclima"
              Web="https://www.proyectoclima.com"
            />
          </Col>
          
           <Col md={4} className="project-card">
            <ProjectCard
               imgPath={Buenclima}
              isBlog={false}
              title="Buen Clima"
              description="Este proyecto es una segunda página web realizada para el mismo cliente en el sector de climatización. Mi responsabilidad fue diseñar y desarrollar todo el sitio desde cero, asegurando una experiencia de usuario intuitiva y visualmente atractiva. Utilicé tecnologías web estándar como HTML para la estructura, CSS para el diseño y la animación, y JavaScript para añadir interactividad. El resultado es un sitio funcional que cumple con los objetivos del cliente y destaca por su rendimiento en diferentes dispositivos. Este trabajo fue completado de manera independiente como parte de mis proyectos de freelancing, demostrando mi capacidad para gestionar y entregar proyectos de manera efectiva."
              ghLink="https://github.com/Nicolasspera/climabuenosiares.github.io"
              demoLink="https://nicolasspera.github.io/climabuenosiares.github.io/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GifApp}
              isBlog={false}
              title="Buscador de Gifs"
              description="Este proyecto es una aplicación web creada como parte de mi práctica con React, diseñada para buscar y mostrar GIFs animados de manera rápida y eficiente. Utilicé la API de Giphy para obtener los datos, implementando componentes reutilizables y estados manejados con hooks para optimizar la experiencia del usuario. La aplicación permite a los usuarios buscar GIFs de su interés y explorar resultados de manera dinámica. Este proyecto me permitió profundizar en conceptos clave de React, como la gestión del estado y la comunicación entre componentes, consolidando mis habilidades en el desarrollo de aplicaciones interactivas con esta poderosa biblioteca de JavaScript."
              ghLink="https://github.com/Nicolasspera/react-gif-expert"
              demoLink="https://nicolasspera.github.io/react-gif-expert/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WebSorteos}
              isBlog={false}
              title="Web para Sorteos"
              description="Un proyecto freelance en desarrollo, diseñado para gestionar sorteos online. La plataforma permite a los usuarios participar comprando productos que otorgan chances, utilizando la API de Mercado Pago para procesar pagos de manera segura. Cuenta con una base de datos que almacena las transacciones para garantizar la transparencia en la generación de sorteos. Además, incluye un sistema de login y un panel de administración que permite gestionar publicaciones y realizar sorteos de manera eficiente."
              EnProceso="https://www.linkedin.com/in/nicolas-spera-163a43195/"
            />
          </Col>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>  */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
