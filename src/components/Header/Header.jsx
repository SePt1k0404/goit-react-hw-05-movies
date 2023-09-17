import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div style={{ display: 'flex', gap: '20px', padding: '10px' }}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
    </div>
  );
};

export default Header;
