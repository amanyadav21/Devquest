import React, { useState } from "react";
import javaQuestions from "./JavaAPI";


const JavaPage = () => {
  const [selectedTopic, setSelectedTopic] = useState("");
  const [displayedQuestions, setDisplayedQuestions] = useState([]);

  const handleTopicChange = (event) => {
    const topic = event.target.value;
    setSelectedTopic(topic);
    if (topic) {
      setDisplayedQuestions(javaQuestions[topic]);
    } else {
      setDisplayedQuestions([]);
    }
  };

  return (
    <div className="javascript">
      <h1 id="jsp-h1">Java Questions</h1>
      
      <div className="js-content">
      
        {/* Dropdown to select topic */}
        <label className="js-dropdown">
          <p id="jsp-para">
          180+ Java questions with code, categorized into Beginner, Intermediate, and Advanced levels—perfect for step-by-step mastery and building confidence!
          </p>

          <h2 id="js-dropdown-h2">Select Topic:</h2>
          {/* Select Topic:  */}
          <select value={selectedTopic} onChange={handleTopicChange} className="javascript-choose-section">
            <option value="" className="javascript-topic-section">--Choose Topic--</option>
            {Object.keys(javaQuestions).map((topic) => (
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

export default JavaPage;