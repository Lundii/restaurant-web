import styled from 'styled-components';

export const Body = styled.div`
  display: grid;
  grid-template-columns: 20% 60% 20%;
  margin-top: 59px;
`

export const RightImage = styled.div`
   height: 100vh;
  justify-self: flex-end;
  position: fixed;
  right: 0;
  z-index: -1;
}
`

export const Caption = styled.h1`
  text-align: center; 
  padding: 16px;
  background-color: #008000a8;
  border-radius: 4px;
  color: white;
`

export const Restaurants = styled.div`
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    
  // @media screen and (max-width: 480px) {
  //   display: grid;
  //   grid-template-columns: 1fr 1fr;
  `