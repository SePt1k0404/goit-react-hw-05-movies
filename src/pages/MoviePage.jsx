import React from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { fetchMovie } from 'components/api';
import { useEffect, useState } from 'react';

const MoviePage = () => {
  const [movie, setMovie] = useState(null);
  const movieId = useParams();
  useEffect(() => {
    const getApiInfo = async () => {
      try {
        const movie = await fetchMovie(movieId);
        setMovie(movie);
      } catch (error) {
        console.log(error);
      }
    };
    getApiInfo();
  }, [movieId]);

  const genres = movie?.genres?.map(el => <li key={el.id}>{el.name}</li>);
  return (
    <>
      {movie && (
        <>
          <img
            style={{ width: '200px' }}
            src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
            alt=""
          />
          <h2>{movie.title}</h2>
          <p>User score: {(Number(movie.vote_average) * 10).toFixed()}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <ul>{genres}</ul>
          <h3>Additional information</h3>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              marginBottom: '15px',
            }}
          >
            <Link to="cast">Cast</Link>
            <Link to="reviews">Reviews</Link>
          </div>
        </>
      )}
      <Outlet />
    </>
  );
};

export default MoviePage;
