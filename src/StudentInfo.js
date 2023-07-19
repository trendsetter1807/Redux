import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAge, setName } from './actions';
import Chatbot from './Chatbot';

const StudentInfo = () => {
  const dispatch = useDispatch();
  const { name, age } = useSelector((state) => state);
  const [showChatbot, setShowChatbot] = useState(false);

  const handleEnrollClick = () => {
    setShowChatbot(true);
  };

  const handleNameChange = (e) => {
    dispatch(setName(e.target.value));
  };

  const handleAgeChange = (e) => {
    dispatch(setAge(e.target.value));
  };

  return (
    <div>
      {showChatbot ? (
        <Chatbot name={name} age={age} setShowChatbot={setShowChatbot} />
      ) : (
        <>
          <h1>Enter into Student Info System</h1>
          <button onClick={handleEnrollClick}>Enroll Now!</button>
        </>
      )}
    </div>
  );
};

export default StudentInfo;
