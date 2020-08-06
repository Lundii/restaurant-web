import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 196px;
  width: 226px;
  display: flex;
  flex-direction: column;
  margin: 16px 0 0 16px;
  background-color: white;
  cursor: pointer;
  box-shadow: 0px 1px 1px 0.5px rgba(0, 0, 0, 0.25);

  :hover {
    box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.25);
    height: 200px;
    width: 230px;
  }
`

export const Image = styled.img`
   width: 100%;
   height: 90px;
   background-color: blue;
`

export const Details = styled.div`
  padding: 0 16px;
  display: flex;
  flex-direction: column;

  h2{
    margin: 0;
    font-size: 16px;
    color: green;
  }
  p{
    margin: 8px 0;
    font-size: 12px;
  }
`

