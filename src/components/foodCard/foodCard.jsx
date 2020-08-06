import React from 'react';
import image from './food.jpg'
import * as S from './styled';

const FoodCard = () => {
  return (
    <S.Wrapper>
      <S.Image src={image} />
      <S.Name>Burger</S.Name>
      <S.Price>$200.00</S.Price>
    </S.Wrapper>
  )
}

export default FoodCard;
