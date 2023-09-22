import ItemOfPopularFilms from 'components/ItemOfPopularFilms/ItemOfPopularFilms';
import React from 'react';
import { ListOfFilms } from './ListOfPopularFilms.styled';

const ListOfPopularFilms = ({ popularFilms, popular, location }) => {
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
