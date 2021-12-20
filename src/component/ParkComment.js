import React from 'react'
import Moment from 'react-moment';
import ParkMakeComment from './ParkMakeComment';
import {useGlobalState} from '../utils/stateContext'
import { getParkPost } from '../services/parkPostServices';

export default function ParkComment() {

  const { store } = useGlobalState();
  // console.log('store', store);
  const { parkPosts } = store;

  function ParkCommentList(parkPosts) {
    
    const content = parkPosts.posts.map((post) =>
      <div key={post.id}>
        <h4>username: {post.user_id} || park_name: {post.park_id}</h4>
        <Moment fromNow>{post.updated_at}</Moment> - <Moment format="DD/MM/YYYY">{post.updated_at}</Moment>
        <p>{post.park_comment}</p>
        <hr />
      </div>
    );
    return (
      <div>
        {content}
      </div>
    );
  }

  return (
    <>
      <ParkCommentList posts={parkPosts} />
      <ParkMakeComment />
    </>
  )
}
