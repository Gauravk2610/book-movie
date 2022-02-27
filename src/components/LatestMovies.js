import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function LatestMovies() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    return (
      <div className=''>
        <Slider {...settings}>
          <img className=' max-h-[560px] w-full object-cover' src="https://www.fedregsadvisor.com/wp-content/uploads/2021/08/%E2%80%98Spider-Man-No-Way-Home-Unofficial-Trailer-Is-Here.jpg" alt="" />
          <img className=' max-h-[560px] w-full object-cover' src="https://th.bing.com/th/id/OIP.Tyf2JmMJQ-9dzXSiRHKhrgHaEK?pid=ImgDet&rs=1" alt="" />
        </Slider>
      </div>
    )
}

export default LatestMovies