import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Wrapper = styled.div`
  height: 56px;
  width: 100%;
  position: fixed;
  display: flex;
  top: 0;
  background-color: white;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
`

export const Logo = styled(Link)`
  font-weight: 600;
  text-align: left;
  padding-left: 40px;
  margin: 0;
  align-self: center;
  text-decoration: none;
  color: black;
  font-size: 24px;
`