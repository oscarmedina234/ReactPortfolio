import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, liveUrl}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <a href={liveUrl}>Go To Page</a>
          {/* <div>
          <button>Github</button>
          <button>Live</button>
          </div> */}
          
        </div>
      </div>
    </Col>
  )
}