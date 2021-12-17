import React from 'react';
// import { useGlobalState } from '../utils/stateContext';

export default function ParkMakeComment() {
  /* USE STATE...... ???

  const initialState = {
    park_comment: "",
    park_image: ""
  }

  const {addNewParkPost} = props
  const [parkPostState, setParkPostState] = useState(initialState);

  function handleChange(event){
    setParkPostState({
      ...parkPostState,
      [event.target.name]: event.target.value
    })
  }
  
  function handleSubmit(event) {
    event.preventDefault()
    console.log(parkPostState); // check that it submits
  }
  */

  /* GLOBAL STATE ?
  const { store } = useGlobalState();
  console.log('store', store);
  const { post } = store;

  // Adding a park post comment
  function addParkPost(post) {
    dispatch({
      type: 'addParkPosts',
      data: post
    })
  } 
  */

  return (
    <>
      {/* <form id="addParkPost" onSubmit={handleSubmit}> */}
      <form>
        <block>
          <label>Comment:</label>
          <textarea
            id="park_comment"
            from="addParkPost"
            type="text"
            name="park_comment"
            placeholder="Enter park comment"
            // value={parkPostState.park_comment}
            // onChange={handleChange}
          ></textarea>
        </block>
        <br />
        <block>
          <label>Upload images:</label>
          <input 
            type="file" 
            name="park_image" 
            // value={parkPostState.park_image}
            // onChange={handleChange}
          />
        </block>
        <br />
        <block>
          <button type="submit" value="Add Comment" className="primary" />
        </block>
      </form>
    </>
  )
}
