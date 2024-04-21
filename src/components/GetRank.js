import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/getrank.css";

function GetRank() {
  const [rank, setRank] = useState('');
  const [averageScore, setAverageScore] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchRank = async () => {
      try {
        const response = await axios.get('http://localhost:5000/rank');
        setRank(response.data.rank);
        setAverageScore(response.data.averageScore);
      } catch (error) {
        setMessage(error.response.data.error);
      }
    };
    fetchRank();
  }, []);

  return (
    <div>
      <h2>Get Rank</h2>
      {rank ? (
        <div>
          <p>Your Rank: {rank}</p>
          <p>Your Average Score: {averageScore}</p>
        </div>
      ) : (
        <p>{message}</p>
      )}
    </div>
  );
}

export default GetRank;
