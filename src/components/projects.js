import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./projectCard";
import chatapp from "../assets/img/chatapp.png";
import cryptomi from "../assets/img/cryptomi.png";
import instaclone from "../assets/img/instaclone.png";
import musicplayer from "../assets/img/musicplayer.png";
import tommyfooties from "../assets/img/tommyfootiesdesktop.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import eCommerce from "../assets/img/e-commerce.png";
import discover from "../assets/img/discover.PNG";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Projects = ({ projectsRef }) => {
  const frontendProjects = [
    {
      title: "Music Player",
      description:
        "A fully responsive music player web application that allows users stream songs sourced via the ShazamCore API, view the top charts, top artists as well as top songs around you using th Geo-ipify API. Built the project using React JS, Tailwind CSS, Redux, Rapid API",
      imgUrl: musicplayer,
      to: "https://adetomi-musicplayer.netlify.app",
      details:
        "My music player app is built using React, a powerful JavaScript library for building user interfaces. The API integration is handled effectively using Redux, a state management library, which enables seamless data flow and management. The styling of the app is done using Tailwind CSS, a utility-first CSS framework, that provides a visually appealing and user-friendly interface. This music player app demonstrates my expertise in building dynamic and interactive web applications that provide a great user experience.",
    },

    {
      title: "Crypto Application",
      description:
        "A crypto Web application used to check the prices of various coins and stay up to date on the crypto news. Built this project using React JS, Rapid API to get data for the application and Redux for the state management",
      imgUrl: cryptomi,
      to: "https://cryptomi.netlify.app",
      details:
        "My crypto app is built with React, Redux, and APIs. It provides users with up-to-date crypto news, prices, and statistics. The app allows users to stay informed about the latest developments in the cryptocurrency market and make informed investment decisions. It is an essential tool for anyone interested in the cryptocurrency world.",
    },
  ];

  const fullstackProjects = [
    {
      title: "Tommyfooties E-commerce Fullstack Website",
      description:
        "An E-commerce store for the Tommyfooties shoe brand using React JS. Built the backend using Node JS and Mongo DB database and deployed the backend to Render",
      imgUrl: tommyfooties,
      to: "https://tommyfooties.netlify.app",
      details:
        "My e-commerce website is built using React, Node.js, and MongoDB. It features a seamless checkout process using the Paystack payment gateway. The website allows customers to browse and purchase products easily, while providing a secure and efficient payment experience. The integration of Paystack ensures a reliable and convenient way for customers to make purchases on the website.",
    },
    {
      title: "Instagram Clone",
      description:
        "Built this Instagram clone using Next JS with the ability to post pictures on a timeline, like and drop comment(s) on pictures after been logged in using NextAuth. Worked with Firebase to handle the data storage and Recoil for the state management",
      imgUrl: instaclone,
      to: "https://instaadetomi.vercel.app",
      details:
        "My Instagram clone is built using Next.js, Firebase, Firestore, Tailwind CSS, and NextAuth. It provides a social media platform for sharing images. The app features user authentication, allowing users to securely sign up and log in. The integration of Firebase, Firestore, and NextAuth ensures secure data storage, user management, and easy authentication for all users, while Tailwind CSS provides a visually appealing user interface.",
    },
    {
      title: "E-commerce store",
      description:
        "An e-commerce store built with React, Redux, Node, and MongoDB is a dynamic and scalable online retail platform. React provides the front-end user interface, Redux manages the state of the application, Node is used for the server-side, and MongoDB stores the database information. This technology stack offers a fast, secure, and user-friendly e-commerce experience.",
      imgUrl: eCommerce,
      to: "https:/adetomi-ecommerce.netlify.app",
      details:
        "An e-commerce store built with React, Redux, Node, and MongoDB is a dynamic and scalable online retail platform. React provides the front-end user interface, Redux manages the state of the application, Node is used for the server-side, and MongoDB stores the database information. This technology stack offers a fast, secure, and user-friendly e-commerce experience.",
    },
    {
      title: "Chat Application",
      description:
        "A chat application that allows users send and receive messages with other people in the same named room. The application notifies users in the room when a user joins or exits the room and also displays an online icon if user is active. Built this project using React JS, Node JS and Socket.io. The Node JS project was deployed to Heroku",
      imgUrl: chatapp,
      to: "https://tomi-chatapp.netlify.app",
      details:
        "My chat application is built using React, Node.js, and Socket.IO to handle events. The chat application offers features such as instant messaging, allowing users to connect",
    },
  ];

  const mobileProjects = [
    {
      title: "Travel Advisor App",
      description:
        "The app makes it easy for travelers to find the best dining, entertainment, and accommodations options, saving them time and effort in research and planning. This allows travelers to focus on making the most of their trip and creating memorable experiences.",
      imgUrl: discover,
      to: "https://exp.host/@adetomi/travel-advisor?release-channel=default",
      details:
        "My travel advisor app shows hotels, restaurants, and entertaining attractions around the world. The app makes it easy for travelers to find the best options for dining, entertainment, and accommodation, saving them time and effort in research and planning. The app is an essential tool for anyone looking to create an enjoyable and memorable travel experience.",
    },
  ];
  return (
    <section className="project" id="project" ref={projectsRef}>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__bounce" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    A few projects I've worked on using React JS, Next JS,
                    Redux, Node JS amongst others are listed below
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Fullstack Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Frontend Project</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Mobile Apps</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {fullstackProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {frontendProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {mobileProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      {/* <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane> */}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};

export default Projects;
