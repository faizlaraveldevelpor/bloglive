import { Swiper, SwiperSlide } from 'swiper/react';
import { useBlogsQuery } from "../Redux/Api";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow,  Navigation } from 'swiper/modules';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



function Home_page_Slider() {

  useBlogsQuery()
 let bloga_data=useSelector((state)=>state.Api_data_slice.blogs_data)
  
 
  
if (bloga_data) {
if(bloga_data.get_blog.length<10) return 
}


  
  return (
   <div className='flex flex-col items-center py-5  '>
     <div className="container  ">
     
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'3'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 50,
          modifier: 2.5,
        }}
      
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow,  Navigation]}
        className="swiper_container"
      >
      <div className=''>
         
      {
          bloga_data&&
          bloga_data.get_blog.map((data)=>{
            return(
              <>
 <SwiperSlide>
         <Link to={`/single/blog/${data._id}/${data?.Slug?data?.Slug:"Slug"}`}>
         <img src={data.image} alt="slide_image" className='md:h-[200px] lg:h-[250px] relative w-[150px] h-[100px]  md:w-[300px] ' />

         </Link>
        </SwiperSlide>
              </>
            )
          })
        }
      </div>

        <div className="slider-controler ">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
   </div>
  );
}

export default Home_page_Slider;