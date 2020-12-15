
import React from  "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from "styled-components";
import Typography from '@material-ui/core/Typography'
import SwiperCore, { Navigation, Pagination, EffectCoverflow ,EffectFade} from 'swiper';
import nature1 from "../../../images/nature-1.jpg";
import nature3 from "../../../images/nature-3.jpg";
import nature4 from "../../../images/nature-4.jpg";
import nature10 from "../../../images/nature-10.jpg";
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-coverflow/effect-coverflow.scss';
import 'swiper/components/effect-fade/effect-fade.scss';

// install swiper components
SwiperCore.use([Navigation, Pagination , EffectCoverflow ,  EffectFade ]);

const SliderContent = styled.div`
  display: flex;
  
`;

const SliderTypography = styled(Typography)`
  position: absolute;
  color: white;
  margin-top: 129px;
  width: 500px;
  left: 50px;
  animation: slide2 12s linear ininite;

`;

export default () => {
  return (
    <>
    <Swiper style={{height:400}}
      effect ='fade'
      spaceBetween={10}
      slidesPerView={1}
      loop
      navigation
      pagination={{clickable:true, el:'.Swiperpagi'}}
      grabCursor = {true}
      centeredSlides= {true}

    >

      <SwiperSlide>
        <SliderContent>
          <img src={nature3} alt="slider"  style={{width:1600}} />
          <SliderTypography>
            <Typography variant="h6">
                Slide 1
            </Typography>
            <Typography variant="h6"style={{marginTop:20}}>
                Subtitle
            </Typography>

            <Typography style={{marginTop:20}} >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            </Typography>
          </SliderTypography>
        </SliderContent>
      </SwiperSlide>
      <SwiperSlide>
        <SliderContent>
          <img src={nature10} alt="slider"  style={{width:1600}} />
          <SliderTypography>
            <Typography variant="h6">
                Slide 2
            </Typography>
            <Typography variant="h6"style={{marginTop:20}}>
                Subtitle..
            </Typography>

            <Typography style={{marginTop:20}} >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            </Typography>
          </SliderTypography>
        </SliderContent>
      </SwiperSlide>
      <SwiperSlide>
        <SliderContent>
          <img src={nature3} alt="slider"  style={{width:1600}} />
          <SliderTypography>
            <Typography variant="h6">
                Slide 3
            </Typography>
            <Typography variant="h6"style={{marginTop:20}}>
                Subtitle
            </Typography>

            <Typography style={{marginTop:20}} >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            </Typography>
          </SliderTypography>
        </SliderContent>
      </SwiperSlide>
      <SwiperSlide>
        <SliderContent>
          <img src={nature1} alt="slider"  style={{width:1600}} />
          <SliderTypography>
            <Typography variant="h6">
                Slide 4
            </Typography>
            <Typography variant="h6"style={{marginTop:20}}>
                Subtitle..
            </Typography>

            <Typography style={{marginTop:20}} >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            </Typography>
          </SliderTypography>
        </SliderContent>
      </SwiperSlide>

      ...
    </Swiper>
    <div className="Swiperpagi" style={{textAlign:'center'}}>

    </div>
   
    </>
  );
};
