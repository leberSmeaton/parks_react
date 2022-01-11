import React from 'react';
import {Link} from 'react-router-dom';
// import Park from './Park';
// import { useGlobalState } from '../utils/stateContext';

export const ListPreview = (props) => {
  const {park} = props;
  // const {store} = useGlobalState();
  // const { loading, parks } = store; 
  console.log(park)

  return (
    <>
      <Link to={`/parks/${park.id}`}><h4>{park.park_name}</h4></Link>
      <h4>name: {park.park_name} || All Nations</h4>
      <p>address: {park.address_id} || Separation St, Northcote VIC 3070</p>
      <p>feature: {park.feature_id} || picnic, food nearby, nature, skatepark, playground</p>
      <p>⭐️  ⭐️  ⭐️  ⭐️ </p>
    </>
  )
}