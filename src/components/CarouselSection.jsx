import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BackgroundSection from './BackgroundSection';
import ProjectsSection from './ProjectsSection';

const CustomArrow = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 transform -translate-y-1/2 ${
      direction === 'prev' ? '-left-16' : '-right-16'
    } z-10 text-4xl text-notion-default hover:text-notion-hover transition-colors focus:outline-none`}
  >
    {direction === 'prev' ? '<' : '>'}
  </button>
);

const CarouselSection = () => {
  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 650,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    pauseOnHover: true,
    className: "carousel-container",
    prevArrow: <CustomArrow direction="prev" />,
    nextArrow: <CustomArrow direction="next" />,
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8 relative w-full h-full">
      <Slider {...carouselSettings}>
        <BackgroundSection />
        <ProjectsSection />
        <div className="p-8">
          <h2 className="text-2xl font-semibold mb-4">I try to come up with more ideas</h2>
          <div className="prose max-w-none">
            <p className="text-[#6B6B6B]">
              More content coming soon...
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default CarouselSection; 