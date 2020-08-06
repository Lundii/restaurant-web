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

  useEffect(() => {
    if(!restaurant){
      setIsLoading(true);
      fetch(`/restaurants/${id}`)
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
        <div style={{margin: '48px 0'}}>
          <h1>{name}</h1>
          <p>Opens: {hours.open}</p>
          <p>Closes:  {hours.close}</p>
        </div>
        <S.CardContainer>
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
        </S.CardContainer>
      </div>
      <div></div>
    </S.Wrapper>
  )
}

export default Restaurant;
