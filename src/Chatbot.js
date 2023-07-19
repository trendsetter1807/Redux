import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setName, setAge } from './actions';
import { Chatbot, ChatbotMessageParser, ChatbotActionProvider } from 'react-chatbot-kit';

const ChatbotComponent = () => {
  const dispatch = useDispatch();
  const { name, age } = useSelector((state) => state);
  const [chatbotMessages, setChatbotMessages] = useState([]);

  useEffect(() => {
    const initialMessage = {
      id: 1,
      content: 'Hello, Welcome to the student info system!',
      type: 'text',
    };
    setChatbotMessages([initialMessage]);

    // Delayed response after 3 seconds
    const timeout = setTimeout(() => {
      const nameMessage = {
        id: 2,
        content: 'Enter your Name',
        type: 'text',
      };
      setChatbotMessages((prevMessages) => [...prevMessages, nameMessage]);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  const handleUserMessage = (message) => {
    const userMessage = {
      id: chatbotMessages.length + 1,
      content: message,
      type: 'text',
    };
    setChatbotMessages((prevMessages) => [...prevMessages, userMessage]);

    if (chatbotMessages.length === 1) {
      dispatch(setName(message));
      const ageMessage = {
        id: chatbotMessages.length + 1,
        content: 'Enter your Age',
        type: 'text',
      };
      setChatbotMessages((prevMessages) => [...prevMessages, ageMessage]);
    } else if (chatbotMessages.length === 3) {
      dispatch(setAge(message));
      const thankYouMessage = {
        id: chatbotMessages.length + 1,
        content: 'Thank you. In 5 seconds, the chatbot will exit.',
        type: 'text',
      };
      setChatbotMessages((prevMessages) => [...prevMessages, thankYouMessage]);

      setTimeout(() => {
        const finalMessage = {
          id: chatbotMessages.length + 1,
          content: `Your name ${name} aged ${age} has been added to the student system. You may now exit.`,
          type: 'text',
        };
        setChatbotMessages((prevMessages) => [...prevMessages, finalMessage]);
      }, 5000);

      setTimeout(() => {
        setChatbotMessages([]);
      }, 10000);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
      <Chatbot
        config={{}}
        actionProvider={ChatbotActionProvider}
        messageParser={ChatbotMessageParser}
        messages={chatbotMessages}
        handleUserMessage={handleUserMessage}
        placeholder="Type your message..."
        speechSynthesis={{ enable: true, lang: 'en' }}
      />
    </div>
  );
};

export default ChatbotComponent;







