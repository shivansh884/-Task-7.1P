import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Page_Home.css';

const HomePage = () => {
  const navigateTo = useNavigate();

  return (
    <div className="wrapper">
      <header className="box">
        <h1 className="title">Shivansh@Deakin web</h1>
        <div className="buttons">
          <input className="input" type="text" placeholder="search.." />
          <button className="button" onClick={() => navigateTo('/post')}>Post</button>
          <button className="button" onClick={() => navigateTo('/login')}>Login</button>
        </div>
      </header>

      <section className="message">
        <h2>Shivansh@Deakin Web</h2>
      </section>
    </div>
  );
};

export default HomePage;