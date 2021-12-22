import React, {useState} from 'react';
// import { useNavigate } from 'react-router';
import { useGlobalState } from '../utils/stateContext';
import { createNewParkPost } from '../services/parkPostServices';

export default function ParkMakeComment() {
  
  const {store, dispatch} = useGlobalState();
  const {posts} = store;

  const initialState = {
    park_comment: "",
    park_image: ""
  }
  
  const [postFormState, setPostFormState] = useState(initialState);

  function addNewParkPost(parkPostObject) {
    createNewParkPost(parkPostObject)
      .then(newParkPost => {
        console.log(newParkPost);
        dispatch({
          type: "setParkPosts",
          data: [...posts, newParkPost]
        })
      })
      .catch(error => console.log(error))
  }

  function handleChange(event) {
    setPostFormState({
      ...postFormState,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    addNewParkPost(postFormState);
  }

  return (
    <>
      <form id="addParkPost" onSubmit={handleSubmit}>
          <label>Add Park Comment: <br />
            <textarea
              id="park_comment"
              from="addParkPost"
              type="text"
              name="park_comment"
              placeholder="Enter park comment"
              value={postFormState.park_comment}
              onChange={handleChange}
            ></textarea>
          </label>
        <br />
          <label>Upload images: <br />
            <input 
              id="park_image"
              type="file" 
              from="addParkPost"
              name="park_image" 
              placeholder="Click to upload file"
              value={postFormState.park_image}
              onChange={handleChange}
            />
          </label>
        <br />
          <button type="submit" className="primary">Add Park Comment</button>
      </form>
    </>
  )
}
