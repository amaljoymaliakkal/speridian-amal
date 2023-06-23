import { Container,Row,Col } from "react-bootstrap";
import Image from "next/image";
import banner from '../Images/banner-new.png'
function BannerComponent() {
    return (
        <div className="banner-section">
            <Container className="banner-inner">
                <div className="dot-image">
                <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41">
  <circle id="Ellipse_27" data-name="Ellipse 27" cx="20.5" cy="20.5" r="20.5" fill="#7b53ff"/>
</svg>

  </div>

  <div className="small-dot">
  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
  <circle id="Ellipse_28" data-name="Ellipse 28" cx="8.5" cy="8.5" r="8.5" fill="#f3582b"/>
</svg>

  </div>
      <Row className="banner-row">
        <Col lg={6} md={12}>
<div>
    <h1>
    The <span className="job">Job</span> your skillset needed
    </h1>
    <p>The WorkReal is a company or project undertaken by an entrepreneur to seek, develop, and validate a scalable business model.</p>
    <div className="d-flex gap-3 flex-wrap">
    <a className="button-1">Let's discuss</a>
    <a className="button-2">Learn More</a>
    </div>
</div>



        </Col>
        <Col lg={6} md={12}>
        <div>
           <Image src={banner} alt="banner" className="">
            </Image> 
        </div>
        </Col>
      </Row>
      </Container>
        </div>
      );
}

export default BannerComponent;