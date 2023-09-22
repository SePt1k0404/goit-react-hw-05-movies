import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px;
  background-color: #e3e3e3;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #767d36;
`;
