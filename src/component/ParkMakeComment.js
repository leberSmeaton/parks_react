import React from 'react';
// import { useGlobalState } from '../utils/stateContext';

export default function ParkMakeComment() {
  
  // const { store } = useGlobalState();
  // console.log('store', store);
  // const { post } = store;
  
  // // Adding a park post comment
  // function addParkPost(post) {
  //   dispatch({
  //     type: 'addParkPosts',
  //     data: post
  //   })
  // } 
  
  return (
    <>
      {/* <form onSubmit={handleSubmit}> */}
      <form>
        <label>Comment:
          <input
            id="comment"
            // value={username}
            // onChange={(e) => setUsername(e.currentTarget.value)}
          />
        </label>
        <br />
        <label>Upload images:
          <input type="file"></input>
        </label>
        <br />
        <button type="submit" className="primary">
          Sign In
        </button>
      </form>
    </>
  )
}
