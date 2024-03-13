import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import bgimg1 from '../../Images/sliderimg1.png';
import bgimg2 from '../../Images/sliderimg2.png';
import bgimg3 from '../../Images/sliderimg3.png';
import './IntroPage.css';


import { Link } from 'react-router-dom';

function IntroPage() {

  const [activeSlide, setActiveSlide] = useState(0);

  const triggerAnimation = (swiper) => {
    document.querySelectorAll('.popupdiv').forEach((div) => {
      div.classList.remove('animate');
    });

  setTimeout(() => {
    const activePopupDiv = document.querySelector(`.popupdiv-${swiper.realIndex + 1}`);
    if (activePopupDiv) {
      activePopupDiv.classList.add('animate');
    }
  }, 50);
  };


  const slides = [
    {
      img: bgimg1,
      title: 'FARM FRESH FOR ALL .',
      text: 'We love to solve real world problems with design solutions that are magically simple and useable.',
    },
    {
      img: bgimg2,
      title: 'ORGANIC AND HEALTHY',
      text: 'Discover the best organic products sourced directly from farms.',
    },
    {
      img: bgimg3,
      title: 'SUSTAINABLE FARMING',
      text: 'Join us in our journey towards sustainability and greener future.',
    },
  ];
  return (  
<Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      onSlideChange={(swiper) => triggerAnimation(swiper)}
      onInit={(swiper) => triggerAnimation(swiper)}
      spaceBetween={1}
      slidesPerView={1}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className='page-container'>
            <img className='imagestyle' src={slide.img} alt={`backgroundimg${index+1}`} />
            <Link to="/signup">
              <div className='skipbtn'>
                <p>skip</p>
              </div>
            </Link>
            <div className="swiper-pagination-container">
              <div className="swiper-pagination"></div>
            </div>
            <div className={`popupdiv popupdiv-${index + 1}`}>
              <h2 className='title'>{slide.title}</h2>
              <p>{slide.text}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default IntroPage
