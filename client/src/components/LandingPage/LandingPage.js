import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading.js';
import * as S from './LandingPage.styled.js';

export default function LandingPage(){
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => { setLoading(false) }, 4000)
  }, [])

  if (loading) return <Loading/>
  else return (
    <S.LandingPage> 
      <S.Button onClick={ ()=> navigate('/') }> LET'S COOK! </S.Button> 
    </S.LandingPage>
  )
}
