import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../../assets/Me on the computer .png";
import 'animate.css';
import './style.css';

export const Banner = () => {
  const [loopNum] = useState(0);
  const [isDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta] = useState(300 - Math.random() * 100);
  const toRotate = [ "I'm Oscar Medina a Full Stack Web Developer!" ];
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
              <div>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi!`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer"]'><span className="wrap">{text}</span></span></h1>
                  <p>I recently graduated from the University of Texas at Austin with a certificate in Full Stack Web Development. I have a background in business and marketing. I have skills in React, JavaScript, CSS, HTML, MYSQL, MONGODB, BootStrap, JQuery, SQL, NoSQL, Adobe Creative Suite, Foundation, Shopify, Squarespace, Node, Express, and Handlebars to name a few. In my free time I enjoy collecting funko pops, going to concerts, and watching movies.    </p>
              </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
          <div>
    <img src={headerImg} alt="Header Img"/>
  </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}