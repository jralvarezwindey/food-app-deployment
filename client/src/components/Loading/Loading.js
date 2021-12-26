import React from 'react';
import * as S from './Loading.styled.js'

export default function Loading() {
  return (
    <S.Loading> 
      { [0,1,2,3,4].map(i => <S.Dot i={ i } key={ i }/>) }
    </S.Loading>
  )
}
