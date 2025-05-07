/* ========================================================================
                                MODULE IMPORTS & CONFIGURATION.
 ======================================================================== */
// Styling.
import styled from "styled-components";

// UI Components.
import Header from "../features/home/Header";
import Hero from "../features/home/Hero";
import Services from "../features/home/Services";
import WhatWeDo from "../features/home/WhatWeDo";
import BestWork from '../features/home/Bestwork'
import VideoShow from "../features/home/VideoShow";
import ContactUS from '../features/home/contactus/ContactUs'

import Portfolio from '../features/home/Portfolio'
import Footer from '../features/home/footer/Footer'

/* ========================================================================
                            STYLED COMPONENTS.
 ======================================================================== */
/**
 * Home Container.
 *
 * Layout Behavior:
 * +---------------------------------------------------+
 * | [Header]                                            |
 * | [Hero]                                        |
 * | [Services]                                        |
 * | [Our Work]                                         |
 * | [About Us]                                         |
 * | [Footer]                                         |
 * +---------------------------------------------------+
 */
const StyledHomeContainer = styled.section``;

/* ========================================================================
                            MAIN COMPONENT.
 ======================================================================== */
/**
 * Home Page.
 *
 * @returns {JSX.Element} - Full-width home page with stacked sections.
 */
function Home() {
  return (
    <StyledHomeContainer role="main" aria-label="Homepage">
      <Header />

      <Hero />

      <Services />

      <WhatWeDo />

      <BestWork />

      <Portfolio />

      <VideoShow />

      <ContactUS />

      <Footer />
    </StyledHomeContainer>
  );
}

/* =============================================================================
                                EXPORTS.
============================================================================= */
export default Home;
