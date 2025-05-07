/* =============================================================================
                              MODULE IMPORTS & CONFIGURATION.
============================================================================= */
// Styled Components.
import {
  ServiceCard as StyledCard,
  ImgWrapper,
  ServiceTitle,
  ServiceDescription
} from '../styles/StyledComponents';

/* ========================================================================
                            MAIN COMPONENT.
======================================================================== */
function ServiceCard({ title, description, imgSrc, children }) {
  return (
    <StyledCard>
      <ImgWrapper>
        <img src={imgSrc} alt={title} />
      </ImgWrapper>
      <ServiceTitle>{title}</ServiceTitle>
      <ServiceDescription>{description}</ServiceDescription>
      {children}
    </StyledCard>
  );
}

/* =============================================================================
                              EXPORTS.
============================================================================= */
export default ServiceCard;
