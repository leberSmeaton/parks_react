import React from 'react'
import { useGlobalState } from '../config/store';
import { ListPreview } from './ListPreview';

const ParkPosts = (props) => {
  const loading = false
  const {store} = useGlobalState();
  const {parkPosts} = store;


  // function sortAZ() {
  //   return parkPosts.sort((a, b) => a.park_name.localeCompare(b.park_name))
  //   return parkPosts.sort(a.park_name.localeCompare(b.park_name))
  // } 
    

  return (
    <>
      <div>
          <br></br>
        <h1>All the parks</h1>
        <br></br>
        <hr></hr>
        {/* This button isn't used atm */}
        {/* <button onClick={sortAZ}>Sort A-Z</button> */}
        {
        loading
        ?
        (<p>Loading</p>)
        :
        (<div>
          {parkPosts
            // .sort((a, b) => a.park_name.localeCompare(b.park_name))
            .map(park => (<ListPreview key={park.id} park={park} />))
          }
        </div>)
      }
      </div>
    </>
  )
}

export default ParkPosts;