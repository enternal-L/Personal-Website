import Card from './newCard'
import './Cards.css';
import './newCard.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { useState, useEffect } from 'react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './mySwiper.css';



function Cards() {

  const [myStyle, addStyle] = useState(false);

  useEffect(() => {
        
    const myCard = document.querySelector('.cards__anim');

    const observer = new IntersectionObserver(
        entries => {
        entries.forEach((entry) => {
          if (entry.isIntersecting){
              addStyle(true);
          }
            // if ever want for bio section to appear-reappear
            //
            // else{
            //     addStyle(false);
            // }
        },
        );
    })

    observer.observe(myCard);

  }, []);

  console.log(myStyle)

  return (
    <div className='cards' id='projects'>
      <div className={`cards__anim ${myStyle ? 'show' : ''}`}>
        <div className='cards__wrapper'>
          <h1 className = 'cards__title'>Projects I worked on</h1>
        </div>
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop = {true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1
            }}
            modules={[EffectCoverflow, Pagination]}
            className={"mySwiper"}
          >
            <SwiperSlide>
                <Card 
                    title = 'MRover (LRD)' 
                    subtitle = 'Member of Autonomy Team' 
                    // desc1 = 'The Michigan Mars Rover Team (MRover) is a student-run, multidisciplinary organization whose mission is to design and build a rover for the exploration of extraterrestrial environments.'
                    // desc2 = 'Responsible for aligning Long Range Detection Camera with ZED Camera to improve Aruco Code detection and decrease disperencies between lowerbound detection of LRD Camera and upperbound detection of ZED Camera.' 
                    path = 'https://github.com/umrover/mrover-ros/wiki'
                    src = 'http://localhost:5173/mrover.jpg'
                  />
            </SwiperSlide>
            <SwiperSlide>
                <Card 
                    title = 'Pill Packer' 
                    subtitle = 'Software Developer' 
                    desc1 = ''
                    desc2 = ''
                    path = 'https://youtu.be/3o2vF-bXeKU'
                    src = 'http://localhost:5173/PillPacker.PNG'
                  />
            </SwiperSlide>
            <SwiperSlide>
                <Card 
                    title = 'Stopwatch-in-JS' 
                    subtitle = 'Developer' 
                    desc1 = ''
                    desc2 = '' 
                    path = 'https://enternal-l.github.io/Stopwatch-in-JS/'
                    src = 'http://localhost:5173/Stopwatch.PNG'
                  />
            </SwiperSlide>
            <SwiperSlide>
                <Card 
                    title = 'Feel The Heat' 
                    subtitle = 'Member of Team Beta' 
                    desc1 = ''
                    desc2 = ''
                    path = 'https://youtu.be/AAzt0SaWzFk'
                    src = 'http://localhost:5173/FeelTheHeat.PNG'
                  />
            </SwiperSlide>
            <SwiperSlide>
                <Card 
                    title = 'Astromania' 
                    subtitle = 'Web Developer' 
                    desc1 = ''
                    desc2 = ''
                    path = 'https://www.youtube.com/watch?v=b2uJjh1oVZo'
                    src = 'http://localhost:5173/AstroMania.PNG'
                  />
            </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Cards