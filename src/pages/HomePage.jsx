import React from 'react';
import { useState, useEffect } from 'react';
import { fetchDayPopularFilm } from 'components/api';
import ListOfPopularFilms from 'components/ListOfPopularFilms/ListOfPopularFilms';
import { useLocation } from 'react-router-dom';
import { HomePageBody, HomePageTitle } from './HomePage.styled';

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
    <HomePageBody>
      <HomePageTitle>Trending today</HomePageTitle>
      <ListOfPopularFilms
        popular={true}
        location={location}
        popularFilms={popularFilms}
      />
    </HomePageBody>
  );
};

export default HomePage;
