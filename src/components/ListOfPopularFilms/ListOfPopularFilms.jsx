import ItemOfPopularFilms from 'components/ItemOfPopularFilms/ItemOfPopularFilms';
import React from 'react';

const ListOfPopularFilms = ({ popularFilms, popular }) => {
  const popularFilmsArr = popularFilms?.map(el => (
    <ItemOfPopularFilms
      popular={popular}
      title={el.title}
      key={el.id}
      id={el.id}
    />
  ));
  return <ul>{popularFilmsArr}</ul>;
};

export default ListOfPopularFilms;
