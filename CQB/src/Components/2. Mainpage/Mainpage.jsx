import React from 'react';
import './Mainpage.css';
import windturbine from './Wind Turbine.gif';
import arrow from './right-arrow.png';
import Javascript from './LanguageImage/js.png';
import Python from './LanguageImage/python.png';
import Java from './LanguageImage/java.png';
import Sql from './LanguageImage/sql-server.png';
import { Navigate, useNavigate } from 'react-router-dom';


const Mainpage = () => {

  const navigate = useNavigate();

  const jsclick = () => {
    navigate('/javascript')
  };

  const pythonclick = () => {
    navigate('/python')
  };

  const javaclick = () => {
    navigate('/java')
  };

  const sqlclick = () => {
    navigate('/sql')
  }


  return (
    <>
      <div className="maindiv">
        <div className="maindiv-text">
          {/* <span id="maindiv-span">
            Welcome to the Coding Question Repository.
            <img src={windturbine} alt="Flash icon" id="maindiv-flashicon" />
          </span> */}
          <h1>
            Unlock Your Coding Potential with Our Extensive Challenge Repository
          </h1>
          <p>
            Dive into a comprehensive collection of coding challenges and
            solutions designed to enhance your programming skills. Perfect for
            both beginners and seasoned developers, our repository offers a wide
            array of problems that will help you tackle real-world coding
            issues.
          </p>
        </div>

        <div className="maindiv-button">
          <button
            id="maindiv-btn1"
            onClick={() => {
              const element = document.querySelector(".maindiv-content");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Get Started
            <img
              src={arrow}
              alt="Get started button"
              className="maindiv-button-img"
            />
          </button>
          <button id="maindiv-btn2">Contribute</button>
        </div>
      </div>

      <div className="maindiv-content">
        <div className="maindiv-content-text">
          <h3 id="mdct-h3">OUR FEATURE</h3>
          <h2 id="mdct-h2">
            Explore Programming Questions and Practice Daily to Boost Your
            Confidence and Perfect Your Skills!
          </h2>
        </div>

        <div className="languagecard-content">
          {/* JavaScript Card */}
          <div className="js-card">
            <div className="card-top">
              <h2 className='card-h2'>JavaScript</h2>
              <img src={Javascript} alt="JavaScriptIcon" className='card-img'/>
            </div>
            <p className='card-para'>180+ JavaScript questions with code, sorted into Beginner, Intermediate, and Advanced levels—perfect for step-by-step mastery and confidence building!</p>
            <button className='card-btn' onClick={jsclick}>JavaScript Path</button>
          </div>

          {/* Python Card */}
          <div className="python-card">
            <div className="card-top">
              <h2 className='card-h2'>Python</h2>
              <img src={Python} alt="PythonIcon" className='card-img'/>
            </div>
            <p className='card-para'>200+ Python questions with code, categorized into Beginner, Intermediate, and Advanced levels—ideal for step-by-step mastery and boosting confidence!</p>
            <button className='card-btn' onClick={pythonclick}>Python Path</button>
          </div>

          {/* Java Card */}
          <div className="java-card">
            <div className="card-top">
              <h2 className='card-h2'>Java</h2>
              <img src={Java} alt="JavaIcon" className='card-img'/>
            </div>
            <p className='card-para'>180+ Java questions with code, categorized into Beginner, Intermediate, and Advanced levels—perfect for step-by-step mastery and building confidence!</p>
            <button className='card-btn'onClick={javaclick}>Java Path</button>
          </div>

          {/* SQL Card */}
          <div className="sql-card">
            <div className="card-top">
              <h2 className='card-h2'>SQL</h2>
              <img src={Sql} alt="SQL Icon" className='card-img'/>
            </div>
            <p className='card-para'>150+ SQL questions with solutions, categorized into Beginner, Intermediate, and Advanced levels—ideal for step-by-step mastery and boosting database skills!</p>
            <button className='card-btn'onClick={sqlclick}>SQL Path</button>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Mainpage;