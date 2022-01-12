// import React, {useEffect, useState} from 'react';
// // import React, {useEffect} from 'react';
// import { useParams } from 'react-router';
// import Moment from 'react-moment';
// // import {useGlobalState} from '../utils/stateContext'
// import { getPosts } from '../services/parkPostServices';

// export default function ParkComments() {
//   // const { store } = useGlobalState();
//   // const { store, dispatch } = useGlobalState();
//   // const { posts, loading } = store;
//   const [post, setPost] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const {id} = useParams();

//   useEffect(() => {
//     getPosts(id)
//       .then(post => setPost(post))
//       .catch(error => {
//         console.log(error.response)
//       })
//       .finally(() => setLoading(false))
//   }, [id])


//   if(!post) {
//     return loading ? (<p>Loading...</p>): (<p>Oops, couldn't find any posts for this park</p>) 
//   }

//   return (
//     <>
//       <h4>user_id: {post.user_id} || park_id: {post.park_id}</h4>
//       <Moment fromNow>{post.updated_at}</Moment> - <Moment format="DD/MM/YYYY">{post.updated_at}</Moment>
//       <p>park_comment: {post.comment}</p>
//     </>
//   )
// }

import React from "react";
import Moment from 'react-moment';


export const ParkComment = (props) => {
  const {comment} = props;

  return(
    <>
      <br></br>
      <h3>User: {comment.user_id}</h3>
      <Moment fromNow>{comment.updated_at}</Moment> - <Moment format="DD/MM/YYYY">{comment.updated_at}</Moment>
      <p>Comment: {comment.comment}</p>
      <hr></hr>
    </>
  )
}