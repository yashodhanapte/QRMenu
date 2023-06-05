import React from 'react';
import './VegNonVegMarker.css';
import { VegNonVegProps } from '../../helpers/interfaces';


const VegNonVegMarker = ({ isVeg = true }: VegNonVegProps) => {

    const vegetarian = (
        <div className="veg-container">
            <div className="veg-circle"></div>
        </div>
    )
    const nonvegetarian = (
        <div className="nonveg-container">
            <div className="nonveg-circle"></div>
        </div>
    )
    return (
        isVeg ? vegetarian : nonvegetarian
    )
}
export default VegNonVegMarker;