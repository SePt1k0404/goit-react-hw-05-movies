import React from 'react';
import { useState, useEffect } from 'react';
import { fetchDayPopularFilm } from 'components/api';
import ListOfPopularFilms from 'components/ListOfPopularFilms/ListOfPopularFilms';
import { useLocation } from 'react-router-dom';

const HomePage = () => {
  const [popularFilms, setPopularFilms] = useState([]);
  const location = useLocation();
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
      <ListOfPopularFilms
        popular={true}
        location={location}
        popularFilms={popularFilms}
      />
    </>
  );
};

export default HomePage;
