import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Index";
import Detail from './Pages/Detail';
import Posts from './Pages/posts';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/Detail" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;

