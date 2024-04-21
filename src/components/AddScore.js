import React, { useState } from 'react';
import axios from 'axios';
import "../styles/addscore.css"
function AddScore() {
  const [score, setScore] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/scores', {
        score: parseInt(score),
      });
      console.log(response.data);
      setScore('');
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div>
      <h2>Add Score</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Score:</label>
          <input type="number" value={score} onChange={(e) => setScore(e.target.value)} required />
        </div>
        <button type="submit">Add Score</button>
      </form>
    </div>
  );
}

export default AddScore;
