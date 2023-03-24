import React from "react";
import {useState} from 'react';

const ReviewForm = (props) => {
    const [review, setReview] = useState(''); //useState = hook
    const [allReviews, setAllReviews] = useState([]) //move to movieList
    //function to handle event change
    const handleChange = (e) => {
        setReview(e.target.value)
    }
    const handleEvent = () => {
        // console.log('test')
        setAllReviews([...allReviews, review]) //spread operator holds all reviews
    }
    return (
        console.log(allReviews),
        <>
        <input type="text" className="mt-3" onChange={handleChange} value={review}></input>
        <button className="btn btn-warning m-5" onClick={handleEvent}>Leave Review!</button>
        {allReviews.map}
        </>
        //wrap a map method in {} allReviews.map(reviewOne, index) ^ below button
        // {comments.map((comment, index) => (
        //     <li key={index}>
        //         {comment}
        //         <button data-index={index} onClick={deleteComment}>
        //         Delete
        //         </button>
        //     </li>
    )
}



export default ReviewForm;