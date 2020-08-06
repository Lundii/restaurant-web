import React, {useState, useEffect, useMemo} from 'react';
import FoodCard from '../../components/foodCard';
import Loading from '../../components/loading';
import {getHours} from '../../utils';
import * as S from './styled';

const Restaurant = ({match}) => {
  const {id} = match.params;
  const [restaurant, setRestaurant] = useState();
  const [isLoading, setIsLoading] = useState(false);
  
  const name = useMemo(() => {
    let restaurantName;
    if (restaurant){
      restaurantName = restaurant.attributes.name
    }
    return restaurantName;
  }, [restaurant])

  const hours = useMemo(() => {
    let operatingHours = {};
    if (restaurant){
      operatingHours = getHours(restaurant.attributes.hours)
    }
    return operatingHours;
  }, [restaurant])

  const foodcards = useMemo(() => {
    const cards = [];
    for(let i = 0; i < 20; i++){
      cards.push(
        <FoodCard key={i} index={i} />
      )
    }
    return cards;
  }, [])
  useEffect(() => {
    if(!restaurant){
      setIsLoading(true);
      fetch(`https://weather-app-backend-123.herokuapp.com/restaurants/${id}`)
        .then(response => response.json())
        .then(data => {
          setIsLoading(false);
          setRestaurant(data.data)
        })
        .catch(err => {
          setIsLoading(false);
        });
    }
  }, []);

  
  if (isLoading) {
    return (
      <Loading />
    )
  }
  return (
    <S.Wrapper>
      <div></div>
      <div>
        <S.Details>
          <h1>{name}</h1>
          <p>Opens: {hours.open}</p>
          <p className="close">Closes:  {hours.close}</p>
        </S.Details>
        <S.CardContainer>
          {foodcards}
        </S.CardContainer>
      </div>
      <div></div>
    </S.Wrapper>
  )
}

export default Restaurant;
