import React from 'react';
import { Link } from 'react-router-dom';

const ItemOfPopularFilms = ({ popular, title, id, location }) => {
  return (
    <li>
      {popular ? (
        <Link to={`movies/${id}`} state={{ from: location }}>
          {title}
        </Link>
      ) : (
        <Link to={`${id}`} state={{ from: location }}>
          {title}
        </Link>
      )}
    </li>
  );
};

export default ItemOfPopularFilms;
