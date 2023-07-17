import React, { useCallback, useState } from "react";
import { Button, Container } from "react-bootstrap";
import LeftArrow from "../../../assets/arrow-left.svg";
import RightArrow from "../../../assets/arrow-right.svg";
import Img from "gatsby-image";
import overlay from "../../../assets/slider-overlay.png";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ContactForm from "../ContactForm";

const Hero = ({ data }) => {
  const [swiperRef, setSwiperRef] = useState();
  const [contactModal, setContactModal] = useState();

  const slides = Object.values(data);

  const changeSlideHandler = useCallback(
    (direction) => {
      if (direction === 1) swiperRef?.slideNext();
      else swiperRef?.slidePrev();
    },
    [swiperRef]
  );

  const handleContactModal = (visible) => setContactModal(visible);

  return (
    <Container fluid className="p-0 hero-container">
      <Swiper
        onSwiper={setSwiperRef}
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
        loop={true}
        effect="fade"
        slidesPerView={1}
        pagination={false}
      >
        {slides.map((slide, index) => {
          const { childImageSharp } = slide;
          return (
            <SwiperSlide key={index}>
              <Img fluid={childImageSharp.fluid} objectFit="cover" />
              <img src={overlay} className="overlay" />
              <div className="slider-text">
                <Container className="p-0">
                  <div>
                    <h2>Firma</h2>
                    <p className="m-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut auctor
                    </p>
                  </div>
                  <Button
                    onClick={() => handleContactModal(true)}
                    className="py-3 px-4 contact-btn"
                  >
                    Skontaktuj się
                  </Button>
                </Container>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Container
        className={`p-0 slider-items ${contactModal ? "visible" : ""}`}
      >
        <ContactForm handleContactModal={handleContactModal} />
      </Container>
      <div className="arrows">
        <Button
          className="p-0 rounded-0 btn-outline-light"
          onClick={() => changeSlideHandler(-1)}
        >
          <LeftArrow />
        </Button>
        <Button
          className="p-0 rounded-0 btn-outline-light"
          onClick={() => changeSlideHandler(1)}
        >
          <RightArrow />
        </Button>
      </div>
    </Container>
  );
};

export default Hero;
