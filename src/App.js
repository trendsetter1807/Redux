import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { enterSystem, setName, setAge, exitSystem } from './actions';

const App = () => {
  const dispatch = useDispatch();
  const { step, name, age, showLoader, countdown } = useSelector(state => state);
  const [isLoading, setIsLoading] = useState(false);
  const [loaderCountdown, setLoaderCountdown] = useState(countdown);

  useEffect(() => {
    if (showLoader) {
      setIsLoading(true);
      let timer = setInterval(() => {
        setLoaderCountdown(prevCountdown => prevCountdown - 1);
      }, 1000);

      setTimeout(() => {
        setIsLoading(false);
        if (step === 2) {
          dispatch(exitSystem());
        }
        clearInterval(timer);
      }, countdown * 1000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [showLoader, countdown, dispatch, step]);

  const handleEnrollNow = () => {
    dispatch(enterSystem());
  };

  const handleGotIt = () => {
    dispatch(setName(''));
    dispatch(exitSystem());
  };

  const handleNameChange = event => {
    dispatch(setName(event.target.value));
  };

  const handleAgeChange = event => {
    dispatch(setAge(event.target.value));
    dispatch(exitSystem());
  };

  const handleNext = () => {
    if (name) {
      dispatch(exitSystem());
    }
  };

  if (step === 1) {
    return (
      <div>
        <h2>Enter into Student Info System</h2>
        <button onClick={handleEnrollNow}>Enroll Now!</button>
      </div>
    );
  } else if (step === 2) {
    return (
      <div>
        <h2>Bot: Hello, Welcome to student info system!</h2>
        {showLoader ? (
          <div>
            {isLoading ? (
              <div>
                <p>Loading... {loaderCountdown} seconds</p>
              </div>
            ) : (
              <div>
                <p>Loading...</p>
              </div>
            )}
          </div>
        ) : (
          <div>
            <button onClick={handleGotIt}>Got it!</button>
          </div>
        )}
      </div>
    );
  } else if (step === 3) {
    return (
      <div>
        <h2>Bot: Hello, Welcome to student info system!</h2>
        <h2>User: Got it!</h2>
        <h2>Bot: Enter your Name</h2>
        <input type="text" value={name} onChange={handleNameChange} placeholder='Enter your name here'/>
        <button onClick={handleNext}>Next</button>
      </div>
    );
  } else if (step === 4 && name) {
    return (
      <div>
        <h2>Bot: Hello, Welcome to student info system!</h2>
        <h2>User: Got it!</h2>
        <h2>Bot: Enter your Name</h2>
        <h2>User: {name}</h2>
        <h2>Bot: Enter your Age</h2>
        <select value={age} onChange={handleAgeChange}>
          <option value="">Select Age</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
          <option value="32">32</option>
          <option value="33">33</option>
          <option value="34">34</option>
          <option value="35">35</option>
          <option value="36">36</option>
          <option value="37">37</option>
          <option value="38">38</option>
          <option value="39">39</option>
          <option value="40">40</option>
        </select>
        {showLoader && (
          <div>
            {isLoading ? (
              <div>
                <p>Loading... {loaderCountdown} seconds</p>
              </div>
            ) : (
              <p>Thank you. In {countdown} seconds, bot will exit</p>
            )}
          </div>
        )}
      </div>
    );
  } else if (step === 5) {
    return (
      <div>
        <h2>Your name {name} aged {age} has been added to the student system.</h2>
        <h2>You may now exit.</h2>
      </div>
    );
  } else {
    return null;
  }
};

export default App;













