import React, {useState} from 'react';
import { useNavigate } from 'react-router';
import { parseError } from '../config/api';
import { createPark } from '../services/adminServices';
import { createParkCategory } from '../services/categoryServices';
import { createNewParkPost } from '../services/parkPostServices';
import {capitialize} from '../utils/stringUtils';
import { useGlobalState } from '../utils/stateContext'

export default function Admin() {

  const {store, dispatch} = useGlobalState();
  const {parkPosts, categories, features} = store;

  const initialValues = {
    name: "",
    feature_id: null,
    category_id: null,
    address_id: null,
    latitude: null,
    longitude: null,
    picture: null
  }

  const navigate = useNavigate();

  const [adminParkFormValues, setAdminParkFormValues] = useState(initialValues)
  const [errorMessage, setErrorMessage] = useState("")

  function handleChange(event) {
    setAdminParkFormValues({
      ...adminParkFormValues,
      [event.target.name]: event.target.value
    })
  }

  function addNewPark(parkObject) {
    setLoading(true)
    createNewParkPost(parkObject)
      .then(newPark => {
        console.log(newPark);
        dispatchEvent({
          type: "setParkPosts",
          data: [...parkPosts, newPark]
        })
        setLoading(false)
        navigate("/parks")
      })
      .catch(error => {
        const message = parseError(error);
        setErrorMessage(message);
      })
  }

  function handleSubmit(event){
    event.preventDefault();
    addNewPark(adminParkFormValues)
  }

  function handleSubmit(event) {
    event.preventDefault()
    createPark(adminParkFormValues)
      .then(response => {
        dispatchEvent({
          type: "createParkName",
          data: response.name
        })
        dispatchEvent({
          type: "createParkCategory",
          data: response.category_id
        })
        dispatchEvent({
          type: "createParkFeature",
          data: response.feature_id
        })
        dispatchEvent({
          type: "createParkAddress",
          data: response.address_id
        })
        dispatchEvent({
          type: "createParkLatitude",
          data: response.latitude
        })
        dispatchEvent({
          type: "createParkLongitude",
          data: response.longitude
        })
        dispatchEvent({
          type: "createParkPicture",
          data: response.picture
        })
        navigate("/parks")
      })
      .catch(error => {
        const message = parseError(error);
        setErrorMessage(message);
      })
  }

  return (
    <>
      <h2 style={{fontWeight: "bold", fontSize: "30px"}}>Upload New Park</h2>

      <form onSubmit={handleSubmit}>
        {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
            <div>
              <label>
                <h4>Name</h4>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter Park Name"
                  value={adminParkFormValues.name}
                  onChange={handleChange}
                />
              </label>
              <label>
                <h4>Category</h4>
                <select
                  id="category_id"
                  // type="password"
                  name="category_id"
                  placeholder="Select Category"
                  value={adminParkFormValues.category_id}
                  onChange={handleChange}
                >
                  {categories.map(category => (<option key={category.id} value={category.id}>{capitialize(category.name)}</option>))}
                </select>
              </label>
              <label>
                <h4>Features</h4>
                <select
                  id="feature_id"
                  // type="password"
                  name="feature_id"
                  placeholder="Select Features"
                  value={adminParkFormValues.feature_id}
                  onChange={handleChange}
                >
                  {features.map(feature => (<option key={feature.id} value={feature.id}>{capitialize(feature.name)}</option>))}
                </select>
              </label>
              <label>
                <h4>Address</h4>
                <select
                  id="address_id"
                  type="password"
                  name="address_id"
                  placeholder="Select Address"
                  value={adminParkFormValues.address_id}
                  onChange={handleChange}
                >
                  <option selected value="1">St Kilda Road, Melbourne, 3004</option>
                  <option value="2">1 K Road, Werribee, 3029</option>
                  <option value="3">40 Maribyrnong Blvd, Footscray, 3011</option>
                </select>
              </label>
              <label>
                <h4>Latitude</h4>
                <h6>start your latitude with a minus, eg: "-37.79433"</h6>
                <input
                  id="latitude" 
                  type="text"
                  name="latitude"
                  placeholder="Enter Latitude"
                  value={adminParkFormValues.latitude}
                  onChange={handleChange}
                />
              </label>
              <label>
                <h4>Longitude</h4>
                <input
                  id="longitude"
                  type="text"
                  name="longitude"
                  placeholder="Enter Longitude"
                  value={adminParkFormValues.longitude}
                  onChange={handleChange}
                />
              </label>
              <label>
                <h4>Picture</h4>
                <input
                  id="picture"
                  type="file"
                  name="picture"
                  placeholder="Upload Picture"
                  value={adminParkFormValues.picture}
                  onChange={handleChange}
                />
              </label><br/>
              <button type="submit" className="primary">
                Upload Park
              </button>
            </div>
          </form>
    </>
  )
}
