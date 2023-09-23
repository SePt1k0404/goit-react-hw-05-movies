import ItemOfPopularFilms from 'components/ItemOfPopularFilms/ItemOfPopularFilms';
import React from 'react';
import { ListOfFilms } from './ListOfPopularFilms.styled';
import { useLocation } from 'react-router-dom';

const ListOfPopularFilms = ({ popularFilms, popular }) => {
  const location = useLocation();
  const popularFilmsArr = popularFilms?.map(el => (
    <ItemOfPopularFilms
      location={location}
      popular={popular}
      title={el.title}
      key={el.id}
      id={el.id}
    />
  ));
  return <ListOfFilms>{popularFilmsArr}</ListOfFilms>;
};

export default ListOfPopularFilms;
