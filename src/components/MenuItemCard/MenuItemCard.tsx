import React from 'react';
import './MenuItemCard.css';
import VegNonVegMarker from '../VegNonVegMarker/VegNonVegMarker';
import { MenuItem } from '../../helpers/interfaces';

const MenuItemCard = ({
   name,
   description,
   price,
   isVeg,
   imageUrl
}: MenuItem) => {
    return (
        <div className="menuitemcard">
            <img className="menuitemcard-image" src={imageUrl}  alt="menu" />
                <div className="menuitemcard-body">
                    <div className="menuitemcard-body-upper">
                        <div className="menuitemcard-vegmarker"><VegNonVegMarker isVeg={isVeg}/></div>
                        <h5 className="menuitemcard-title">{name}</h5>
                        <p className="menuitemcard-text">{description}</p>
                    </div>
                    <div className="menuitemcard-body-lower">
                        <span className="menuitemcard-price">{price}</span>
                    </div>
                </div>
        </div>
    )
}
export default MenuItemCard;