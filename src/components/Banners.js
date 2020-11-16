import React from 'react'
import Slider from "react-slick";

const Banners = ({banners}) => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2500,
        fade: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
    };

    return (
        <Slider {...settings}>
            {
                banners.map(banner => (
                    <div style={{ width: "100%", height: 'auto' }} key={banner.id}>
                        <div className="Banner" >
                            <img src={banner.image} alt="imagen" />
                            <p data-aos="fade-up">{banner.title}</p>
                        </div>
                    </div>
                ))
            }
        </Slider>
    );
}

export default Banners;