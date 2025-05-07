/* =============================================================================
                              MODULE IMPORTS & CONFIGURATION.
============================================================================= */
import styled from "styled-components";
import { Container, Logo, ToTop  } from "../../../styles/StyledComponents";
import ButtonUi from "../../../ui/Button";

import FooterColumn from "./FooterColumn";
import NewsletterSignup from "./NewsletterSignup";
import SocialLinks from "./SocialLinks";

/* ========================================================================
                            STYLED COMPONENTS.
======================================================================== */
const StyledOuter = styled.section`
  font-size: 1.6rem;
`;

const StyledContainer = styled(Container)`
  font-size: 1.6rem;
  padding: 12.8rem 16px;
  background-color: #101010;
  text-align: center;
`;

const SectionTitle = styled.p`
  color: #fff;
  margin: 0 auto 4.8rem;
  max-width: 666px;
  position: relative;

  &::after,
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    height: 1px;
    background-color: #ffffff22;
  }

  &::after {
    left: 0;
    width: calc(50% - 148px);
  }

  &::before {
    right: 0;
    width: calc(50% - 148px);
  }

  span {
    color: #e0a872;
    font-weight: bold;
  }
`;

const LogosWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 4.8rem;

  img {
    height: 50px;
    filter: grayscale(100%);
    cursor: pointer;
    transition: filter 0.4s;

    &:hover {
      filter: grayscale(0);
    }
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 4.8rem;
  background-color: rgb(21, 21, 21);
  padding: 8rem 0;
`;

const Column = styled.div`
  min-width: 20%;
`;

const NewsletterColumn = styled(Column)`
  min-width: 50%;
  background-color: rgb(17, 17, 17);
  padding: 3.2rem;
`;

const Title = styled.h3`
  font-size: 1.8rem;
  color: #fff;
  margin-bottom: 2rem;
`;

const FooterBottom = styled.div`
  padding: 2rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2.4rem;
`;

const ThemesLink = styled.a`
  color: #e0a872;
  display: inline-block;
`;

/* ========================================================================
                            MAIN COMPONENT.
======================================================================== */
function FooterSection() {
  const aboutLinks = ['About Us', 'Our Services', 'Our Pricing', 'Our Team', 'Contact Us'];
  const infoLinks = ['Architect Design Build', 'A Sustainable Future', 'Architectural Design', 'Structural Engineering', 'Environmental Impact'];
  const socialPlatforms = ['Facebook', 'Instagram', 'Twitter', 'LinkedIn'];

  const renderLinks = (title, links) => (
    <Column>
      <Title>{title}</Title>
      <LinksList>
        {links.map((text) => (
          <li key={text}>
            <LinkText href="#">{text}</LinkText>
          </li>
        ))}
      </LinksList>
    </Column>
  );

  return (
    <StyledOuter>
      <StyledContainer>
        <SectionTitle>
          Our Website <span>75000+</span> VIP Customer
        </SectionTitle>
        <LogosWrapper>
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <img key={num} src={`./home/customers/${num}.svg`} alt={`Customer ${num}`} />
          ))}
        </LogosWrapper>
      </StyledContainer>

      <Container>
        <Flex>
          <Column>
            <Title>Start Your Journey With Us</Title>
            <p>Cutting-Edge Interior Design Award.</p>
            <ButtonUi className="black-button" text="Contact Us" />
          </Column>

          <FooterColumn
            title="About Us"
            links={['About Us', 'Our Services', 'Our Pricing', 'Our Team', 'Contact Us']}
          />

          <FooterColumn
            title="Information"
            links={[
              'Architect Design Build',
              'A Sustainable Future',
              'Architectural Design',
              'Structural Engineering',
              'Environmental Impact',
            ]}
          />

          <NewsletterSignup />
        </Flex>

        <FooterBottom>
          <p>
            © 1995-2025 All rights reserved for <ThemesLink href="#">ThemesCamp</ThemesLink> exclusive
          </p>
          {/* Logo */}
          <Logo href="#home">
            <img src="./home/logo.svg" alt="Website Logo" />
          </Logo>
          <SocialLinks />
        </FooterBottom>

        <ToTop href="#home" aria-label="Back to top">
          ↑
        </ToTop>
      </Container>
    </StyledOuter>
  );
}

/* =============================================================================
                              EXPORTS.
============================================================================= */
export default FooterSection;
