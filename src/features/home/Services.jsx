/* =============================================================================
                              MODULE IMPORTS & CONFIGURATION.
============================================================================= */
// Styling
import styled from "styled-components";

// Styled Components
import {
  Container,
  Tag,
  Title,
  Subtitle,
  GridSystem
} from '../../styles/StyledComponents';

// UI Components
import ServiceCard from '../../ui/ServiceCard';
import ButtonUi from "../../ui/Button";

/* ========================================================================
                            STYLED COMPONENTS.
======================================================================== */
const StyledServices = styled.section`
  background-color: #101010;
  padding: 120px 0 0;
`;
const Div = styled.div`
  @media (min-width: 1111px) {
    grid-column: 1 / span 2;
  }
`;
const Button = styled(ButtonUi)`
  padding: 1rem 2.4rem;
  margin-bottom: 3.2rem;
  font-size: 1.3rem;
`;

/* ========================================================================
                            MAIN COMPONENT.
======================================================================== */
function Services() {
  return (
    <StyledServices>
      <Container>
        <GridSystem>
          <Div>
            <Tag>
              <img src="/fav_gold.svg" alt="Gactour logo" />
              Gactour feature
            </Tag>

            <Title>Trends and Innovations</Title>

            <Subtitle>
              It seems like you're asking for ideas or information on creating a title related to architecture.
              Could you specify the context? For example, are you looking.
            </Subtitle>

            <Button className="black-button" text={"View All"} />
          </Div>

          <ServiceCard
            title="Sustainable Architecture"
            description="Increased use of eco-friendly materials like recycled steel, bamboo."
            imgSrc="/home/services/serv1.svg"
           />

          <ServiceCard
            title="Innovative Construction"
            description="Adoption of cutting-edge building techniques and smart technologies."
            imgSrc="/home/services/serv2.svg" />

          <ServiceCard
            title="Biophilic Design"
            description="Incorporation of natural elements to enhance wellbeing and productivity."

            imgSrc="/home/services/serv3.svg"
          />

          <ServiceCard
            title="Urban Planning"
            description="Strategies for sustainable and efficient city development."
            imgSrc="/home/services/serv4.svg"
          />
        </GridSystem>

      </Container>
    </StyledServices>
  );
}

/* =============================================================================
                              EXPORTS.
============================================================================= */
export default Services;
