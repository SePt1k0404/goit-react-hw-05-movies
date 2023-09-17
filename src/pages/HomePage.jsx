import React from 'react';
import { useState, useEffect } from 'react';
import { fetchDayPopularFilm } from 'components/api';
import ListOfPopularFilms from 'components/ListOfPopularFilms/ListOfPopularFilms';

const HomePage = () => {
  const [popularFilms, setPopularFilms] = useState([]);

  useEffect(() => {
    const getApiInfo = async () => {
      try {
        const images = await fetchDayPopularFilm();
        setPopularFilms(images.results);
      } catch (error) {
        console.log(error);
      }
    };
    getApiInfo();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ListOfPopularFilms popularFilms={popularFilms} />
    </>
  );
};

export default HomePage;
