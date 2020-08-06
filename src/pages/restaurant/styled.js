import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 15% 70% 15%;
`

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const Details = styled.div`
  margin: 48px 0;

  p{
    font-weigth: 500;
  }
  .close {
    color: red;
  }
`