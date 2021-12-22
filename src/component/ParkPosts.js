import React from 'react'
import { useGlobalState } from '../utils/stateContext'
import { ListPreview } from './ListPreview';

export default function ParkPosts() {
  const loading = false
  const {store} = useGlobalState();
  const {parkPosts} = store;


  // function sortAZ() {
  //   return parkPosts.sort((a, b) => a.park_name.localeCompare(b.park_name))
  //   return parkPosts.sort(a.park_name.localeCompare(b.park_name))
  // } 
    

  return (
    <>
      <h2>All the parks</h2>
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
    </>
  )
}