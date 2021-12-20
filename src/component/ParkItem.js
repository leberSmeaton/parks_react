import React from 'react';
import CheeseWine from './CheeseWine';
import Park from './Park';
import ParkComment from './ParkComment';

export const ParkItem = () => {

  return (
    <>
      <div>
        <ul>
          <li>
            <Park />
            <CheeseWine />
            {/* {if <ParkComment /> id exists? ? <parkComment /> : nil} */}
            <ParkComment />
          </li>
        </ul>
      </div> 
    </>
  )
}
