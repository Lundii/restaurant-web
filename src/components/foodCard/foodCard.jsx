import React from 'react';
import image1 from './images/food1.png';
import image2 from './images/food2.jpg';
import image3 from './images/food3.jpg';
import image4 from './images/food4.jpg';
import image5 from './images/food5.jpg';
import * as S from './styled';

const FoodCard = ({index}) => {
  const images = [image1, image2, image3, image4, image5];
  return (
    <S.Wrapper>
      <S.Image src={images[index % images.length]} />
      <S.Name>Burger</S.Name>
      <S.Price>$200.00</S.Price>
    </S.Wrapper>
  )
}

export default FoodCard;
