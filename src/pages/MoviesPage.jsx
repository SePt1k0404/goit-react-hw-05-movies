import { fetchSearchMovie } from 'components/api';
import ListOfPopularFilms from 'components/ListOfPopularFilms/ListOfPopularFilms';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [searchMovie, setSearchMovie] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

  useEffect(() => {
    const getApiInfo = async () => {
      try {
        if (searchQuery) {
          setQuery(searchQuery);
        }
        const searchMovieApi = await fetchSearchMovie(query);
        setSearchMovie(searchMovieApi);
      } catch (error) {
        console.log(error);
      }
    };
    getApiInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const handleSubmit = evt => {
    evt.preventDefault();
    setQuery(evt.target.elements.search.value);
  };

  const handleChange = evt => {
    setSearchParams({ query: evt.target.value });
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" name="search" />
        <button type="submit">Search</button>
      </form>
      {searchMovie?.results.length > 0 ? (
        <ListOfPopularFilms
          popular={false}
          popularFilms={searchMovie?.results}
        />
      ) : (
        <p>No results</p>
      )}
    </>
  );
};

export default MoviesPage;
