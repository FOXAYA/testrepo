/* =============================================================================
                              MODULE IMPORTS & CONFIGURATION.
============================================================================= */
// Styling
import styled from "styled-components";

// UI Components
import { Row, Col } from "react-bootstrap";
import { Container, Tag, Title } from '../../styles/StyledComponents';
import ButtonUi from "../../ui/Button";

/* =============================================================================
                              STYLED COMPONENTS.
============================================================================= */
const Bestwork = styled.section`
  background: url("/home/bestwork/feat_bg-scaled.jpg") center/cover no-repeat;
  min-height: 100dvh;
  padding-top: 128px;
  margin-bottom: 128px;
`
const BestworkFeatures = styled.div`
  background-color: var(--clr-grey-960);
  padding: 50px;
  width: 808px;
  z-index: 10;
  position: relative;

  @media (max-width: 992px) {
    max-width: 100%;
  }

  @media (max-width: 444px) {
    padding: 16px;
  }
`

/* =============================================================================
                              CONTECT.
============================================================================= */
const features = [
  {
    icon: "/home/bestwork/ft1.svg",
    title: "Innovative Design",
    description: "We stay ahead of industry trends by embracing the latest.",
  },
  {
    icon: "/home/bestwork/ft2.svg",
    title: "Architectural Drawing",
    description: "We stay ahead of industry trends by embracing the latest.",
  },
  {
    icon: "/home/bestwork/ft3.svg",
    title: "3D Model Building",
    description: "We stay ahead of industry trends by embracing the latest.",
  },
  {
    icon: "/home/bestwork/ft4.svg",
    title: "Building The Space",
    description: "We stay ahead of industry trends by embracing the latest.",
  },
];

/* ========================================================================
                            MAIN COMPONENT.
======================================================================== */
function BestWork() {
  return (
    <Bestwork className="bestwork-section">
      <Container>
        <Row>
          <Col xs={12} lg={6}>
            <div className="mb-4">
              <Tag>
                <img src="/fav_gold.svg" alt="Gactour logo" />
                Gactour feature
              </Tag>

              <Title>Trusted Architectural<br />Best Work.</Title>
            </div>


            <BestworkFeatures>
              <Row>
                {features.map(({ icon, title, description }, idx) => (
                  <Col xs={12} md={6} key={idx} className="mb-5">
                    <div className="d-flex gap-3 feature-item">
                      <img src={icon} alt={title} width={24} />
                      <div>
                        <h5 className="feature-title  mb-1">{title}</h5>
                        <p className="feature-desc  small mb-0">{description}</p>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
              <div className="mt-3">
                <ButtonUi className="black-button mt-3" text="Learn More" />
              </div>
            </BestworkFeatures>


          </Col>



          <Col xs={12} lg={6} className="p-0 m-0 d-none d-lg-block">
            <div className="bestwork-img-wrapper w-100 h-100">
            </div>
          </Col>

        </Row>
      </Container>
    </Bestwork>
  )
}

export default BestWork;
