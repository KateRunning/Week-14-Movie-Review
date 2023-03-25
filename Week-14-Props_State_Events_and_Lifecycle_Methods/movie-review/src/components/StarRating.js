import React from "react";
import { FaStar } from "react-icons/fa";
import { useState } from 'react';
// import './src/App.css';

const StarRating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    return (
        
        <div>
            <h3 className="mt-3">Rate Me!</h3>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;

                return (
                <label>
                    <input type="radio" name="rating" key={i} value={ratingValue} 
                    onClick={() => setRating(ratingValue)}
                    />                   
                    <FaStar className="star mt-2" color={ratingValue <= (hover || rating) ? "#FBC107" : "#4D4B4B"} size={30}
                    onMouseEnter={() => setHover(ratingValue) } 
                    onMouseLeave={() => setHover(null)} />
                    
                    </label>
                    
                );
                
            })}
            
        </div>
    );
};


export default StarRating;