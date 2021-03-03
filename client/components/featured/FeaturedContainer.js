import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FeaturedItem from './FeaturedItem'
import FeaturedSmallItem from './FeaturedSmallItem'
 
const FeaturedContainer = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div className="w-full">
            <Slider {...settings}>
                    <FeaturedItem/>
            </Slider>
            <ul className="flex container my-12 justify-between">
                <li className="w-1/3 pr-8"><FeaturedSmallItem/></li>
                <li className="w-1/3 pr-8"><FeaturedSmallItem/></li>
                <li className="w-1/3 pr-8"><FeaturedSmallItem/></li>
            </ul>
        </div>
    )
}

export default FeaturedContainer
