import React from 'react';
import { StyledLink } from './ItemOfPopularFilms.styled';

const ItemOfPopularFilms = ({ title, id, location }) => {
  return (
    <li>
      <StyledLink to={`/movies/${id}`} state={{ from: location }}>
        {title}
      </StyledLink>
    </li>
  );
};

export default ItemOfPopularFilms;
