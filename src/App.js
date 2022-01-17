import React, { useEffect, useState, useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styled-components/globalStyles";
import {ParkPost} from "./component/Park";
import ParkPosts from "./component/ParkPosts";
import { NewPark } from "./component/NewPark";
import {
  getParks,
  getAPark,
  getPosts,
  getPost,
} from "./services/parkPostServices";
import {
  getAddresses,
  getCategories,
  getFeatures,
} from "./services/categoryServices";
import { SignIn } from "./component/SignIn";

import { StateContext } from "./config/store";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import MapView from "./component/MapView";
import About from "./component/About";
import { retrieveUserFromJWT } from "./services/userServices";
import { Register } from "./component/SignUp";
import reducer from "./config/reducer";
import Dropdown from "./component/Dropdown";
import "./style.css";
import initialState from "./config/initialState";
// import { getFeatures } from './services/featuresServices';
// import { retrieveUserFromJWT } from './services/userServices';

const App = () => {
  const [store, dispatch] = useReducer(reducer, initialState);
  const token = sessionStorage.getItem("jwt");

  const { signedInUser } = store;

  // hamburger menu toggle
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // hides dropdown menu when screen expands
  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log("resized");
      }
    };

    window.addEventListener("resize", hideMenu);
    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });
  // END hamburger menu toggle

  /* USE EFFECTS */
  // Parks data from parkPostServices.js
  useEffect(() => {
    getCategories()
    .then((categories) =>
      dispatch({ type: "setCategories", data: categories })
    )
    .catch((error) => console.log(error));

    getFeatures()
      .then((features) => dispatch({ type: "setFeatures", data: features }))
      .catch((error) => console.log(error));

    getAddresses()
      .then((addresses) => dispatch({ type: "setAddresses", data: addresses }))
      .catch((error) => console.log(error));

    getAPark()
    .then((parks) => {
      dispatch({
        type: "setParkPost",
        data: parks,
      });
    })
    .catch((error) => {
      console.log(error.response);
    })
    .finally(() =>
      dispatch({
        type: "setLoading",
        data: false,
      })
    );

    getParks()
      .then((parks) => {
        // console.log(parks)
        dispatch({
          type: "setParkPosts",
          data: parks,
        });
      })
      .catch((error) => {
        console.log(error.response);
      })
      .finally(() =>
        dispatch({
          type: "setLoading",
          data: false,
        })
      );
  }, []);

  // Park data from parkServices.js

  useEffect(() => {
    getPosts()
      .then((posts) => {
        console.log(posts);
        dispatch({
          type: "setPosts",
          data: posts,
        });
      })
      .catch((error) => {
        console.log(error.response);
      })
      .finally(() =>
        dispatch({
          type: "setLoading",
          data: false,
        })
      );
  }, []);

  useEffect(() => {
    getPost()
      .then((posts) => {
        dispatch({
          type: "setPost",
          data: posts,
        });
      })
      .catch((error) => {
        console.log(error.response);
      })
      .finally(() =>
        dispatch({
          type: "setLoading",
          data: false,
        })
      );
  }, []);

  // Check user against JWT token for persistent authentication
  useEffect(() => {
    retrieveUserFromJWT().then((response) => {
      dispatch({
        type: "setSignedInUser",
        data: response.username,
      });
    });
  }, [token]);

  return (
    <>
      <GlobalStyle />
      <StateContext.Provider value={{ store: store, dispatch }}>
        <BrowserRouter>
          <NavBar toggle={toggle} />
          <Dropdown isOpen={isOpen} toggle={toggle} />
          <Routes>
            <Route path="/" element={<MapView />}></Route>
            <Route path="/parks" element={<ParkPosts />}></Route>
            <Route path="/parks/:id" element={<ParkPost />} />
            {signedInUser === "admin" && (
              <Route path="/parks/new" element={<NewPark />} />
            )}
            {/* <Route path="/parks/new" element={<NewPark />} /> */}
            <Route path="/about" element={<About />}></Route>
            <Route path="/auth/signin" element={<SignIn />}></Route>
            <Route path="/auth/signup" element={<Register />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </StateContext.Provider>
    </>
  );
};

export default App;
