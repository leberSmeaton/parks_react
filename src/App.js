import React, { useState, useEffect } from 'react';
import { getParkPosts } from './services/parkPostServices';

const App = () => {
  const [parkPosts, setParkPosts] = useState([]);
  // first things first, load
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    getParkPosts()
      .then(posts => {
        console.log(posts)
        setParkPosts(posts)
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div >
      The basic empty template
      {
      loading 
      ?
      (<p>Loading</p>)
      :
      (<p>Got Posts!</p>)
      }
    </div>
  )
}

export default App
