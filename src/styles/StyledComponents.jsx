/* =============================================================================
                              MODULE IMPORTS & CONFIGURATION.
============================================================================= */
// Styling.
import styled from "styled-components";

/* =============================================================================
                              EXPORT Container.
============================================================================= */
export const Container = styled.div`
 margin: 0 auto;
 padding: 0 16px;
 width: 100%;
 max-width: 1300px;
`;

/* =============================================================================
                              EXPORT Tag.
============================================================================= */
export const Tag = styled.span`
  color: var(--clr-brand-600);
  display: flex;
  align-items: center;
  gap: 1.2rem;
  font-size: 2rem;
  font-family: var(--ff-secondary);
  margin-bottom: 2.4rem;

  img {
    width: 20px;
    height: 20px;
  }
`;

/* =============================================================================
                              EXPORT Title.
============================================================================= */
export const Title = styled.h2`
  font-size: clamp(2.4rem, 4.4vw, 4.8rem) ;
  font-weight: 400;
  margin-bottom: 0.4rem;
`;

/* =============================================================================
                              EXPORT Subtitle.
============================================================================= */
export const Subtitle = styled.p`
  margin-bottom: 3.2rem;
  max-width: 666px;
  font-size: 1.6rem;
  line-height: 1.8;
`;

/* =============================================================================
                              EXPORT GridSystem.
============================================================================= */
export const GridSystem = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(288px, 1fr));
  gap: 2.4rem;

  @media (max-width: 1110px) {
    grid-template-columns: repeat(1, minmax(288px, 666px));
    justify-content: center;
  }
`;

/* =============================================================================
                              EXPORT ServiceCard.
============================================================================= */
export const ServiceCard = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.067);
  background-color: #111111;
  padding: 3.2rem;
  height: 100%;
  max-width: 588px;
  cursor: pointer;
  transition: border-color 0.4s linear;

  &:hover {
    border-color: var(--clr-brand-600);
  }
`;

/* =============================================================================
                              EXPORT ImgWrapper.
============================================================================= */
export const ImgWrapper = styled.div`
  width: 8.8rem;
  height: 8.8rem;
  margin-bottom: 4.8rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

/* =============================================================================
                              EXPORT ServiceTitle.
============================================================================= */
export const ServiceTitle = styled.h3`
  font-weight: 400;
  font-size: 2.4rem;
  margin-bottom: 1.2rem;
`;

/* =============================================================================
                              EXPORT ServiceDescription.
============================================================================= */
export const ServiceDescription = styled.p`
  font-size: 1.6rem;
  line-height: 1.8;
`;

/* =============================================================================
                              EXPORT Input.
============================================================================= */
export const Input = styled.input`
  width: 100%;
  max-width: 444px;
  padding: 0.8rem;
  background: transparent;
  border-bottom: 1px solid #333;
  color: #fff;
  margin-bottom: 1.6rem;
  transition: border-color 0.4s;

  &:focus {
    outline: none;
    border-color: #e0a872;
  }
`;

/* =============================================================================
                              EXPORT Input.
============================================================================= */
export const Logo = styled.a`
  img {
    min-width: 103px;
    height: 49px;
  }
`;

/* =============================================================================
                              EXPORT SocialIcons.
============================================================================= */
export const SocialIcons = styled.div`
  display: flex;
  gap: 1.2rem;

  a {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background-color: #ffffff11;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: #e0a872;
    }

   svg {
     width: 16px;
     height: 16px;
      fill: #fff;
   }
  }
`;

/* =============================================================================
                              EXPORT ToTop.
============================================================================= */
export const ToTop = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  position: fixed;
  bottom: 80px;
  right: 20px;

  &:hover {
    background-color: #e0a872;
  }
`;
