// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowList from './components/ShowList/ShowList';
import ShowDetails from './components/ShowDetails/ShowDetails';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<ShowList/>} />
          <Route path="/show/:id" element={<ShowDetails/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
