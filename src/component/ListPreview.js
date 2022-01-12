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
      <Link to={`/parks/${park.id}`}><h4 style={{fontWeight: "bold"}}>{park.name}</h4></Link>
      {/* <h4>name: {park.name} || All Nations</h4> */}
      <p>addresssss: {park.address.number ? park.address.number : null} {park.address.street}, {park.address.suburb}, {park.address.postcode}</p>
      <p>category: {park.category.name}</p>
      <p>coords: {park.latitude}, {park.longitude}</p>
      <p>feature: {park.feature.name}</p>
      <hr/>
    </>
  )
}