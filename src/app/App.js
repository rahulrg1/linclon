import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

//modules
import Nav from "../modules/nav";
import Home from "../modules/landing";
import Error from "../modules/error";
import Profile from "../modules/profile";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Nav/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Error/>} />

        </Route>
      </Routes>
    </Router>
  );
};

export default App;
