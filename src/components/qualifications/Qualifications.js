import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";

import Cert1 from '../../assets/certificates/1.jpeg'
import Cert2 from '../../assets/certificates/2.jpeg'
import Cert3 from '../../assets/certificates/3.jpeg'
import Cert4 from '../../assets/certificates/4.jpeg'
import Cert5 from '../../assets/certificates/5.jpeg'
import Cert6 from '../../assets/certificates/6.jpg'
import Cert7 from '../../assets/certificates/7.jpg'
import Cert8 from '../../assets/certificates/8.jpg'
import Cert9 from '../../assets/certificates/9.jpg'
import Cert10 from '../../assets/certificates/10.jpg'
import Cert11 from '../../assets/certificates/11.jpg'
import Cert12 from '../../assets/certificates/12.jpg'
import Award1 from '../../assets/awards/1.jpg'

import './qualifications.css';

const Qualifications = () => {
  return (
    <section id='qualifications'>

      <div className="container qualifications-container">

        <div className="qualifications-title">
            <h5>What do I offer</h5>
          <h2>My Qualifications</h2>
        </div>
        
        <div className="certificate-gallery">
        <h2>Trainings and Certificates</h2>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide><img src={Cert1} alt="cert1"/></SwiperSlide>
            <SwiperSlide><img src={Cert2} alt="cert2"/></SwiperSlide>
            <SwiperSlide><img src={Cert3} alt="cert3"/></SwiperSlide>
            <SwiperSlide><img src={Cert4} alt="cert4"/></SwiperSlide>
            <SwiperSlide><img src={Cert5} alt="cert5"/></SwiperSlide>
            <SwiperSlide><img src={Cert6} alt="cert6"/></SwiperSlide>
            <SwiperSlide><img src={Cert7} alt="cert7"/></SwiperSlide>
            <SwiperSlide><img src={Cert8} alt="cert8"/></SwiperSlide>
            <SwiperSlide><img src={Cert9} alt="cert9"/></SwiperSlide>
            <SwiperSlide><img src={Cert10} alt="cert10"/></SwiperSlide>
            <SwiperSlide><img src={Cert11} alt="cert11"/></SwiperSlide>
            <SwiperSlide><img src={Cert12} alt="cert12"/></SwiperSlide>
          </Swiper>
        </div>

        <div className="awards-gallery">
        <h2>Awards</h2>
        <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide><img src={Award1} alt="award1"/></SwiperSlide>
          </Swiper>
        </div>
          

      </div>
    </section >
  )
}

export default Qualifications