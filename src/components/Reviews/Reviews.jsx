import { fetchReviews } from 'components/api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const movieId = useParams();
  useEffect(() => {
    const getApiInfo = async () => {
      try {
        const reviews = await fetchReviews(movieId);
        setReviews(reviews);
      } catch (error) {
        console.log(error);
      }
    };
    getApiInfo();
  }, [movieId]);

  const reviewsArr = reviews?.results?.map(el => (
    <li key={el.id}>
      <h4>{el.author}</h4>
      <p>{el.content}</p>
    </li>
  ));
  return (
    <>
      {reviews?.results.length > 0 ? <ul>{reviewsArr}</ul> : <p>No reviews</p>}
    </>
  );
};

export default Reviews;
