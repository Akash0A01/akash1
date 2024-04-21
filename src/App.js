import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import AddScore from './components/AddScore';
import GetRank from './components/GetRank';
import Leaderboard from './components/LeaderBoard';

function App() {
  return (
    <Router>
        <Navbar />
  
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/add-score" element={<AddScore/>} />
            <Route path="/get-rank" element={<GetRank/>} />
            <Route path="/leaderboard" element={<Leaderboard/>} />
          </Routes>
      
    </Router>
  );
}

export default App;
