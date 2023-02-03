import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

const Skills = ({ skillsRef }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section ref={skillsRef}>
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                As a full-stack developer with vast experience in the MERN stack
                and knowledge of Redux and React Native, I bring a unique set of
                skills to the table. With a focus on the MERN stack, I have a
                strong understanding of MongoDB, Express, React and Node.js, and
                Iam very able to build and maintain dynamic and scalable web
                applications. Additionally, my knowledge of Redux helps to
                manage the state of the application and ensures a predictable
                flow of data, resulting in a more user-friendly experience.
                Moreover, my experience with React Native has allowed me to take
                my skills beyond the web and into the realm of mobile
                development, providing me with the ability to create native
                mobile applications for iOS and Android using a single codebase.
                With these skills, I'm well-equipped to tackle a variety of web
                and mobile development projects and deliver high-quality results
                to your clients or users.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h3> HTML</h3>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h3> CSS & TAILWIND CSS</h3>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h3> REACT JS</h3>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h3> REDUX</h3>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h3> NEXT JS</h3>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h3> NODE JS</h3>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h3> SHOPIFY </h3>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h3> REACT NATIVE </h3>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h3> FIREBASE </h3>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h3> MONGODB </h3>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
  );
};

export default Skills;
