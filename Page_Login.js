import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import '../styles/Page_Login.css';

const LoginPage = () => 
  {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigateTo = useNavigate();
  const handleLogin = async (e) => 
    {
    e.preventDefault();
    try 
    {
      await signInWithEmailAndPassword(auth, email, password);
      navigateTo('/dashboard');
    } catch (error) 
    {
      alert('Login failed! Please check your credentials.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input 
            type="email" 
            placeholder="Enter your email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            placeholder="Enter your password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <button type="submit">Log In</button>
        </form>
        <p>Don't have an account? <span onClick={() => navigateTo('/signup')}>Sign Up</span></p>
      </div>
    </div>
  );
};
export default LoginPage;
