import React from "react";
import "./Mainpage.css";
import windturbine from "./Wind Turbine.gif";
import arrow from "./right-arrow.png";
import Javascript from "./LanguageImage/js.png";
import Python from "./LanguageImage/python.png";
import Java from "./LanguageImage/java.png";
import Sql from "./LanguageImage/sql-server.png";
import { Navigate, useNavigate } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";

const Mainpage = () => {
  const navigate = useNavigate();

  const languages = [
    {
      name: "JavaScript",
      image: Javascript,
      description:
        "180+ JavaScript questions with code, sorted into Beginner, Intermediate, and Advanced levels—perfect for step-by-step mastery and confidence building",
      path: "/javascript",
      buttonText: "JavaScript Path",
    },
    {
      name: "Python",
      image: Python,
      description:
        "200+ Python questions with code, categorized into Beginner, Intermediate, and Advanced levels—ideal for step-by-step mastery and boosting confidence!",
      path: "/python",
      buttonText: "Python Path",
    },
    {
      name: "Java",
      image: Java,
      description:
        "180+ Java questions with code, categorized into Beginner, Intermediate, and Advanced levels—perfect for step-by-step mastery and building confidence!",
      path: "/java",
      buttonText: "Java Path",
    },
    {
      name: "SQL",
      image: Sql,
      description:
        "150+ SQL questions with solutions, categorized into Beginner, Intermediate, and Advanced levels—ideal for step-by-step mastery and boosting database skills!",
      path: "/sql",
      buttonText: "SQL Path",
    },
  ];

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
        <ErrorBoundary>
          {/* All Div are Created From here */}
          <div className="languagecard-content">
            {languages.map((lang, index) => {
              return (
                <div
                  className={`language-card ${lang.name.toLowerCase()}-card`}
                  key={index}
                >
                  <div className="card-top">
                    <h2 className="card-h2">{lang.name}</h2>
                    <img
                      src={lang.image}
                      alt={lang.name + " icon"}
                      className="card-img"
                    />
                  </div>
                  <p className="card-para">{lang.description}</p>
                  <button
                    className="card-btn"
                    onClick={() => navigate(lang.path)}
                  >
                    {lang.buttonText}
                  </button>
                </div>
              );
            })}
          </div>
        </ErrorBoundary>
      </div>
    </>
  );
};

export default Mainpage;
