/* =============================================================================
                              MODULE IMPORTS & CONFIGURATION.
============================================================================= */
import styled from "styled-components";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';

import {
  Container,
  Tag,
  Title
} from '../../styles/StyledComponents';

/* =============================================================================
                              STYLED COMPONENTS.
============================================================================= */

const Section = styled.section`
  background-color: #101010;
  padding: 12rem 0;
  text-align: center;
  position: relative;
`;

const Header = styled.header`
  span {
    justify-content: center;
  }

  .container-btns {
    border-radius: var(--border-radius-sm);
    border: 1px solid #ffffff11;
    margin: 4.8rem auto 6.4rem;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    width: fit-content;
  }

  .portfolio-btn {
    padding: 1.6rem 3.2rem;
    font-size: 1.6rem;
    text-transform: uppercase;
    color: #fff;
    display: block;
    transition: 0.4s;
    background: transparent;
    border: none;
    cursor: pointer;
  }

  .portfolio-btn.active {
    background-color: var(--clr-brand-600);
  }

  @media (max-width: 666px) {
    .portfolio-btn {
      padding: 1rem 2rem;
      font-size: 1.1rem;
    }
  }
`;

const StyledSwiper = styled(Swiper)`
  padding-bottom: 6.4rem !important;

  .slider {
    width: 88%;
    max-width: 666px;
    height: 350px;

    img {
      width: 100%;
      height: 88%;
      object-position: center;
      object-fit: cover;
    }

    h3 {
      margin-top: 3.2rem;
      font-size: 2.4rem;
      font-weight: 400;
    }
  }

  .swiper-pagination.swiper-pagination-bullets.swiper-pagination-horizontal {
    position: absolute;
    bottom: 0;
    left: calc(100% - 64px);
    width: fit-content;
  }

  .swiper-pagination-bullet {
    background-color: var(--clr-brand-200);
  }

  .swiper-pagination-bullet.swiper-pagination-bullet-active {
    background-color: var(--clr-brand-600);
  }
`;

/* =============================================================================
                              CONTENTS.
============================================================================= */
const contents = {
  one: new Array(4).fill({ imgSrc: "./home/portfolio/portfolio5.webp", title: "Retail and Hospitality" }),
  two: new Array(4).fill({ imgSrc: "./home/portfolio/portfolio6.webp", title: "Retail and Hospitality" }),
  three: new Array(4).fill({ imgSrc: "./home/portfolio/portfolio7.webp", title: "Retail and Hospitality" }),
};

const buttons = [
  { label: "Design", key: "one" },
  { label: "Architectural", key: "two" },
  { label: "Nature", key: "three" },
];

/* =============================================================================
                              MAIN COMPONENT.
============================================================================= */
function Portfolio() {
  const [activeKey, setActiveKey] = useState("one");

  return (
    <Section id="ourWorks">
      <Container>
        <Header className="portfolio-header">
          <Tag>
            <img src="/fav_gold.svg" alt="Gactour logo" />
            Our Portfolio
          </Tag>

          <Title>Showcasing Our Architectural</Title>

          <div className="container-btns">
            {buttons.map(({ label, key }) => (
              <button
                key={key}
                className={`portfolio-btn ${activeKey === key ? "active" : ""}`}
                onClick={() => setActiveKey(key)}
              >
                {label}
              </button>
            ))}
          </div>
        </Header>

        <StyledSwiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          loop={true}
          modules={[EffectCoverflow, Pagination]}
        >
          {contents[activeKey].map((item, index) => (
            <SwiperSlide key={index} className="slider">
              <img src={item.imgSrc} alt={item.title} />
              <h3>{item.title}</h3>
            </SwiperSlide>
          ))}
        </StyledSwiper>
      </Container>
    </Section>
  );
}

/* =============================================================================
                              EXPORTS.
============================================================================= */
export default Portfolio;
