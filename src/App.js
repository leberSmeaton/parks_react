import React, { useEffect, useState, useReducer } from 'react';
import {useParams} from 'react-router';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getParkPosts } from './services/parkPostServices';
import { getParkPost } from './services/parkPostServices';
import { GlobalStyle } from './styled-components/globalStyles';
// import { ListPreview } from './component/ListPreview';
import { StateContext } from './utils/stateContext';
// import { useGlobalState } from './utils/stateContext';
import NavBar from './component/NavBar';
import Footer from './component/Footer';
import MapView from './component/MapView';
import About from './component/About';
import SignIn from './component/SignIn';
import Park from './component/Park';
import SignUp from './component/SignUp';
import reducer from './utils/reducer';
import Dropdown from './component/Dropdown';
import ParkPosts from './component/ParkPosts';
import './style.css';
import initialState from './config/initialState';


const App = () => {

  const [store, dispatch] = useReducer(reducer, initialState);
  // const {id} = useParams();

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
  // END hamburger menu toggle


  // Park Post data from parkServices.js
  useEffect(() => {
    getParkPosts()
      .then(parks => { 
        console.log(parks)
        dispatch({
          type: 'setParkPosts',
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

  // Parks data from parkServices.js
  useEffect(() => {
    getParkPost()
      .then(parks => {
        dispatch({
          type: 'setParkPost',
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
      <StateContext.Provider value={{ store: store, dispatch }}>
        <GlobalStyle />
        <BrowserRouter>
          <NavBar toggle={toggle} />
          <Dropdown isOpen={isOpen} toggle={toggle} />
          <Routes>
            <Route path="/" element={<MapView />}></Route>
            <Route path="/parks" element={<ParkPosts />}></Route>
            <Route path="/parks/:id" element={<Park/>} />
            {/* <Route path="/newcomment" element={<NewParkComment  />} /> */}
            <Route path="/about" element={<About />}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </StateContext.Provider>
    </>
  )
}

export default App
