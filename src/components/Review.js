import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "../components/styles/Review.css";
function Review() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setcomment] = useState("")
  const [allComent, setallComent] = useState([])

  const submit=()=>{
    let newComment = {rating, comment}
    setallComent([...allComent, newComment])
    console.log(allComent)


  }

  return (
    <div>
      <div className="container">
        <h2 className="dispaly-2">Leave your Review</h2>

        {allComent.map((eachComment,i)=>(
           {eachComment}
        ))}

        <TextField
          label="Enter your Comment"
          color="secondary"
          focused
          className="w-100" 
          onChange={(e)=>setcomment(e.target.value)}
        />

        <div className="star-rating">
          {[...Array(5)].map((star, index) => {
            index += 1;
            return (
              <button
                type="button"
                key={index}
                className={index <= (hover || rating) ? "on" : "off"}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
              >
                <span className="star">&#9733;</span>
              </button>
            );
          })}
        </div>

        <button className="submitBtn" onClick={submit}>Submit</button>
      </div>
    </div>
  );
}

export default Review;
