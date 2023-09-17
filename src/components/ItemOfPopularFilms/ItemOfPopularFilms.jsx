import React from 'react';
import { Link } from 'react-router-dom';

const ItemOfPopularFilms = ({ title, id }) => {
  return (
    <li>
      <Link to={`movies/${id}`}>{title}</Link>
    </li>
  );
};

export default ItemOfPopularFilms;
