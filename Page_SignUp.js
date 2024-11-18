import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from '../utils/firebase';
import '../styles/Page_SignUp.css';

const SignUpPage = () => {
  // Store user inputs
  const [fullName, setFullName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [confirmUserPassword, setConfirmUserPassword] = useState('');
  
  // Navigate to different pages
  const navigateTo = useNavigate();

  // Handle user sign-up
  const handleSignUp = async (event) => {
    event.preventDefault();

    // Check if passwords match
    if (userPassword !== confirmUserPassword) {
      alert('Passwords do not match!');
      return;
    }

    try 
    {
      // Create user in Firebase
      const userCredential = await createUserWithEmailAndPassword(auth, userEmail, userPassword);
      const user = userCredential.user;

      // Save user info to Firestore
      await setDoc(doc(db, 'users', user.uid), 
      {
        fullName,
        userEmail,
      });

      // Redirect to login page
      navigateTo('/login');
    } 
    catch (error) 
    {
      alert('Registration failed: ' + error.message);
    }
  };

  return (
    <div className="container">
      <form className="box" onSubmit={handleSignUp}>
        <h2 className="heading">Create Your Account</h2>

        {/* User Name */}
        <div className="input-group">
          <label>Full Name</label>
          <input 
            type="text" 
            placeholder="Full Name" 
            value={fullName} 
            onChange={(e) => setFullName(e.target.value)} 
            required 
          />
        </div>

        {/* Email */}
        <div className="input-group">
          <label>Email</label>
          <input 
            type="email" 
            placeholder="Email" 
            value={userEmail} 
            onChange={(e) => setUserEmail(e.target.value)} 
            required 
          />
        </div>

        {/* Password */}
        <div className="input-group">
          <label>Password</label>
          <input 
            type="password" 
            placeholder="Password" 
            value={userPassword} 
            onChange={(e) => setUserPassword(e.target.value)} 
            required 
          />
        </div>

        {/* Confirm Password */}
        <div className="input-group">
          <label>Confirm Password</label>
          <input 
            type="password" 
            placeholder="Confirm Password" 
            value={confirmUserPassword} 
            onChange={(e) => setConfirmUserPassword(e.target.value)} 
            required 
          />
        </div>

        {/* Sign Up Button */}
        <button type="submit" className="button">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;