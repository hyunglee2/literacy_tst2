// src/App.js
import React, { useState } from 'react';
import './App.css';
import UserIdInput from './components/UserIdInput';
import Survey from './components/survey';
import Simulation from './components/Simulation';

function App() {
  const [userId, setUserId] = useState('');
  const [surveyStarted, setSurveyStarted] = useState(false);
  const [surveyData, setSurveyData] = useState(null);

  const handleUserIdSubmit = (id) => {
    setUserId(id);
    setSurveyStarted(true);
  };

  const handleSurveySubmit = (data) => {
    setSurveyData(data);
    // 설문 조사 완료 후 시뮬레이션 화면으로 전환
    setSurveyStarted(false);
  };

  return (
    <div className="App">
      {surveyStarted ? (
        <Survey userId={userId} onSurveySubmit={handleSurveySubmit} />
      ) : surveyData ? (
        <Simulation surveyData={surveyData} />
      ) : (
        <UserIdInput onUserIdSubmit={handleUserIdSubmit} />
      )}
    </div>
  );
}

export default App;
