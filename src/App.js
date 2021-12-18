import React, { useEffect, useState, useReducer } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getParkPosts } from './services/parkPostServices';
import { getParks } from './services/parkServices';
import { GlobalStyle } from './styled-components/globalStyles';
import { ListView } from './component/ListView';
import { StateContext } from './utils/stateContext';
// import { useGlobalState } from './utils/stateContext';
import NavBar from './component/NavBar';
import Footer from './component/Footer';
import MapView from './component/MapView';
import About from './component/About';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';
import reducer from './utils/reducer';
import Dropdown from './component/Dropdown';
import './style.css';


const App = () => {

  const initialState = {
    parkPosts: [],
    loading: true,
    parks: []
  }

  const [store, dispatch] = useReducer(reducer, initialState);
  // const StateContext = React.createContext()

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

  /* When the new park post is created, passing it back up to the top level in app to update the state.
  But, how is this done using context?
  */
  // function addNewParkPost(parkPostObject) {
  //   createNewParkPost(parkPostObject)
  //     .then(newParkPost => setParkPosts([...parkPosts, newParkPost]))
  //     .catch(error => console.log(error))
  //     .finally(() => setLoading(false));
  // }
  /* MAYBE LIKE THIS ???

  useEffect(() => {
    createNewParkPost(parkPostObject)
      .then(parks => {
        console.log(parks)
        dispatch({
          type: 'setParkPosts',
          data: [...parkPosts, newParkPost]
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
  */

  return (
    <>
      <StateContext.Provider value={{ store: store, dispatch }}>
        <GlobalStyle />
        <BrowserRouter>
          <NavBar toggle={toggle} />
          <Dropdown isOpen={isOpen} toggle={toggle} />
          <Routes>
            <Route path="/" element={<MapView />}></Route>
            <Route path="/list" element={<ListView />}></Route>
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
