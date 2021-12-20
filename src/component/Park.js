import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import { getParkPost } from '../services/parkPostServices';
import { useGlobalState } from '../utils/stateContext';


export default function Park() {
  const {store} = useGlobalState();
  const { parks } = store;
  const [park, setPark] = useState(null);
  const [loading, setLoading] = useState(true);
  const {id} = useParams();

  useEffect(() => {
    getParkPost(park, id)
      .then(park => setPark(park))
      .catch(error => console.log(error))
      .finally(() => setLoading(false)
      )
  }, [id, parks])

  if(!park) {
    return loading ? (<p>Loading...</p>): (<p>Oops, couldn't find your park.</p>) 
  }

  return (
    <>
      ---
      <ul>
        <li>
          <p>icon: {park.park_icon} || 🌴</p>
          <h4>name: {park.park_name} || All Nations Park</h4>
          <p>address: {park.address_id} || Separation St, Northcote VIC 3070</p>
          <p>feature: {park.feature_id} || picnic, food nearby, nature, skatepark, playground</p>
          <p>⭐️  ⭐️  ⭐️  ⭐️ </p>
        </li>
        <li>
          {/* <p>park comment: {parkPosts[0].park_comment}</p> */}
        </li>
      </ul>
    </>
  )
}
