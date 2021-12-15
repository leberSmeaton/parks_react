import React from 'react'
// import React, {useReducer} from 'react'
// import reducer from './utils/reducer';
// import parks from '../data/parks';

export default function Park(props) {
  // const [store, dispatch] = useReducer(reducer, initialState);
  const {parks} = store;

  return (
    <>
      <ul>
        <li>
          <p>🌴</p>
          <p>icon: {parks.park_icon}</p>
          <h4>All Nations Park</h4>
          <p>name: {parks.park_name}</p>
          <p>Separation St, Northcote VIC 3070</p>
          <p>address: {parks.address_id}</p>
          <p>picnic, food nearby, nature, skatepark, playground</p>
          <p>feature: {parks.feature_id}</p>
          <p>⭐️  ⭐️  ⭐️  ⭐️ </p>
        </li>
      </ul>
    </>
  )
}
