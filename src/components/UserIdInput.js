// src/components/UserIdInput.js
import React, { useState } from 'react';

function UserIdInput({ onUserIdSubmit }) {
  const [userId, setUserId] = useState('');

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };

  const handleSubmit = () => {
    if (userId) {
      onUserIdSubmit(userId);
    }
  };

  return (
    <div>
      <h1>사용자 ID 입력</h1>
      <input
        type="text"
        placeholder="사용자 ID"
        value={userId}
        onChange={handleUserIdChange}
      />
      <button onClick={handleSubmit}>시작하기</button>
    </div>
  );
}

export default UserIdInput;
