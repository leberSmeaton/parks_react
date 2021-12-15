import React, { useEffect, useReducer } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getParkPosts } from './services/parkPostServices';
import {getParks} from './services/parkServices';
import { GlobalStyle } from './styled-components/globalStyles';
import { ListView } from './component/ListView';
import NavBar from './component/NavBar';
import Footer from './component/Footer';
import MapView from './component/MapView';
import About from './component/About';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';
import reducer from './utils/reducer';

const App = () => {
  // const [parkPosts, setParkPosts] = useState([]);
  // const [loading, setLoading] = useState(true);

  const initialState = {
    parkPosts: [],
    loading: true,
    parks: []
  }

  const [store, dispatch] = useReducer(reducer, initialState);
  const {parkPosts, loading, parks} = store;

  const ParksContext = React.createContext()

  // Posts data from parkPostServices.js
  useEffect(() => {
    getParkPosts()
      .then(posts => {
        console.log(posts)
        dispatch({
          type: 'setParkPosts',
          data: posts
        })
      })
      .catch(err => console.log(err))
      .finally(() => 
        dispatch({
          type: 'setLoading',
          data: false
        })  
      )
  }, [])

  // Parks data from parkServices.js
  useEffect(() => {
    getParks()
      .then(parks => {
        console.log(parks)
        dispatch({
          type: 'setParks',
          data: parks
        })
      })
      .catch(err => console.log(err))
      .finally(() => 
        dispatch({
          type: 'setLoading',
          data: false
        })  
      )
  }, [])

  return (
    <>
      <ParksContext.Provider value={parks}>
        <GlobalStyle />
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<MapView />}></Route>
            <Route path="/list" element={<ListView loading={loading} posts={parkPosts} parks={parks} />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </ParksContext.Provider>
    </>
  )
}

export default App
