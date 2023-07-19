import React, { useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import { Button } from "react-bootstrap";

import Img from "gatsby-image";

import { FreeMode, A11y } from "swiper/modules";
import PaginationButton from "../atoms/buttons/PaginationButton";

const GallerySection = ({ data }) => {
  const [swiperRef, setSwiperRef] = useState();

  const changeSlideHandler = useCallback(
    (direction) => {
      if (direction === 1) swiperRef?.slideNext();
      else swiperRef?.slidePrev();
    },
    [swiperRef]
  );

  return (
    <div className="gallery-section">
      <div className="gallery-section-title">
        <h1>Galeria</h1>
        <span className="divider"></span>
      </div>
      <div className="gallery-section-inner">
        <Swiper
          onSwiper={setSwiperRef}
          freeMode
          modules={[FreeMode, A11y]}
          breakpoints={{ 0: { slidesPerView: 1 }, 600: { slidesPerView: 2 } }}
        >
          <SwiperSlide>
            <div className="slide-wrapper slide-wrapper1">
              <Img
                fluid={data.galleryImage1.childImageSharp.fluid}
                objectFit="cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-wrapper slide-wrapper2">
              <Img
                fluid={data.galleryImage2.childImageSharp.fluid}
                objectFit="cover"
              />
              <Img
                fluid={data.galleryImage3.childImageSharp.fluid}
                objectFit="cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-wrapper slide-wrapper3">
              <Img
                fluid={data.galleryImage4.childImageSharp.fluid}
                objectFit="cover"
              />
              <Img
                fluid={data.galleryImage3.childImageSharp.fluid}
                objectFit="cover"
              />
            </div>
          </SwiperSlide>
          <div className="arrow-left">
            <PaginationButton
              type={"prev"}
              handler={changeSlideHandler}
              value={-1}
            />
          </div>
          <div className="arrow-right">
            <PaginationButton
              type={"next"}
              handler={changeSlideHandler}
              value={1}
            />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default GallerySection;
