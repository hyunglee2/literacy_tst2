// src/components/Survey.js
import React, { useState } from 'react';

function Survey({ userId, onSurveySubmit }) {
  const [formData, setFormData] = useState({
    question1: '',
    question2: '',
    // 나머지 질문 추가
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // formData와 userId를 JSON 형식으로 저장 또는 전송
    const surveyData = { userId, ...formData };
    onSurveySubmit(surveyData);
  };

  return (
    <div>
      <h1>설문조사</h1>
      <p>사용자 ID: {userId}</p>
      <input
        type="text"
        name="question1"
        placeholder="질문 1에 대한 응답"
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="question2"
        placeholder="질문 2에 대한 응답"
        onChange={handleInputChange}
      />
      {/* 나머지 질문에 대한 입력 필드 추가 */}
      <button onClick={handleSubmit}>제출</button>
    </div>
  );
}

export default Survey;
