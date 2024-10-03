import React from "react";

import bannerImg from '../../images/banner/banner.jpg';

const Banner = () => {
    return ( 
        <div className="container">
            <div className="banner">
                <img src={bannerImg} alt="" />
                <div className="banner-content">
                    <div className="banner-content-text">
                        <h1>СОЦИАЛЬНАЯ ИНТЕРАКТИВНАЯ ПЛАТФОРМА</h1>
                        <p>Соединяем гостей и места</p>
                        <p>Общение, бронирование здесь и сейчас</p>
                    </div>
                    <div className="banner-content-btn">
                        <button className="search-btn">Показать</button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Banner;