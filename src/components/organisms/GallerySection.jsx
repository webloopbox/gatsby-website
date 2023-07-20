import React, { useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import Img from "gatsby-image";
import { FreeMode, A11y } from "swiper/modules";
import PaginationButton from "../atoms/buttons/PaginationButton";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const GallerySection = ({ data }) => {
  const [swiperRef, setSwiperRef] = useState();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState("");

  const changeSlideHandler = useCallback(
    (direction) => {
      if (direction === 1) swiperRef?.slideNext();
      else swiperRef?.slidePrev();
    },
    [swiperRef]
  );

  const handleLightBox = (item) => {
    setLightboxOpen(true);
    setImageSrc({
      src: item.childImageSharp.fluid.src,
    });
  };

  const images = Object.values(data);
  const imagesSourceArr = Object.values(data).map((item) => ({
    src: item.childImageSharp.fluid.src,
  }));

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
          {images.map((item, index) => {
            // the images inside gallery are displayed in a static way. to be changed after getting dynamic data from an external source e.g. headless cms
            return (
              <SwiperSlide key={index}>
                <div
                  className={`slide-wrapper slide-wrapper${
                    index % 2 === 0 ? 1 : 2
                  }`}
                >
                  {index === 0 ? (
                    <a
                      className="gallery-image-item"
                      onClick={() => handleLightBox(item)}
                    >
                      <Img
                        fluid={item.childImageSharp.fluid}
                        objectFit="cover"
                      />
                    </a>
                  ) : (
                    <>
                      <a
                        className="gallery-image-item"
                        onClick={() => handleLightBox(item)}
                      >
                        <Img
                          fluid={item.childImageSharp.fluid}
                          objectFit="cover"
                        />
                      </a>
                      <a
                        className="gallery-image-item"
                        onClick={() => handleLightBox(item)}
                      >
                        <Img
                          fluid={item.childImageSharp.fluid}
                          objectFit="cover"
                        />
                      </a>
                    </>
                  )}
                </div>
              </SwiperSlide>
            );
          })}
          <Lightbox
            open={lightboxOpen}
            close={() => setLightboxOpen(false)}
            slides={[imageSrc, ...imagesSourceArr]}
          />
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
