/* =============================================================================
                              MODULE IMPORTS & CONFIGURATION.
============================================================================= */
// Styling
import styled from "styled-components";

// UI Components
import ButtonUi from "../../ui/Button";
import { Container } from "../../styles/StyledComponents";

/* =============================================================================
                              STYLED COMPONENTS.
============================================================================= */
const StyledWhatWeDo = styled.section`
  padding: 120px 0;
  background-color: #101010;
  position: relative;

  header {
    text-align: center;
  }

  p {
    margin-bottom: 2.4rem;
  }

  .flashing {
    font-size: 180px;
    font-weight: 400;
    line-height: 0.7em;
    color: #00000000;
    -webkit-text-stroke-width: 1px;
    stroke-width: 1px;
    -webkit-text-stroke-color: #00000011;
    stroke: #00000011;
    position: absolute;
    bottom: 32px;
    left: 16px;
    color: #ffffff4e;
    filter: drop-shadow(rgba(255, 255, 255, 0.306) 0px 0px 23.8597px)
    z-index: 1;
  }

  .flashing span {
    animation: flashing 4s infinite alternate;
  }

  @media (max-width: 1110px) {
    .flashing span {
      display: none;
    }
  }

  /* Animation delay for each character */
  ${Array.from({ length: 10 })
    .map((_, i) => `.flashing span:nth-child(${i + 1}) { animation-delay: ${i * 0.8}s; }`)
    .join("\n")}

  @keyframes flashing {
    0% {
    filter: drop-shadow(rgba(255, 255, 255, 0.306) 0px 0px 23.8597px);
    color: rgba(255, 255, 255, 0.306)
    }
    100% {
      filter: drop-shadow(rgba(255, 255, 255, 0.996) 0px 0px 10.1055px);
      color: rgba(255, 255, 255, 0.996)
    }
  }
`;

const Tag = styled.span`
  color: rgb(200, 200, 200);
  padding: 0.6rem 2rem;
  text-transform: uppercase;
  border: 1px solid #ffffff44;
  border-radius: 88px;
  font-size: 1.5rem;
  margin-bottom: 3.2rem;
  display: inline-block;
`;

const Title = styled.h2`
  font-size: 4rem;
  font-weight: 400;
  margin: 0 auto 6.4rem;
  width: 100%;
  max-width: 555px;

  @media (min-width: 1110px) {
    font-size: 8.8rem;
    max-width: 707px;
  }
`;

const GridSystem = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 1.2fr) minmax(auto, 1fr);
  justify-content: space-between;
  column-gap: 9.8rem;
  row-gap: 3.2rem;
  align-items: flex-start;
  position: relative;
  z-index: 2;

  @media (max-width: 1110px) {
    grid-template-columns: minmax(auto, 696px);
    grid-template-rows: auto;
    justify-content: center;
  }
`;

const Img = styled.img`
  width: 100%;
  object-fit: cover;

  @media (max-width: 1110px) {
    max-height: 350px;
  }
`;

const Statistics = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8rem;
  position: relative;
  margin-bottom: 2.4rem;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background-color: #ffffff11;
  }

  h3 {
    margin: 0;
    font-size: 3.2rem;
    font-weight: 400;
  }

  p {
    margin: 0;
    font-size: 1.4rem;
  }
`;

const SmallTitle = styled.h3`
  font-size: 2.4rem;
  margin-bottom: 8rem;
`;

/* ========================================================================
                            MAIN COMPONENT.
======================================================================== */
function WhatWeDo() {
  return (
    <StyledWhatWeDo id="aboutus">
      <Container>
        <header>
          <Tag>What We Do</Tag>
          <Title>
            Building for Tomorrow Trends in Contemporary Architecture
          </Title>
        </header>

        <GridSystem>
          <Img
            src="/home/what-we-do/service.webp"
            alt="Modern Architecture Showcase"
          />

          <div>
            <p>
              Could you clarify what you're looking for in architecture? Are
              you interested in a specific style, a famous building, or perhaps
              details on how architecture ties into your work at your agency?
              Let me know so I can provide the most relevant information!
            </p>

            <SmallTitle>
              "Architectural Wonders Iconic Structures Around the World"
            </SmallTitle>

            <Statistics>
              <div>
                <h3>85%</h3>
                <p>Client Retention Rate</p>
              </div>
              <div>
                <h3>50+</h3>
                <p>Expert Team Members</p>
              </div>
            </Statistics>

            <Img
              src="/home/what-we-do/service2.webp"
              alt="Teamwork in Architecture Projects"
            />
          </div>
        </GridSystem>
      </Container>

      <p className="flashing">
        {"What We Do".split("").map((char, idx) => (
          <span key={idx}>{char}</span>
        ))}
      </p>
    </StyledWhatWeDo>
  );
}

/* =============================================================================
                              EXPORTS.
============================================================================= */
export default WhatWeDo;
