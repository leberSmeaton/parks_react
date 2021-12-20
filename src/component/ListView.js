import React from 'react';
// import { ParkItem } from './ParkItem';
import Park from './Park';
// import ParkComment from './ParkComment';
import { useGlobalState } from '../utils/stateContext';

export const ListView = () => {

  const {store} = useGlobalState();
  const { loading, parks } = store; 

  return (
    <>
      <h2>All the parks</h2>
      {
      loading
      ?
      (<p>Loading</p>)
      :
      (<div>
        {/* {parks.map(park => (<Park key={parks.id} key={parkPosts.id} park={park} />))} */}
        {parks.map(park => (<Park key={parks.id} park={park} />))}
        {/* <ParkComment key={parkPosts.id} /> */}
      </div>)
      }
    </>
  )
}