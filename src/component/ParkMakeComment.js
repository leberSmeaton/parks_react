import React from 'react';
// import { useGlobalState } from '../utils/stateContext';

export default function ParkMakeComment() {

  return (
    <>
      {/* <form id="addParkPost" onSubmit={handleSubmit}> */}
      <form>
          <label>Add Park Comment:
            <textarea
              id="park_comment"
              from="addParkPost"
              type="text"
              name="park_comment"
              placeholder="Enter park comment"
              // value={parkPostState.park_comment}
              // onChange={handleChange}
            ></textarea>
          </label>
        <br />
          <label>Upload images:
            <input 
              type="file" 
              name="park_image" 
              // value={parkPostState.park_image}
              // onChange={handleChange}
            />
          </label>
        <br />
          <button type="submit" value="Add Comment" className="primary" />
      </form>
    </>
  )
}
