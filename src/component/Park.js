import React from 'react'
// import React, {useReducer} from 'react'
// import reducer from './utils/reducer';
// import parks from '../data/parks';
import { useGlobalState } from '../utils/stateContext';


export default function Park() {
  
  const {store} = useGlobalState();
  const {parks} = store;
  console.log(parks);

  return (
    <>
      <ul>
        <li>
          <p>🌴</p>
          {/* <p>icon: {parks.park_icon}</p> */}
          <h4>All Nations Park</h4>
          <p>name: {parks.park_name}</p>
          <p>Separation St, Northcote VIC 3070</p>
          {/* <p>address: {parks.address_id}</p> */}
          <p>picnic, food nearby, nature, skatepark, playground</p>
          {/* <p>feature: {parks.feature_id}</p> */}
          <p>⭐️  ⭐️  ⭐️  ⭐️ </p>
        </li>
      </ul>
    </>
  )
}
