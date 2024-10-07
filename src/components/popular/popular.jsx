import React from 'react';
import Star from '../../images/popular/Star.svg';
import Map from '../../images/popular/map.svg';
import {PopularMean} from '../../helpers/popularhelpers';
const Popular = () => {
    const PopularItem = PopularMean.map(cardPopular =>
        <div className="popular-card" key={cardPopular.id}>
        <div className="popular-card-img">
            <img src={cardPopular.img} alt="" />
        </div>
        <div className="popular-card-text">
            <p>{cardPopular.title}</p>
        </div>
        <div className="popular-card-star">
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
        </div>
        <div className="popular-card-place">
            <div className="map-icon">
                <img src={Map} alt="" />
            </div>
            <div className="map-text">
                <p>{cardPopular.place}</p>
                <p>{cardPopular.time}</p>
            </div>
        </div>
        <div className="">
            <p>35/100/150</p>
        </div>
    </div>


    )
    return ( 
        <section>
            <div className="container">
                <h2>САМЫЕ ПОПУЛЯРНЫЕ</h2>
                <div className="cards-popular" >
                    {PopularItem}
                </div>
        </div>
        </section>

     )
    
}
 
export default Popular;