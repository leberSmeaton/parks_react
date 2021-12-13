import React from 'react';
import CheeseWine from './CheeseWine';
import Park from './Park';
import ParkComment from './ParkComment';

export const ParkItem = (props) => {
  const {post} = props
  return (
    <>
      <div>
        <ul>
          <li>
            <Park />
            <CheeseWine />
            <ParkComment post={post} />
          </li>
        </ul>
      </div> 
    </>
  )
}
