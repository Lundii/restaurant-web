import React from 'react';
import ReactLoading from 'react-loading';
import * as S from './styled';

const Loading = () => {
  return (
    <S.Wrapper>
      <ReactLoading type="spin" color="green" height="50%" width={'50%'} />
    </S.Wrapper>
  )
}

export default Loading;
