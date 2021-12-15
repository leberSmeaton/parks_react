import React from 'react'

export default function ParkMakeComment() {
  /* Adding a park post comment
  function addParkPost(post) {
    dispatch({
      type: 'addParkPosts',
      data: post
    })
  } */
  
  return (
    <>
      {/* <form onSubmit={handleSubmit}> */}
      <form>
        <label>Comment:
          <textarea>Write Comment Here...</textarea>
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
