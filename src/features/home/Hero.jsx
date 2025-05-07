/* =============================================================================
                              MODULE IMPORTS & CONFIGURATION
============================================================================= */
// Styling.
import styled from "styled-components";

// UI Component.
import { Row, Col } from "react-bootstrap";
import { Container } from "../../styles/StyledComponents";
import ButtonUi from "../../ui/Button";

/* =============================================================================
                              STYLED COMPONENT
============================================================================= */
const HeroSection = styled.section`
  background: url("/home/header/hero_bg1.jpg") center/cover no-repeat;
  min-height: 100dvh;
`
const StyledRow = styled(Row)`
  @media (max-width: 992px) {
    flex-direction: column;

    & > div {
      width: 100%;
      max-width: 707px;
      margin: 16px auto 0;
    }
  }
`
const HeroImage = styled.img`
  height: 300px;
  object-fit: cover;
  object-position: center;
`
const HeroCenterImage = styled(HeroImage)`
  width: 88%;
  max-width: 250px;
  height: 300px;
  margin: auto;
  @media (max-width: 992px) {
    width: 100%;
    max-width: 100%;
    height: 333px;
  }

  @media (max-width: 555px) {
    height: 111px;
  }
`
const HeroCustomImage = styled(HeroImage)`
  width: 100%;
  height: 388px;
  margin-top: 88px;
  clip-path: polygon(0 0, 100% 5%, 100% 95%, 0% 100%);
  transition: all 0.3s ease;

  @media (max-width: 992px) {
    margin-top: 0;
    height: 300px;
  }
`
const HeroCustomImageRight = styled(HeroCustomImage)`
  clip-path: polygon(0 5%, 100% 0%, 100% 95%, 0% 100%);
`

/* =============================================================================
                              MAIN COMPONENT
============================================================================= */
function Hero() {
  return (
    <HeroSection>
      <Container>
        {/* Top Section */}
        <StyledRow className="align-items-start">
          <Col xs={12} md={3}>
            <HeroCustomImage
              src="/home/header/hero1.webp"
              alt="Hero Left"
            />
          </Col>

          <Col xs={12} md={6}>
            <Row>
              <Col xs={6}>
                <HeroCenterImage
                  src="/home/header/hero3.webp"
                  alt="Hero Center Left"
                />
              </Col>
              <Col xs={6}>
                <HeroCenterImage
                  src="/home/header/hero4.webp"
                  alt="Hero Center Right"
                />
              </Col>
            </Row>
          </Col>

          <Col xs={12} md={3}>
            <HeroCustomImageRight
              src="/home/header/hero2.webp"
              alt="Hero Right"
            />
          </Col>
        </StyledRow>

        {/* Bottom Section */}
        <Row className="justify-content-around align-items-center heading-two overlap-row ">
          <div>
            <div className="hero-text text-center mb-3 ">
              <h2 className="m-0">Architecture&nbsp;to</h2>
            </div>

            <div className="text-center hero-heading-image">
              <img
                src="/home/header/heading.webp"
                alt="Heading Visual"
                className="img-fluid align-middle d-inline-block"
              />
              <h2 className="ms-5 d-inline-block align-middle">build dream</h2>
            </div>
          </div>

          <Col xs={12} md={3} className="text-center text-md-start  mb-md-0 heading-num overlap" >
            <h2>
              15+ <span className="d-block">Year Experience</span>
            </h2>
          </Col>

          <Col xs={12} md={3} className="text-center mb-3 mb-md-0 overlap">
            <img
              src="/home/header/icon-1.svg"
              alt="Arrow Icon"
              className="img-fluid"
            />
          </Col>

          <Col xs={12} md={6} className="overlap-2">
            <p className="heading-p text-start mb-3 ">
              Building your dream body is like constructing a masterpiece; it requires careful planning,
              dedication, and the right resources.
            </p>
            <ButtonUi className="black-button" text="More Details" />
          </Col>
        </Row>
      </Container>
    </HeroSection>
  );
}

/* =============================================================================
                              EXPORT
============================================================================= */
export default Hero;
