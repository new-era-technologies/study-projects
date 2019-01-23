import React, {Component} from 'react';
import Swiper from 'react-id-swiper';
import {sliderImgs} from '../../utils/configs/slider/slider';
import './MainHome.scss';


class MainHome extends Component {
    render() {
        const params = {
            spaceBetween: 0,
            centeredSlides: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false
            }
        };
        return (
            <div className="MainHome">
                <div className='MainHome__box'>
                    <Swiper {...params}>
                        {sliderImgs.map((item, i) =>
                            <img className='MainHome__box__item' key={i} src={item.img} alt='cosmo'/>
                        )}
                    </Swiper>
                </div>
            </div>
        )
    }
}

export default MainHome;