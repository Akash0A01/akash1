import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/leaderboard.css";

function Leaderboard() {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await axios.get('http://localhost:5000/leaderboard');
        setUsers(response.data);
      } catch (error) {
        setMessage(error.response.data.error);
      }
    };
    fetchLeaderboard();
  }, []);

  return (
    <div>
      <h2>Leaderboard</h2>
      {users.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Average Score</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.username}</td>
                <td>{user.averageScore}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>{message}</p>
      )}
    </div>
  );
}

export default Leaderboard;
