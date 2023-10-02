// src/components/Simulation.js
import React from 'react';

function Simulation({ surveyData }) {
  return (
    <div>
      <h1>시뮬레이션 화면</h1>
      <p>사용자 ID: {surveyData.userId}</p>
      {/* 시뮬레이션 내용 표시 */}
    </div>
  );
}

export default Simulation;
