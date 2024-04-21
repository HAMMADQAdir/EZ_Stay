import React, { useState } from 'react';
import './ReviewPage.css'; // Import CSS file for styling
import { FaStar } from 'react-icons/fa'; // Import star icon from react-icons library
import  axios  from 'axios';
import { auth } from '../firebaseConfig/firebaseConfig';
const initialReviews = [
  { id: 1, author: 'John Doe', comment: 'Great product, highly recommend!', rating: 5 },
  { id: 2, author: 'Jane Smith', comment: 'Excellent service and fast delivery.', rating: 4 },
  { id: 3, author: 'Bob Johnson', comment: 'Very satisfied with my purchase.', rating: 5 }
];

const ReviewCard = ({ review }) => {
  return (
    <div className="review-card">
      <h3>{review.author}</h3>
      <div className="star-rating">
        {[...Array(review.rating)].map((star, index) => (
          <FaStar key={index} />
        ))}
      </div>
      <p>{review.comment}</p>
    </div>
  );
};

const ReviewPage = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rating, setRating] = useState(0);

  const handleWriteReview = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();

    const author = e.target.author.value;
    const comment = e.target.comment.value;
    const newReview = {
      id: Date.now(),
      author,
      comment,
      rating
    };
  
      setReviews([...reviews, newReview]);
      
      await axios.post('/rev',newReview).then(result=>console.log("   s ")).catch(err=>console.log("err"))
      setIsModalOpen(false);
      setRating(0); // Reset rating after submission
    
  
  };

  return (
    <div className="review-page">
      <h1>Customer Reviews</h1>
      <div className="review-list">
        {reviews.map(review => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
      <button className="write-review-button my-3 btn btn-sm btn-success" onClick={handleWriteReview}>Write a Review</button>
      {isModalOpen &&
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <form onSubmit={handleSubmitReview}>
              <label htmlFor="author">Your Name:</label>
              <input type="text" id="author" name="author" required />
              <label htmlFor="comment">Your Review:</label>
              <textarea id="comment" name="comment" rows="4" required></textarea>
              <div className="star-rating">
                {[...Array(5)].map((star, index) => {
                  const ratingValue = index + 1;
                  return (
                    <label key={index}>
                      <input
                        type="radio"
                        name="rating"
                        value={ratingValue}
                        onClick={() => handleStarClick(ratingValue)}
                      />
                      <FaStar
                        className="star"
                        color={ratingValue <= rating ? '#ffc107' : '#e4e5e9'}
                      />
                    </label>
                  );
                })}
              </div>
              <button type="submit" className="btn btn-sm btn-success">Submit Review</button>
            </form>
          </div>
        </div>
      }
    </div>
  );
};

export default ReviewPage;
