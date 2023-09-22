import React from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderWrapper, StyledNavLink } from './Header.styled';

const Header = () => {
  return (
    <HeaderWrapper>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/movies">Movies</StyledNavLink>
    </HeaderWrapper>
  );
};

export default Header;
