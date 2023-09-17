import React from 'react';
import { Link } from 'react-router-dom';

const ItemOfPopularFilms = ({ popular, title, id }) => {
  return (
    <li>
      {popular ? (
        <Link to={`movies/${id}`}>{title}</Link>
      ) : (
        <Link to={`${id}`}>{title}</Link>
      )}
    </li>
  );
};

export default ItemOfPopularFilms;
