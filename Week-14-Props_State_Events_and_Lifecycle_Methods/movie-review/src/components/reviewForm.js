import React from "react";
import {useState} from 'react';


const ReviewForm = (props) => {
    const [review, setReview] = useState(''); //useState = hook
    const [allReviews, setAllReviews] = useState([]) //move to movieList
    // setReview(review.filter(review => review.value !== valueToDelete))
    //function to handle event change
    const handleChange = (e) => {
        setReview(e.target.value)
    }
    const handleEvent = () => {
        // console.log('test')
        setAllReviews([...allReviews, review]) //spread operator holds all reviews
    }
    const handleDelete = (d) => {
        console.log('delete')
        setReview(d.target.value)
    };
    return (
        console.log(allReviews),
        <>
        <input type="text" className="mt-3" onChange={handleChange} value={review}></input>
        <button className="btn btn-warning m-5" onClick={handleEvent}>Leave Review!</button>
        {allReviews.map((review, value) => (
            <li key={value}>
                {review}
                <button data-value={value} onClick={handleDelete} >
                    Delete
                </button>
            </li>
        ))}
        </>
        //wrap a map method in {} allReviews.map(reviewOne, index) ^ below button
        // {comments.map((comment, index) => (
        //     <li key={index}>
        //         {comment}
        //         <button data-index={index} onClick={deleteComment}>
        //         Delete
        //         </button>
        //     </li>
        // onClick={setReview}
    )
}




export default ReviewForm;