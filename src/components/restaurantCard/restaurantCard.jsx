import React from 'react';
import image from './drink.png';
import * as S from './styled';

const RestaurantCard = ({history, restaurant}) => {

  const {id} = restaurant;
  const {name} = restaurant.attributes;
  const handleClick = () => {
    history.push(`/restaurant/${id}`);
  }
  return (
    <S.Wrapper onClick={handleClick}>
      <div style={{width: '105px'}}>
        <S.Image src={image} />
      </div>
      <S.Details>
        <h2>{name}</h2>
        <p>Fresh for your enjoyment</p>
        <h5 style={{textAlign: 'right'}}>Learn More</h5>
      </S.Details>
    </S.Wrapper>

  )
}

export default RestaurantCard;
