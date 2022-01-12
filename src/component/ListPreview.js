import React from 'react';
import {Link} from 'react-router-dom';
// import Park from './Park';
// import { useGlobalState } from '../utils/stateContext';

export const ListPreview = (props) => {
  const {park} = props;
  // const {store} = useGlobalState();
  // const { loading, parks } = store; 
  // console.log(park)

  return (
    <>
      <Link to={`/parks/${park.park_id}`}><h4 style={{fontWeight: "bold"}}>{park.name}</h4></Link>
      {/* <h4>name: {park.name} || All Nations</h4> */}
      <p>address: {park.address_id}</p>
      <p>category: {park.category.name}</p>
      <p>feature: {park.feature.name}</p>
      <hr/>
    </>
  )
}