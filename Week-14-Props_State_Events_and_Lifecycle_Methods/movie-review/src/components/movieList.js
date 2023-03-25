import React from 'react';
import ReviewForm from './ReviewForm';
import {useState} from 'react';
import StarRating from './StarRating';

const MovieList = (props) => {
//    const [allReviews, setAllReviews] = useState([])  
    //state hooks
    //function to handle user submit/review
    return (
        <>
        {props.movies.map((movie, index) => (
           <>
           <div className='fw-bold fs-3 mt-5 ms-5'>{movie.Title}</div>
           <div className='fs-3 ms-5'>{movie.Year}</div>
            <div className='image-container justify-content-start m-5'>
            <div className='fs-5 mb-5' id="Synopsis">{movie.Synopsis}</div>
                
                <img src={movie.Poster} alt='movie'/>
                
                <br></br>
                <StarRating />
                <ReviewForm />
                
            </div>
            </>
            
        ))}
        
        </>
    );
};

export default MovieList;