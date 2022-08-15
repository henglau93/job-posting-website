import React, { useState } from 'react';
//import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import './Login.css';
import job from '../../assets/job.jpg';


async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
      e.preventDefault();
      const token = await loginUser({
        username,
        password
      });
      setToken(token);
  }

  return(
    <div className="login-wrapper">
      <div className='login-image-wrapper'>
        <img src={job} alt="frontpage" className='fakeimg'/>
        <a href="https://www.freepik.com/vectors/candidate" className='overlay'>Candidate vector created by katemangostar - www.freepik.com</a>
      </div>
      <div className='loginForm'>
        <h1>Log In</h1>
        <form onSubmit={handleSubmit}>
            <label>
            <p>Username</p>
            <input type="text" onChange={e => setUserName(e.target.value)}/>
            </label>
            <label>
            <p>Password</p>
            <input type="password" onChange={e => setPassword(e.target.value)}/>
            </label>
            <div className='login-form-button-wrapper'>
            <button type="submit">Submit</button>
            </div>
        </form>
      </div>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}