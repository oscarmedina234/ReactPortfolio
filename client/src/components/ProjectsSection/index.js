import { Container, Row, Col, Tab} from "react-bootstrap";
import { ProjectCard } from "../ProjectCard/index";
import projImg1 from "../../assets/Morty.png";
import projImg2 from "../../assets/Groovehub.png";
import projImg3 from "../../assets/GroovehubRemixed.png";
import projImg4 from "../../assets/LoneStarSales.png";
import projImg5 from "../../assets/SA3.png";
import 'animate.css';
import './style.css'

const projects = [
  {
    title: "Morty's Book of Shwifty Ricktails",
    description: "Design, Ideation & Development",
    imgUrl: projImg1,
    githubUrl: "https://github.com/MortyShwiftyRicktails/Morty-Book-of-Shwifty-Ricktails",
    liveUrl: "https://sudo-apt-install.github.io/didactic/",
  },
  {
    title: "GrooveHub",
    description: "Design & Development",
    imgUrl: projImg2,
    liveUrl: "https://groovehub-2023.herokuapp.com",
  },
  {
    title: "GrooveHub Remixed",
    description: "Design & Development",
    liveUrl: "https://groovehub-remixed-2f12da1632a2.herokuapp.com/",
    imgUrl: projImg3,
  },
  {
    title: "Lone Star Sales",
    description: "Design & Development",
    liveUrl: "https://lonestarsales.net",
    imgUrl: projImg4,
  },
  {
    title: "SA3 Curbside",
    description: "Design & Development",
    liveUrl: "https://sa3curbside.com",
    imgUrl: projImg5,
  },
  // {
  //   title: "Business Startup",
  //   description: "Design & Development",
  //   // imgUrl: projImg3,
  // },
];

export const Projects = () => {


  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>

                <h2>Portfolio</h2>
                <p>Here are some examples of projects I've worked on</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav> */}
                  <Tab.Content id="slideInUp">
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((projects, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...projects}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    {/* <Tab.Pane eventKey="second">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane> */}
                  </Tab.Content>
                </Tab.Container>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  )
}