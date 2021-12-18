import React from 'react'
import Moment from 'react-moment';
import ParkMakeComment from './ParkMakeComment';
import {useGlobalState} from '../utils/stateContext'
import { getParkPost } from '../services/parkPostServices';

export default function ParkComment() {

  const { store } = useGlobalState();
  console.log('store', store);
  const { parkPosts } = store;

  return (
    <>
      <ul>
        {/* <li>
          {parkPosts.map((parkPost, index) => {
            return (

              // <h4>user_id: {parkPost.user_id} || park_id: {parkPost.park_id}</h4>
              // <h4>updated_at: <Moment fromNow>{parkPost.updated_at}</Moment></h4>
              // <h4>park_comment: {parkPost.park_comment}</h4>
            )
          })}
        </li> */}
        <li>
          ----------------
          <h4>{parkPosts.user_id} - username || {parkPosts.park_id} - park_name</h4>
          <Moment fromNow>{parkPosts.updated_at}</Moment> - <Moment format="DD/MM/YYYY">{parkPosts.updated_at}</Moment>
          <h4>{parkPosts.comment}</h4>
          ----------------
        </li>
      </ul>
      <ParkMakeComment />
    </>
  )
}
