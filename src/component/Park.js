import React, {useEffect} from 'react'
import { useParams } from 'react-router';
// import React, {useReducer} from 'react'
// import reducer from './utils/reducer';
// import parks from '../data/parks';
import { getPark } from './services/parkServices';
import { useGlobalState } from '../utils/stateContext';


export default function Park() {
  const {store, dispatch} = useGlobalState();
  const { loading, parks, parkPosts } = store;
  const {id} = useParams();
  console.log("hi id:" + id);

  // function ParkList() {
  //   const listItems = parks.map((park) =>
  //     <li key={park.id}>
  //       {park.park_name} | 
  //       {park.park_icon} | 
  //       {park.address_id} | 
  //       {park.feature_id}
  //     </li>
  //   );
  //   return (
  //     <ul>{listItems}</ul>
  //   );
  // }

  // function ParkCommentList() {
  //   const listPosts = parkPosts.map((post) =>
  //     <li key={post.id}>
  //       {post.user_id} | 
  //       {post.park_id} | 
  //       {post.park_comment}
  //     </li>
  //   );
  //   return (
  //     <ul>{listPosts}</ul>
  //   );
  // }

  useEffect(() => {
    getPark(id)
      .then(parks => {
        dispatch({
          type: 'setParks',
          data: parks
        })
      })
      .catch(error => console.log(error))
      .finally(() => 
        dispatch({
          type: 'setLoading',
          data: false
        })
      )
  }, [])

  if(!parks) {
    return (
      <p>Oops, couldn't find your park.</p>
    )
  }

  return (
    <>
      --
      {/* <ParkList parks={parks} /> */}
      {/* <ParkList /> */}
      --
      {/* <ParkCommentList post={parkPosts} /> */}
      {/* <ParkCommentList  /> */}
      ---
      <ul>
        <li>
          <p>icon: {parks[0].park_icon} || 🌴</p>
          <h4>name: {parks[0].park_name} || All Nations Park</h4>
          <p>address: {parks[0].address_id} || Separation St, Northcote VIC 3070</p>
          <p>feature: {parks[0].feature_id} || picnic, food nearby, nature, skatepark, playground</p>
          <p>⭐️  ⭐️  ⭐️  ⭐️ </p>
        </li>
        <li>
          <p>park comment: {parkPosts[0].park_comment}</p>
        </li>
      </ul>
    </>
  )
}
