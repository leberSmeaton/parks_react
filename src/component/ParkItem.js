import React from 'react';
import CheeseWine from './CheeseWine';
import Park from './Park';
import ParkComment from './ParkComment';
// import { useGlobalState } from '../utils/stateContext';

export const ParkItem = () => {
  // const {post} = props

  // const { store } = useGlobalState();
  // console.log('store', store);
  // const { post } = store;

  return (
    <>
      <div>
        <ul>
          <li>
            <Park />
            <CheeseWine />
            <ParkComment />
          </li>
        </ul>
      </div> 
    </>
  )
}
