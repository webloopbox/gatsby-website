import React, { useCallback, useState } from "react";
import { Button, Container } from "react-bootstrap";
import Img from "gatsby-image";
import overlay from "../../assets/slider-overlay.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ContactForm from "./ContactForm";
import PaginationButton from "../atoms/buttons/PaginationButton";

const Hero = ({ data }) => {
  const [swiperRef, setSwiperRef] = useState();
  const [contactModal, setContactModal] = useState();

  const slides = Object.values(data);

  console.log("slides: ", slides);

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
        autoplay={{
          delay: 2500,
        }}
        onSwiper={setSwiperRef}
        modules={[Navigation, Autoplay, EffectFade]}
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
        <PaginationButton
          type={"prev"}
          handler={changeSlideHandler}
          value={-1}
        />
        <PaginationButton
          type={"next"}
          handler={changeSlideHandler}
          value={1}
        />
      </div>
    </Container>
  );
};

export default Hero;
