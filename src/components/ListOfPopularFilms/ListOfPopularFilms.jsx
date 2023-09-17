import ItemOfPopularFilms from 'components/ItemOfPopularFilms/ItemOfPopularFilms';
import React from 'react';

const ListOfPopularFilms = ({ popularFilms }) => {
  const popularFilmsArr = popularFilms?.map(el => (
    <ItemOfPopularFilms title={el.title} key={el.id} />
  ));
  return <ul>{popularFilmsArr}</ul>;
};

export default ListOfPopularFilms;
