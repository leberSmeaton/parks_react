import React from 'react'
import Moment from 'react-moment';
import ParkMakeComment from './ParkMakeComment';
import {useGlobalState} from '../utils/stateContext'

export default function ParkComment() {
  // const { post } = props;

  const { store } = useGlobalState();
  console.log('store', store);
  const { post } = store;

  return (
    <>
      <ul>
        <li>
          <h4>{post.user_id} - username || {post.park_id} - park_name</h4>
          <Moment fromNow>{post.updated_at}</Moment> - <Moment format="DD/MM/YYYY">{post.updated_at}</Moment>
          <h4>{post.comment}</h4>
        </li>
      </ul>
      <ParkMakeComment />
    </>
  )
}
