import styled from 'styled-components';

export const Body = styled.div`
  display: grid;
  grid-template-columns: 15% auto 15%;
  margin-top: 59px;

`

export const RightImage = styled.div`
 height: 100vh;
  justify-self: flex-end;
  position: fixed;
  right: 0;

  @media screen and (max-width: 760px) {
    display: none
  ;
}
`

export const Restaurants = styled.div`
    margin: 0 auto;
    width: 740px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr
  ;
  `