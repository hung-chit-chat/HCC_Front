import React from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import Slider from "react-slick";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // 한 번에 보여줄 이미지 개수
    slidesToScroll: 1, // 한 번에 슬라이드 할 이미지 개수
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const images = [
    "/path/to/your/image1.jpg",
    "/path/to/your/image2.jpg",
    "/path/to/your/image3.jpg",
    "/path/to/your/image4.jpg",
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="p-2">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: 0 }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: 0, zIndex: 1 }}
      onClick={onClick}
    />
  );
};

export default ImageSlider;
