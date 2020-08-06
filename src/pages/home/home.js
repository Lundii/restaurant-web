import React, {useState, useEffect, useMemo} from 'react';
import RestaurantCard from '../../components/restaurantCard';
import Loading from '../../components/loading';
import image from './food5.png';
import * as S from './styled';

const Home = ({history}) => {

  const [restaurants, setRestaurants] = useState();
  const [isLoading, setIsLoading] = useState();

  const getRestaurants = useMemo(() => {
    console.log(restaurants);
    return ((restaurants && restaurants.data) || []).map((restaurant, index) => {
      return(
        <RestaurantCard restaurant={restaurant} history={history} key={restaurant.id} />
      )
    })
  }, [restaurants])

  useEffect(() => {
    if(!restaurants){
      setIsLoading(true);
      fetch('https://weather-app-backend-123.herokuapp.com/restaurants')
        .then(response => response.json())
        .then(data => {
          setIsLoading(false);
          setRestaurants(data)
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
    <div>
    <S.Body>
      <div></div>
      <div style={{marginTop: '24px'}}>
        <S.Caption>Find the Best restaurants in your  locality</S.Caption>
        <S.Restaurants>
          {getRestaurants}
        </S.Restaurants>
      </div>
      <div>
        <S.RightImage>
          <img src={image} />
        </S.RightImage>
      </div>
    </S.Body>
    </div>
  )
}

export default Home;
