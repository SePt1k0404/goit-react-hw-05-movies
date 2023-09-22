import React from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { fetchMovie } from 'components/api';
import { useEffect, useState } from 'react';
import { StyledLink } from 'components/ItemOfPopularFilms/ItemOfPopularFilms.styled';
import {
  MovieInfoWrapper,
  MovieWrapper,
  MoviePageWrapper,
} from './MoviePage.styled';

const MoviePage = () => {
  const [movie, setMovie] = useState(null);
  const movieId = useParams();
  const location = useLocation();
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
  const pathEnding = location.pathname.slice(
    -location.pathname.split('').reverse().join('').indexOf('/')
  );
  const genres = movie?.genres?.map(el => <li key={el.id}>{el.name}</li>);
  return (
    <>
      {movie && (
        <MoviePageWrapper>
          {pathEnding === 'cast' || pathEnding === 'reviews' ? (
            <StyledLink to={location.state?.from?.state?.from ?? '/movies'}>
              Go back
            </StyledLink>
          ) : (
            <StyledLink to={location.state?.from ?? '/movies'}>
              Go back
            </StyledLink>
          )}
          <MovieWrapper>
            <img
              style={{ width: '200px', height: '315px' }}
              src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
              alt=""
            />
            <MovieInfoWrapper>
              <h2>{movie.title}</h2>
              <p>User score: {(Number(movie.vote_average) * 10).toFixed()}%</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres:</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>{genres}</ul>
            </MovieInfoWrapper>
          </MovieWrapper>
          <h3 style={{ marginBottom: '10px' }}>Additional information</h3>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              marginBottom: '15px',
            }}
          >
            <StyledLink to="cast" state={{ from: location }}>
              Cast
            </StyledLink>
            <StyledLink to="reviews" state={{ from: location }}>
              Reviews
            </StyledLink>
          </div>
        </MoviePageWrapper>
      )}
      <Outlet />
    </>
  );
};

export default MoviePage;
