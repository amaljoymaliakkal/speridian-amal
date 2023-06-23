import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import f1 from '../Images/feature-1.svg'
function FeatureSection() {
    return (
        <div className="feature-outer">
            <div className="text-center">
                <h3>
                    Fetaures
                </h3>
                <h1>Your Dream <span className="template">Template</span></h1>
                <Container>
                    <div className="feature-list">
                    <Row>
                        <Col lg={3} md={6} sm={12}>
                            <div>
                               <Image className="" src={f1}/>
                             <h4 className="title">Product Design</h4>
                             <p>WorkReal typically begin by a founder (solo-founder) or co-founders who </p>
                            </div>

                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <div>
                               <Image className="" src={f1}/>
                             <h4>Branding</h4>
                             <p>WorkReal typically begin by a founder (solo-founder) or co-founders who </p>
                            </div>

                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <div>
                               <Image className="" src={f1}/>
                             <h4>Coding & Programming</h4>
                             <p>WorkReal typically begin by a founder (solo-founder) or co-founders who </p>
                            </div>

                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <div>
                               <Image className="" src={f1}/>
                             <h4>Online Marketing</h4>
                             <p>WorkReal typically begin by a founder (solo-founder) or co-founders who </p>
                            </div>

                        </Col>
                    </Row>
                    </div>
                  
                </Container>
            </div>
        </div>
    );
}

export default FeatureSection;