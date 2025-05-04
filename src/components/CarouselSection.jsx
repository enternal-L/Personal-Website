import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BackgroundSection from './BackgroundSection';
import ProjectsSection from './ProjectsSection';
import TimelineSection from './TimelineSection';

const CustomArrow = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 transform -translate-y-1/2 ${
      direction === 'prev' ? '-left-12 hover:-translate-x-1' : '-right-12 hover:translate-x-1'
    } z-10 text-4xl text-notion-default transition-transform duration-200 focus:outline-none`}
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
        <TimelineSection />
        <div className="p-8">
          <h2 className="text-2xl font-semibold mb-4">I try to come up with more ideas for the website</h2>
          <div className="prose max-w-none">
            <p className="text-[#6B6B6B]">
              memes I like from 2025: artists who can sing vs artists who can't sing; my name is david dad, I want some icecream; the lion; the gorilla.
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default CarouselSection; 