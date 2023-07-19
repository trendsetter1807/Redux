import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import './App.css';
import ChatbotComponent from './Chatbot';
import studentReducer from './reducer';

const store = configureStore({
  reducer: studentReducer,
});

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Student Enrollment App</h1>
        <ChatbotComponent />
      </div>
    </Provider>
  );
};

export default App;

















