import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

//modules
import Nav from "../modules/nav.js";
import Home from "../modules/landing.js";
import Error from "../modules/error";
import Profile from "../modules/profile.js";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Nav/>}>
          <Route path="/home" element={<Home/>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Error/>} />

        </Route>
      </Routes>
    </Router>
  );
};

export default App;
