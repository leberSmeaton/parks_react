import React, { useEffect, useState, useReducer } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getParkPosts } from './services/parkPostServices';
import {getParks} from './services/parkServices';
import './style.css';
import { GlobalStyle } from './styled-components/globalStyles';
import { ListView } from './component/ListView';
import NavBar from './component/NavBar';
import Footer from './component/Footer';
import MapView from './component/MapView';
import About from './component/About';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';
import reducer from './utils/reducer';
import Dropdown from './component/Dropdown';


const App = () => {

  const initialState = {
    parkPosts: [],
    loading: true,
    parks: []
  }

  const [store, dispatch] = useReducer(reducer, initialState);
  const {parkPosts, loading, parks} = store;

  const ParksContext = React.createContext()

  // hamburger menu toggle
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  
  useEffect( () => {
    // hides dropdown menu when screen expands
    const hideMenu = () => {
      if(window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log('resized');
      }
    };

    window.addEventListener('resize', hideMenu);
    return () => {
      window.removeEventListener('resize', hideMenu);
    }
  })
  
  // Park Post data from parkServices.js
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
          <NavBar toggle={toggle} />
          <Dropdown isOpen={isOpen} toggle={toggle} />
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
