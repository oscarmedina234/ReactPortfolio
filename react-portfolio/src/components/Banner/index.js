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
  const toRotate = [ "I'm Oscar Medina Full Stack Web Developer!" ];
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
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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