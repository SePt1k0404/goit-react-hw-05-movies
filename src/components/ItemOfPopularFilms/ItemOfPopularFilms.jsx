import React from 'react';
import { StyledLink } from './ItemOfPopularFilms.styled';

const ItemOfPopularFilms = ({ popular, title, id, location }) => {
  return (
    <li>
      {popular ? (
        <StyledLink to={`movies/${id}`} state={{ from: location }}>
          {title}
        </StyledLink>
      ) : (
        <StyledLink to={`${id}`} state={{ from: location }}>
          {title}
        </StyledLink>
      )}
    </li>
  );
};

export default ItemOfPopularFilms;
