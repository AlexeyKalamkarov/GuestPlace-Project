import React from 'react';
import {CardsMean} from '../../helpers/cardshelp.jsx';

const Cards = () => {
    const CardsItem = CardsMean.map(cardCategory =>
        <div className="cardCategory" key={cardCategory.id}>
            <div className="cardCategory-text" >
                <p>{cardCategory.title}</p>
            </div>
            <div className="cardCategory-img">
                <img src={cardCategory.img} />
            </div>
        </div>
)
    return ( 
        <>
        <div className="container">
            <div className="cardsCategory-title">
                <h2>МЕСТА ПО КАТЕГОРИЯМ</h2>
            </div>
            <div className="cardsCategory">
                <div className="cardsCategory-content">
                    {CardsItem}
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Cards;