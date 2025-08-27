import React, { useState } from "react";
import sqlQuestions from "./sqlAPI";

const sqlPage = () => {
  const [selectedTopic, setSelectedTopic] = useState("");
  const [displayedQuestions, setDisplayedQuestions] = useState([]);

  const handleTopicChange = (event) => {
    const topic = event.target.value;
    setSelectedTopic(topic);
    if (topic) {
      setDisplayedQuestions(sqlQuestions[topic]);
    } else {
      setDisplayedQuestions([]);
    }
  };

  return (
    <div className="javascript">
      <h1 id="jsp-h1">SQL Questions</h1>
      
      <div className="js-content">
      
        {/* Dropdown to select topic */}
        <label className="js-dropdown">
          <p id="jsp-para">
          150+ SQL questions with solutions, categorized into Beginner, Intermediate, and Advanced levels—ideal for step-by-step mastery and boosting database skills!
          </p>

          <h2 id="js-dropdown-h2">Select Topic:</h2>
          {/* Select Topic:  */}
          <select value={selectedTopic} onChange={handleTopicChange} className="javascript-choose-section">
            <option value="" className="javascript-topic-section">--Choose Topic--</option>
            {Object.keys(sqlQuestions).map((topic) => (
              <option key={topic} value={topic} className="jsts-showcase">
                {topic}
              </option>
            ))}
          </select>
        </label>
  
        {/* Render questions */}
        <div className="questions">
          {displayedQuestions.length > 0 ? (
            <ul className="question-box">
              {displayedQuestions.map((q) => (
                <li key={q.id}>
                  <strong id="question-render">{q.question}</strong>
                </li>
              ))}
            </ul>
          ) : (
            <p id="Select-topic">Select a topic to view questions.</p>
          )}
        </div>
     </div>
    </div>
  );
};

export default sqlPage;