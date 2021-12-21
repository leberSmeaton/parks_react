import React, {useEffect, useState} from 'react';
// import { useParams } from 'react-router';
import Moment from 'react-moment';
import {useGlobalState} from '../utils/stateContext'
import { getPosts } from '../services/parkPostServices';

export default function ParkComment() {
  const { store, dispatch } = useGlobalState();
  const { posts } = store;
  // const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts()
      .then(posts => {
        console.log(posts)
        dispatch({
          type: 'setPost',
          data: posts
        })
      })
      .catch(err => console.log(err))
      .finally(() => 
        dispatch({
          type: 'setLoading',
          data: false
        })  
      )
  }, [posts])

  if(!posts) {
    return loading ? (<p>Loading...</p>): (<p>Oops, couldn't find your posts.</p>) 
  }

  return (
    <>
      <h4>user_id: {posts.user_id} || park_id: {posts.park_id}</h4>
      <Moment fromNow>{posts.updated_at}</Moment> - <Moment format="DD/MM/YYYY">{posts.updated_at}</Moment>
      <p>park_comment: {posts.park_comment}</p>
    </>
  )
}
