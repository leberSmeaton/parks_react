import React from 'react';
import { ParkItem } from './ParkItem';
import { useGlobalState } from '../utils/stateContext';

export const ListView = () => {
  
  // const {loading, posts} = props

  const {store} = useGlobalState();
  // console.log('store', store);
  const { loading, parkPosts } = store;

  return (
    <>
      <h2>All the parks</h2>
      {
      loading
      ?
      (<p>Loading</p>)
      :
      (<div>
        {/* should be alphabetically */}
        {/* {posts.sort((a , b) => b.updated_at - a.updated_at).map(post => (<ParkItem key={posts.id} post={post} />))} */}
        {parkPosts.sort((a , b) => b.updated_at - a.updated_at).map(post => (<ParkItem key={parkPosts.id} post={post} />))}
      </div>)
      }
    </>
  )
}
