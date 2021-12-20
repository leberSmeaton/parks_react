import React from 'react'
import { useGlobalState } from '../utils/stateContext'
import { ListPreview } from './ListPreview';

export default function ParkPosts() {
  const loading = false
  const {store} = useGlobalState();
  const {parkPosts} = store;
  return (
    <>
      <h2>All the parks</h2>
      {
      loading
      ?
      (<p>Loading</p>)
      :
      (<div>
        {parkPosts.map(park => (<ListPreview key={park.id} park={park} />))}
      </div>)
      }
    </>
  )
}
